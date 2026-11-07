// Language support. Modes: "vi", "en", "both" (content in English with a Vietnamese subtitle,
// the way the child meets maths at school; UI chrome in Vietnamese).
window.MQ = window.MQ || {};

MQ.i18n = (function () {
  const MODES = ["vi", "en", "both"];
  let mode = "both";
  try {
    const saved = localStorage.getItem("mathquest.lang");
    if (MODES.indexOf(saved) !== -1) mode = saved;
  } catch (e) {
    console.warn("MathQuest: cannot read language", e);
  }

  function setMode(m) {
    if (MODES.indexOf(m) === -1) return;
    mode = m;
    try { localStorage.setItem("mathquest.lang", m); } catch (e) { console.warn("MathQuest: cannot save language", e); }
  }

  // UI strings: English only in "en" mode.
  function uiLang() { return mode === "en" ? "en" : "vi"; }

  function t(key, vars) {
    const dict = MQ.DICT || {};
    const entry = (MQ.subject && dict[key + "@" + MQ.subject]) || dict[key];   // subject wording first
    let s = entry ? entry[uiLang()] || entry.vi : key;
    if (!entry) console.warn("MathQuest: missing UI string", key);
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split("{" + k + "}").join(String(vars[k])); });
    return s;
  }

  // ---- content translation overlays (data/book<N>/tr/unitNN.js) ----
  function overlay(unitId) {
    const list = window.GAME_TR || [];
    for (let i = 0; i < list.length; i++) if (list[i].unit === Number(unitId)) return list[i];
    return null;
  }

  // Text of a content field in a given language ("en"/"vi"); falls back to the original.
  function inLang(unit, path, original, lang) {
    const o = unit && overlay(unit.id);
    const v = o && o[lang] && o[lang][path];
    if (v == null) return original;
    if (Array.isArray(original) && (!Array.isArray(v) || v.length !== original.length)) return original;
    return v;
  }

  // { main, sub } for the current mode. sub is only set in "both" mode and when it differs.
  function pair(unit, path, original) {
    if (mode === "vi") return { main: inLang(unit, path, original, "vi"), sub: null };
    const en = inLang(unit, path, original, "en");
    if (mode === "en") return { main: en, sub: null };
    const vi = inLang(unit, path, original, "vi");
    return { main: en, sub: JSON.stringify(vi) === JSON.stringify(en) ? null : vi };
  }

  // Plain string/array in the main language (for places where a subtitle would not fit).
  function c(unit, path, original) { return pair(unit, path, original).main; }

  // Pick the English or Vietnamese member of a field pair such as title/titleVi.
  function pick(en, vi) {
    if (mode === "vi") return { main: vi || en, sub: null };
    if (mode === "en") return { main: en || vi, sub: null };
    return { main: en || vi, sub: vi && vi !== en ? vi : null };
  }

  return {
    MODES: MODES, get mode() { return mode; }, setMode: setMode, uiLang: uiLang, t: t,
    pair: pair, c: c, pick: pick, inLang: inLang
  };
})();

MQ.t = MQ.i18n.t;
