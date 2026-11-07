// Merges Workbook practice files (data/book<N>/wb/unitNN.js → window.GAME_WB) into the units:
// questions are appended to their section, translations into the unit's overlay (window.GAME_TR).
window.MQ = window.MQ || {};

MQ.mergeWorkbook = function (units, wbList, trList) {
  let added = 0;
  (wbList || []).forEach(function (wb) {
    const u = units.find(function (x) { return x.id === Number(wb.unit); });
    if (!u || !wb.sections) return;
    Object.keys(wb.sections).forEach(function (secId) {
      // "challenge" targets the unit's boss level (used by the advanced Vietnamese problem sets)
      if (secId === "challenge" && !u.challenge) u.challenge = { title: "", intro: "", questions: [] };
      const sec = secId === "challenge" ? u.challenge : u.sections.find(function (s) { return s.id === secId; });
      if (!sec) return;
      const have = {};
      sec.questions.forEach(function (q) { have[q.id] = true; });
      (wb.sections[secId] || []).forEach(function (q) {
        if (!q || !q.id || have[q.id]) return;
        sec.questions.push(Object.assign({ source: wb.source || "wb" }, q));
        have[q.id] = true;
        added += 1;
      });
    });
    if (wb.tr) {
      let o = trList.find(function (t) { return t.unit === u.id; });
      if (!o) { o = { unit: u.id, en: {}, vi: {} }; trList.push(o); }
      ["en", "vi"].forEach(function (lang) {
        o[lang] = Object.assign({}, o[lang] || {}, wb.tr[lang] || {});
      });
    }
  });
  return added;
};
