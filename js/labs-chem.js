// Step-by-step chemistry labs of Science 7 (unit 8): burning magnesium (8.1), metals with acid and the test for
// hydrogen (8.1), testing for carbon dioxide with limewater and for oxygen with a glowing splint (8.4).
// Steps follow the book's methods; the timings and drawings are models.
(function () {
  const L = MQ.labs;

  // ---------- 8.1 burning magnesium ribbon ----------
  L.define("lab-mg", {
    title: "exp.mg.title", intro: "exp.mg.intro", safety: "exp.mg.safety", view: "70 36 410 222",
    steps: [
      { ask: "exp.mg.s1", act: "exp.mg.a1", say: "exp.mg.d1", dur: 1.4 },
      { ask: "exp.mg.s2", act: "exp.mg.a2", say: "exp.mg.d2", dur: 1.4 },
      { ask: "exp.mg.s3", act: "exp.mg.a3", say: "exp.mg.d3", dur: 3,
        predict: { q: "exp.mg.p", opts: ["exp.mg.p0", "exp.mg.p1", "exp.mg.p2"], ans: 1 } },
      { ask: "exp.mg.s4", act: "exp.mg.a4", say: "exp.mg.d4", dur: 3 },
      { ask: "exp.mg.s5", act: "exp.mg.a5", say: "exp.mg.d5", dur: 2.2 }
    ],
    draw: function (K, i, p) {
      const lit = i < 0 ? 0 : i === 0 ? K.seg(p, 0, 0.7) : 1;
      let tx = 560, burn = 0, ash = 0, heap = 0;
      if (i >= 1) tx = i === 1 ? K.lerp(560, 400, K.seg(p, 0, 1)) : 400;
      if (i >= 2) { tx = i === 2 ? K.lerp(400, 290, K.seg(p, 0, 0.35)) : 290; burn = i === 2 ? K.seg(p, 0.35, 0.6) : 1; }
      if (i >= 3) { tx = i === 3 ? K.lerp(290, 380, K.seg(p, 0, 0.35)) : 380; ash = i === 3 ? K.seg(p, 0.35, 1) : 1; burn = 1 - ash; }
      if (i >= 4) heap = i === 4 ? K.seg(p, 0, 0.7) : 1;
      const ty = 112, rx = tx - 46;
      let s = K.mat(110, 380, 230) + K.bunsen(240, 230, lit);
      // ribbon: grey metal turning into white magnesium oxide, crumbling onto the mat in the last step
      if (heap < 1) {
        s += "<line x1='" + rx + "' y1='" + ty + "' x2='" + tx + "' y2='" + ty + "' stroke='#adb5bd' stroke-width='4' stroke-linecap='round' opacity='" + (1 - ash).toFixed(2) + "'/>";
        s += "<path d='M" + rx + " " + ty + " q12 -5 23 0 t23 0' stroke='#f8f9fa' stroke-width='4' stroke-linecap='round' fill='none' opacity='" + (ash * (1 - heap)).toFixed(2) + "'/>";
      }
      if (heap > 0) {
        for (let j = 0; j < 7; j++) {
          const fy = K.lerp(ty, 226, K.clamp(heap * 1.6 - j * 0.08)), fx = rx + 6 + j * 5;
          s += "<circle cx='" + fx + "' cy='" + fy.toFixed(1) + "' r='2.2' fill='#f8f9fa' stroke='#ced4da' stroke-width='0.6'/>";
        }
        s += "<ellipse cx='" + (rx + 22) + "' cy='229' rx='" + (22 * heap).toFixed(1) + "' ry='" + (4 * heap).toFixed(1) + "' fill='#f8f9fa' stroke='#ced4da'/>";
      }
      if (tx < 520) s += K.tongs(tx, ty);
      if (burn > 0) s += K.flash(rx + 6, ty, 46 + Math.sin(K.now * 31) * 4, burn) + K.warn(90, 62, K.t("exp.mg.look"), burn);
      if (heap > 0.6) {
        s += K.say(rx + 22, 252, "exp.mg.mgo", { bold: true, op: (heap - 0.6) / 0.4 });
        s += K.say(270, 62, "exp.mg.eq", { bold: true, size: 13, op: (heap - 0.6) / 0.4 });
      }
      if (i >= 1 && heap === 0 && burn === 0 && ash === 0) s += K.say(tx - 23, ty - 14, "exp.mg.ribbon", { size: 11 });
      return s;
    }
  });

  // ---------- 8.1 magnesium with acid, test for hydrogen ----------
  L.define("lab-h2", {
    title: "exp.h2.title", intro: "exp.h2.intro", safety: "exp.h2.safety", view: "110 18 330 216",
    steps: [
      { ask: "exp.h2.s1", act: "exp.h2.a1", say: "exp.h2.d1", dur: 1.2 },
      { ask: "exp.h2.s2", act: "exp.h2.a2", say: "exp.h2.d2", dur: 2.6,
        predict: { q: "exp.h2.p1", opts: ["exp.h2.p1a", "exp.h2.p1b", "exp.h2.p1c"], ans: 1 } },
      { ask: "exp.h2.s3", act: "exp.h2.a3", say: "exp.h2.d3", dur: 1.4 },
      { ask: "exp.h2.s4", act: "exp.h2.a4", say: "exp.h2.d4", dur: 1.4 },
      { ask: "exp.h2.s5", act: "exp.h2.a5", say: "exp.h2.d5", dur: 2.4,
        predict: { q: "exp.h2.p2", opts: ["exp.h2.p2a", "exp.h2.p2b", "exp.h2.p2c"], ans: 1 } }
    ],
    draw: function (K, i, p) {
      const X = 200, TOP = 70, H = 150;
      const drop = i < 0 ? 0 : i === 0 ? K.seg(p, 0, 1) : 1;
      const acid = i < 1 ? 0 : i === 1 ? K.seg(p, 0.15, 0.7) : 1;
      const fizz = i < 1 ? 0 : i === 1 ? K.seg(p, 0.6, 1) : 1;
      const thumb = i < 2 ? 0 : i === 2 ? K.seg(p, 0, 1) : i === 4 ? 1 - K.seg(p, 0, 0.3) : 1;
      const lit = i < 3 ? 0 : 1;
      const near = i < 4 ? 0 : i === 4 ? K.seg(p, 0.2, 0.55) : 1;
      const pop = i === 4 ? K.seg(p, 0.55, 0.75) * (1 - K.seg(p, 0.9, 1) * 0.6) : 0;
      let s = K.rack(120, 290, 170);
      s += K.tube(X, TOP, H, { fill: acid * 0.5, color: "#d0ebff" });
      if (fizz > 0) s += K.bubbles(X, TOP + H - 10, TOP + H - acid * 0.5 * (H - 4) + 4, 14, fizz);
      // magnesium ribbon falling into the tube
      const my = K.lerp(30, TOP + H - 18, drop);
      if (i >= 0) s += "<line x1='" + (X - 4) + "' y1='" + (my - 12).toFixed(1) + "' x2='" + (X + 3) + "' y2='" + my.toFixed(1) + "' stroke='#868e96' stroke-width='3' stroke-linecap='round'/>";
      // acid bottle pours during step 2
      if (i === 1 && p < 0.8) {
        const tilt = K.seg(p, 0, 0.2) * (1 - K.seg(p, 0.65, 0.8));
        s += "<g transform='rotate(" + (-70 * tilt).toFixed(1) + " " + (X + 30) + " 52)'>" + K.bottle(X + 50, 70, "HCl", "#d0ebff") + "</g>";
        if (tilt > 0.9) s += "<path d='M" + (X + 2) + " 60 L" + X + " " + (TOP + 40) + "' stroke='#74c0fc' stroke-width='3'/>";
      } else s += K.bottle(400, 230, "HCl", "#d0ebff");
      if (thumb > 0) s += K.thumb(X - 2, K.lerp(30, TOP + 2, thumb));
      if (lit) {
        const sx = K.lerp(380, X + 4, near), sy = K.lerp(120, TOP - 6, near);
        s += K.splint(sx, sy, 90, -20, "lit");
      }
      if (pop > 0) s += K.flash(X, TOP - 6, 40, pop) + K.burst(X + 2, TOP - 30, pop, K.t("exp.h2.pop"));
      if (fizz > 0 && i < 4) s += K.say(X + 20, TOP + 84, "exp.h2.gas", { anchor: "start", size: 11 });
      return s;
    }
  });

  // rubber stopper in a tube mouth at (x, y)
  function stopper(x, y) {
    return "<path d='M" + (x - 14) + " " + (y - 8) + " L" + (x + 14) + " " + (y - 8) + " L" + (x + 11) + " " + (y + 8) + " L" + (x - 11) + " " + (y + 8) + " Z' fill='#c0504d' stroke='#7f2b28'/>";
  }
  // delivery tube from a stopper at (a, top) over to tube b, ending at y end
  function delivery(a, b, top, end) {
    const d = "M" + a + " " + (top + 6) + " L" + a + " 52 Q" + a + " 36 " + (a + 16) + " 36 L" + (b - 16) + " 36 Q" + b + " 36 " + b + " 52 L" + b + " " + end;
    return "<path d='" + d + "' stroke='#5f8fa6' stroke-width='7' stroke-linecap='round'/><path d='" + d + "' stroke='#d0ebff' stroke-width='4.5' stroke-linecap='round'/>";
  }

  // ---------- 8.4 carbon dioxide and limewater ----------
  L.define("lab-co2", {
    title: "exp.co2.title", intro: "exp.co2.intro", safety: "exp.co2.safety", view: "90 20 340 236",
    steps: [
      { ask: "exp.co2.s1", act: "exp.co2.a1", say: "exp.co2.d1", dur: 2.2 },
      { ask: "exp.co2.s2", act: "exp.co2.a2", say: "exp.co2.d2", dur: 1.4 },
      { ask: "exp.co2.s3", act: "exp.co2.a3", say: "exp.co2.d3", dur: 2.4 },
      { ask: "exp.co2.s4", act: "exp.co2.a4", say: "exp.co2.d4", dur: 1.6 },
      { ask: "exp.co2.s5", act: "exp.co2.a5", say: "exp.co2.d5", dur: 3.4,
        predict: { q: "exp.co2.p", opts: ["exp.co2.p0", "exp.co2.p1", "exp.co2.p2"], ans: 1 } }
    ],
    draw: function (K, i, p) {
      const A = 170, B = 330, TOP = 80, H = 130;
      const lime = i < 0 ? 0 : i === 0 ? K.seg(p, 0.15, 0.7) : 1;
      const chips = i < 1 ? 0 : i === 1 ? K.seg(p, 0, 1) : 1;
      const acid = i < 2 ? 0 : i === 2 ? K.seg(p, 0.15, 0.7) : 1;
      const fizz = i < 2 ? 0 : i === 2 ? K.seg(p, 0.6, 1) : 1;
      const cap = i < 3 ? 0 : i === 3 ? K.seg(p, 0, 0.8) : 1;
      const milk = i < 4 ? 0 : i === 4 ? K.seg(p, 0.25, 1) : 1;
      let s = K.rack(130, 370, 175);
      s += K.tube(A, TOP, H, { fill: acid * 0.4, color: "#d0ebff" });
      s += K.tube(B, TOP, H, { fill: lime * 0.5, color: "#99e9f2", cloudy: milk });
      if (chips > 0) for (let j = 0; j < 5; j++) {
        const cy = K.lerp(30, TOP + H - 8 - (j % 2) * 5, K.clamp(chips * 1.3 - j * 0.07));
        s += "<path d='M" + (A - 9 + j * 3.5) + " " + cy.toFixed(1) + " l3 -4 l4 1 l1 4 l-4 3 Z' fill='#f1f3f5' stroke='#adb5bd' stroke-width='0.7'/>";
      }
      if (fizz > 0) s += K.bubbles(A, TOP + H - 10, TOP + H - 0.4 * (H - 4) + 4, 14, fizz);
      if (i === 0) s += K.pour(B, TOP, p, K.t("exp.co2.limeShort"), "#e3fafc");
      if (i === 2) s += K.pour(A, TOP, p, "HCl", "#d0ebff");
      if (cap > 0) {
        s += "<g opacity='" + cap.toFixed(2) + "' transform='translate(0 " + ((1 - cap) * -40).toFixed(1) + ")'>" + delivery(A, B, TOP, TOP + H - 14) + stopper(A, TOP) + "</g>";
      }
      if (cap >= 1) s += K.bubbles(B, TOP + H - 14, TOP + H - 0.5 * (H - 4) + 4, 10, 0.8, "#868e96");
      s += K.say(A, 250, "exp.co2.react", { size: 11 }) + K.say(B, 250, "exp.co2.lime", { size: 11 });
      if (milk > 0.7) s += K.say(B + 22, TOP + 70, "exp.co2.milky", { anchor: "start", bold: true, size: 12, op: (milk - 0.7) / 0.3 });
      return s;
    }
  });

  // ---------- 8.4 oxygen and a glowing splint ----------
  L.define("lab-o2", {
    title: "exp.o2.title", intro: "exp.o2.intro", safety: "exp.o2.safety", view: "100 14 330 242",
    steps: [
      { ask: "exp.o2.s1", act: "exp.o2.a1", say: "exp.o2.d1", dur: 2.2 },
      { ask: "exp.o2.s2", act: "exp.o2.a2", say: "exp.o2.d2", dur: 2 },
      { ask: "exp.o2.s3", act: "exp.o2.a3", say: "exp.o2.d3", dur: 1.6 },
      { ask: "exp.o2.s4", act: "exp.o2.a4", say: "exp.o2.d4", dur: 2.6,
        predict: { q: "exp.o2.p", opts: ["exp.o2.p0", "exp.o2.p1", "exp.o2.p2"], ans: 1 } }
    ],
    draw: function (K, i, p) {
      const X = 200, TOP = 80, H = 130;
      const liq = i < 0 ? 0 : i === 0 ? K.seg(p, 0.15, 0.7) : 1;
      const spoon = i === 1 ? K.seg(p, 0, 0.4) * (1 - K.seg(p, 0.7, 1)) : 0;
      const fizz = i < 1 ? 0 : i === 1 ? K.seg(p, 0.45, 0.9) : 1;
      const near = i < 3 ? 0 : i === 3 ? K.seg(p, 0, 0.45) : 1;
      const relit = i < 3 ? 0 : i === 3 ? K.seg(p, 0.5, 0.75) : 1;
      let state = "fresh";
      if (i >= 2) state = i === 2 && p < 0.5 ? "lit" : "glow";
      if (relit > 0) state = "lit";
      let s = K.rack(120, 290, 175);
      s += K.tube(X, TOP, H, { fill: liq * 0.5, color: "#e7f5ff" });
      if (fizz > 0) {
        s += "<ellipse cx='" + X + "' cy='" + (TOP + H - 10) + "' rx='8' ry='3' fill='#343a40' stroke='none'/>";
        s += K.bubbles(X, TOP + H - 12, TOP + H - 0.5 * (H - 4) + 4, 14, fizz);
      }
      if (i === 0) s += K.pour(X, TOP, p, "H₂O₂", "#e7f5ff");
      if (spoon > 0) {
        const sy = K.lerp(10, TOP - 4, spoon);
        s += "<path d='M" + (X + 2) + " " + sy.toFixed(1) + " L" + (X + 90) + " " + (sy - 40).toFixed(1) + "' stroke='url(#" + K.P + "metal)' stroke-width='4' stroke-linecap='round'/>" +
          "<ellipse cx='" + (X + 2) + "' cy='" + sy.toFixed(1) + "' rx='8' ry='4' fill='#343a40' stroke='#5c636a'/>";
      }
      if (i === 1 && p > 0.4 && p < 0.75) {
        for (let j = 0; j < 6; j++) s += "<circle cx='" + (X - 4 + j * 2) + "' cy='" + (TOP + (p - 0.4) * 300 + j * 6).toFixed(1) + "' r='1.4' fill='#343a40' stroke='none'/>";
      }
      if (i >= 2) {
        const sx = K.lerp(330, X + 6, near), sy = K.lerp(110, TOP - 4, near);
        s += K.splint(sx, sy, 100, -18, state);
        if (relit > 0) s += K.flame(sx, sy + 2, 0.75 + relit * 0.9) + K.flash(sx, sy - 10, 26, relit * 0.6);
        if (i === 2 && p > 0.3 && p < 0.7) s += K.say(sx - 4, sy - 26, "exp.o2.blow", { size: 11, bold: true });
      }
      s += K.say(X, 250, "exp.o2.h2o2", { size: 11 });
      if (relit > 0.6) s += K.say(X + 40, 40, "exp.o2.relit", { anchor: "start", bold: true, size: 12, color: "#e8590c" });
      return s;
    }
  });
})();
