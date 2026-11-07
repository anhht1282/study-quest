// Journey page: fun profile card + character editor, progress, weak skills, badges, time, journal, backup.
(function () {
  const h = MQ.ui.h;
  const t = MQ.t;
  const I = MQ.i18n;
  const MOTTOS = 6;

  function profileCard(d) {
    const ch = MQ.ui.charOf(d.profile);
    const r = MQ.ui.rank(d.xp);
    const solved = Object.keys(d.answers).filter(function (k) { return d.answers[k].correct; }).length;
    const badges = Object.keys(d.badges).length;
    const motto = d.profile.motto != null ? t("motto." + d.profile.motto) : t("motto.0");
    const av = MQ.ui.avatarEl("div.pc-av.idle", "happy");
    av.addEventListener("click", function () {
      const moods = ["wow", "happy", "think"];
      av.innerHTML = MQ.avatar.svg(ch, moods[Math.floor(Math.random() * moods.length)]);
      MQ.fx.pop(av, "jump");
    });
    return h("div.profile-card", [
      av,
      h("div.pc-body", [
        h("p.kicker", MQ.avatar.nickname(ch)),
        h("h1", d.profile.name),
        h("p.pc-rank", "🏅 " + r.name + " · " + d.xp + " XP"),
        h("p.pc-motto", "“" + motto + "”"),
        h("div.pc-stats", [
          h("span", [h("b", String(solved)), t("profile.solved")]),
          h("span", [h("b", String(badges)), t("profile.badges")]),
          h("span", [h("b", t("book." + MQ.book + ".part")), MQ.BOOKS[MQ.book].short])
        ])
      ])
    ]);
  }

  function editor(d) {
    let ch = MQ.ui.charOf(d.profile);
    let motto = d.profile.motto || 0;
    const mottos = h("div.opts", Array.from({ length: MOTTOS }, function (_, i) {
      return h("button.opt" + (motto === i ? ".on" : ""), {
        type: "button",
        onclick: function (e) {
          motto = i;
          mottos.querySelectorAll(".opt").forEach(function (b) { b.classList.remove("on"); });
          e.currentTarget.classList.add("on");
        }
      }, t("motto." + i));
    }));
    return h("details.card.char-edit", [
      h("summary", "🎨 " + t("profile.edit")),
      MQ.charEditor(ch, function (c) { ch = c; }),
      h("div.char-group", [h("span.lbl", t("profile.motto")), mottos]),
      h("button.btn", {
        onclick: function () {
          MQ.state.update(function (s) { s.profile = Object.assign({}, s.profile, { char: ch, motto: motto }); });
          MQ.ui.toast(t("profile.saved"));
          MQ.ui.go("profile");
        }
      }, t("profile.save"))
    ]);
  }

  MQ.ui.route("profile", function () {
    const d = MQ.state.get();
    const units = MQ.units();
    const weak = [];
    units.forEach(function (u) {
      const st = MQ.state.skillStats(u);
      Object.keys(st).forEach(function (k) {
        const s = st[k];
        if (s.seen >= 2 && s.ok / s.seen < 0.6) weak.push({ u: u, skill: k, rate: s.ok / s.seen });
      });
    });
    weak.sort(function (a, b) { return a.rate - b.rate; });
    const days = Object.keys(d.minutesByDay).sort().slice(-7);
    const maxMin = Math.max(30, Math.max.apply(null, days.map(function (k) { return d.minutesByDay[k]; }).concat([0])));
    const fileIn = h("input", { type: "file", accept: "application/json", hidden: true, onchange: importFile });

    function importFile(e) {
      const file = e.target.files[0];
      if (!file) return;
      file.text().then(function (text) {
        try { MQ.state.importJson(text); MQ.ui.toast(t("profile.restored")); MQ.ui.go("profile"); }
        catch (err) { MQ.ui.toast(err.message, "warn"); }
      });
    }
    function exportFile() {
      const a = h("a", { href: URL.createObjectURL(new Blob([MQ.state.exportJson()], { type: "application/json" })), download: "mathquest" + MQ.book + "-progress.json" });
      a.click();
    }

    return h("section.profile", [
      profileCard(d),
      editor(d),
      MQ.sparkCard ? MQ.sparkCard(d) : null,
      h("div.card", [h("h3", "🗺️ " + t("profile.progress")), h("div.unit-bars", units.map(function (u) {
        const pct = Math.round(MQ.state.unitProgress(u) * 100);
        return h("button.unit-bar", { onclick: function () { MQ.ui.go("unit", { id: u.id }); } }, [
          h("span", u.id + ". " + I.pick(u.title, u.titleVi).main), h("div.bar", [h("i", { style: { width: pct + "%" } })]), h("b", pct + "%")
        ]);
      }))]),
      h("div.card", [h("h3", "🎯 " + t("profile.weak")), weak.length
        ? h("ul", weak.slice(0, 8).map(function (w) {
          return h("li", [h("b", w.skill), " — " + t("map.unit", { n: w.u.id }) + " (" + Math.round(w.rate * 100) + "%)"]);
        }))
        : h("p.muted", t("profile.weak.none"))]),
      h("div.card", [h("h3", "🏅 " + t("profile.badgeTitle")), h("div.badges", MQ.ui.BADGE_IDS.map(function (id) {
        const b = MQ.ui.badgeInfo(id);
        return h("div.badge" + (d.badges[id] ? ".got" : ""), { title: b.desc }, [h("span", b.icon), h("b", b.name), h("small", b.desc)]);
      }))]),
      h("div.card", [h("h3", "⏱️ " + t("profile.time")), days.length ? h("div.minutes", days.map(function (k) {
        return h("div.mcol", [h("i", { style: { height: Math.round(100 * d.minutesByDay[k] / maxMin) + "%" } }), h("small", k.slice(5)), h("b", d.minutesByDay[k] + "′")]);
      })) : h("p.muted", t("profile.nodata")),
      h("p.tiny", t("profile.time.tip"))]),
      h("div.card", [h("h3", "📓 " + t("profile.journal")), d.journal.length
        ? h("ul.journal", d.journal.slice().reverse().slice(0, 10).map(function (j) {
          return h("li", [h("small", new Date(j.at).toLocaleDateString(I.uiLang() === "en" ? "en-GB" : "vi-VN") + " · " + (j.where || "")), h("p", j.text)]);
        }))
        : h("p.muted", t("profile.journal.none"))]),
      h("div.card", [h("h3", "⚙️ " + t("profile.parents")),
        h("div.setting", [
          h("div", [
            h("b", "⏱️ " + t("profile.timer")),
            h("p.tiny", d.settings.timer !== false ? t("profile.timer.on") : t("profile.timer.off"))
          ]),
          h("button.btn.ghost", {
            onclick: function () {
              MQ.state.update(function (s) { s.settings.timer = s.settings.timer === false; });
              MQ.ui.go("profile");
            }
          }, t("profile.timer.toggle"))
        ]),
        h("div.row", [
          h("button.btn.ghost", { onclick: exportFile }, t("profile.backup")),
          h("button.btn.ghost", { onclick: function () { fileIn.click(); } }, t("profile.restore")), fileIn,
          h("button.btn.ghost.danger-text", {
            onclick: function () {
              const close = MQ.ui.modal(h("div", [
                h("h2", t("profile.reset.q")), h("p", t("profile.reset.warn")),
                h("div.row", [
                  h("button.btn.danger", { onclick: function () { MQ.state.reset(); close(); MQ.ui.go("welcome"); } }, t("profile.reset.yes")),
                  h("button.btn.ghost", { onclick: function () { close(); } }, t("profile.reset.no"))
                ])
              ]));
            }
          }, t("profile.reset"))
        ])]),
      MQ.photos.creditsCard(window.GAME_PHOTOS)
    ]);
  });
})();
