// Real photos shown next to a figure's diagram (Science 7). data/book<key>/photos.js sets
// window.GAME_PHOTOS = { "<unit>.<n>": [photo, ...] }, n = 1-based order of the figure in the unit
// (across sections). A photo is { src, w, h, cap, by, lic, licUrl, page }; cap is the figure's caption,
// kept so tests can prove a photo sits on the right figure.
window.MQ = window.MQ || {};
MQ.photos = (function () {
  const SOURCE = /^https:\/\/commons\.wikimedia\.org\//;

  /**
   * Adds figure.photos from the map. Returns how many figures got photos.
   * @param {Array<object>|null} units
   * @param {Object<string, Array<object>>|null} map
   * @returns {number}
   */
  function attach(units, map) {
    if (!units || !map) return 0;
    let count = 0;
    units.forEach(function (u) {
      let n = 0;
      (u.sections || []).forEach(function (sec) {
        if (!sec.figures) return;
        sec.figures = sec.figures.map(function (f) {
          n += 1;
          const list = map[u.id + "." + n];
          if (!list || !list.length) return f;
          count += 1;
          return Object.assign({}, f, { photos: list });
        });
      });
    });
    return count;
  }

  /**
   * Attribution line for a photo (author · licence · source); the link is kept only for Wikimedia Commons.
   * @param {{by?: string, lic?: string, page?: string}} p
   * @returns {{text: string, href: string|null}}
   */
  function credit(p) {
    const text = [p.by, p.lic, "Wikimedia Commons"].filter(Boolean).join(" · ");
    return { text: text, href: SOURCE.test(p.page || "") ? p.page : null };
  }

  const api = { attach: attach, credit: credit };
  if (typeof document === "undefined") return api;

  // Photos row: the picture(s) with their attribution, shown above the labelled diagram. alt is empty
  // because the figure's caption right below already describes the picture (no double reading).
  api.view = function (photos) {
    const h = MQ.ui.h;
    return h("div.fig-photos" + (photos.length > 1 ? ".multi" : ""), photos.map(function (p) {
      const c = credit(p);
      const img = h("img", { src: p.src, width: p.w, height: p.h, alt: "", loading: "lazy", decoding: "async" });
      const by = c.href ? h("a", { href: c.href, target: "_blank", rel: "noopener noreferrer" }, c.text) : c.text;
      return h("figure.fig-photo", [img, h("small.fig-credit", ["📷 ", by])]);
    }));
  };

  // "Nguồn ảnh" card for the Journey page: every photo's figure, author and licence (null without photos).
  api.creditsCard = function (map) {
    const keys = Object.keys(map || {});
    if (!keys.length) return null;
    const h = MQ.ui.h;
    const t = function (k, v) { return MQ.t(k, v); };
    const items = [];
    keys.forEach(function (key) {
      map[key].forEach(function (p) {
        const c = credit(p);
        items.push(h("li", [h("b", t("photos.fig", { n: key })), " " + p.cap + " — ",
          c.href ? h("a", { href: c.href, target: "_blank", rel: "noopener noreferrer" }, c.text) : c.text]));
      });
    });
    return h("details.card.photo-credits", [
      h("summary", [h("h3", "📷 " + t("photos.title", { n: items.length }))]),
      h("p.tiny", t("photos.note")),
      h("ul.tiny", items)
    ]);
  };
  return api;
})();

if (typeof module !== "undefined") module.exports = MQ.photos;
