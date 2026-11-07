// Drawing kit for the step-by-step lab animations (js/labs.js). Every helper returns SVG markup as a string, so
// scenes are pure functions of (step, progress, time) and can be tested in Node. Glass, metal and flames use the
// shaded style (soft gradient + same-hue outline); labels use currentColor so they read on light and dark cards.
// make(prefix, t) binds gradient ids to one mounted lab (unique prefix) and labels to the translator t.
window.MQ = window.MQ || {};
MQ.labKit = (function () {
  const clamp = function (p) { return p < 0 ? 0 : p > 1 ? 1 : p; };
  const ease = function (p) { p = clamp(p); return p * p * (3 - 2 * p); };
  // progress inside the part [a, b] of a step (eased, 0 before a, 1 after b)
  const seg = function (p, a, b) { return ease((p - a) / (b - a)); };
  const lerp = function (a, b, p) { return a + (b - a) * p; };
  const frac = function (x) { return x - Math.floor(x); };
  const f1 = function (x) { return Math.round(x * 10) / 10; };

  function make(P, t) {
    const K = { P: P, now: 0, t: t || function (k) { return k; }, ease: ease, seg: seg, lerp: lerp, clamp: clamp };
    const url = function (n) { return "url(#" + P + n + ")"; };
    // number with d decimals; Vietnamese uses a decimal comma
    K.num = function (x, d) {
      const v = (Math.round(x * Math.pow(10, d)) / Math.pow(10, d)).toFixed(d);
      return MQ.i18n && MQ.i18n.uiLang && MQ.i18n.uiLang() === "vi" ? v.replace(".", ",") : v;
    };

    K.defs = function () {
      const rad = function (n, a, b) {
        return "<radialGradient id='" + P + n + "' cx='0.38' cy='0.32' r='0.75'><stop offset='0' stop-color='" + a +
          "'/><stop offset='1' stop-color='" + b + "'/></radialGradient>";
      };
      const lin = function (n, stops) {
        return "<linearGradient id='" + P + n + "' x1='0' y1='0' x2='1' y2='0'>" + stops.map(function (s) {
          return "<stop offset='" + s[0] + "' stop-color='" + s[1] + "' stop-opacity='" + (s[2] == null ? 1 : s[2]) + "'/>";
        }).join("") + "</linearGradient>";
      };
      return "<defs>" +
        lin("glass", [[0, "#cfe8f3", 0.55], [0.35, "#ffffff", 0.25], [1, "#a9cfe0", 0.5]]) +
        lin("metal", [[0, "#7b8590"], [0.4, "#e3e8ec"], [1, "#6c757d"]]) +
        lin("wood", [[0, "#c58b4e"], [0.5, "#e6b47a"], [1, "#b07a40"]]) +
        rad("blue", "#c7e6ff", "#3b7ddd") + rad("yellow", "#fff3b0", "#f08c00") + rad("glow", "#ffffff", "#ffe8a3") +
        rad("skin", "#f6dcc4", "#d9a37f") + rad("mat", "#d8cbb5", "#9c8b70") +
        "<radialGradient id='" + P + "flash' cx='0.5' cy='0.5' r='0.5'><stop offset='0' stop-color='#ffffff'/>" +
        "<stop offset='0.45' stop-color='#fffbe6' stop-opacity='0.85'/><stop offset='1' stop-color='#fff3bf' stop-opacity='0'/></radialGradient>" +
        "</defs>";
    };

    // label: text in currentColor; o = { anchor, bold, size, color, op }. The text is escaped for SVG markup.
    K.label = function (x, y, text, o) {
      o = o || {};
      text = String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      return "<text x='" + f1(x) + "' y='" + f1(y) + "' text-anchor='" + (o.anchor || "middle") + "' font-size='" + (o.size || 12) +
        "'" + (o.bold ? " font-weight='bold'" : "") + " fill='" + (o.color || "currentColor") + "' stroke='none'" +
        (o.op != null ? " opacity='" + f1(o.op * 10) / 10 + "'" : "") + ">" + text + "</text>";
    };
    K.say = function (x, y, key, o) { return K.label(x, y, K.t(key), o); };

    // heat-proof mat from x1 to x2, top at y
    K.mat = function (x1, x2, y) {
      return "<rect x='" + x1 + "' y='" + y + "' width='" + (x2 - x1) + "' height='9' rx='2' fill='" + url("mat") + "' stroke='#7c6d55'/>";
    };

    // Bunsen burner standing on y (base); flame 0..1 (0 = off), blue roaring flame with a light inner cone
    K.bunsen = function (x, y, flame) {
      let s = "<rect x='" + (x - 30) + "' y='" + (y - 10) + "' width='60' height='10' rx='3' fill='" + url("metal") + "' stroke='#5c636a'/>" +
        "<rect x='" + (x - 7) + "' y='" + (y - 84) + "' width='14' height='76' fill='" + url("metal") + "' stroke='#5c636a'/>" +
        "<rect x='" + (x - 9) + "' y='" + (y - 40) + "' width='18' height='10' rx='2' fill='" + url("metal") + "' stroke='#5c636a'/>" +
        "<path d='M" + (x - 30) + " " + (y - 5) + " h-22' stroke='#e8590c' stroke-width='4' stroke-linecap='round'/>";
      if (flame > 0) {
        const fl = Math.sin(K.now * 23) * 2 + Math.sin(K.now * 37) * 1.4;
        const hgt = (54 + fl) * flame, top = y - 84;
        s += "<path d='M" + (x - 8) + " " + top + " C" + (x - 12) + " " + (top - hgt * 0.5) + " " + (x - 3) + " " + (top - hgt * 0.8) + " " + x + " " + f1(top - hgt) +
          " C" + (x + 3) + " " + (top - hgt * 0.8) + " " + (x + 12) + " " + (top - hgt * 0.5) + " " + (x + 8) + " " + top + " Z' fill='" + url("blue") +
          "' fill-opacity='0.85' stroke='#1c7ed6' stroke-width='1'/>" +
          "<path d='M" + (x - 4) + " " + top + " Q" + x + " " + f1(top - hgt * 0.55) + " " + (x + 4) + " " + top + " Z' fill='#e7f5ff' fill-opacity='0.9' stroke='none'/>";
      }
      return s;
    };

    // small yellow flame (candle, splint); size 0..1
    K.flame = function (x, y, size) {
      if (size <= 0) return "";
      const fl = Math.sin(K.now * 19) * 1.5;
      const hgt = (26 + fl) * size, w = 8 * size;
      return "<path d='M" + f1(x) + " " + f1(y - hgt) + " C" + f1(x + w) + " " + f1(y - hgt * 0.45) + " " + f1(x + w) + " " + f1(y) + " " + f1(x) + " " + f1(y) +
        " C" + f1(x - w) + " " + f1(y) + " " + f1(x - w) + " " + f1(y - hgt * 0.45) + " " + f1(x) + " " + f1(y - hgt) + " Z' fill='" + url("yellow") + "' stroke='#e8590c' stroke-width='0.8'/>";
    };

    // bright white light (burning magnesium, pop); a = 0..1
    K.flash = function (x, y, r, a) {
      if (a <= 0) return "";
      return "<circle cx='" + f1(x) + "' cy='" + f1(y) + "' r='" + f1(r) + "' fill='" + url("flash") + "' opacity='" + f1(a * 10) / 10 + "' stroke='none'/>";
    };

    // test tube: mouth at (x, top), length h; o = { fill 0..1, color, w, cloudy 0..1 }
    K.tube = function (x, top, h, o) {
      o = o || {};
      const w = o.w || 24, r = w / 2, l = x - r, rr = x + r, yb = top + h - r;
      let s = "";
      if (o.fill > 0) {
        const yl = Math.min(yb, top + h - o.fill * (h - 4));
        s += "<path d='M" + l + " " + f1(yl) + " L" + l + " " + yb + " A" + r + " " + r + " 0 0 0 " + rr + " " + yb + " L" + rr + " " + f1(yl) + " Z' fill='" +
          (o.color || "#74c0fc") + "' fill-opacity='0.55' stroke='none'/>";
        if (o.cloudy > 0) s += "<path d='M" + l + " " + f1(yl) + " L" + l + " " + yb + " A" + r + " " + r + " 0 0 0 " + rr + " " + yb + " L" + rr + " " + f1(yl) +
          " Z' fill='#f8f9fa' fill-opacity='" + f1(o.cloudy * 9) / 10 + "' stroke='none'/>";
        // milky: tiny white-grey specks hanging in the liquid
        if (o.cloudy > 0) for (let j = 0; j < 18; j++) {
          s += "<circle cx='" + f1(l + 3 + frac(j * 0.618) * (w - 6)) + "' cy='" + f1(yl + 3 + frac(j * 0.377) * (yb + r - yl - 6)) +
            "' r='1.1' fill='#adb5bd' opacity='" + f1(o.cloudy * 8) / 10 + "' stroke='none'/>";
        }
        if (o.tint && o.tint[1] > 0) s += "<path d='M" + l + " " + f1(yl) + " L" + l + " " + yb + " A" + r + " " + r + " 0 0 0 " + rr + " " + yb + " L" + rr + " " + f1(yl) +
          " Z' fill='" + o.tint[0] + "' fill-opacity='" + f1(o.tint[1] * 8) / 10 + "' stroke='none'/>";
        s += "<path d='M" + l + " " + f1(yl) + " L" + rr + " " + f1(yl) + "' stroke='" + (o.color || "#4dabf7") + "' stroke-width='1'/>";
      }
      s += "<path d='M" + (l - 2) + " " + top + " L" + l + " " + (top + 2) + " L" + l + " " + yb + " A" + r + " " + r + " 0 0 0 " + rr + " " + yb + " L" + rr + " " + (top + 2) +
        " L" + (rr + 2) + " " + top + "' fill='" + url("glass") + "' stroke='#5f8fa6' stroke-width='1.4'/>" +
        "<path d='M" + (l + 4) + " " + (top + 8) + " L" + (l + 4) + " " + (yb - 4) + "' stroke='#ffffff' stroke-opacity='0.7' stroke-width='2' stroke-linecap='round'/>";
      return s;
    };

    // beaker standing on y: width w, height h; o = { fill 0..1, color, cloudy }
    K.beaker = function (x, y, w, h, o) {
      o = o || {};
      const l = x - w / 2, r = x + w / 2, top = y - h;
      let s = "";
      if (o.fill > 0) {
        const yl = y - 3 - o.fill * (h - 10);
        s += "<rect x='" + (l + 2) + "' y='" + f1(yl) + "' width='" + (w - 4) + "' height='" + f1(y - 2 - yl) + "' fill='" + (o.color || "#74c0fc") + "' fill-opacity='0.5' stroke='none'/>";
        if (o.cloudy > 0) s += "<rect x='" + (l + 2) + "' y='" + f1(yl) + "' width='" + (w - 4) + "' height='" + f1(y - 2 - yl) + "' fill='#f1f3f5' fill-opacity='" + f1(o.cloudy * 9) / 10 + "' stroke='none'/>";
      }
      s += "<path d='M" + (l - 4) + " " + top + " L" + l + " " + (top + 4) + " L" + l + " " + (y - 4) + " Q" + l + " " + y + " " + (l + 4) + " " + y + " L" + (r - 4) + " " + y +
        " Q" + r + " " + y + " " + r + " " + (y - 4) + " L" + r + " " + top + "' fill='" + url("glass") + "' stroke='#5f8fa6' stroke-width='1.4'/>" +
        "<path d='M" + (l + 6) + " " + (top + 10) + " L" + (l + 6) + " " + (y - 10) + "' stroke='#ffffff' stroke-opacity='0.7' stroke-width='2.5' stroke-linecap='round'/>";
      return s;
    };

    // rising gas bubbles between y1 (bottom) and y2 (top) around x, width w; amount 0..1
    K.bubbles = function (x, y1, y2, w, amount, color) {
      const n = Math.round(14 * amount);
      let s = "";
      for (let j = 0; j < n; j++) {
        const ph = frac(j * 0.618 + K.now * (0.5 + frac(j * 0.29) * 0.6));
        const y = y1 - ph * (y1 - y2), cx = x + (frac(j * 0.37) - 0.5) * w + Math.sin(K.now * 3 + j) * 1.5;
        const r = 1.3 + frac(j * 0.73) * 1.9;
        s += "<circle cx='" + f1(cx) + "' cy='" + f1(y) + "' r='" + f1(r) + "' fill='#ffffff' fill-opacity='0.6' stroke='" + (color || "#4dabf7") +
          "' stroke-width='0.8' opacity='" + f1((1 - ph * 0.6) * 10) / 10 + "'/>";
      }
      return s;
    };

    // wooden splint with its tip at (x, y), pointing towards angle deg (0 = right); state "lit" | "glow" | "out" | "fresh"
    K.splint = function (x, y, len, deg, state) {
      const a = deg * Math.PI / 180, ex = x + Math.cos(a) * len, ey = y + Math.sin(a) * len;
      let s = "<line x1='" + f1(x) + "' y1='" + f1(y) + "' x2='" + f1(ex) + "' y2='" + f1(ey) + "' stroke='" + url("wood") + "' stroke-width='5' stroke-linecap='round'/>" +
        "<line x1='" + f1(x) + "' y1='" + f1(y) + "' x2='" + f1(ex) + "' y2='" + f1(ey) + "' stroke='#8a5a2b' stroke-width='0.7' stroke-opacity='0.6'/>";
      if (state !== "fresh") s += "<circle cx='" + f1(x) + "' cy='" + f1(y) + "' r='3' fill='" + (state === "glow" ? "#ff6b00" : "#343a40") + "' stroke='none'/>";
      if (state === "glow") s += "<circle cx='" + f1(x) + "' cy='" + f1(y) + "' r='" + f1(5 + Math.sin(K.now * 5)) + "' fill='#ff922b' fill-opacity='0.35' stroke='none'/>";
      if (state === "lit") s += K.flame(x, y + 2, 0.75);
      return s;
    };

    // a thumb seen from the side, pressing down at (x, y)
    K.thumb = function (x, y) {
      return "<path d='M" + (x - 16) + " " + y + " C" + (x - 18) + " " + (y - 18) + " " + (x + 6) + " " + (y - 26) + " " + (x + 30) + " " + (y - 22) +
        " L" + (x + 60) + " " + (y - 24) + " L" + (x + 60) + " " + (y - 4) + " L" + (x + 18) + " " + y + " Z' fill='" + url("skin") + "' stroke='#b07a57' stroke-width='1.2'/>" +
        "<path d='M" + (x - 10) + " " + (y - 12) + " q6 -8 16 -8' stroke='#b07a57' stroke-width='0.9' fill='none'/>";
    };

    // tongs holding something at (x, y), handles going up-right
    K.tongs = function (x, y) {
      return "<path d='M" + x + " " + (y - 2) + " L" + (x + 130) + " " + (y - 40) + " M" + x + " " + (y + 2) + " L" + (x + 130) + " " + (y - 30) +
        "' stroke='" + url("metal") + "' stroke-width='4' stroke-linecap='round'/>" +
        "<path d='M" + x + " " + (y - 2) + " L" + (x + 130) + " " + (y - 40) + " M" + x + " " + (y + 2) + " L" + (x + 130) + " " + (y - 30) +
        "' stroke='#5c636a' stroke-width='0.8'/>";
    };

    // falling drop of colour c at (x, y)
    K.drop = function (x, y, c) {
      return "<path d='M" + f1(x) + " " + f1(y - 7) + " C" + f1(x + 5) + " " + f1(y - 1) + " " + f1(x + 4) + " " + f1(y + 4) + " " + f1(x) + " " + f1(y + 4) +
        " C" + f1(x - 4) + " " + f1(y + 4) + " " + f1(x - 5) + " " + f1(y - 1) + " " + f1(x) + " " + f1(y - 7) + " Z' fill='" + c + "' stroke='none'/>";
    };

    // dropper pipette with its tip at (x, y); bulb squeezed 0..1
    K.dropper = function (x, y, squeeze, c) {
      const bw = 9 - 3 * (squeeze || 0);
      return "<path d='M" + (x - 2) + " " + y + " L" + (x - 4) + " " + (y - 40) + " L" + (x + 4) + " " + (y - 40) + " L" + (x + 2) + " " + y + " Z' fill='" + url("glass") + "' stroke='#5f8fa6'/>" +
        (c ? "<path d='M" + (x - 2) + " " + (y - 2) + " L" + (x - 3) + " " + (y - 18) + " L" + (x + 3) + " " + (y - 18) + " L" + (x + 2) + " " + (y - 2) + " Z' fill='" + c + "' fill-opacity='0.8' stroke='none'/>" : "") +
        "<ellipse cx='" + x + "' cy='" + (y - 50) + "' rx='" + f1(bw) + "' ry='12' fill='#e03131' fill-opacity='0.85' stroke='#a61e2d'/>";
    };

    // chemical bottle with a label, standing on y
    K.bottle = function (x, y, text, c) {
      return "<path d='M" + (x - 18) + " " + y + " L" + (x - 18) + " " + (y - 44) + " Q" + (x - 18) + " " + (y - 54) + " " + (x - 7) + " " + (y - 56) + " L" + (x - 7) + " " + (y - 66) +
        " L" + (x + 7) + " " + (y - 66) + " L" + (x + 7) + " " + (y - 56) + " Q" + (x + 18) + " " + (y - 54) + " " + (x + 18) + " " + (y - 44) + " L" + (x + 18) + " " + y + " Z' fill='" +
        (c || "#a5d8ff") + "' fill-opacity='0.45' stroke='#5f8fa6' stroke-width='1.3'/>" +
        "<rect x='" + (x - 9) + "' y='" + (y - 72) + "' width='18' height='7' rx='2' fill='#495057' stroke='none'/>" +
        "<rect x='" + (x - 14) + "' y='" + (y - 36) + "' width='28' height='18' rx='2' fill='#fff' stroke='#868e96' stroke-width='0.8'/>" +
        K.label(x, y - 23, text, { size: 9, color: "#212529" });
    };

    // starburst for a sudden event (the hydrogen pop); s = 0..1
    K.burst = function (x, y, s, text) {
      if (s <= 0) return "";
      let pts = "";
      for (let j = 0; j < 16; j++) {
        const r = (j % 2 ? 14 : 30) * s, a = j * Math.PI / 8;
        pts += f1(x + Math.cos(a) * r) + "," + f1(y + Math.sin(a) * r) + " ";
      }
      return "<polygon points='" + pts + "' fill='#ffe066' fill-opacity='0.9' stroke='#f08c00' stroke-width='1.2'/>" +
        K.label(x, y + 5, text, { bold: true, size: f1(10 + 6 * s), color: "#c92a2a" });
    };

    // test-tube rack: a shelf at y with two legs, from x1 to x2
    K.rack = function (x1, x2, y) {
      return "<rect x='" + x1 + "' y='" + y + "' width='" + (x2 - x1) + "' height='10' rx='2' fill='#e6b47a' stroke='#8a5a2b'/>" +
        "<rect x='" + (x1 + 6) + "' y='" + (y + 10) + "' width='8' height='50' fill='#c58b4e' stroke='#8a5a2b'/>" +
        "<rect x='" + (x2 - 14) + "' y='" + (y + 10) + "' width='8' height='50' fill='#c58b4e' stroke='#8a5a2b'/>";
    };

    // a labelled bottle tilting over a mouth at (x, top) while p is in the first 80% of a step, with a stream
    K.pour = function (x, top, p, text, c) {
      const tilt = seg(p, 0, 0.2) * (1 - seg(p, 0.65, 0.8));
      if (p >= 0.8) return "";
      return "<g transform='rotate(" + f1(-70 * tilt) + " " + (x + 30) + " " + (top - 18) + ")'>" + K.bottle(x + 50, top, text, c) + "</g>" +
        (tilt > 0.9 ? "<path d='M" + (x + 2) + " " + (top - 10) + " L" + x + " " + (top + 40) + "' stroke='" + c + "' stroke-width='3'/>" : "");
    };

    // safety sign (yellow triangle) with a message next to it
    K.warn = function (x, y, text, op) {
      return "<g opacity='" + f1((op == null ? 1 : op) * 10) / 10 + "'><path d='M" + x + " " + (y - 14) + " L" + (x + 9) + " " + (y + 3) + " L" + (x - 9) + " " + (y + 3) +
        " Z' fill='#ffd43b' stroke='#e67700' stroke-width='1.2'/>" + K.label(x, y + 1, "!", { bold: true, size: 11, color: "#212529" }) +
        K.label(x + 14, y, text, { anchor: "start", bold: true, size: 12, color: "#e8590c" }) + "</g>";
    };
    return K;
  }

  return { make: make, ease: ease, seg: seg, lerp: lerp };
})();

if (typeof module !== "undefined") module.exports = MQ.labKit;
