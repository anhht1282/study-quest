// More step-by-step chemistry labs of Science 7: iron and sulfur as a mixture and as a compound (2.7), making an
// indicator from red cabbage (5.6) and testing the pH of soil (8.2). Steps follow the book's methods; the colours,
// timings and the soil's pH are examples (models), said so in the explanations.
(function () {
  const L = MQ.labs;
  const f1 = function (x) { return Math.round(x * 10) / 10; };
  const frac = function (x) { return x - Math.floor(x); };
  // universal indicator colours for pH 1..14 (red → orange → yellow → green → blue → purple)
  const UI = ["#c92a2a", "#e03131", "#f76707", "#fd7e14", "#fab005", "#fcc419", "#40c057", "#20c997", "#15aabf", "#1c7ed6", "#3b5bdb", "#5f3dc4", "#7048e8", "#862e9c"];

  // U-shaped magnet with its poles at y, centred on x
  function magnet(x, y) {
    return "<path d='M" + (x - 22) + " " + y + " L" + (x - 22) + " " + (y - 34) + " A22 22 0 0 1 " + (x + 22) + " " + (y - 34) + " L" + (x + 22) + " " + y +
      " L" + (x + 10) + " " + y + " L" + (x + 10) + " " + (y - 34) + " A10 10 0 0 0 " + (x - 10) + " " + (y - 34) + " L" + (x - 10) + " " + y + " Z' fill='#e03131' stroke='#a61e2d'/>" +
      "<rect x='" + (x - 22) + "' y='" + (y - 10) + "' width='12' height='10' fill='#dee2e6' stroke='#868e96'/><rect x='" + (x + 10) + "' y='" + (y - 10) +
      "' width='12' height='10' fill='#dee2e6' stroke='#868e96'/>";
  }

  // ---------- 2.7 iron + sulfur: mixture, then compound ----------
  // grain j of a kind (0 iron, 1 sulfur): layered position, mixed position (inside the beaker)
  function grain(j, kind, mix) {
    const x0 = 106 + frac(j * 0.618 + kind * 0.3) * 68;
    const yl = kind === 0 ? 190 - frac(j * 0.41) * 8 : 180 - frac(j * 0.53) * 8;
    const ym = 190 - frac(j * 0.71 + kind * 0.5) * 18;
    return [x0, yl + (ym - yl) * mix];
  }
  L.define("lab-fes", {
    title: "exp.fes.title", intro: "exp.fes.intro", safety: "exp.fes.safety", view: "60 22 380 232",
    steps: [
      { ask: "exp.fes.s1", act: "exp.fes.a1", say: "exp.fes.d1", dur: 1.6 },
      { ask: "exp.fes.s2", act: "exp.fes.a2", say: "exp.fes.d2", dur: 1.6 },
      { ask: "exp.fes.s3", act: "exp.fes.a3", say: "exp.fes.d3", dur: 2 },
      { ask: "exp.fes.s4", act: "exp.fes.a4", say: "exp.fes.d4", dur: 2.4,
        predict: { q: "exp.fes.p1", opts: ["exp.fes.p1a", "exp.fes.p1b", "exp.fes.p1c"], ans: 1 } },
      { ask: "exp.fes.s5", act: "exp.fes.a5", say: "exp.fes.d5", dur: 3.4 },
      { ask: "exp.fes.s6", act: "exp.fes.a6", say: "exp.fes.d6", dur: 2.4,
        predict: { q: "exp.fes.p2", opts: ["exp.fes.p2a", "exp.fes.p2b"], ans: 1 } }
    ],
    draw: function (K, i, p) {
      const iron = i < 0 ? 0 : i === 0 ? p : 1, sul = i < 1 ? 0 : i === 1 ? p : 1;
      const mix = i < 2 ? 0 : i === 2 ? K.seg(p, 0.1, 0.9) : 1;
      const pull = i < 3 ? 0 : i === 3 ? K.seg(p, 0.45, 0.85) : 1;
      const mag1 = i < 3 ? 0 : i === 3 ? K.seg(p, 0, 0.4) : 1;
      const tube = i < 4 ? 0 : i === 4 ? K.seg(p, 0, 0.15) : 1;
      const heat = i < 4 ? 0 : i === 4 ? (p < 0.85 ? K.seg(p, 0.1, 0.25) : 1 - K.seg(p, 0.85, 1)) : 0;
      const glow = i < 4 ? 0 : i === 4 ? K.seg(p, 0.35, 0.75) * (1 - K.seg(p, 0.85, 1) * 0.8) : 0;
      const fes = i < 4 ? 0 : i === 4 ? K.seg(p, 0.55, 0.9) : 1;
      const mag2 = i < 5 ? 0 : i === 5 ? K.seg(p, 0, 0.5) : 1;
      let s = K.beaker(140, 200, 90, 80, {});
      const MX = 140, MY = K.lerp(40, 150, mag1);
      for (let j = 0; j < 22; j++) {
        if (j / 22 < sul) {
          const g = grain(j, 1, mix), d = K.clamp(sul * 1.4 - j / 22 * 0.4);
          s += "<circle cx='" + f1(g[0]) + "' cy='" + f1(K.lerp(40, g[1], d)) + "' r='2.6' fill='#fcc419' stroke='#e6a700' stroke-width='0.6'/>";
        }
        if (j / 22 < iron) {
          const g = grain(j, 0, mix), d = K.clamp(iron * 1.4 - j / 22 * 0.4);
          // pulled iron gathers under the two poles of the magnet
          const px = MX + (j % 2 ? 16 : -16) + (frac(j * 0.37) - 0.5) * 10, py = MY + 2 + frac(j * 0.59) * 8;
          const x = K.lerp(g[0], px, pull), y = K.lerp(K.lerp(40, g[1], d), py, pull);
          s += "<path d='M" + f1(x - 2.5) + " " + f1(y) + " l2 -2 l3 1 l-1 2.5 Z' fill='#495057' stroke='#212529' stroke-width='0.5'/>";
        }
      }
      if (i === 2) {
        const a = Math.sin(p * Math.PI * 8) * 22;
        s += "<line x1='" + f1(140 + a) + "' y1='192' x2='" + f1(140 + a * 0.3) + "' y2='100' stroke='#a9cfe0' stroke-width='4' stroke-linecap='round'/>";
      }
      if (mag1 > 0) s += magnet(MX, MY);
      s += K.say(140, 222, mix > 0.5 ? "exp.fes.mixture" : "exp.fes.beaker", { size: 11 });
      // right: boiling tube over a Bunsen burner
      if (tube > 0) {
        const X = 350;
        s += "<g opacity='" + tube.toFixed(2) + "'>" + K.mat(300, 400, 240) + K.bunsen(X, 240, heat);
        s += "<rect x='" + (X + 14) + "' y='70' width='60' height='6' rx='2' fill='" + "url(#" + K.P + "metal)" + "' stroke='#5c636a'/>";
        s += K.tube(X, 40, 92, { w: 26 });
        for (let j = 0; j < 14; j++) {
          const gx = X - 9 + frac(j * 0.618) * 18, gy = 126 - frac(j * 0.41) * 18;
          s += "<circle cx='" + f1(gx) + "' cy='" + f1(gy) + "' r='2.3' fill='" + (j % 2 ? "#fcc419" : "#495057") + "' opacity='" + (1 - fes).toFixed(2) + "' stroke='none'/>";
        }
        s += "<path d='M" + (X - 11) + " 108 L" + (X - 11) + " 119 A11 11 0 0 0 " + (X + 11) + " 119 L" + (X + 11) + " 108 Z' fill='#343a40' opacity='" + fes.toFixed(2) + "' stroke='none'/>";
        if (glow > 0) s += "<path d='M" + (X - 11) + " 108 L" + (X - 11) + " 119 A11 11 0 0 0 " + (X + 11) + " 119 L" + (X + 11) + " 108 Z' fill='#ff6b00' opacity='" + (glow * 0.9).toFixed(2) + "' stroke='none'/>" +
          K.flash(X, 118, 22, glow * 0.7);
        s += "</g>";
        if (fes > 0.7) s += K.say(X - 20, 124, "exp.fes.fes", { anchor: "end", bold: true, size: 11, op: (fes - 0.7) / 0.3 });
        if (mag2 > 0) s += magnet(K.lerp(470, X + 44, mag2), 142);
        if (mag2 >= 1 && i === 5) s += K.say(X - 10, 34, "exp.fes.nopull", { bold: true, size: 11, color: "#e8590c" });
      }
      return s;
    }
  });

  // ---------- 5.6 indicator from red cabbage ----------
  const CAB = "#7048e8", LEMON = "#e64980", SOAP = "#2f9e44";
  L.define("lab-cabbage", {
    title: "exp.cab.title", intro: "exp.cab.intro", safety: "exp.cab.safety", view: "30 18 430 244",
    steps: [
      { ask: "exp.cab.s1", act: "exp.cab.a1", say: "exp.cab.d1", dur: 1.6 },
      { ask: "exp.cab.s2", act: "exp.cab.a2", say: "exp.cab.d2", dur: 3 },
      { ask: "exp.cab.s3", act: "exp.cab.a3", say: "exp.cab.d3", dur: 3 },
      { ask: "exp.cab.s4", act: "exp.cab.a4", say: "exp.cab.d4", dur: 2,
        predict: { q: "exp.cab.p1", opts: ["exp.cab.pink", "exp.cab.purple", "exp.cab.green"], ans: 0 } },
      { ask: "exp.cab.s5", act: "exp.cab.a5", say: "exp.cab.d5", dur: 2 },
      { ask: "exp.cab.s6", act: "exp.cab.a6", say: "exp.cab.d6", dur: 2,
        predict: { q: "exp.cab.p2", opts: ["exp.cab.pink", "exp.cab.purple", "exp.cab.green"], ans: 2 } }
    ],
    draw: function (K, i, p) {
      const cut = i < 0 ? 0 : i === 0 ? p : 1;
      const grind = i < 1 ? 0 : i === 1 ? K.seg(p, 0.25, 1) : 1;
      const T = [280, 340, 400];
      const fills = T.map(function (x, n) { return i < 2 ? 0 : i === 2 ? K.seg(p, n / 3 + 0.12, (n + 1) / 3) : 1; });
      const tints = [i < 3 ? 0 : i === 3 ? K.seg(p, 0.4, 0.9) : 1, 0, i < 5 ? 0 : i === 5 ? K.seg(p, 0.4, 0.9) : 1];
      // mortar with the cabbage
      let s = "<path d='M60 150 Q60 205 110 205 Q160 205 160 150 Z' fill='url(#" + K.P + "mat)' stroke='#7c6d55'/><ellipse cx='110' cy='150' rx='50' ry='9' fill='#c9b99d' stroke='#7c6d55'/>";
      if (grind > 0) s += "<ellipse cx='110' cy='151' rx='" + f1(40 * grind) + "' ry='" + f1(6 * grind) + "' fill='" + CAB + "' fill-opacity='0.75' stroke='none'/>";
      for (let j = 0; j < 9; j++) {
        if (j / 9 >= cut) continue;
        const d = K.clamp(cut * 1.5 - j / 9 * 0.5), sz = 6 * (1 - grind * 0.7);
        const x = 80 + frac(j * 0.618) * 60, y = K.lerp(40, 148 - frac(j * 0.37) * 4, d);
        s += "<path d='M" + f1(x) + " " + f1(y) + " q" + f1(sz) + " " + f1(-sz) + " " + f1(sz * 2) + " 0 q" + f1(-sz * 0.4) + " " + f1(sz * 0.8) + " " + f1(-sz * 2) + " 0 Z' fill='#9c36b5' stroke='#5f3dc4' stroke-width='0.6'/>";
      }
      if (i === 1) {
        if (p < 0.3) s += K.dropper(110, 110, K.seg(p, 0.05, 0.25), "#f1f3f5") + (p > 0.15 ? K.drop(110, K.lerp(118, 146, K.seg(p, 0.15, 0.3)), "#e7f5ff") : "");
        else {
          const a = (p - 0.3) * Math.PI * 10;
          s += "<line x1='" + f1(110 + Math.cos(a) * 18) + "' y1='" + f1(150 + Math.sin(a) * 3) + "' x2='" + f1(150 + Math.cos(a) * 8) + "' y2='70' stroke='url(#" + K.P + "wood)' stroke-width='9' stroke-linecap='round'/>";
        }
      }
      if (i === 1 && p < 0.6) s += K.warn(40, 40, K.t("exp.cab.fire"));
      s += K.say(110, 252, "exp.cab.mortar", { size: 11 });
      // three tubes of indicator
      s += K.rack(250, 430, 175);
      T.forEach(function (x, n) {
        s += K.tube(x, 80, 130, { fill: fills[n] * 0.35, color: CAB, tint: [n === 0 ? LEMON : SOAP, tints[n]] });
        if (tints[n] > 0 || (n === 1 && i >= 4)) s += K.say(x, 252, ["exp.cab.lemon", "exp.cab.water", "exp.cab.soap"][n], { size: 11 });
      });
      if (i === 2) {
        const n = Math.min(2, Math.floor(p * 3)), q = p * 3 - n;
        const x = K.lerp(110, T[n], K.seg(q, 0, 0.5)), y = K.lerp(140, 70, Math.sin(Math.min(1, q * 2) * Math.PI) * 0.8 + (q > 0.5 ? 0 : 0));
        s += K.dropper(x, q > 0.5 ? 72 : y, K.seg(q, 0.6, 0.9), q < 0.6 ? CAB : null);
      }
      // adding lemon juice / water / soap solution with a dropper
      const add = i === 3 ? [0, "#ffe066"] : i === 4 ? [1, "#d0ebff"] : i === 5 ? [2, "#e7f5ff"] : null;
      if (add && p < 0.85) {
        s += K.dropper(T[add[0]], 74, K.seg(p, 0.1, 0.4), add[1]);
        if (p > 0.15 && p < 0.6) s += K.drop(T[add[0]], K.lerp(84, 168, K.seg(p, 0.15, 0.5)), add[1]);
      }
      if (i >= 5 && tints[2] > 0.8) s += K.say(340, 40, "exp.cab.result", { bold: true, size: 12 });
      return s;
    }
  });

  // ---------- 8.2 pH of a soil sample ----------
  const SOIL_PH = 6;   // example sample: a slightly acidic soil
  L.define("lab-soil", {
    title: "exp.soil.title", intro: "exp.soil.intro", safety: "exp.soil.safety", view: "40 14 420 246",
    steps: [
      { ask: "exp.soil.s1", act: "exp.soil.a1", say: "exp.soil.d1", dur: 2.6 },
      { ask: "exp.soil.s2", act: "exp.soil.a2", say: "exp.soil.d2", dur: 1.8 },
      { ask: "exp.soil.s3", act: "exp.soil.a3", say: "exp.soil.d3", dur: 3.6 },
      { ask: "exp.soil.s4", act: "exp.soil.a4", say: "exp.soil.d4", dur: 2,
        predict: { q: "exp.soil.p", opts: ["exp.soil.p0", "exp.soil.p1", "exp.soil.p2"], ans: 0 } },
      { ask: "exp.soil.s5", act: "exp.soil.a5", say: "exp.soil.d5", dur: 1.6 }
    ],
    draw: function (K, i, p) {
      const A = 140, B = 320;
      const soil = i < 0 ? 0 : i === 0 ? K.seg(p, 0, 0.4) : 1;
      const water = i < 0 ? 0 : i === 0 ? K.seg(p, 0.5, 0.95) : 1;
      const mud = i < 1 ? 0 : i === 1 ? K.seg(p, 0.1, 0.8) : 1;
      const out = i < 2 ? 0 : i === 2 ? K.seg(p, 0.25, 0.75) : 1;
      const filt = i < 2 ? 0 : i === 2 ? K.seg(p, 0.4, 1) : 1;
      const ind = i < 3 ? 0 : i === 3 ? K.seg(p, 0.4, 0.9) : 1;
      const chart = i < 4 ? 0 : i === 4 ? K.seg(p, 0, 0.7) : 1;
      let s = K.rack(90, 380, 180);
      // tube A: soil + water, shaken, then poured into the funnel
      const shake = i === 1 ? Math.sin(p * Math.PI * 10) * 14 * (1 - K.seg(p, 0.8, 1)) : 0;
      const lift = i === 2 ? K.seg(p, 0, 0.2) * (1 - K.seg(p, 0.85, 1)) : 0;
      const tx = K.lerp(0, B - A - 40, lift), ty = K.lerp(0, -70, lift), rot = shake + 75 * lift;
      let ta = K.tube(A, 70, 140, { fill: water * 0.45 * (1 - out * 0.85), color: "#a5d8ff", tint: ["#9c6644", mud * 0.85] });
      if (soil > 0) ta += "<path d='M" + (A - 10) + " 196 A10 10 0 0 0 " + (A + 10) + " 196 L" + (A + 10) + " " + f1(196 - 10 * soil * (1 - mud * 0.6)) + " L" + (A - 10) + " " + f1(196 - 10 * soil * (1 - mud * 0.6)) + " Z' fill='#7f5539' stroke='none'/>";
      s += "<g transform='translate(" + f1(tx) + " " + f1(ty) + ") rotate(" + f1(rot) + " " + A + " 140)'>" + ta + "</g>";
      if (i === 0 && p < 0.45) for (let j = 0; j < 6; j++) s += "<circle cx='" + (A - 6 + j * 2.4) + "' cy='" + f1(K.lerp(30, 192, K.clamp(soil * 1.3 - j * 0.05))) + "' r='2.2' fill='#7f5539' stroke='none'/>";
      if (i === 0) s += K.pour(A, 70, K.clamp((p - 0.4) / 0.6), K.t("exp.soil.water"), "#d0ebff");
      // tube B with funnel and filter paper
      s += K.tube(B, 110, 100, { fill: filt * 0.35, color: "#fff3bf", tint: [UI[SOIL_PH - 1], ind] });
      // the funnel is lifted away after filtering, so the indicator goes straight into the filtrate
      const fun = i < 3 ? 1 : i === 3 ? 1 - K.seg(p, 0, 0.12) : 0;
      if (fun > 0) {
        let f = "";
        f += "<path d='M" + (B - 36) + " 70 L" + (B + 36) + " 70 L" + (B + 4) + " 108 L" + (B + 4) + " 128 L" + (B - 4) + " 128 L" + (B - 4) + " 108 Z' fill='url(#" + K.P + "glass)' stroke='#5f8fa6' stroke-width='1.3'/>" +
        "<path d='M" + (B - 30) + " 72 L" + (B + 30) + " 72 L" + B + " 104 Z' fill='#f8f9fa' stroke='#ced4da'/>";
        if (out > 0) f += "<path d='M" + (B - 20) + " 82 L" + (B + 20) + " 82 L" + B + " 102 Z' fill='#7f5539' opacity='" + out.toFixed(2) + "' stroke='none'/>";
        s += "<g opacity='" + fun.toFixed(2) + "' transform='translate(0 " + f1((1 - fun) * -30) + ")'>" + f + "</g>";
      }
      if (i === 2 && p > 0.3 && p < 0.95) s += K.drop(B, K.lerp(132, 196, frac(p * 4)), "#ffe8a3");
      if (i === 2 && lift > 0.9 && p < 0.75) s += "<path d='M" + (B - 12) + " 40 L" + (B - 6) + " 76' stroke='#9c6644' stroke-width='3'/>";
      if (i === 3) {
        s += K.dropper(B, 96, K.seg(p, 0.1, 0.4), "#40c057");
        if (p > 0.15 && p < 0.6) s += K.drop(B, K.lerp(104, 180, K.seg(p, 0.15, 0.5)), "#40c057");
      }
      s += K.say(A, 252, "exp.soil.sample", { size: 11 }) + K.say(B, 252, "exp.soil.filtrate", { size: 11 });
      // pH colour chart with the reading
      if (chart > 0) {
        let c = "<g opacity='" + chart.toFixed(2) + "'>";
        UI.forEach(function (col, n) {
          c += "<rect x='" + (120 + n * 22) + "' y='26' width='20' height='16' rx='2' fill='" + col + "' stroke='none'/>" + K.label(130 + n * 22, 54, String(n + 1), { size: 10 });
        });
        c += "<path d='M" + (130 + (SOIL_PH - 1) * 22) + " 58 l-5 9 h10 Z' fill='currentColor' stroke='none'/>" + K.say(130 + (SOIL_PH - 1) * 22, 80, "exp.soil.read", { bold: true, size: 12 }) + "</g>";
        s += c;
      }
      return s;
    }
  });
})();
