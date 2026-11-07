// Screens of the creative quest types odd / fair / predict (grading is pure, in js/quests.js).
// odd     — "Which one doesn't belong?": every item can be the odd one out for a different reason (flexibility).
// fair    — design a fair test: change one factor, measure an outcome, keep the rest the same; predict the effect.
// predict — Predict → Observe → Explain with choices; only the first prediction counts.
(function () {
  const h = MQ.ui.h;
  const t = MQ.t;
  const K = MQ.questKit;
  const Q = MQ.quests;

  // A row of option buttons. multi: toggles; otherwise one choice. Returns { el, value() }.
  function choices(acts, labels, multi, onPick) {
    const on = [];
    const btns = labels.map(function (lab, i) {
      return h("button.opt", {
        "data-act": acts[i],
        onclick: function (e) {
          const at = on.indexOf(i);
          if (multi) { if (at === -1) on.push(i); else on.splice(at, 1); }
          else { on.length = 0; on.push(i); }
          btns.forEach(function (b, k) { b.classList.toggle("on", on.indexOf(k) !== -1); });
          if (onPick) onPick(i, e);
        }
      }, [MQ.ui.bi("span", lab)]);
    });
    return {
      el: h("div.opts" + (multi ? ".multi" : ""), btns), btns: btns,
      value: function () { return multi ? on.slice() : (on.length ? on[0] : null); }
    };
  }
  const texts = function (ctx, list, field) {
    return MQ.ui.biItems(K.tx(ctx.u, ctx.q, list, ctx.q[list].map(function (x) { return field ? x[field] : x; })));
  };

  function renderOdd(ctx) {
    const q = ctx.q;
    const items = texts(ctx, "items"), props = texts(ctx, "props", "text");
    const itemRow = choices(q.items.map(function (_, i) { return "item-" + i; }), items, false);
    const propRow = choices(q.props.map(function (p) { return "prop-" + p.id; }), props, false);
    const found = h("ul.quest-criteria");
    function draw() {
      const got = K.keysOf(ctx).filter(function (k) { return k.indexOf("o:") === 0; });
      found.innerHTML = "";
      got.forEach(function (k) {
        const p = k.split(":"), i = Number(p[1]), pi = q.props.findIndex(function (x) { return x.id === p.slice(2).join(":"); });
        if (!items[i] || pi < 0) return;   // a key saved for an item / reason that no longer exists
        found.appendChild(h("li.on", [h("span.tick", "✓"), h("span", items[i].main + " — " + props[pi].main)]));
      });
      itemRow.btns.forEach(function (b, i) { b.classList.toggle("done", got.some(function (k) { return k.split(":")[1] === String(i); })); });
    }
    draw();
    return h("div.quest-form", [
      h("p.tiny", t("quest.odd.hint")),
      h("p.lbl", t("quest.odd.item")), itemRow.el,
      h("p.lbl", t("quest.odd.prop")), propRow.el,
      K.submitBtn(function () {
        const pi = propRow.value();
        ctx.submit({ item: itemRow.value(), prop: pi == null ? null : q.props[pi].id });
        draw();
      }),
      h("p.lbl", t("quest.odd.found")), found
    ]);
  }

  const EFFECTS = ["up", "down", "same"];
  function renderFair(ctx) {
    const q = ctx.q;
    const fac = texts(ctx, "factors", "text"), out = texts(ctx, "outcomes", "text");
    const change = choices(q.factors.map(function (f) { return "change-" + f.id; }), fac, false);
    const measure = choices(q.outcomes.map(function (o) { return "measure-" + o.id; }), out, false);
    const keep = choices(q.factors.map(function (f) { return "keep-" + f.id; }), fac, true);
    const effect = choices(EFFECTS.map(function (e) { return "effect-" + e; }),
      EFFECTS.map(function (e) { return { main: t("quest.fair." + e) }; }), false);
    const note = h("p.quest-reveal");
    const done = h("ul.quest-criteria");
    const label = function (id) {
      const p = id.split(">");
      const fi = q.factors.findIndex(function (f) { return f.id === p[0]; }), oi = q.outcomes.findIndex(function (o) { return o.id === p[1]; });
      return fi < 0 || oi < 0 ? null : fac[fi].main + " → " + out[oi].main;
    };
    function draw() {
      done.innerHTML = "";
      K.keysOf(ctx).filter(function (k) { return k.indexOf("d:") === 0; }).forEach(function (k) {
        const text = label(k.slice(2));
        if (text) done.appendChild(h("li.on", [h("span.tick", "✓"), h("span", text)]));
      });
    }
    function submit() {
      const c = change.value(), m = measure.value(), e = effect.value();
      const r = ctx.submit({
        change: c == null ? null : q.factors[c].id, measure: m == null ? null : q.outcomes[m].id,
        keep: keep.value().map(function (i) { return q.factors[i].id; }), effect: e == null ? null : EFFECTS[e]
      });
      note.textContent = "";
      if (r.missing && r.missing.length) {
        note.textContent = t("quest.fair.missing", { m: r.missing.map(function (id) { return fac[q.factors.findIndex(function (f) { return f.id === id; })].main; }).join(", ") });
      } else if (r.effect) {
        note.textContent = t("quest.fair.real", { d: out[m].main, e: t("quest.fair." + r.effect) });
      }
      draw();
    }
    draw();
    return h("div.quest-form", [
      h("p.lbl", t("quest.fair.change")), change.el,
      h("p.lbl", t("quest.fair.measure")), measure.el,
      h("p.lbl", t("quest.fair.keep")), keep.el,
      h("p.lbl", t("quest.fair.effect")), effect.el,
      K.submitBtn(submit), note,
      h("p.lbl", t("quest.fair.done")), done
    ]);
  }

  function renderPredict(ctx) {
    const q = ctx.q;
    const opts = texts(ctx, "options"), reasons = texts(ctx, "reasons");
    const order = Q.reasonOrder(q);
    const optRow = choices(q.options.map(function (_, i) { return "option-" + i; }), opts, false);
    const reasonRow = choices(order.map(function (i) { return "reason-" + i; }), order.map(function (i) { return reasons[i]; }), false);
    const reveal = h("div.quest-reveal");
    function show() {
      reveal.innerHTML = "";
      reveal.appendChild(h("p", t("quest.predict.right", { o: opts[q.answer].main })));
      if (q.observe) reveal.appendChild(h("p", [h("b", t("quest.predict.observe") + " "), MQ.ui.bi("span", K.tx(ctx.u, q, "observe", q.observe))]));
    }
    if (K.keysOf(ctx).indexOf("x") !== -1) show();
    return h("div.quest-form", [
      h("p.lbl", t("quest.predict.pick")), optRow.el,
      h("p.lbl", t("quest.reason")), reasonRow.el,
      K.submitBtn(function () {
        const ri = reasonRow.value();
        const r = ctx.submit({ option: optRow.value(), reason: ri == null ? null : order[ri] });
        if (r.reveal != null) show();
      }),
      reveal
    ]);
  }

  Object.assign(K.RENDER, { odd: renderOdd, fair: renderFair, predict: renderPredict });
})();
