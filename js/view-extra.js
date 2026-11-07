// Creative project workshop and the learner's own question creator.
(function () {
  const h = MQ.ui.h;
  const t = MQ.t;
  const I = MQ.i18n;
  const PROJECT_XP = 50;

  MQ.ui.route("project", function (p) {
    const u = MQ.unit(p.id);
    const pr = u.project;
    const key = "u" + u.id;
    const saved = MQ.state.get().projects[key] || { notes: {}, steps: [], done: false };
    const stepItems = MQ.ui.biItems(I.pair(u, "p.steps", pr.steps || []));
    const extItems = MQ.ui.biItems(I.pair(u, "p.extensions", pr.extensions || []));
    const reflectItems = MQ.ui.biItems(I.pair(u, "p.reflect", pr.reflect || []));

    const steps = h("ol.checklist", stepItems.map(function (s, i) {
      const cb = h("input", { type: "checkbox", checked: saved.steps && saved.steps[i] ? true : null });
      return h("li", [h("label", [cb, MQ.ui.bi("span", s)])]);
    }));
    const notes = reflectItems.map(function (r, i) {
      return { q: r, el: h("textarea.input", { rows: "3", placeholder: t("project.answer.ph") }, (saved.notes || {})["r" + i] || "") };
    });
    const idea = h("textarea.input", { rows: "4", placeholder: t("project.notebook.ph") }, (saved.notes || {}).idea || "");

    function persist(done) {
      MQ.state.update(function (d) {
        const rec = { notes: { idea: idea.value }, steps: [], done: saved.done || done };
        notes.forEach(function (n, i) { rec.notes["r" + i] = n.el.value; });
        steps.querySelectorAll("input").forEach(function (c, i) { rec.steps[i] = c.checked; });
        if (done && !saved.done) d.xp += PROJECT_XP;
        d.projects[key] = rec;
      });
    }

    return h("section.project", [
      h("button.btn.ghost.back", { onclick: function () { MQ.ui.go("unit", { id: u.id }); } }, "← " + I.c(u, "u.realm", u.realm || u.titleVi)),
      h("p.kicker", t("project.kicker") + " · " + t("unit.pages", { p: (pr.pages || []).join(", ") })),
      MQ.ui.bi("h1", I.pick(pr.title, pr.titleVi)),
      h("div.card", [h("h3", "🎯 " + t("project.goal")), MQ.ui.bi("p", I.pair(u, "p.goal", pr.goal || ""))]),
      h("div.card", [h("h3", "🧪 " + t("project.steps")), steps]),
      h("div.card", [h("h3", "📝 " + t("project.notebook")), idea]),
      extItems.length ? h("div.card", [
        h("h3", "🚀 " + t("project.ext")),
        h("ul", extItems.map(function (x) { return MQ.ui.bi("li", x); }))
      ]) : null,
      h("div.card", [h("h3", "🪞 " + t("project.reflect"))].concat(notes.map(function (n) {
        return h("div.reflect", [MQ.ui.bi("label.lbl", n.q), n.el]);
      }))),
      h("div.row", [
        h("button.btn.ghost", { onclick: function () { persist(false); MQ.ui.toast(t("project.saved")); } }, t("project.draft")),
        h("button.btn", {
          onclick: function (e) {
            const filled = notes.filter(function (n) { return n.el.value.trim().length > 10; }).length;
            if (filled < Math.min(2, notes.length)) { MQ.ui.toast(t("project.need")); return; }
            persist(true);
            MQ.fx.confetti(e.currentTarget, 50);
            MQ.ui.badge("project");
            MQ.ui.toast(t("project.done", { xp: PROJECT_XP }), "gold");
            setTimeout(function () { MQ.ui.go("unit", { id: u.id }); }, MQ.fx.reduced() ? 0 : 900);
          }
        }, saved.done ? t("project.update") : t("project.finish") + " ✓")
      ])
    ]);
  });

  MQ.ui.route("creator", function () {
    const mine = MQ.state.get().myQuestions;
    const f = {
      q: h("textarea.input", { rows: "3", placeholder: t("creator.q.ph") }),
      answer: h("input.input", { placeholder: t("creator.a.ph") }),
      hint: h("input.input", { placeholder: t("creator.h.ph") }),
      explain: h("textarea.input", { rows: "2", placeholder: t("creator.x.ph") })
    };
    function add() {
      const q = f.q.value.trim(), a = f.answer.value.trim();
      if (q.length < 8) { MQ.ui.toast(t("creator.err.q")); return; }
      if (Number.isNaN(MQ.checker.parseNumber(a))) { MQ.ui.toast(t("creator.err.a")); return; }
      MQ.state.update(function (d) {
        d.myQuestions.push({
          id: "my-" + Date.now(), type: "num", diff: 2, skill: "me", source: "me", lang: I.uiLang(),
          q: q, answer: a, hints: [f.hint.value.trim() || t("tutor.opener.0")], explain: f.explain.value.trim()
        });
      });
      MQ.ui.badge("creator");
      MQ.ui.toast(t("creator.added"));
      MQ.ui.go("creator");
    }
    return h("section.creator", [
      h("p.kicker", t("hud.creator")),
      h("h1", t("creator.title")),
      h("p.muted", t("creator.sub")),
      h("div.card.form", [
        h("label.lbl", t("creator.q")), f.q, h("label.lbl", t("creator.a")), f.answer,
        h("label.lbl", t("creator.h")), f.hint, h("label.lbl", t("creator.x")), f.explain,
        h("button.btn", { onclick: add }, t("creator.add"))
      ]),
      h("h2", t("creator.list", { n: mine.length })),
      mine.length ? h("button.btn", { onclick: function () { MQ.ui.go("play", { mine: true }); } }, "▶ " + t("creator.play")) : h("p.muted", t("creator.none")),
      h("ul.mine", mine.map(function (q) {
        return h("li.card", [
          h("p", q.q), h("p.tiny", t("play.answer") + ": " + q.answer),
          h("button.btn.ghost", {
            onclick: function () {
              MQ.state.update(function (d) { d.myQuestions = d.myQuestions.filter(function (x) { return x.id !== q.id; }); });
              MQ.ui.go("creator");
            }
          }, t("creator.delete"))
        ]);
      }))
    ]);
  });
})();
