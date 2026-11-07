// 🚀 Extension quest screen (route "quest" { id, sec, q }) and the entry card used on stage / learn pages.
// Grading is pure (js/quests.js); this file only builds forms, sends the learner's raw input to MQ.quests.grade
// and lets MQ.state.finishQuest pay the improvement (💡), so repeats and duplicates earn nothing.
(function () {
  const h = MQ.ui.h;
  const t = MQ.t;
  const I = MQ.i18n;
  const Q = MQ.quests;

  // number for display: unicode minus, Vietnamese decimal comma
  function fmt(x) {
    const s = String(Math.round(Number(x) * 1e6) / 1e6).replace("-", "−");
    return I.uiLang() === "vi" ? s.replace(".", ",") : s;
  }
  const tx = function (u, q, field, orig) { return I.pair(u, "q." + q.id + "." + field, orig); };
  const field = function (label, act) {
    const input = h("input.input.quest-input", { "data-act": act, autocomplete: "off", inputmode: "text" });
    return { el: h("label.quest-field", [h("span.lbl", label), input]), input: input };
  };
  const submitBtn = function (fn) { return h("button.btn", { "data-act": "submit", onclick: fn }, t("quest.submit") + " ✓"); };
  const keysOf = function (ctx) { return (MQ.state.questOf(ctx.key) || { keys: [] }).keys; };

  function renderMany(ctx) {
    const u = ctx.u, q = ctx.q;
    const labels = q.labels ? MQ.ui.biItems(tx(u, q, "labels", q.labels)).map(function (x) { return x.main; }) : null;
    const fields = Array.from({ length: q.arity || 2 }, function (_, i) {
      return field(labels ? labels[i] : t("quest.value", { i: i + 1 }), "v" + i);
    });
    const found = h("p.quest-found");
    const kinds = q.kinds ? MQ.ui.biItems(tx(u, q, "kinds", q.kinds.map(function (k) { return k.text; }))) : null;
    const kindList = h("ul.quest-criteria");
    function list() {
      if (kinds) {
        const got = Q.kindsFound(q, keysOf(ctx));
        kindList.innerHTML = "";
        q.kinds.forEach(function (k, i) {
          const on = got.indexOf(k.id) !== -1;
          kindList.appendChild(h("li" + (on ? ".on" : ""), [h("span.tick", on ? "✓" : "○"), MQ.ui.bi("span", kinds[i])]));
        });
      }
      const got = keysOf(ctx).filter(function (k) { return k.indexOf("a:") === 0; });
      found.textContent = got.length ? t("quest.found") + " " + got.map(function (k) {
        return "(" + k.slice(2).split("|").map(fmt).join("; ") + ")";
      }).join("  ") : "";
    }
    list();
    return h("div.quest-form", [
      q.challengeText ? h("p.quest-challenge", [h("b", t("quest.challenge") + " "), MQ.ui.bi("span", tx(u, q, "challengeText", q.challengeText))]) : null,
      h("div.quest-row", fields.map(function (f) { return f.el; })),
      submitBtn(function () {
        ctx.submit({ values: fields.map(function (f) { return f.input.value; }) });
        fields.forEach(function (f) { f.input.value = ""; });
        list();
        fields[0].input.focus();
      }),
      found,
      kinds ? h("p.lbl", t("quest.kinds")) : null, kinds ? kindList : null
    ]);
  }

  function renderWhatif(ctx) {
    const u = ctx.u, q = ctx.q;
    const guess = field(t("quest.guess"), "guess");
    let reason = null;
    const reasons = MQ.ui.biItems(tx(u, q, "reasons", q.reasons));
    const opts = h("div.opts.quest-reasons", Q.reasonOrder(q).map(function (i) {
      const r = reasons[i];
      return h("button.opt", {
        "data-act": "reason-" + i,
        onclick: function (e) {
          reason = i;
          opts.querySelectorAll(".opt").forEach(function (b) { b.classList.remove("on"); });
          e.currentTarget.classList.add("on");
        }
      }, [MQ.ui.bi("span", r)]);
    }));
    const reveal = h("p.quest-reveal");
    function show(v) { reveal.textContent = t("quest.result", { v: fmt(v) + (q.unitLabel ? " " + q.unitLabel : "") }); }
    if (keysOf(ctx).indexOf("x") !== -1) show(q.answer());
    return h("div.quest-form", [
      guess.el, h("p.lbl", t("quest.reason")), opts,
      submitBtn(function () {
        const r = ctx.submit({ guess: guess.input.value, reason: reason });
        if (r.reveal != null) show(r.reveal);
      }),
      reveal
    ]);
  }

  function renderMake(ctx) {
    const u = ctx.u, q = ctx.q;
    const labels = MQ.ui.biItems(tx(u, q, "fields", q.fields.map(function (f) { return f.label; })));
    const fields = q.fields.map(function (f, i) { return field(labels[i].main, "f-" + f.id); });
    const crit = MQ.ui.biItems(tx(u, q, "criteria", q.criteria.map(function (c) { return c.text; })));
    const list = h("ul.quest-criteria");
    const out = h("p.quest-made");
    function draw() {
      const keys = keysOf(ctx);
      list.innerHTML = "";
      q.criteria.forEach(function (c, i) {
        const on = keys.indexOf("m:" + c.id) !== -1;
        list.appendChild(h("li" + (on ? ".on" : ""), [h("span.tick", on ? "✓" : "○"), MQ.ui.bi("span", crit[i])]));
      });
    }
    draw();
    return h("div.quest-form", [
      q.template ? MQ.ui.bi("p.quest-template", tx(u, q, "template", q.template)) : null,
      h("div.quest-row", fields.map(function (f) { return f.el; })),
      submitBtn(function () {
        const raw = {};
        q.fields.forEach(function (f, i) { raw[f.id] = fields[i].input.value; });
        const r = ctx.submit({ fields: raw, lang: I.uiLang() });
        out.textContent = r.problem ? t("quest.answerIs", { v: fmt(r.problem.answer) }) + " " + t("quest.saved") : "";
        draw();
      }),
      h("p.lbl", t("quest.criteria")), list, out
    ]);
  }

  function strategyPanel(ctx, st, idx, done) {
    const u = ctx.u, q = ctx.q;
    const asks = MQ.ui.biItems(tx(u, q, "steps." + st.id, st.steps.slice(0, -1).map(function (s) { return s.ask || ""; })));
    const fields = st.steps.map(function (s, i) {
      return field(i === st.steps.length - 1 ? t("quest.final") : asks[i].main, "s" + i);
    });
    return h("div.quest-panel", [
      h("div.quest-row.col", fields.map(function (f) { return f.el; })),
      submitBtn(function () {
        const r = ctx.submit({ strategy: st.id, steps: fields.map(function (f) { return f.input.value; }) });
        if (r.feedback === "quest.fb.new") done(idx);
      })
    ]);
  }

  function renderWays(ctx) {
    const u = ctx.u, q = ctx.q;
    const names = MQ.ui.biItems(tx(u, q, "strategies", q.strategies.map(function (s) { return s.name; })));
    const panel = h("div");
    const btns = q.strategies.map(function (st, i) {
      return h("button.opt", { "data-act": "strategy-" + st.id, onclick: function () { pick(i); } }, [MQ.ui.bi("span", names[i])]);
    });
    function mark() {
      const keys = keysOf(ctx);
      btns.forEach(function (b, i) { b.classList.toggle("done", keys.indexOf("w:" + q.strategies[i].id) !== -1); });
    }
    function pick(i) {
      btns.forEach(function (b, k) { b.classList.toggle("on", k === i); });
      panel.innerHTML = "";
      panel.appendChild(strategyPanel(ctx, q.strategies[i], i, mark));
    }
    mark();
    return h("div.quest-form", [h("p.lbl", t("quest.strategy")), h("div.opts", btns), panel]);
  }

  function renderPattern(ctx) {
    const q = ctx.q;
    const terms = q.askN.map(function (n) { return { n: n, f: field(t("quest.term", { n: n }), "t" + n) }; });
    const rule = field(t("quest.rule"), "rule");
    rule.input.placeholder = t("quest.rule.ph");
    const seq = q.seq ? h("p.quest-seq", q.seq.map(fmt).join(", ") + ", …") : null;
    return h("div.quest-form", [
      seq,
      h("div.quest-row", terms.map(function (x) { return x.f.el; })),
      rule.el,
      submitBtn(function () {
        const input = { terms: {}, rule: rule.input.value };
        terms.forEach(function (x) { input.terms[x.n] = x.f.input.value; });
        ctx.submit(input);
      })
    ]);
  }

  // Other screens (js/view-quest-sci.js) add their renderers to this table.
  const RENDER = { many: renderMany, whatif: renderWhatif, make: renderMake, ways: renderWays, pattern: renderPattern };
  MQ.questKit = { RENDER: RENDER, tx: tx, submitBtn: submitBtn, keysOf: keysOf };

  // Saves a valid learner-made problem to the Question Lab (it gives 0 XP when played, as before).
  function saveProblem(problem) {
    MQ.state.update(function (d) {
      if (d.myQuestions.some(function (m) { return m.q === problem.text; })) return;
      d.myQuestions.push({
        id: "my-" + Date.now(), type: "num", diff: 2, skill: "me", source: "me", lang: I.uiLang(),
        q: problem.text, answer: Q.answerText(problem.answer), hints: [t("tutor.opener.0")], explain: ""
      });
    });
  }

  function titleUp(before) {
    const now = MQ.spark.titleFor(MQ.state.get().spark);
    if (now.level <= before.level) return;
    const close = MQ.ui.modal(h("div.levelup", [
      h("div.levelup-badge", "💡"), h("h2", t("levelup.title")),
      h("p", t("spark.levelup.body", { title: t(now.key) })),
      h("button.btn", { onclick: function () { close(); } }, t("levelup.ok"))
    ]));
  }

  function makeSubmit(ctx, fb, score) {
    return function (input) {
      const before = MQ.spark.titleFor(MQ.state.get().spark);
      const r = Q.grade(ctx.q, input, keysOf(ctx));
      const paid = MQ.state.finishQuest(ctx.key, r.keys, r.score, r.why);
      fb.textContent = t(r.feedback) + (paid ? "  " + t("quest.gain", { p: paid }) : "");
      fb.setAttribute("data-fb", r.feedback);
      fb.classList.toggle("good", paid > 0);
      if (r.problem && r.feedback !== "quest.fb.dup") saveProblem(r.problem);
      if (paid) { MQ.fx.pop(fb, "jump"); MQ.ui.renderHud(); titleUp(before); }
      score();
      return r;
    };
  }

  MQ.ui.route("quest", function (p) {
    const u = MQ.unit(p.id);
    const sec = u && u.sections.find(function (s) { return s.id === p.sec; });
    const q = sec && (sec.quests || []).find(function (x) { return x.id === p.q; });
    if (!q || !RENDER[q.type]) { setTimeout(function () { MQ.ui.go("map"); }, 0); return h("div"); }
    const ctx = { u: u, sec: sec, q: q, key: Q.keyOf(u, q) };
    const scoreEl = h("span.quest-score");
    const full = h("p.quest-full");
    const fb = h("p.quest-fb", { role: "status", "aria-live": "polite" });
    function score() {
      const best = (MQ.state.questOf(ctx.key) || { best: 0 }).best, max = Q.maxScore(q);
      scoreEl.textContent = t("quest.score", { p: best, max: max });
      full.textContent = best >= max ? t("quest.full") : "";
    }
    ctx.submit = makeSubmit(ctx, fb, score);
    score();
    const locked = !Q.unlocked(u, sec);
    return h("section.quest", { "data-quest": q.id }, [
      h("button.btn.ghost.back", { onclick: function () { MQ.ui.go("learn", { id: u.id, sec: sec.id }); } }, "← " + sec.id + " · " + I.pick(sec.title, sec.titleVi).main),
      h("p.kicker", t("quest.title") + " · " + t("quest.type." + q.type)),
      MQ.ui.bi("h1.quest-ask", tx(u, q, "ask", q.ask)),
      h("div.card.quest-why", [h("b", "🎯 " + t("quest.why") + " "), MQ.ui.bi("span", tx(u, q, "why", q.why))]),
      q.sim && MQ.sims.mount ? MQ.sims.mount(q.sim) : null,
      locked ? h("div.card", t("quest.locked")) : h("div.card.quest-card", [h("div.quest-head", [scoreEl]), RENDER[q.type](ctx), fb, full])
    ]);
  });

  // "🚀 Mở rộng" card: locked until the stage has 1 star; lists its quests with best / max 💡.
  MQ.questCard = function (u, sec) {
    const qs = sec.quests || [];
    if (!qs.length) return null;
    const open = Q.unlocked(u, sec);
    let got = 0, max = 0, done = 0;
    qs.forEach(function (q) {
      const best = (MQ.state.questOf(Q.keyOf(u, q)) || { best: 0 }).best;
      got += best; max += Q.maxScore(q); if (best > 0) done += 1;
    });
    return h("div.card.quest-entry" + (open ? "" : ".locked"), [
      h("h3", t("quest.title")),
      h("p.tiny", open ? t("quest.progress", { d: done, n: qs.length, p: got, max: max }) : "🔒 " + t("quest.locked")),
      open ? h("div.quest-list", qs.map(function (q) {
        const best = (MQ.state.questOf(Q.keyOf(u, q)) || { best: 0 }).best;
        return h("button.btn.ghost.quest-go", { "data-quest": q.id, onclick: function () { MQ.ui.go("quest", { id: u.id, sec: sec.id, q: q.id }); } },
          (best >= Q.maxScore(q) ? "✓ " : "") + t("quest.type." + q.type) + " · " + best + "/" + Q.maxScore(q) + " 💡");
      })) : null
    ]);
  };
})();
