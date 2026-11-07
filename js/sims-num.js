// Number simulations for Math 7: zooming into a number line to round (3.2), a place-value table for × and ÷ by
// 10, 100, 1000 (3.1), a 100-square grid for percentages (10.1), fraction bars (7.2) and paint mixed in a ratio (12.1).
(function () {
  const S = MQ.sims;
  const NS = "http://www.w3.org/2000/svg";
  const svgOf = function (vb, label) {
    const s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", vb); s.setAttribute("role", "img"); s.setAttribute("aria-label", label);
    s.setAttribute("class", "sim-svg");
    return s;
  };
  const gcd = function (a, b) { while (b) { const t = a % b; a = b; b = t; } return a; };

  // ---------- 3.2 rounding: zoom the number line to the step you round to, then pick the nearer mark ----------
  // values in thousandths so every step is exact integer arithmetic
  const ROUND_VALUES = [3476, 12649, 75];
  const STEPS = [{ id: "whole", size: 1000, d: 0 }, { id: "d1", size: 100, d: 1 }, { id: "d2", size: 10, d: 2 }];
  // zoomed number line between the two nearest marks e.lo and e.hi, with the value e.v
  function roundSvg(e, fmt) {
    const x = function (th) { return 40 + (th - e.lo) / e.z.size * 440; };
    let s = "<line x1='40' y1='70' x2='480' y2='70' stroke='currentColor' stroke-width='2'/>";
    for (let i = 0; i <= 10; i++) {
      const t = e.lo + i * e.z.size / 10;
      s += "<line x1='" + x(t) + "' y1='" + (i % 5 ? 64 : 58) + "' x2='" + x(t) + "' y2='" + (i % 5 ? 76 : 82) + "' stroke='currentColor'/>";
    }
    return s + "<text x='40' y='104' text-anchor='middle' font-size='15' font-weight='bold' fill='currentColor'>" + fmt(e.lo, e.z.d) + "</text>" +
      "<text x='480' y='104' text-anchor='middle' font-size='15' font-weight='bold' fill='currentColor'>" + fmt(e.hi, e.z.d) + "</text>" +
      "<text x='260' y='104' text-anchor='middle' font-size='12' fill='currentColor' opacity='0.7'>" + fmt(e.lo + e.z.size / 2, e.z.d + 1) + "</text>" +
      "<polygon points='" + x(e.v) + ",66 " + (x(e.v) - 8) + ",44 " + (x(e.v) + 8) + ",44' fill='#e2674f'/>" +
      "<text x='" + x(e.v) + "' y='36' text-anchor='middle' font-size='15' font-weight='bold' fill='#e2674f'>" + fmt(e.v, 3) + "</text>";
  }
  S.define("roundzoom", {
    title: "sim.roundzoom.title", intro: "sim.roundzoom.intro",
    tasks: [
      { ask: "sim.roundzoom.t1", done: "sim.roundzoom.d1", ok: function (s) { return s.right && s.step === "d1" && s.vi === 0; } },
      { ask: "sim.roundzoom.t2", done: "sim.roundzoom.d2", ok: function (s) { return s.right && s.step === "whole" && s.vi === 0; } },
      { ask: "sim.roundzoom.t3", done: "sim.roundzoom.d3", ok: function (s) { return s.right && s.step === "d2" && s.vi !== 0; } }
    ],
    mount: function (body, changed, k) {
      const st = { vi: 0, step: "d1", right: false };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      const stepOf = function () { return STEPS.find(function (x) { return x.id === st.step; }); };
      const fmt = function (th, d) { return k.num(th / 1000, d); };
      function ends() {
        const v = ROUND_VALUES[st.vi], z = stepOf();
        const lo = Math.floor(v / z.size) * z.size;
        return { v: v, lo: lo, hi: lo + z.size, z: z };
      }
      function draw() {
        const e = ends();
        const svg = svgOf("0 0 520 120", k.t("sim.roundzoom.title"));
        svg.innerHTML = roundSvg(e, fmt);
        pic.innerHTML = "";
        pic.appendChild(svg);
        pickBtns.btns[0].textContent = fmt(e.lo, e.z.d);
        pickBtns.btns[1].textContent = fmt(e.hi, e.z.d);
      }
      function pick(which) {
        const e = ends();
        const nearer = e.v - e.lo >= e.z.size / 2 ? "hi" : "lo";
        st.right = which === nearer;
        read.textContent = k.t(st.right ? "sim.roundzoom.yes" : "sim.roundzoom.no", { v: fmt(which === "hi" ? e.hi : e.lo, e.z.d) });
        read.classList.toggle("hit", st.right);
        changed(st);
      }
      function setStep(id) { st.step = id; st.right = false; read.textContent = ""; draw(); changed(st); }
      const steps = k.buttons(k.t("sim.roundzoom.to"), STEPS.map(function (z) {
        return { act: z.id, label: k.t("sim.roundzoom.step." + z.id), value: z.id };
      }), setStep);
      const pickBtns = k.buttons(k.t("sim.roundzoom.pick"), [{ act: "lo", label: "", value: "lo" }, { act: "hi", label: "", value: "hi" }], pick);
      const other = k.buttons("", [{ act: "next", label: "↻ " + k.t("sim.roundzoom.next"), value: 1 }], function () {
        st.vi = (st.vi + 1) % ROUND_VALUES.length; setStep(st.step);
      });
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [steps.el, pickBtns.el, other.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 3.1 place value: digits slide left (×) or right (÷) through the columns ----------
  const COLS = ["1000", "100", "10", "1", "0,1", "0,01", "0,001", "0,0001"];
  S.define("placevalue", {
    title: "sim.placevalue.title", intro: "sim.placevalue.intro",
    tasks: [
      { ask: "sim.placevalue.t1", done: "sim.placevalue.d1", ok: function (s) { return s.e === 0; } },
      { ask: "sim.placevalue.t2", done: "sim.placevalue.d2", ok: function (s) { return s.e === -4; } },
      { ask: "sim.placevalue.t3", done: "sim.placevalue.d3", ok: function (s) { return s.e === 1 && s.ops >= 2; } }
    ],
    mount: function (body, changed, k) {
      // value = 327 × 10^e; the digits 3, 2, 7 sit in columns given by e
      const st = { e: -2, ops: 0 };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      function valueText() {
        const s = (327 * Math.pow(10, st.e)).toFixed(Math.max(0, -st.e));
        return MQ.i18n.uiLang() === "vi" ? s.replace(".", ",") : s;
      }
      function draw() {
        let s = "";
        COLS.forEach(function (c, i) {
          const label = MQ.i18n.uiLang() === "vi" ? c : c.replace(",", ".");
          s += "<rect x='" + (10 + i * 62) + "' y='10' width='60' height='30' fill='#1f7a8c' opacity='" + (i < 4 ? 0.9 : 0.6) + "'/>" +
            "<text x='" + (40 + i * 62) + "' y='31' text-anchor='middle' font-size='13' font-weight='bold' fill='#fff'>" + label + "</text>" +
            "<rect x='" + (10 + i * 62) + "' y='42' width='60' height='50' fill='none' stroke='currentColor' opacity='0.4'/>";
        });
        s += "<line x1='258' y1='42' x2='258' y2='96' stroke='#e2674f' stroke-width='3'/><circle cx='258' cy='88' r='4' fill='#e2674f'/>";
        // digits 3, 2, 7 start in column `first` (units column = 3); zeros fill the gap to the units column
        const first = 1 - st.e, last = first + 2;
        for (let col = Math.min(first, 3); col <= Math.max(last, 3); col++) {
          const dgt = col >= first && col <= last ? [3, 2, 7][col - first] : 0;
          s += "<text x='" + (40 + col * 62) + "' y='78' text-anchor='middle' font-size='28' font-weight='bold' fill='" +
            (col >= first && col <= last ? "currentColor" : "#888") + "'>" + dgt + "</text>";
        }
        const svg = svgOf("0 0 520 100", k.t("sim.placevalue.title"));
        svg.innerHTML = s;
        pic.innerHTML = "";
        pic.appendChild(svg);
        read.textContent = "= " + valueText();
      }
      function op(d) {
        if (d === 0) { st.e = -2; st.ops = 0; }
        else if (st.e + d >= -4 && st.e + d <= 1) { st.e += d; st.ops += 1; }
        else { read.textContent = k.t("sim.placevalue.edge"); return; }
        draw();
        changed(st);
      }
      const ctl = k.buttons(k.t("sim.placevalue.do"), [
        { act: "x10", label: "× 10", value: 1 }, { act: "x100", label: "× 100", value: 2 }, { act: "x1000", label: "× 1000", value: 3 },
        { act: "d10", label: "÷ 10", value: -1 }, { act: "d100", label: "÷ 100", value: -2 }, { act: "d1000", label: "÷ 1000", value: -3 },
        { act: "reset", label: "↺ 3,27", value: 0 }
      ], op);
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [ctl.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 10.1 a 100-square grid: each square is 1% ----------
  S.define("percentgrid", {
    title: "sim.percentgrid.title", intro: "sim.percentgrid.intro",
    tasks: [
      { ask: "sim.percentgrid.t1", done: "sim.percentgrid.d1", ok: function (s) { return s.n === 35; } },
      { ask: "sim.percentgrid.t2", done: "sim.percentgrid.d2", ok: function (s) { return s.n === 75; } },
      { ask: "sim.percentgrid.t3", done: "sim.percentgrid.d3", ok: function (s) { return s.n === 40; } }
    ],
    mount: function (body, changed, k) {
      const st = { n: 0 };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      const svg = svgOf("0 0 260 260", k.t("sim.percentgrid.title"));
      pic.appendChild(svg);
      function draw() {
        let s = "";
        for (let i = 0; i < 100; i++) {
          const r = Math.floor(i / 10), c = i % 10;
          s += "<rect data-i='" + i + "' x='" + (10 + c * 24) + "' y='" + (10 + r * 24) + "' width='22' height='22' rx='3' fill='" +
            (i < st.n ? "#e0a526" : "transparent") + "' stroke='currentColor' stroke-opacity='0.35' style='cursor:pointer'/>";
        }
        svg.innerHTML = s;
        read.textContent = k.t("sim.percentgrid.read", { n: st.n, d: k.num(st.n / 100, 2), f: st.n + "/100" });
      }
      function set(n) { st.n = Math.max(0, Math.min(100, n)); draw(); changed(st); }
      // tapping square i fills squares 0..i (tap the last filled square again to empty it)
      svg.addEventListener("click", function (e) {
        const i = Number(e.target.getAttribute && e.target.getAttribute("data-i"));
        if (!Number.isNaN(i) && e.target.hasAttribute("data-i")) set(i + 1 === st.n ? i : i + 1);
      });
      const ctl = k.buttons(k.t("sim.percentgrid.btns"), [
        { act: "p10", label: "+10", value: 10 }, { act: "p1", label: "+1", value: 1 },
        { act: "m1", label: "−1", value: -1 }, { act: "m10", label: "−10", value: -10 }, { act: "clear", label: "↺", value: null }
      ], function (v) { set(v === null ? 0 : st.n + v); });
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [ctl.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 7.2 fraction bars: equal fractions, a common denominator, adding ----------
  const lcm = function (a, b) { return a / gcd(a, b) * b; };
  S.define("fractionbars", {
    title: "sim.fractionbars.title", intro: "sim.fractionbars.intro",
    tasks: [
      { ask: "sim.fractionbars.t1", done: "sim.fractionbars.d1", ok: function (s) { return s.b !== s.d && s.a * s.d === s.c * s.b && s.a > 0; } },
      { ask: "sim.fractionbars.t2", done: "sim.fractionbars.d2", ok: function (s) { return s.common && s.b === 3 && s.d === 4; } },
      { ask: "sim.fractionbars.t3", done: "sim.fractionbars.d3", ok: function (s) { return s.common && s.a === 2 && s.b === 3 && s.c === 1 && s.d === 4; } }
    ],
    mount: function (body, changed, k) {
      const st = { a: 1, b: 2, c: 1, d: 3, common: false };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      function bar(y, num, den, cut, col) {
        let s = "";
        for (let i = 0; i < cut; i++) {
          const filled = i < num * cut / den;
          s += "<rect x='" + (20 + i * 440 / cut) + "' y='" + y + "' width='" + (440 / cut) + "' height='36' fill='" + (filled ? col : "transparent") +
            "' stroke='currentColor' stroke-opacity='0.6'/>";
        }
        return s;
      }
      function draw() {
        const m = st.common ? lcm(st.b, st.d) : null;
        const svg = svgOf("0 0 480 " + (st.common ? 150 : 100), k.t("sim.fractionbars.title"));
        let s = bar(10, st.a, st.b, m || st.b, "#e0a526") + bar(56, st.c, st.d, m || st.d, "#1f7a8c");
        if (st.common) {
          const sum = st.a * (m / st.b) + st.c * (m / st.d);
          s += "<text x='240' y='130' text-anchor='middle' font-size='16' font-weight='bold' fill='currentColor'>" +
            st.a + "/" + st.b + " + " + st.c + "/" + st.d + " = " + (st.a * (m / st.b)) + "/" + m + " + " + (st.c * (m / st.d)) + "/" + m + " = " + sum + "/" + m + "</text>";
        }
        svg.innerHTML = s;
        pic.innerHTML = "";
        pic.appendChild(svg);
        read.textContent = st.a + "/" + st.b + (st.a * st.d === st.c * st.b ? " = " : st.a * st.d > st.c * st.b ? " > " : " < ") + st.c + "/" + st.d;
      }
      const sl = function (lab, key, min, max, act) {
        const x = k.slider(lab, min, max, 1, st[key], function (v) { st[key] = v; fix(); draw(); changed(st); }, act);
        return x;
      };
      function fix() { st.a = Math.min(st.a, st.b); st.c = Math.min(st.c, st.d); st.common = false; sync(); }
      const A = sl(k.t("sim.fractionbars.a"), "a", 0, 12, "a"), B = sl(k.t("sim.fractionbars.b"), "b", 1, 12, "b");
      const C = sl(k.t("sim.fractionbars.c"), "c", 0, 12, "c"), D = sl(k.t("sim.fractionbars.d"), "d", 1, 12, "d");
      function sync() { [[A, "a"], [B, "b"], [C, "c"], [D, "d"]].forEach(function (p) { p[0].input.value = st[p[1]]; p[0].out.textContent = st[p[1]]; }); }
      const cm = k.buttons("", [{ act: "common", label: k.t("sim.fractionbars.common"), value: 1 }], function () {
        st.common = true; draw(); changed(st);
      });
      sync();
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [A.el, B.el, C.el, D.el, cm.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 12.1 paint mixing: the colour depends only on the ratio blue : yellow ----------
  S.define("paintmix", {
    title: "sim.paintmix.title", intro: "sim.paintmix.intro",
    tasks: [
      { ask: "sim.paintmix.t1", done: "sim.paintmix.d1", ok: function (s) { return s.b === 2 && s.y === 3; } },
      { ask: "sim.paintmix.t2", done: "sim.paintmix.d2", ok: function (s) { return s.b * 3 === s.y * 2 && s.b + s.y === 10; } },
      { ask: "sim.paintmix.t3", done: "sim.paintmix.d3", ok: function (s) { return s.b * 3 === s.y && s.b + s.y >= 8; } }
    ],
    mount: function (body, changed, k) {
      const st = { b: 1, y: 1 };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      function mix() {
        const t = st.b / (st.b + st.y);
        const ch = function (from, to) { return Math.round(from + (to - from) * t); };
        return "rgb(" + ch(245, 31) + "," + ch(200, 90) + "," + ch(30, 200) + ")";
      }
      function draw() {
        let s = "";
        for (let i = 0; i < st.b; i++) s += "<rect x='" + (14 + i * 22) + "' y='14' width='18' height='30' rx='3' fill='#1f5ac8'/>";
        for (let i = 0; i < st.y; i++) s += "<rect x='" + (14 + i * 22) + "' y='54' width='18' height='30' rx='3' fill='#f2c418'/>";
        s += "<rect x='300' y='14' width='110' height='70' rx='14' fill='" + mix() + "' stroke='currentColor'/>";
        const svg = svgOf("0 0 430 98", k.t("sim.paintmix.title"));
        svg.innerHTML = s;
        pic.innerHTML = "";
        pic.appendChild(svg);
        const g = gcd(st.b, st.y);
        read.textContent = k.t("sim.paintmix.read", { b: st.b, y: st.y, sb: st.b / g, sy: st.y / g });
      }
      function act(a) {
        if (a === "b+" && st.b + st.y < 12) st.b += 1;
        if (a === "y+" && st.b + st.y < 12) st.y += 1;
        if (a === "b-" && st.b > 1) st.b -= 1;
        if (a === "y-" && st.y > 1) st.y -= 1;
        draw();
        changed(st);
      }
      const blue = k.buttons(k.t("sim.paintmix.blue"), [{ act: "b+", label: "+1", value: "b+" }, { act: "b-", label: "−1", value: "b-" }], act);
      const yellow = k.buttons(k.t("sim.paintmix.yellow"), [{ act: "y+", label: "+1", value: "y+" }, { act: "y-", label: "−1", value: "y-" }], act);
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [blue.el, yellow.el]));
      body.appendChild(read);
      draw();
    }
  });
})();
