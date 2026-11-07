// Offline play for the published game: registers sw.js (built by tools/build_sw.js) only on an https site,
// never on the local dev server, so editing the game on localhost is never served from an old cache.
window.MQ = window.MQ || {};
MQ.offline = (function () {
  /**
   * @param {{protocol: string, hostname: string}} loc
   * @returns {boolean} true when the page is served over https from a real host
   */
  function shouldRegister(loc) {
    return loc.protocol === "https:" && !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(loc.hostname);
  }

  function register() {
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator) || !shouldRegister(window.location)) return;
    navigator.serviceWorker.register("sw.js").catch(function (err) {
      if (window.console) console.warn("MathQuest: offline cache unavailable", err);
    });
  }

  if (typeof window.addEventListener === "function") window.addEventListener("load", register);
  return { shouldRegister: shouldRegister };
})();

if (typeof module !== "undefined") module.exports = MQ.offline;
