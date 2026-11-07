// Step-by-step energy labs of Science 7: heating cooking oil with a candle (3.6, "Energy from a candle") and a cup
// of hot tea cooling down (3.7, "Dissipation of energy"). The temperatures are a model of a typical result (oil rises
// about 2 °C a minute; tea cools quickly at first, then more slowly, towards room temperature), said so in the text.
(function () {
  const L = MQ.labs;
  const f1 = function (x) { return Math.round(x * 10) / 10; };

  // thermometer standing with its bulb at (x, y); t = temperature shown (°C), lo..hi is its scale
  function thermo(K, x, y, t, lo, hi) {
    const top = y - 120, h = 108 * K.clamp((t - lo) / (hi - lo));
    return "<rect x='" + (x - 5) + "' y='" + top + "' width='10' height='120' rx='5' fill='url(#" + K.P + "glass)' stroke='#5f8fa6'/>" +
      "<rect x='" + (x - 1.8) + "' y='" + f1(y - 6 - h) + "' width='3.6' height='" + f1(h + 2) + "' fill='#e03131' stroke='none'/>" +
      "<circle cx='" + x + "' cy='" + y + "' r='7' fill='#e03131' stroke='#a61e2d'/>";
  }
  // small line graph: box at (x, y) size w×h; pts [[min, °C]], axes 0..tMax and lo..hi; draw = 0..1 of the line
  function graph(K, x, y, w, h, pts, tMax, lo, hi, line, xKey, yKey) {
    const X = function (m) { return x + m / tMax * w; }, Y = function (c) { return y + h - (c - lo) / (hi - lo) * h; };
    let s = "<rect x='" + x + "' y='" + y + "' width='" + w + "' height='" + h + "' fill='currentColor' fill-opacity='0.04' stroke='none'/>" +
      "<path d='M" + x + " " + y + " L" + x + " " + (y + h) + " L" + (x + w) + " " + (y + h) + "' stroke='currentColor' stroke-width='1.2'/>" +
      K.label(x + w, y + h + 14, K.t(xKey), { anchor: "end", size: 10 }) + K.label(x - 4, y - 6, K.t(yKey), { anchor: "start", size: 10 }) +
      K.label(x - 4, y + 4, String(hi), { anchor: "end", size: 9 }) + K.label(x - 4, y + h, String(lo), { anchor: "end", size: 9 });
    pts.forEach(function (q) { s += "<circle cx='" + f1(X(q[0])) + "' cy='" + f1(Y(q[1])) + "' r='2.6' fill='#1c7ed6' stroke='none'/>"; });
    if (line > 0 && pts.length > 1) {
      const n = Math.max(2, Math.round(pts.length * line));
      s += "<polyline points='" + pts.slice(0, n).map(function (q) { return f1(X(q[0])) + "," + f1(Y(q[1])); }).join(" ") + "' stroke='#1c7ed6' stroke-width='2'/>";
    }
    return s;
  }
  // stopwatch face showing m minutes
  function watch(K, x, y, m) {
    const a = (m % 1) * Math.PI * 2 - Math.PI / 2;
    return "<circle cx='" + x + "' cy='" + y + "' r='16' fill='#f8f9fa' stroke='#495057' stroke-width='1.5'/><rect x='" + (x - 3) + "' y='" + (y - 22) + "' width='6' height='5' fill='#495057' stroke='none'/>" +
      "<line x1='" + x + "' y1='" + y + "' x2='" + f1(x + Math.cos(a) * 12) + "' y2='" + f1(y + Math.sin(a) * 12) + "' stroke='#e03131' stroke-width='1.5'/>" +
      K.label(x, y + 30, K.t("exp.en.min", { m: Math.floor(m) }), { size: 10, bold: true });
  }

  // ---------- 3.6 energy from a candle ----------
  const OIL0 = 22, RATE = 2, STOP = 5;          // °C at the start, °C per minute (model), minutes to +10 °C
  const oilAt = function (m) { return OIL0 + RATE * m; };
  L.define("lab-candle", {
    title: "exp.candle.title", intro: "exp.candle.intro", safety: "exp.candle.safety", view: "20 14 450 240",
    steps: [
      { ask: "exp.candle.s1", act: "exp.candle.a1", say: "exp.candle.d1", dur: 1.8 },
      { ask: "exp.candle.s2", act: "exp.candle.a2", say: "exp.candle.d2", dur: 1.6 },
      { ask: "exp.candle.s3", act: "exp.candle.a3", say: "exp.candle.d3", dur: 6,
        predict: { q: "exp.candle.p", opts: ["exp.candle.p0", "exp.candle.p1", "exp.candle.p2"], ans: 0 } },
      { ask: "exp.candle.s4", act: "exp.candle.a4", say: "exp.candle.d4", dur: 1.8 },
      { ask: "exp.candle.s5", act: "exp.candle.a5", say: "exp.candle.d5", dur: 2 }
    ],
    draw: function (K, i, p) {
      const BX = 140;
      const dip = i < 0 ? 0 : i === 0 ? K.seg(p, 0, 0.6) : 1;
      const lit = i < 1 ? 0 : i === 1 ? K.seg(p, 0.2, 0.6) : i === 3 ? 1 - K.seg(p, 0, 0.4) : i > 3 ? 0 : 1;
      const mins = i < 2 ? 0 : i === 2 ? STOP * p : STOP;
      const line = i < 4 ? 0 : i === 4 ? K.seg(p, 0, 0.9) : 1;
      // tripod and gauze over the candle, beaker of oil on top
      let s = K.mat(60, 220, 226) +
        "<path d='M90 226 L102 150 M190 226 L178 150' stroke='url(#" + K.P + "metal)' stroke-width='5' stroke-linecap='round'/>" +
        "<rect x='86' y='146' width='108' height='6' fill='#adb5bd' stroke='#495057'/><path d='M90 149 h100' stroke='#495057' stroke-dasharray='2 2'/>" +
        "";
      const wax = 196 + mins * 1.4;   // the candle gets shorter as the wax burns
      s += "<rect x='" + (BX - 9) + "' y='" + f1(wax) + "' width='18' height='" + f1(226 - wax) + "' rx='2' fill='#fff9db' stroke='#e6a700'/><line x1='" + BX + "' y1='" + f1(wax) + "' x2='" + BX + "' y2='" + f1(wax - 6) + "' stroke='#343a40' stroke-width='1.5'/>";
      s += K.flame(BX, wax - 4, lit);
      if (i === 3 && p > 0.3 && p < 0.9) s += "<path d='M" + BX + " " + f1(wax - 10) + " q-6 -10 0 -20 q6 -10 0 -20' stroke='#adb5bd' stroke-width='2' opacity='" + (1 - K.seg(p, 0.5, 0.9)).toFixed(2) + "'/>";
      s += K.beaker(BX, 146, 70, 64, { fill: 0.55, color: "#ffd43b" });
      // stirring rod (not the thermometer!)
      if (i === 2) s += "<line x1='" + f1(BX - 18 + Math.sin(p * 40) * 6) + "' y1='138' x2='" + f1(BX - 26 + Math.sin(p * 40) * 3) + "' y2='70' stroke='#a9cfe0' stroke-width='4' stroke-linecap='round'/>";
      s += thermo(K, BX + 16, K.lerp(40, 134, dip), oilAt(mins), 0, 60);
      if (dip > 0.9) s += K.label(BX + 30, 40, K.t("exp.en.temp", { t: K.num(oilAt(mins), 1) }), { anchor: "start", bold: true, size: 13 });
      if (i >= 1) s += watch(K, 250, 50, mins);
      // results: one point per minute, then the line graph
      const pts = [];
      for (let m = 0; m <= Math.floor(mins + 1e-9); m++) pts.push([m, oilAt(m)]);
      if (i >= 2) s += graph(K, 300, 70, 150, 120, pts, STOP, 20, 34, line, "exp.en.xmin", "exp.en.yoil");
      if (i >= 3) s += K.label(375, 228, K.t("exp.candle.rise"), { size: 11, bold: true, color: "#e8590c" });
      return s;
    }
  });

  // ---------- 3.7 a cup of hot tea cooling down ----------
  const ROOM = 25, TEA0 = 80, TAU = 14;           // °C room, °C at the start, minutes (model of cooling)
  const teaAt = function (m) { return ROOM + (TEA0 - ROOM) * Math.exp(-m / TAU); };
  L.define("lab-tea", {
    title: "exp.tea.title", intro: "exp.tea.intro", safety: "exp.tea.safety", view: "20 14 450 240",
    steps: [
      { ask: "exp.tea.s1", act: "exp.tea.a1", say: "exp.tea.d1", dur: 1.6 },
      { ask: "exp.tea.s2", act: "exp.tea.a2", say: "exp.tea.d2", dur: 6,
        predict: { q: "exp.tea.p1", opts: ["exp.tea.p1a", "exp.tea.p1b", "exp.tea.p1c"], ans: 0 } },
      { ask: "exp.tea.s3", act: "exp.tea.a3", say: "exp.tea.d3", dur: 4,
        predict: { q: "exp.tea.p2", opts: ["exp.tea.p2a", "exp.tea.p2b"], ans: 1 } },
      { ask: "exp.tea.s4", act: "exp.tea.a4", say: "exp.tea.d4", dur: 2.4 }
    ],
    draw: function (K, i, p) {
      const CX = 130;
      const dip = i < 0 ? 0 : i === 0 ? K.seg(p, 0, 0.6) : 1;
      let mins = 0, tMax = 10;
      if (i === 1) mins = 10 * p;
      if (i >= 2) { tMax = 60; mins = i === 2 ? 10 + 50 * K.seg(p, 0, 1) : 60; }
      const t = teaAt(mins);
      // the cup (a mug) with tea, steam getting weaker as it cools
      let s = "<path d='M80 110 L86 220 Q86 228 94 228 L166 228 Q174 228 174 220 L180 110 Z' fill='#f8f9fa' stroke='#868e96' stroke-width='1.4'/>" +
        "<path d='M180 130 q30 0 30 30 q0 30 -34 30' stroke='#868e96' stroke-width='6' stroke-linecap='round'/>" +
        "<ellipse cx='" + CX + "' cy='122' rx='47' ry='7' fill='#a0522d' fill-opacity='0.85' stroke='none'/>";
      const steam = K.clamp((t - 35) / 45);
      for (let k = 0; k < 3; k++) {
        const sx = CX - 20 + k * 20, ph = Math.sin(K.now * 2 + k) * 4;
        if (steam > 0.05) s += "<path d='M" + sx + " 112 q" + f1(-6 + ph) + " -12 0 -24 q" + f1(6 - ph) + " -12 0 -24' stroke='#adb5bd' stroke-width='2.5' stroke-linecap='round' opacity='" + f1(steam * 9) / 10 + "'/>";
      }
      if (i === 1) s += "<line x1='" + f1(CX - 22 + Math.sin(p * 50) * 8) + "' y1='160' x2='" + f1(CX - 34) + "' y2='60' stroke='#ced4da' stroke-width='5' stroke-linecap='round'/>";
      s += thermo(K, CX + 22, K.lerp(30, 200, dip), t, 0, 100);
      if (dip > 0.9) s += K.label(CX + 36, 36, K.t("exp.en.temp", { t: K.num(t, 1) }), { anchor: "start", bold: true, size: 13 });
      if (i >= 1) s += watch(K, 250, 50, mins);
      const pts = [];
      const step = tMax > 10 ? 5 : 1;
      for (let m = 0; m <= mins + 1e-9; m += step) pts.push([m, teaAt(m)]);
      if (i >= 1) s += graph(K, 300, 70, 150, 120, pts, tMax, 20, 80, i >= 2 ? 1 : K.seg(p, 0.9, 1), "exp.en.xmin", "exp.en.ytea");
      if (i >= 2) s += "<line x1='300' y1='" + f1(70 + 120 - (ROOM - 20) / 60 * 120) + "' x2='450' y2='" + f1(70 + 120 - (ROOM - 20) / 60 * 120) + "' stroke='#e8590c' stroke-dasharray='4 3'/>" +
        K.label(304, 70 + 120 - (ROOM - 20) / 60 * 120 - 5, K.t("exp.tea.room"), { anchor: "start", size: 10, color: "#e8590c" });
      // where the thermal energy goes: into the air, the table and the cup
      const out = i < 3 ? 0 : i === 3 ? K.seg(p, 0, 0.8) : 1;
      if (out > 0) {
        const arrow = function (x1, y1, x2, y2) {
          const ex = K.lerp(x1, x2, out), ey = K.lerp(y1, y2, out), a = Math.atan2(y2 - y1, x2 - x1);
          const head = [[0, 0], [-9, -5], [-9, 5]].map(function (q) {
            return f1(ex + q[0] * Math.cos(a) - q[1] * Math.sin(a)) + "," + f1(ey + q[0] * Math.sin(a) + q[1] * Math.cos(a));
          }).join(" ");
          return "<path d='M" + x1 + " " + y1 + " L" + f1(ex) + " " + f1(ey) + "' stroke='#e8590c' stroke-width='3' stroke-linecap='round'/>" +
            "<polygon points='" + head + "' fill='#e8590c' stroke='none'/>";
        };
        s += arrow(CX, 100, CX, 50) + arrow(70, 160, 30, 150) + arrow(CX, 232, CX, 250) + arrow(200, 200, 240, 210);
        s += K.say(CX - 8, 46, "exp.tea.air", { anchor: "end", size: 11, bold: true, op: out }) + K.say(CX + 40, 252, "exp.tea.table", { anchor: "start", size: 11, bold: true, op: out });
      }
      return s;
    }
  });
})();
