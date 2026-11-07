// Boot: load unit data files (missing ones are skipped), validate them, then open the first screen.
(function () {
  const UNIT_COUNT = 16;

  function validUnit(u) {
    return u && typeof u.id === "number" && Array.isArray(u.sections) &&
      u.sections.every(function (s) { return Array.isArray(s.questions); });
  }

  MQ.units = function () {
    return (window.GAME_DATA ? window.GAME_DATA.units : [])
      .filter(validUnit)
      .sort(function (a, b) { return a.id - b.id; });
  };
  MQ.unit = function (id) {
    return MQ.units().find(function (u) { return u.id === Number(id); });
  };

  function loadScript(src) {
    return new Promise(function (resolve) {
      const s = document.createElement("script");
      s.src = src;
      s.onload = function () { resolve(true); };
      s.onerror = function () { console.warn("MathQuest: data file not found", src); resolve(false); };
      document.head.appendChild(s);
    });
  }

  // Data files to load. With a manifest (tools/build_manifest.js) only existing files are requested;
  // without one, every optional file is tried and missing ones are skipped.
  function dataFiles() {
    const base = "data/book" + MQ.book + "/";
    const m = window.GAME_MANIFEST;
    const all = [];
    for (let i = 1; i <= UNIT_COUNT; i++) all.push(i);
    const nn = function (i) { return i < 10 ? "0" + i : String(i); };
    const files = (m ? m.units : all).map(function (i) { return base + "unit" + nn(i) + ".js"; });
    ["tr", "wb", "hsg", "quests"].forEach(function (kind) {   // translations, Workbook, advanced problems, 🚀 quests
      (m ? m[kind] || [] : all).forEach(function (i) { files.push(base + kind + "/unit" + nn(i) + ".js"); });
    });
    if (!m || m.photos) files.push(base + "photos.js");     // real photos beside figures (MQ.photos)
    return files;
  }

  function boot() {
    document.title = MQ.BOOKS[MQ.book].title;
    loadScript("data/book" + MQ.book + "/manifest.js").then(function () {
      // units first so the order of GAME_DATA is stable, then the optional extras
      const files = dataFiles();
      return Promise.all(files.map(loadScript));
    }).then(function () {
      window.GAME_TR = window.GAME_TR || [];
      MQ.mergeWorkbook(window.GAME_DATA ? window.GAME_DATA.units : [], window.GAME_WB, window.GAME_TR);
      MQ.quests.mergeQuests(window.GAME_DATA ? window.GAME_DATA.units : [], window.GAME_QUESTS, window.GAME_TR);
      MQ.photos.attach(window.GAME_DATA ? window.GAME_DATA.units : [], window.GAME_PHOTOS);
      document.getElementById("loading").remove();
      MQ.ui.startTimer();
      document.body.setAttribute("data-book", MQ.book);
      document.documentElement.lang = MQ.i18n.uiLang();
      if (!MQ.state.get().profile) MQ.ui.go("welcome");
      else MQ.ui.go(MQ.bookChosen ? "map" : "books");
    });
  }

  window.addEventListener("error", function (e) {
    if (MQ.ui && MQ.ui.toast) MQ.ui.toast("⚠ " + e.message, "warn");
  });

  document.addEventListener("DOMContentLoaded", boot);
})();
