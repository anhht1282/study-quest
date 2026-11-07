// Character creator, welcome screen, the library of parts (one door per book), and the adventure map.
(function () {
  const h = MQ.ui.h;
  const t = MQ.t;
  const A = MQ.avatar;

  const STRAND = MQ.STRANDS[MQ.subject];
  MQ.STRAND = STRAND;
  MQ.strandOf = function (u) {
    const key = Object.keys(STRAND).find(function (k) { return (u.strand || "").indexOf(k) === 0; });
    const s = STRAND[key] || STRAND[Object.keys(STRAND)[0]];
    return { name: t(s.key), cls: s.cls };
  };

  // Character editor shared by the welcome screen and the profile. onChange gets a new char object.
  MQ.charEditor = function (start, onChange) {
    let ch = Object.assign({}, A.DEFAULT, start || {});
    const preview = h("div.char-preview");
    const nick = h("p.char-nick");
    const groups = h("div.char-groups");
    function set(patch) {
      ch = Object.assign({}, ch, patch);
      draw();
      onChange(ch);
      MQ.fx.pop(preview, "jump");
    }
    function chip(active, label, onclick, extra) {
      return h("button.opt" + (active ? ".on" : "") + (extra || ""), { onclick: onclick, type: "button" }, label);
    }
    function draw() {
      preview.innerHTML = A.svg(ch, "happy");
      nick.textContent = A.nickname(ch);
      groups.innerHTML = "";
      groups.appendChild(h("div.char-group", [h("span.lbl", t("char.animal")), h("div.opts", Object.keys(A.ANIMALS).map(function (a) {
        return h("button.opt.animal" + (ch.animal === a ? ".on" : ""), {
          type: "button", title: A.label(A.ANIMALS[a]), onclick: function () { set({ animal: a }); },
          svg: A.svg(Object.assign({}, ch, { animal: a, acc: "none" }), "calm")
        });
      }))]));
      groups.appendChild(h("div.char-group", [h("span.lbl", t("char.color")), h("div.opts", A.COLORS.map(function (c) {
        return h("button.swatch" + (ch.color === c ? ".on" : ""), {
          type: "button", style: { background: c }, "aria-label": c, onclick: function () { set({ color: c }); }
        });
      }))]));
      groups.appendChild(h("div.char-group", [h("span.lbl", t("char.acc")), h("div.opts", Object.keys(A.ACCESSORIES).map(function (k) {
        const info = A.ACCESSORIES[k];
        const open = A.unlocked(k);
        return chip(ch.acc === k, (open ? "" : "🔒 ") + A.label(info), function () {
          if (open) set({ acc: k });
          else MQ.ui.toast(t("char.locked", { badge: MQ.ui.badgeInfo(info.badge).name }));
        }, open ? "" : ".locked");
      }))]));
      groups.appendChild(h("div.char-group", [h("span.lbl", t("char.trait")), h("div.opts", A.TRAITS.map(function (tr, i) {
        return chip(ch.trait === i, A.label(tr), function () { set({ trait: i }); });
      }))]));
    }
    draw();
    return h("div.char-editor", [h("div.char-stage", [preview, nick]), groups]);
  };

  MQ.ui.route("welcome", function () {
    let ch = Object.assign({}, A.DEFAULT, { animal: Object.keys(A.ANIMALS)[Math.floor(Math.random() * 8)] });
    const name = h("input.input", { placeholder: t("welcome.name.ph"), maxlength: "20", "aria-label": t("welcome.name") });
    return h("section.welcome", [
      h("div.welcome-hero", [
        h("p.kicker", "Cambridge Lower Secondary Mathematics · Stage 7 & 8"),
        h("h1", "Math Quest"),
        h("p.lead", t("welcome.lead")),
        h("div.welcome-lang", [h("span.lbl", t("hud.lang")), MQ.ui.langSwitchEl ? MQ.ui.langSwitchEl() : null])
      ]),
      h("div.card.welcome-form", [
        h("label.lbl", t("welcome.name")), name,
        h("label.lbl", t("welcome.char")),
        MQ.charEditor(ch, function (c) { ch = c; }),
        h("button.btn.big", {
          onclick: function () {
            const n = name.value.trim();
            if (!n) { name.focus(); MQ.ui.toast(t("welcome.name.need")); return; }
            MQ.state.update(function (d) { d.profile = { name: n, avatar: "", char: ch }; });
            MQ.ui.go("books");
          }
        }, t("welcome.start"))
      ])
    ]);
  });

  // Library: the two parts of the game, one per Learner's Book.
  MQ.ui.route("books", function () {
    const name = MQ.state.get().profile.name;
    return h("section.books", [
      h("div.books-head", [
        MQ.ui.avatarEl("div.books-av", "happy"),
        h("div", [
          h("p.kicker", t("books.kicker")),
          h("h1", t("books.title", { name: name })),
          h("p.muted", t("books.sub"))
        ])
      ]),
      h("div.doors", Object.keys(MQ.BOOKS).map(function (b) {
        const sum = MQ.bookSummary(b);
        const current = b === MQ.book && MQ.bookChosen;
        return h("button.door.door-" + b + (current ? ".current" : ""), {
          onclick: function (e) {
            const door = e.currentTarget;
            door.classList.add("opening");
            setTimeout(function () {
              if (current) MQ.ui.go("map"); else MQ.switchBook(b);
            }, MQ.fx.reduced() ? 0 : 420);
          }
        }, [
          h("span.door-panel"),
          h("span.door-emoji", MQ.BOOKS[b].emoji),
          h("span.door-part", t("book." + b + ".part") + " · " + MQ.BOOKS[b].book),
          h("span.door-title", t("book." + b + ".title")),
          h("span.door-stage", "Cambridge Lower Secondary " + MQ.BOOKS[b].stage),
          h("span.door-blurb", t("book." + b + ".blurb")),
          h("span.door-stats", sum.solved ? t("books.stats", { n: sum.solved, xp: sum.xp }) : t("books.new")),
          h("span.door-go", t("books.enter", { part: t("book." + b + ".part") }) + " →")
        ]);
      }))
    ]);
  });

  function suggestion(units) {
    return units.find(function (u) { return MQ.state.unitProgress(u) < 0.6; }) || null;
  }

  function unitNode(u, i, next) {
    const p = MQ.state.unitProgress(u);
    const s = MQ.strandOf(u);
    const sec = u.sections.map(function (x) { return MQ.state.starsFor(MQ.state.sectionMastery(u, x)); });
    const totalStars = sec.reduce(function (a, b) { return a + b; }, 0);
    const realm = MQ.i18n.pair(u, "u.realm", u.realm || u.titleVi);
    const title = MQ.i18n.pick(u.title, u.titleVi);
    return h("button.node." + s.cls + (next && next.id === u.id ? ".next" : "") + (p >= 0.95 ? ".done" : ""), {
      style: { "--i": i },
      onclick: function () { MQ.ui.go("unit", { id: u.id }); },
      "aria-label": t("map.unit", { n: u.id }) + ": " + title.main
    }, [
      h("span.node-badge", [MQ.ui.ring(p), h("span.node-emoji", u.emoji || "🏝️")]),
      h("span.node-text", [
        h("span.node-num", t("map.unit", { n: u.id }) + " · " + s.name),
        MQ.ui.bi("span.node-title", realm),
        h("span.node-sub", title.main + (title.sub ? " — " + title.sub : "")),
        h("span.node-meta", "★ " + totalStars + "/" + (u.sections.length * 3) + " · " + Math.round(p * 100) + "%")
      ]),
      next && next.id === u.id ? h("span.flag", t("map.suggest")) : null
    ]);
  }

  function projectNode(u) {
    const done = (MQ.state.get().projects["u" + u.id] || {}).done;
    const title = MQ.i18n.pick(u.project.title, u.project.titleVi);
    return h("button.node.project" + (done ? ".done" : ""), {
      onclick: function () { MQ.ui.go("project", { id: u.id }); }
    }, [
      h("span.node-emoji", done ? "🏅" : "🔭"),
      h("span.node-text", [
        h("span.node-num", t("project.kicker")),
        MQ.ui.bi("span.node-title", title)
      ])
    ]);
  }

  MQ.ui.route("map", function (params) {
    const units = MQ.units();
    const filter = params.strand || "all";
    const next = suggestion(units);
    const d = MQ.state.get();

    const chips = h("div.chips", [["all", t("map.all")]].concat(Object.keys(STRAND).map(function (k) {
      return [k, t(STRAND[k].key)];
    })).map(function (c) {
      return h("button.chip" + (filter === c[0] ? ".on" : ""), {
        onclick: function () { MQ.ui.go("map", { strand: c[0] }); }
      }, c[1]);
    }));

    const trail = h("div.trail");
    let i = 0;
    units.forEach(function (u) {
      if (filter !== "all" && (u.strand || "").indexOf(filter) === -1) return;
      trail.appendChild(unitNode(u, i++, next));
      if (u.project && filter === "all") trail.appendChild(projectNode(u));
    });
    if (!units.length) trail.appendChild(h("p.muted", t("map.empty")));

    return h("section.map", [
      h("header.map-head", [
        MQ.ui.avatarEl("div.map-av", "happy"),
        h("div", [
          h("p.kicker", t("book." + MQ.book + ".part") + " · " + t("book." + MQ.book + ".title") + " · " + MQ.BOOKS[MQ.book].book),
          h("h1", t("map.hello", { name: A.nickname(MQ.ui.charOf(d.profile)) + " " + d.profile.name })),
          h("p.muted", next
            ? t("map.next", { realm: MQ.i18n.c(next, "u.realm", next.realm || next.titleVi) })
            : t("map.allDone"))
        ])
      ]),
      reviewCard(units, d),
      chips,
      trail
    ]);
  });

  // 🔁 "Today's review": only shown once something has been solved. No streaks, nothing lost on missed days.
  function reviewCard(units, d) {
    const R = MQ.review;
    if (!R || !Object.keys(d.answers).some(function (k) { return d.answers[k] && d.answers[k].correct; })) return null;
    const left = MQ.state.reviewLeft();
    const due = R.due(units, d.answers, d.review, R.dayIndex(Date.now()), left);
    const kept = R.longTerm(d.review);
    return h("div.card.review-card", [
      h("h3", t("review.title")),
      h("p.tiny", due.length ? t("review.due", { n: due.length, xp: R.XP }) : t(left ? "review.none" : "review.doneToday")),
      kept ? h("p.tiny", t("review.kept", { n: kept })) : null,
      due.length ? h("button.btn", { "data-act": "review", onclick: function () { MQ.ui.go("play", { review: 1 }); } }, t("review.go") + " ▸") : null
    ]);
  }
})();
