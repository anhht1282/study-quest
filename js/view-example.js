// Worked-example lab: Predict → think each step before seeing it → compare → create.
// Scoring lives in example-score.js; XP is paid once (best run) per example.
(function () {
  const h = MQ.ui.h;
  const t = MQ.t;
  const I = MQ.i18n;
  const S = MQ.exampleScore;

  function fmt(answer) {
    if (!answer) return "";
    const s = String(answer.value);
    return I.uiLang() === "vi" ? s.replace(/(\d)\.(\d)/g, "$1,$2") : s;
  }

  function counter(field, min) {
    const el = h("span.counter");
    const upd = function () {
      const n = field.value.trim().length;
      el.textContent = n >= min ? "✓ " + t("lab.counter.ok") : t("lab.counter", { n: n, min: min });
      el.classList.toggle("ok", n >= min);
    };
    field.addEventListener("input", upd);
    upd();
    return el;
  }

  MQ.exampleLab = function (unit, sec) {
    const ex = sec.example;
    const K = "ex." + sec.id;
    const where = t("lab.where", { id: sec.id }) + " · " + I.pick(sec.title, sec.titleVi).main;
    const steps = MQ.ui.biItems(I.pair(unit, K + ".steps", ex.steps));
    const prompts = ex.prompts ? MQ.ui.biItems(I.pair(unit, K + ".prompts", ex.prompts)) : [];
    const before = MQ.state.exampleOf(unit.id, sec.id);
    const lab = {
      phase: 0, guess: null, ideas: [], selfCheck: { same: 0, other: 0, learned: 0 },
      predict: { kind: "none", points: 0 }, creative: { twist: null, own: "", similar: false }, notes: []
    };

    const stepper = h("ol.lab-steps", ["lab.p1", "lab.p2", "lab.p3", "lab.p4"].map(function (k) { return h("li", t(k)); }));
    const ledger = h("div.lab-ledger");
    const stepsList = h("ol.steps.lab-reveal");
    const body = h("div.lab-body");
    const root = h("div.card.example.lab", [
      h("div.lab-head", [h("h3", "🧪 " + t("lab.title")), ledger]),
      stepper, MQ.ui.bi("p.q", I.pair(unit, K + ".q", ex.q)),
      ex.goal ? h("div.lab-goal", [h("p.kicker", t("lab.goal")), MQ.ui.bi("p", I.pair(unit, K + ".goal", ex.goal))]) : null,
      stepsList, body
    ]);

    function scores() {
      return { ideas: S.ideaPoints(lab.ideas), predict: lab.predict.points, creative: S.creativePoints(lab.creative) };
    }
    function renderLedger() {
      const s = scores();
      ledger.innerHTML = "";
      ledger.appendChild(h("span", { title: t("lab.ledger.ideas.tip") }, "🧠 " + t("lab.ledger.ideas") + " " + s.ideas + "/8"));
      ledger.appendChild(h("span", { title: t("lab.ledger.predict.tip") }, "🎯 " + t("lab.ledger.predict") + " " + s.predict + "/5"));
      ledger.appendChild(h("span", { title: t("lab.ledger.create.tip") }, "🎨 " + t("lab.ledger.create") + " " + s.creative + "/8"));
      if (before && before.best) ledger.appendChild(h("span.prev", t("lab.ledger.prev", { n: before.best, max: S.MAX_TOTAL })));
    }
    function go(phase) {
      lab.phase = phase;
      stepper.querySelectorAll("li").forEach(function (li, i) {
        li.className = i < phase ? "done" : i === phase ? "cur" : "";
      });
      body.innerHTML = "";
      body.appendChild([predictPhase, stepPhase, comparePhase, createPhase][phase]());
      renderLedger();
    }
    function owl(p) {
      const pair = typeof p === "string" ? { main: p, sub: null } : p;
      return h("div.tutor.talk", [h("span.owl", "🦉"), MQ.ui.bi("p", pair)]);
    }

    // ① Predict
    function predictPhase() {
      if (!ex.answer) {
        return h("div", [
          owl(t("lab.predict.none")),
          h("div.row", [h("button.btn", { onclick: function () { go(1); } }, t("lab.predict.start") + " ▸")])
        ]);
      }
      const f = h("input.input", { placeholder: t("lab.predict.ph"), onkeydown: function (e) { if (e.key === "Enter") lock(); } });
      function lock() {
        if (!f.value.trim()) { f.focus(); return; }
        lab.guess = f.value.trim();
        go(1);
      }
      return h("div", [
        owl(t("lab.predict.intro")),
        h("div.answer-row", [f, h("button.btn", { onclick: lock }, t("lab.predict.lock"))]),
        h("button.btn.ghost", { onclick: function () { go(1); } }, t("lab.predict.skip"))
      ]);
    }

    // ② Think each step before seeing it
    function stepPhase() {
      const i = stepsList.children.length;
      if (i >= steps.length) { setTimeout(function () { go(2); }, 0); return h("div"); }
      const idea = h("textarea.input", { rows: "2", placeholder: t("lab.idea.ph", { n: i + 1 }) });
      const reveal = h("button.btn", {
        onclick: function () {
          const text = idea.value.trim();
          lab.ideas[i] = text;
          stepsList.appendChild(h("li.step-in", [
            MQ.ui.bi("span", steps[i]),
            text ? h("small.my-idea", t("lab.idea.mine") + ": " + text) : null
          ]));
          body.innerHTML = "";
          body.appendChild(selfCheck(text.length >= S.MIN_IDEA));
          renderLedger();
          if (text.length >= S.MIN_IDEA) MQ.ui.mood("happy", 900);
        }
      }, t("lab.reveal", { n: i + 1 }));
      idea.addEventListener("input", function () {
        reveal.textContent = idea.value.trim() ? t("lab.compare", { n: i + 1 }) : t("lab.reveal", { n: i + 1 });
      });
      return h("div", [
        owl(prompts[i] || t("lab.prompt.generic")),
        idea,
        h("p.tiny", t("lab.idea.rule")),
        h("div.row", [reveal])
      ]);
    }

    function selfCheck(hadIdea) {
      const pick = function (k) { return function () { lab.selfCheck[k] += 1; go(1); }; };
      const chips = hadIdea
        ? [["same", "✅ " + t("lab.sc.same")], ["other", "🔀 " + t("lab.sc.other")], ["learned", "💡 " + t("lab.sc.learned")]]
        : [["learned", "💡 " + t("lab.sc.got")], ["other", "🤔 " + t("lab.sc.unsure")]];
      return h("div", [
        h("p.lbl", hadIdea ? t("lab.sc.q1") : t("lab.sc.q2")),
        h("div.row", chips.map(function (c) { return h("button.chip", { onclick: pick(c[0]) }, c[1]); }))
      ]);
    }

    // ③ Compare prediction and summarise
    function comparePhase() {
      lab.predict = S.predictResult(ex.answer, lab.guess);
      if (lab.predict.kind === "exact") { MQ.fx.confetti(stepper, 24); MQ.ui.mood("wow"); }
      const msg = lab.predict.kind === "none" ? (ex.answer ? t("lab.cmp.none") : "") : t("lab.cmp." + lab.predict.kind);
      const thought = lab.ideas.filter(function (x) { return x && x.length >= S.MIN_IDEA; }).length;
      return h("div", [
        ex.answer ? h("p.answer-key", t("lab.result") + ": " + fmt(ex.answer) + (lab.guess ? " · " + t("lab.guess") + ": " + lab.guess : "")) : null,
        msg ? owl(msg) : null,
        h("p", t("lab.summary", { a: thought, n: steps.length, same: lab.selfCheck.same, other: lab.selfCheck.other })),
        h("div.row", [h("button.btn", { onclick: function () { go(3); } }, t("lab.toCreate") + " ▸")])
      ]);
    }

    // ④ Create: twist, own method, similar problem
    function createPhase() {
      return h("div", [
        h("p.muted", t("lab.create.intro")),
        h("div.create-grid", [twistTile(), ownTile(), similarTile()]),
        h("div.row", [h("button.btn.big", { onclick: finish }, t("lab.finish") + " ✓")])
      ]);
    }

    function twistTile() {
      const tw = ex.twist;
      if (!tw) return null;
      const twq = I.pair(unit, K + ".twist", tw.q);
      const tile = h("div.create-tile", [h("h4", "🔀 " + t("lab.twist")), MQ.ui.bi("p", twq)]);
      if (!tw.answer) {
        const f = h("textarea.input", { rows: "3", placeholder: t("lab.twist.open.ph") });
        f.addEventListener("input", function () {
          lab.creative.twist = f.value.trim().length >= S.MIN_CREATIVE ? "open" : null;
          lab.notes = lab.notes.filter(function (n) { return n.kind !== "twist"; })
            .concat([{ kind: "twist", where: where + " · " + t("lab.twist"), text: twq.main + "\n→ " + f.value }]);
          renderLedger();
        });
        tile.appendChild(f); tile.appendChild(counter(f, S.MIN_CREATIVE));
        return tile;
      }
      let tries = 0;
      const f = h("input.input", { placeholder: t("lab.twist.ph"), onkeydown: function (e) { if (e.key === "Enter") check(); } });
      const out = h("p.tiny");
      const btn = h("button.btn", { onclick: check }, t("play.check"));
      function check() {
        if (lab.creative.twist || tries >= 2 || !f.value.trim()) return;
        tries += 1;
        if (S.predictResult(tw.answer, f.value).kind === "exact") {
          lab.creative.twist = tries === 1 ? "first" : "retry";
          out.textContent = t("lab.twist.ok");
          tile.classList.add("ok"); btn.disabled = true;
          MQ.fx.confetti(tile, 18); MQ.ui.mood("happy");
        } else if (tries < 2) {
          out.textContent = t("lab.twist.retry");
        } else {
          out.textContent = t("lab.twist.reveal", { a: fmt(tw.answer) });
          btn.disabled = true;
        }
        renderLedger();
      }
      tile.appendChild(h("div.answer-row", [f, btn]));
      tile.appendChild(out);
      return tile;
    }

    function ownTile() {
      const f = h("textarea.input", { rows: "4", placeholder: t("lab.own.ph") });
      f.addEventListener("input", function () {
        lab.creative.own = f.value;
        lab.notes = lab.notes.filter(function (n) { return n.kind !== "own"; })
          .concat([{ kind: "own", where: where + " · " + t("lab.own"), text: f.value }]);
        renderLedger();
      });
      return h("div.create-tile", [h("h4", "🛠️ " + t("lab.own")), h("p", t("lab.own.q")), f, counter(f, S.MIN_CREATIVE)]);
    }

    function similarTile() {
      const q = h("textarea.input", { rows: "3", placeholder: t("lab.sim.ph") });
      const a = h("input.input", { placeholder: t("lab.sim.ans") });
      const out = h("p.tiny");
      const btn = h("button.btn", {
        onclick: function () {
          if (lab.creative.similar) return;
          if (q.value.trim().length < 15) { out.textContent = t("creator.err.q"); return; }
          if (Number.isNaN(MQ.checker.parseNumber(a.value))) { out.textContent = t("creator.err.a"); return; }
          MQ.state.update(function (d) {
            d.myQuestions.push({
              id: "my-" + Date.now(), type: "num", diff: 2, skill: "me", source: "me", lang: I.uiLang(),
              q: q.value.trim(), answer: a.value.trim(), hints: [t("lab.sim.hint", { id: sec.id })], explain: ""
            });
          });
          lab.creative.similar = true;
          btn.disabled = true;
          out.textContent = t("lab.sim.ok");
          MQ.ui.badge("creator");
          renderLedger();
        }
      }, t("lab.sim.add"));
      return h("div.create-tile", [h("h4", "✏️ " + t("lab.sim")), h("p", t("lab.sim.q")), q, a, btn, out]);
    }

    function finish() {
      const score = S.total(scores());
      const keep = lab.notes.filter(function (n) { return String(n.text).trim().length >= S.MIN_CREATIVE; });
      const paid = MQ.state.finishExample(unit.id, sec.id, score, lab.selfCheck, keep);
      if (String(lab.creative.own).trim().length >= S.MIN_CREATIVE) MQ.ui.badge("inventor");
      MQ.ui.renderHud();
      body.innerHTML = "";
      stepper.querySelectorAll("li").forEach(function (li) { li.className = "done"; });
      const done = h("div.lab-done", [
        h("p.fb-title.ok", t("lab.done", { n: score, max: S.MAX_TOTAL })),
        h("p", paid > 0
          ? "+" + paid + " XP" + (before && before.best ? " " + t("lab.done.better") : "")
          : t("lab.done.nopay", { best: before ? before.best : 0 })),
        keep.length ? h("p.tiny", t("lab.done.saved")) : null
      ]);
      body.appendChild(done);
      if (paid > 0) { MQ.fx.confetti(done, 30); MQ.fx.floatText(done, "+" + paid + " XP"); MQ.ui.mood("wow"); }
      renderLedger();
    }

    go(0);
    return root;
  };
})();
