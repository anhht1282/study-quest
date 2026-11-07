// Step-by-step biology labs of Science 7: a stained slide of cheek cells (1.2) and growing microorganisms from the
// air on agar (7.1). Steps follow the book's methods; how the cells and colonies look is a drawn model.
(function () {
  const L = MQ.labs;
  const f1 = function (x) { return Math.round(x * 10) / 10; };
  const frac = function (x) { return x - Math.floor(x); };

  // cotton bud lying along angle deg with one tip at (x, y)
  function bud(x, y, deg, dirty) {
    const a = deg * Math.PI / 180, ex = x + Math.cos(a) * 90, ey = y + Math.sin(a) * 90;
    return "<line x1='" + f1(x) + "' y1='" + f1(y) + "' x2='" + f1(ex) + "' y2='" + f1(ey) + "' stroke='#e9ecef' stroke-width='4' stroke-linecap='round'/>" +
      "<line x1='" + f1(x) + "' y1='" + f1(y) + "' x2='" + f1(ex) + "' y2='" + f1(ey) + "' stroke='#adb5bd' stroke-width='0.8'/>" +
      "<ellipse cx='" + f1(x) + "' cy='" + f1(y) + "' rx='8' ry='5' transform='rotate(" + deg + " " + f1(x) + " " + f1(y) + ")' fill='#ffffff' stroke='#ced4da'/>" +
      (dirty ? "<ellipse cx='" + f1(x) + "' cy='" + f1(y) + "' rx='5' ry='3' transform='rotate(" + deg + " " + f1(x) + " " + f1(y) + ")' fill='#ffd8a8' fill-opacity='0.8' stroke='none'/>" : "");
  }
  // one flat cheek cell: an irregular rounded shape with a nucleus
  function cell(cx, cy, r, seed) {
    let d = "";
    for (let k = 0; k < 7; k++) {
      const a = k / 7 * Math.PI * 2, rr = r * (0.8 + frac(seed * 0.37 + k * 0.61) * 0.35);
      d += (k ? " L" : "M") + f1(cx + Math.cos(a) * rr) + " " + f1(cy + Math.sin(a) * rr * 0.85);
    }
    return "<path d='" + d + " Z' fill='#a5d8ff' fill-opacity='0.55' stroke='#1971c2' stroke-width='1.1' stroke-linejoin='round'/>" +
      "<ellipse cx='" + f1(cx + (frac(seed * 0.7) - 0.5) * r * 0.4) + "' cy='" + f1(cy + (frac(seed * 0.3) - 0.5) * r * 0.3) + "' rx='" + f1(r * 0.2) + "' ry='" + f1(r * 0.16) + "' fill='#1864ab' stroke='none'/>";
  }

  // ---------- 1.2 cheek cells stained with methylene blue ----------
  L.define("lab-cheek", {
    title: "exp.cheek.title", intro: "exp.cheek.intro", safety: "exp.cheek.safety", view: "20 20 440 230",
    steps: [
      { ask: "exp.cheek.s1", act: "exp.cheek.a1", say: "exp.cheek.d1", dur: 2.4 },
      { ask: "exp.cheek.s2", act: "exp.cheek.a2", say: "exp.cheek.d2", dur: 2.2 },
      { ask: "exp.cheek.s3", act: "exp.cheek.a3", say: "exp.cheek.d3", dur: 1.8 },
      { ask: "exp.cheek.s4", act: "exp.cheek.a4", say: "exp.cheek.d4", dur: 2.2 },
      { ask: "exp.cheek.s5", act: "exp.cheek.a5", say: "exp.cheek.d5", dur: 2.6,
        predict: { q: "exp.cheek.p", opts: ["exp.cheek.p0", "exp.cheek.p1", "exp.cheek.p2"], ans: 1 } }
    ],
    draw: function (K, i, p) {
      const SX = 320, SY = 170;   // slide centre
      let s = "";
      // a face with the mouth open; the bud goes in to the inside of the cheek
      s += "<circle cx='110' cy='100' r='58' fill='url(#" + K.P + "skin)' stroke='#b07a57' stroke-width='1.3'/>" +
        "<path d='M64 70 Q78 40 110 40 Q142 40 156 70 Q140 52 110 52 Q80 52 64 70 Z' fill='#5c3d2e' stroke='none'/>" +
        "<circle cx='90' cy='88' r='4.5' fill='#343a40' stroke='none'/><circle cx='130' cy='88' r='4.5' fill='#343a40' stroke='none'/>" +
        "<ellipse cx='110' cy='126' rx='20' ry='13' fill='#862e2e' stroke='#5c1f1f'/><path d='M94 132 Q110 140 126 132' stroke='#ffc9c9' stroke-width='4' stroke-linecap='round'/>" +
        K.say(110, 178, "exp.cheek.cheek", { size: 11 });
      // slide on the bench
      s += "<rect x='" + (SX - 85) + "' y='" + (SY - 14) + "' width='170' height='28' rx='2' fill='url(#" + K.P + "glass)' stroke='#5f8fa6'/>";
      const smear = i < 1 ? 0 : i === 1 ? K.seg(p, 0.3, 0.9) : 1;
      if (smear > 0) s += "<ellipse cx='" + SX + "' cy='" + SY + "' rx='" + f1(30 * smear) + "' ry='6' fill='#fff4e6' fill-opacity='0.7' stroke='none'/>";
      const stain = i < 2 ? 0 : i === 2 ? K.seg(p, 0.55, 0.9) : 1;
      const spread = i < 3 ? 0 : i === 3 ? K.seg(p, 0.5, 1) : 1;
      if (stain > 0) s += "<ellipse cx='" + SX + "' cy='" + SY + "' rx='" + f1(10 + 18 * spread) + "' ry='" + f1(6 + 3 * spread) + "' fill='#1c7ed6' fill-opacity='" + f1(stain * 6) / 10 + "' stroke='none'/>";
      // cover slip lowered from one edge (so no air bubbles are trapped)
      if (i >= 3) {
        const ang = i === 3 ? 40 * (1 - K.seg(p, 0.1, 0.8)) : 0;
        s += "<g transform='rotate(" + f1(-ang) + " " + (SX - 30) + " " + (SY - 2) + ")'><rect x='" + (SX - 30) + "' y='" + (SY - 4) + "' width='60' height='3' fill='#d0ebff' fill-opacity='0.8' stroke='#5f8fa6' stroke-width='0.8'/></g>";
        if (i === 3 && p < 0.85) s += "<line x1='" + f1(SX + 30 - 60 * (1 - Math.cos(ang * Math.PI / 180))) + "' y1='" + f1(SY - 4 - 60 * Math.sin(ang * Math.PI / 180)) + "' x2='" + (SX + 60) + "' y2='" + (SY - 70) + "' stroke='#868e96' stroke-width='2'/>";
      }
      s += K.say(SX, SY + 34, "exp.cheek.slide", { size: 11 });
      // the cotton bud: wipes the cheek, then the slide
      if (i === 0) {
        const w = Math.sin(K.seg(p, 0.15, 0.85) * Math.PI * 3) * 3;
        s += bud(K.lerp(200, 100, K.seg(p, 0, 0.15)), 124 + w, -20, p > 0.4);
      } else if (i === 1) {
        const x = K.lerp(100, SX - 30, K.seg(p, 0, 0.3)) + (p > 0.3 ? K.seg(p, 0.3, 0.9) * 60 : 0);
        s += bud(x, p < 0.3 ? K.lerp(124, SY - 6, K.seg(p, 0, 0.3)) : SY - 6, -35, true);
      }
      if (i === 2) {
        s += K.dropper(SX, SY - 40, K.seg(p, 0.15, 0.45), "#1c7ed6");
        if (p > 0.2 && p < 0.6) s += K.drop(SX, K.lerp(SY - 30, SY - 4, K.seg(p, 0.2, 0.55)), "#1c7ed6");
      }
      // microscope view
      const zoom = i < 4 ? 0 : i === 4 ? K.seg(p, 0, 0.7) : 1;
      if (zoom > 0) {
        const R = 96 * zoom;
        s = "<g opacity='" + (1 - zoom * 0.75).toFixed(2) + "'>" + s + "</g>";
        s += "<g opacity='" + Math.min(1, zoom * 1.5).toFixed(2) + "'><circle cx='240' cy='128' r='" + f1(R + 6) + "' fill='#212529' stroke='none'/>" +
          "<circle cx='240' cy='128' r='" + f1(R) + "' fill='#f8f9fa' stroke='#495057' stroke-width='2'/>";
        [[205, 95, 1], [262, 92, 2], [292, 140, 3], [228, 150, 4], [180, 140, 5], [250, 196, 6]].forEach(function (c) {
          const dx = c[0] - 240, dy = c[1] - 128;
          if (Math.sqrt(dx * dx + dy * dy) < R - 22) s += cell(240 + dx, 128 + dy, 26 * zoom, c[2]);
        });
        s += "</g>";
        if (zoom > 0.8) s += K.say(350, 40, "exp.cheek.nucleus", { anchor: "start", size: 11, bold: true }) +
          "<line x1='348' y1='44' x2='275' y2='92' stroke='currentColor' stroke-width='1'/>" +
          K.say(350, 224, "exp.cheek.membrane", { anchor: "start", size: 11, bold: true }) +
          "<line x1='348' y1='220' x2='282' y2='198' stroke='currentColor' stroke-width='1'/>";
      }
      return s;
    }
  });

  // ---------- 7.1 growing microorganisms from the air ----------
  const COLONY = ["#fff3bf", "#ffe066", "#f8f9fa", "#ffd8a8", "#e9ecef", "#fcc2d7"];
  L.define("lab-agar", {
    title: "exp.agar.title", intro: "exp.agar.intro", safety: "exp.agar.safety", view: "40 14 400 236",
    steps: [
      { ask: "exp.agar.s1", act: "exp.agar.a1", say: "exp.agar.d1", dur: 3 },
      { ask: "exp.agar.s2", act: "exp.agar.a2", say: "exp.agar.d2", dur: 2 },
      { ask: "exp.agar.s3", act: "exp.agar.a3", say: "exp.agar.d3", dur: 1.8 },
      { ask: "exp.agar.s4", act: "exp.agar.a4", say: "exp.agar.d4", dur: 1.6 },
      { ask: "exp.agar.s5", act: "exp.agar.a5", say: "exp.agar.d5", dur: 4,
        predict: { q: "exp.agar.p", opts: ["exp.agar.p0", "exp.agar.p1", "exp.agar.p2"], ans: 1 } }
    ],
    draw: function (K, i, p) {
      const CX = 240, CY = 150;
      const open = i < 0 ? 0 : i === 0 ? K.seg(p, 0, 0.25) : i === 1 ? 1 - K.seg(p, 0, 0.5) : 0;
      const specks = i < 0 ? 0 : i === 0 ? K.seg(p, 0.25, 1) : 1;
      const tape = i < 1 ? 0 : i === 1 ? K.seg(p, 0.55, 1) : 1;
      const flip = i < 2 ? 0 : i === 2 ? K.seg(p, 0, 1) : 1;
      const name = i < 3 ? 0 : i === 3 ? K.seg(p, 0, 0.9) : 1;
      const grow = i < 4 ? 0 : i === 4 ? K.seg(p, 0.2, 1) : 1;
      // dish seen at a slant; flipping squeezes it through a vertical scale of cos(πt)
      const sy = Math.cos(flip * Math.PI);
      let d = "<ellipse cx='" + CX + "' cy='" + (CY + 10) + "' rx='112' ry='34' fill='url(#" + K.P + "glass)' stroke='#5f8fa6'/>" +
        "<ellipse cx='" + CX + "' cy='" + CY + "' rx='108' ry='31' fill='#ffec99' fill-opacity='0.75' stroke='#e6a700' stroke-width='0.8'/>";
      for (let j = 0; j < 16; j++) {
        if (j / 16 >= specks) continue;
        const a = frac(j * 0.618) * Math.PI * 2, r = Math.sqrt(frac(j * 0.377)) * 0.85;
        const x = CX + Math.cos(a) * 100 * r, y = CY + Math.sin(a) * 28 * r;
        const fall = i === 0 ? K.clamp((specks - j / 16) * 4) : 1;
        d += "<circle cx='" + f1(x) + "' cy='" + f1(K.lerp(30, y, fall)) + "' r='1.3' fill='#868e96' stroke='none'/>";
      }
      for (let j = 0; j < 14; j++) {
        if (grow <= 0) break;
        const a = frac(j * 0.618) * Math.PI * 2, r = Math.sqrt(frac(j * 0.377)) * 0.85;
        const x = CX + Math.cos(a) * 100 * r, y = CY + Math.sin(a) * 28 * r, rr = (3 + frac(j * 0.71) * 7) * K.clamp(grow * 1.4 - frac(j * 0.29) * 0.4);
        if (rr > 0) d += "<ellipse cx='" + f1(x) + "' cy='" + f1(y) + "' rx='" + f1(rr) + "' ry='" + f1(rr * 0.3) + "' fill='" + COLONY[j % COLONY.length] + "' stroke='#adb5bd' stroke-width='0.6'/>";
      }
      if (tape > 0) d += "<rect x='" + (CX - 118) + "' y='" + (CY - 6) + "' width='18' height='" + f1(22 * tape) + "' fill='#ffe066' fill-opacity='0.6' stroke='#e6a700' stroke-width='0.6'/>" +
        "<rect x='" + (CX + 100) + "' y='" + (CY - 6) + "' width='18' height='" + f1(22 * tape) + "' fill='#ffe066' fill-opacity='0.6' stroke='#e6a700' stroke-width='0.6'/>";
      // lid: lifted and moved aside while open
      const lx = CX + 150 * open, ly = CY - 6 - 40 * open;
      d += "<ellipse cx='" + f1(lx) + "' cy='" + f1(ly) + "' rx='116' ry='35' fill='url(#" + K.P + "glass)' fill-opacity='0.6' stroke='#5f8fa6' stroke-width='1.2'/>";
      let s = "<g transform='translate(0 " + CY + ") scale(1 " + f1(sy * 100) / 100 + ") translate(0 " + (-CY) + ")'>" + d + "</g>";
      if (name > 0) s += "<text x='" + CX + "' y='" + (CY + 4) + "' text-anchor='middle' font-size='14' font-style='italic' fill='#1971c2' stroke='none' opacity='" + name.toFixed(2) + "'>" + K.t("exp.agar.label") + "</text>";
      if (i === 0 && p > 0.25) s += K.say(CX, 40, "exp.agar.wait", { bold: true, size: 12 });
      // a few days later: seen from above, through the base, the spots (colonies) grow
      const top = i < 4 ? 0 : i === 4 ? K.seg(p, 0, 0.25) : 1;
      if (top > 0) {
        s = "<g opacity='" + (1 - top * 0.85).toFixed(2) + "'>" + s + "</g>";
        let v = "<circle cx='" + CX + "' cy='128' r='86' fill='url(#" + K.P + "glass)' stroke='#5f8fa6' stroke-width='1.5'/><circle cx='" + CX + "' cy='128' r='80' fill='#ffec99' fill-opacity='0.8' stroke='#e6a700'/>";
        for (let j = 0; j < 16; j++) {
          const a = frac(j * 0.618) * Math.PI * 2, rr0 = Math.sqrt(frac(j * 0.377)) * 64;
          const x = CX + Math.cos(a) * rr0, y = 128 + Math.sin(a) * rr0;
          const rr = (4 + frac(j * 0.71) * 10) * K.clamp(grow * 1.5 - frac(j * 0.29) * 0.5);
          if (rr <= 0) continue;
          v += "<circle cx='" + f1(x) + "' cy='" + f1(y) + "' r='" + f1(rr) + "' fill='" + COLONY[j % COLONY.length] + "' stroke='#868e96' stroke-width='0.8'/>";
          if (j % 5 === 0) for (let k = 0; k < 10; k++) {   // a fuzzy fungus colony
            const b = k / 10 * Math.PI * 2;
            v += "<line x1='" + f1(x + Math.cos(b) * rr) + "' y1='" + f1(y + Math.sin(b) * rr) + "' x2='" + f1(x + Math.cos(b) * rr * 1.4) + "' y2='" + f1(y + Math.sin(b) * rr * 1.4) + "' stroke='#adb5bd' stroke-width='0.8'/>";
          }
        }
        s += "<g opacity='" + top.toFixed(2) + "'>" + v + "</g>";
      }
      if (i >= 4) s += K.say(CX, 30, "exp.agar.days", { bold: true, size: 12, op: K.seg(p, 0, 0.2) });
      if (grow > 0.8) s += K.say(CX, 236, "exp.agar.colonies", { bold: true, size: 12, color: "#e8590c" });
      return s;
    }
  });
})();
