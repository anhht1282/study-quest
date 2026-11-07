// 💡 card on the Journey page: title + progress to the next title, the Discovery book (one fixed card per quest,
// opened when that quest has earned any 💡 — never random) and the latest "why you earned 💡" ledger lines.
(function () {
  const h = MQ.ui.h;
  const t = MQ.t;
  const LOG_SHOWN = 20;

  function titleBlock(spark) {
    const ti = MQ.spark.titleFor(spark);
    const pct = ti.next ? Math.round(100 * (spark - ti.from) / (ti.next - ti.from)) : 100;
    const nextKey = ti.next ? "spark.title." + (ti.level + 1) : null;
    return [
      h("p.spark-title", "💡 " + spark + (ti.key ? " · " + t(ti.key) : "")),
      ti.key ? null : h("p.tiny", t("spark.none")),
      h("div.bar", [h("i", { style: { width: pct + "%" } })]),
      h("p.tiny", nextKey ? t("spark.next", { n: ti.next - spark, title: t(nextKey) }) : t("spark.top"))
    ];
  }

  function discoveryBook(d) {
    const all = MQ.quests.allQuests(MQ.units());
    const on = all.filter(function (x) { const r = d.quests[MQ.quests.keyOf(x.unit, x.quest)]; return r && r.best > 0; });
    return [
      h("p", h("b", t("spark.book", { n: on.length, total: all.length }))),
      h("div.disc-grid", all.map(function (x) {
        const r = d.quests[MQ.quests.keyOf(x.unit, x.quest)];
        const lit = r && r.best > 0;
        return h("button.disc", {
          "data-on": lit ? "1" : null, title: t("quest.type." + x.quest.type) + " · " + x.sec.id,
          onclick: function () { MQ.ui.go("quest", { id: x.unit.id, sec: x.sec.id, q: x.quest.id }); }
        }, x.sec.id);
      }))
    ];
  }

  // why vars hold ids (criterion / strategy) and raw numbers; show them in the current language.
  function questOfKey(k) {
    return MQ.quests.allQuests(MQ.units()).find(function (x) { return MQ.quests.keyOf(x.unit, x.quest) === k; });
  }
  function labelOf(x, list, field, id) {
    if (!x || !x.quest[list]) return id;
    const i = x.quest[list].findIndex(function (it) { return it.id === id; });
    const texts = MQ.i18n.inLang(x.unit, "q." + x.quest.id + "." + list, x.quest[list].map(function (it) { return it[field]; }), MQ.i18n.uiLang());
    return i >= 0 ? texts[i] : id;
  }
  function nums(v) {
    const s = String(v).replace(/-/g, "−");
    return MQ.i18n.uiLang() === "vi" ? s.replace(/(\d)\.(\d)/g, "$1,$2") : s;
  }
  function lineText(l, w) {
    const x = questOfKey(l.k);
    const v = Object.assign({}, w.vars);
    if (v.c != null) v.c = labelOf(x, "criteria", "text", v.c);
    if (v.s != null) v.s = labelOf(x, "strategies", "name", v.s);
    if (v.p != null) v.p = labelOf(x, "props", "text", v.p);
    if (v.k != null) v.k = labelOf(x, "kinds", "text", v.k);
    if (v.i != null && x && x.quest.items) v.i = MQ.i18n.inLang(x.unit, "q." + x.quest.id + ".items", x.quest.items, MQ.i18n.uiLang())[v.i] || v.i;
    if (v.d != null) {
      const cm = String(v.d).split(">");
      v.d = labelOf(x, "factors", "text", cm[0]) + " → " + labelOf(x, "outcomes", "text", cm[1]);
    }
    if (v.v != null) v.v = nums(v.v);
    if (v.w != null) v.w = nums(v.w);
    return t(w.key, v);
  }

  function ledger(d) {
    const lines = d.sparkLog.slice().reverse().slice(0, LOG_SHOWN);
    return [
      h("h4", t("spark.log")),
      lines.length ? h("ul.spark-log", lines.map(function (l) {
        const text = [l.why].concat(l.also || []).map(function (w) { return lineText(l, w); }).join(" · ");
        return h("li", [h("b", "+" + l.p + " 💡 "), text, h("span.tiny.muted", " · " + l.k.replace(/^u\d+:/, ""))]);
      })) : h("p.muted", t("spark.log.none"))
    ];
  }

  MQ.sparkCard = function (d) {
    return h("div.card.spark-card", [h("h3", "💡 " + t("spark.card")), h("p.tiny", t("spark.sub"))]
      .concat(titleBlock(d.spark || 0), discoveryBook(d), ledger(d)));
  };
})();
