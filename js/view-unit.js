// Unit hub (sections, boss challenge, project, glossary) and the "learn" briefing before a run.
(function () {
  const h = MQ.ui.h;
  const t = MQ.t;
  const I = MQ.i18n;

  function back(label, fn) { return h("button.btn.ghost.back", { onclick: fn }, "← " + label); }

  function glossary(u) {
    if (!u.glossary || !u.glossary.length) return null;
    return h("details.card.glossary", [
      h("summary", "📖 " + t("unit.glossary", { n: u.glossary.length })),
      h("dl", u.glossary.reduce(function (acc, g, i) {
        acc.push(h("dt", [h("b", g.en), " · " + g.vi]));
        acc.push(MQ.ui.bi("dd", I.pair(u, "g." + i + ".def", g.def || "")));
        return acc;
      }, []))
    ]);
  }

  // "🚀 Mở rộng" line on a stage card: locked until 1 star, then a shortcut to the stage's quests.
  function questLine(u, s) {
    const qs = s.quests || [];
    if (!qs.length) return null;
    const open = MQ.quests.unlocked(u, s);
    let got = 0, max = 0;
    qs.forEach(function (q) { got += (MQ.state.questOf(MQ.quests.keyOf(u, q)) || { best: 0 }).best; max += MQ.quests.maxScore(q); });
    return h("p.tiny.quest-line" + (open ? "" : ".locked"), open
      ? t("quest.title") + " · " + got + "/" + max + " 💡"
      : "🔒 " + t("quest.title"));
  }

  function sectionCard(u, s, i) {
    const m = MQ.state.sectionMastery(u, s);
    const title = I.pick(s.title, s.titleVi);
    return h("article.card.section", { style: { "--i": i } }, [
      h("div.section-top", [h("span.section-id", s.id), MQ.ui.stars(MQ.state.starsFor(m))]),
      h("h3", title.main),
      title.sub ? h("p.muted.en", title.sub) : null,
      h("div.bar.small", [h("i", { style: { width: Math.round(m * 100) + "%" } })]),
      h("p.tiny", t("unit.sec.meta", { n: s.questions.length, pct: Math.round(m * 100) })),
      questLine(u, s),
      h("div.row", [
        h("button.btn", { onclick: function () { MQ.ui.go("learn", { id: u.id, sec: s.id }); } }, m > 0 ? t("unit.sec.continue") : t("unit.sec.start"))
      ])
    ]);
  }

  function bossCard(u) {
    if (!u.challenge || !u.challenge.questions || !u.challenge.questions.length) return null;
    const ready = u.sections.filter(function (s) { return MQ.state.sectionMastery(u, s) >= 0.4; }).length;
    const need = Math.min(2, u.sections.length);
    const m = MQ.state.challengeMastery(u);
    const open = ready >= need;
    return h("article.card.boss" + (open ? "" : ".locked"), [
      h("div.boss-icon", open ? "🐉" : "🔒"),
      h("div", [
        h("p.kicker", t("boss.kicker")),
        MQ.ui.bi("h3", I.pair(u, "u.challenge.title", u.challenge.title || t("boss.title"))),
        MQ.ui.bi("p", I.pair(u, "u.challenge.intro", u.challenge.intro || t("boss.intro"))),
        h("p.tiny", open
          ? t("boss.progress", { n: u.challenge.questions.length, pct: Math.round(m * 100) })
          : t("boss.locked", { need: need, have: ready })),
        open ? h("button.btn.danger", { onclick: function () { MQ.ui.go("play", { id: u.id, boss: true }); } }, t("boss.enter")) : null
      ])
    ]);
  }

  MQ.ui.route("unit", function (p) {
    const u = MQ.unit(p.id);
    const s = MQ.strandOf(u);
    const title = I.pick(u.title, u.titleVi);
    return h("section.unit." + s.cls, [
      back(t("hud.map"), function () { MQ.ui.go("map"); }),
      h("header.unit-head", [
        h("span.unit-emoji", u.emoji || "🏝️"),
        h("div", [
          h("p.kicker", t("map.unit", { n: u.id }) + " · " + s.name + " · " + t("unit.pages", { p: (u.pages || []).join("–") })),
          MQ.ui.bi("h1", I.pair(u, "u.realm", u.realm || u.titleVi)),
          h("p.en", title.main + (title.sub ? " — " + title.sub : "")),
          MQ.ui.bi("p.story", I.pair(u, "u.story", u.story || ""))
        ])
      ]),
      h("div.grid-sections", u.sections.map(function (sec, i) { return sectionCard(u, sec, i); })),
      bossCard(u),
      u.project ? h("article.card.project-cta", [
        h("div.boss-icon", "🔭"),
        h("div", [
          h("p.kicker", t("project.kicker")),
          MQ.ui.bi("h3", I.pick(u.project.title, u.project.titleVi)),
          MQ.ui.bi("p", I.pair(u, "p.goal", u.project.goal || "")),
          h("button.btn", { onclick: function () { MQ.ui.go("project", { id: u.id }); } }, t("project.open"))
        ])
      ]) : null,
      glossary(u)
    ]);
  });

  const biRich = function (sel, p) { return MQ.learnSteps.biRich(sel, p); };
  let listView = false;         // "📋 Show all" (whole list) instead of card by card, kept for the session

  // "🔑 Key words" strip: the section's bold words from the Learner's Book, English · Vietnamese.
  function keywordStrip(sec) {
    if (!sec.keywords || !sec.keywords.length) return null;
    return h("div.kw-strip", [h("span.kw-title", "🔑 " + t("learn.keywords"))].concat(sec.keywords.map(function (k) {
      return h("span.kw-chip", [h("b", k.en), k.vi && k.vi !== k.en ? " · " + k.vi : null]);
    })));
  }

  // Key ideas with their Learner's Book page (learnPages), detail bullets (learnDetail[i]) and the figures that
  // illustrate them (figure.at; without "at": after the last idea), in the current language.
  function ideasOf(u, sec, learn) {
    const pages = sec.learnPages || [];
    const details = sec.learnDetail || [];
    const caps = MQ.ui.biItems(I.pair(u, "s." + sec.id + ".figcap", (sec.figures || []).map(function (f) { return f.caption; })));
    return learn.map(function (x, i) {
      return {
        head: x,
        page: pages[i],
        details: details[i] && details[i].length ? MQ.ui.biItems(I.pair(u, "s." + sec.id + ".learnDetail." + i, details[i])) : [],
        figs: (sec.figures || []).map(function (f, n) { return { svg: f.svg, photos: f.photos, cap: caps[n], at: f.at == null ? learn.length - 1 : f.at }; })
          .filter(function (f) { return f.at === i; }),
        sims: (sec.sims || []).filter(function (x) { return x.at === i; }).map(function (x) { return x.id; })
      };
    });
  }

  function learnItems(ideas) {
    return ideas.reduce(function (out, it) {
      const li = biRich("li", it.head);
      if (it.page) li.appendChild(h("span.learn-src", { title: t("learn.src.title") }, "📘 " + t("learn.src", { p: it.page })));
      if (it.details.length) li.appendChild(h("ul.learn-detail", it.details.map(function (y) { return biRich("li", y); })));
      return out.concat([li], it.figs.map(function (f) {
        return h("li.learn-fig", [h("figure", [f.photos ? MQ.photos.view(f.photos) : null, h("div.figure", { svg: f.svg }), MQ.ui.bi("figcaption", f.cap)])]);
      }), it.sims.map(function (id) { return h("li.learn-fig", [MQ.sims.mount(id)]); }));
    }, []);
  }

  // Sections with detailed ideas are learnt card by card (MQ.learnSteps); the list stays one tap away.
  function learnBody(u, sec, ideas) {
    const flip = function () { listView = !listView; MQ.ui.go("learn", { id: u.id, sec: sec.id }); };
    if (sec.learnDetail && !listView) {
      return MQ.learnSteps.mount({
        ideas: ideas, keywords: sec.keywords,
        srcLabel: function (p) { return t("learn.src", { p: p }); }
      }, flip);
    }
    return h("div", [
      sec.learnDetail ? h("div.row.step-top", [h("button.btn.ghost.small", { onclick: flip }, t("learn.cards"))]) : null,
      h("ul.learn-list" + (sec.learnDetail ? ".learn-detailed" : ""), learnItems(ideas))
    ]);
  }

  MQ.ui.route("learn", function (p) {
    const u = MQ.unit(p.id);
    const sec = u.sections.find(function (x) { return x.id === p.sec; });
    const ex = sec.example;
    const title = I.pick(sec.title, sec.titleVi);
    const learn = MQ.ui.biItems(I.pair(u, "s." + sec.id + ".learn", sec.learn || []));

    return h("section.learn", [
      back(I.c(u, "u.realm", u.realm || u.titleVi), function () { MQ.ui.go("unit", { id: u.id }); }),
      h("p.kicker", t("learn.kicker", { id: sec.id })),
      h("h1", title.main),
      title.sub ? h("p.en", title.sub) : null,
      h("div.card.learn-card", [
        h("h3", "💡 " + t("learn.key")),
        sec.learnPages ? h("p.tiny.learn-note", t("learn.fromBook")) : null,
        keywordStrip(sec),
        learnBody(u, sec, ideasOf(u, sec, learn))
      ]),
      sec.extend && sec.extend.length ? h("div.card.learn-extend", [
        h("h3", "🔭 " + t("learn.extend")),
        h("p.tiny", t("learn.extend.note")),
        h("ul.learn-list", MQ.ui.biItems(I.pair(u, "s." + sec.id + ".extend", sec.extend)).map(function (x) { return MQ.ui.bi("li", x); }))
      ]) : null,
      ex && ex.steps && ex.steps.length ? MQ.exampleLab(u, sec) : null,
      h("div.row.center", [
        h("button.btn.big", { onclick: function () { MQ.ui.go("play", { id: u.id, sec: sec.id }); } }, t("learn.start") + " ▸")
      ]),
      MQ.questCard ? MQ.questCard(u, sec) : null
    ]);
  });
})();
