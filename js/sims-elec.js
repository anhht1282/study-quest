// Energy and electricity simulations for Science 7: Sankey diagrams of useful and wasted energy (3.7: lamp A
// 15 % light, lamp B 50 % light, a car engine 25 % movement), reading an ammeter (9.3: a 0–20 A scale; a value such
// as 1.7 A needs a finer scale) and testing conductors and insulators (9.4: every metal conducts; plastic does not).
(function () {
  const S = MQ.sims;
  const NS = "http://www.w3.org/2000/svg";
  const svgOf = function (vb, label) {
    const s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", vb); s.setAttribute("role", "img"); s.setAttribute("aria-label", label);
    s.setAttribute("class", "sim-svg");
    return s;
  };

  // ---------- 3.7 Sankey diagram ----------
  const DEVICES = { lampA: { useful: 15, kind: "light" }, lampB: { useful: 50, kind: "light" }, engine: { useful: 25, kind: "motion" } };
  S.define("sankey", {
    title: "sim.sankey.title", intro: "sim.sankey.intro",
    tasks: [
      { ask: "sim.sankey.t1", done: "sim.sankey.d1", ok: function (s) { return s.dev === "lampA" && s.e === 100; } },
      { ask: "sim.sankey.t2", done: "sim.sankey.d2", ok: function (s) { return s.dev === "lampB"; } },
      { ask: "sim.sankey.t3", done: "sim.sankey.d3", ok: function (s) { return s.dev === "engine" && s.e === 400; } }
    ],
    mount: function (body, changed, k) {
      const st = { dev: "engine", e: 200 };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      function draw() {
        const d = DEVICES[st.dev], useful = st.e * d.useful / 100, waste = st.e - useful;
        const W = 100, wu = W * d.useful / 100, ww = W - wu;
        const svg = svgOf("0 0 560 230", k.t("sim.sankey.title"));
        // input band → useful band straight on; wasted band turns down (an L shape)
        svg.innerHTML = "<rect x='20' y='40' width='150' height='" + W + "' fill='#e0a526'/>" +
          "<rect x='170' y='40' width='200' height='" + wu + "' fill='#2e8b57'/><polygon points='370," + (32 + 0) + " 390," + (40 + wu / 2) + " 370," + (48 + wu) + "' fill='#2e8b57'/>" +
          "<rect x='170' y='" + (40 + wu) + "' width='" + ww + "' height='" + (170 - wu) + "' fill='#c2453d' opacity='0.85'/>" +
          "<polygon points='" + (162) + ",210 " + (178 + ww) + ",210 " + (170 + ww / 2) + ",226' fill='#c2453d' opacity='0.85'/>" +
          "<text x='95' y='30' text-anchor='middle' font-size='13' fill='currentColor'>" + k.t("sim.sankey.in", { e: st.e }) + "</text>" +
          "<text x='396' y='" + (44 + wu / 2) + "' font-size='12' fill='currentColor'>" + k.t("sim.sankey.useful." + d.kind, { e: k.num(useful, 0) }) + "</text>" +
          "<text x='" + (186 + ww) + "' y='204' font-size='12' fill='currentColor'>" + k.t("sim.sankey.waste", { e: k.num(waste, 0) }) + "</text>";
        pic.innerHTML = "";
        pic.appendChild(svg);
        read.textContent = k.t("sim.sankey.read", { p: d.useful, w: 100 - d.useful });
        sl.out.textContent = st.e + " J";
      }
      const dev = k.buttons(k.t("sim.sankey.dev"), Object.keys(DEVICES).map(function (x) {
        return { act: x, label: k.t("sim.sankey.d." + x), value: x };
      }), function (x) { st.dev = x; dev.btns.forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-act") === x); }); draw(); changed(st); });
      dev.btns[2].classList.add("on");
      const sl = k.slider(k.t("sim.sankey.energy"), 100, 1000, 100, st.e, function (v) { st.e = v; draw(); changed(st); }, "energy");
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [dev.el, sl.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 9.3 ammeter: a needle on a 0–20 A or a 0–2 A scale, and a digital display ----------
  S.define("ammeter", {
    title: "sim.ammeter.title", intro: "sim.ammeter.intro",
    tasks: [
      { ask: "sim.ammeter.t1", done: "sim.ammeter.d1", ok: function (s) { return s.max === 20 && s.i === 4; } },
      { ask: "sim.ammeter.t2", done: "sim.ammeter.d2", ok: function (s) { return s.max === 2 && Math.abs(s.i - 1.7) < 1e-9; } },
      { ask: "sim.ammeter.t3", done: "sim.ammeter.d3", ok: function (s) { return s.digital && Math.abs(s.i - 1.7) < 1e-9; } }
    ],
    mount: function (body, changed, k) {
      const st = { max: 20, i: 0, digital: false };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      const ang = function (v) { return Math.PI * (1 - v / st.max); };
      const P = function (v, r) { return [160 + r * Math.cos(ang(v)), 150 - r * Math.sin(ang(v))]; };
      function draw() {
        let s = "<path d='M40,150 A120,120 0 0 1 280,150' fill='none' stroke='currentColor' stroke-width='2'/>";
        for (let j = 0; j <= 20; j++) {
          const v = st.max * j / 20, a = P(v, 120), b = P(v, j % 5 ? 110 : 102);
          s += "<line x1='" + a[0].toFixed(1) + "' y1='" + a[1].toFixed(1) + "' x2='" + b[0].toFixed(1) + "' y2='" + b[1].toFixed(1) + "' stroke='currentColor'/>";
          if (j % 5 === 0) { const t = P(v, 88); s += "<text x='" + t[0].toFixed(1) + "' y='" + (t[1] + 4).toFixed(1) + "' text-anchor='middle' font-size='12' fill='currentColor'>" + k.num(v, st.max === 2 ? 1 : 0) + "</text>"; }
        }
        const n = P(st.i, 115);
        s += "<line x1='160' y1='150' x2='" + n[0].toFixed(1) + "' y2='" + n[1].toFixed(1) + "' stroke='#c2453d' stroke-width='3'/><circle cx='160' cy='150' r='6' fill='currentColor'/>" +
          "<text x='160' y='176' text-anchor='middle' font-size='16' font-weight='bold' fill='currentColor'>A</text>";
        if (st.digital) {
          const txt = (st.i < 10 ? "0" : "") + st.i.toFixed(2);
          s += "<rect x='240' y='160' width='76' height='30' rx='4' fill='#1b2438'/><text x='278' y='181' text-anchor='middle' font-family='monospace' font-size='18' fill='#7CFC9A'>" + txt + "</text>";
        }
        const svg = svgOf("0 0 320 200", k.t("sim.ammeter.title"));
        svg.innerHTML = s;
        pic.innerHTML = "";
        pic.appendChild(svg);
        read.textContent = k.t("sim.ammeter.read", { i: k.num(st.i, st.max === 2 ? 1 : 0), step: k.num(st.max / 20, st.max === 2 ? 1 : 0) });
        sl.input.max = st.max; sl.input.step = st.max / 20; sl.input.value = st.i;
        sl.out.textContent = k.num(st.i, st.max === 2 ? 1 : 0) + " A";
      }
      const sl = k.slider(k.t("sim.ammeter.current"), 0, 20, 1, st.i, function (v) { st.i = Math.round(v * 10) / 10; draw(); changed(st); }, "current");
      const scale = k.buttons(k.t("sim.ammeter.scale"), [
        { act: "s20", label: "0–20 A", value: 20 }, { act: "s2", label: "0–" + k.num(2, 0) + " A", value: 2 }
      ], function (m) { st.max = m; st.i = Math.min(st.i, m); scale.btns.forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-act") === "s" + m); }); draw(); changed(st); });
      scale.btns[0].classList.add("on");
      const dig = k.buttons("", [{ act: "digital", label: k.t("sim.ammeter.digital"), value: 0 }], function () {
        st.digital = !st.digital; dig.btns[0].classList.toggle("on", st.digital); draw(); changed(st);
      });
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [scale.el, sl.el, dig.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 9.4 conductors and insulators: put a material between two crocodile clips ----------
  const MATERIALS = { copper: true, aluminium: true, steel: true, silver: true, plastic: false };
  S.define("conductors", {
    moving: true,
    title: "sim.conductors.title", intro: "sim.conductors.intro",
    tasks: [
      { ask: "sim.conductors.t1", done: "sim.conductors.d1", ok: function (s) { return s.mat === "copper"; } },
      { ask: "sim.conductors.t2", done: "sim.conductors.d2", ok: function (s) { return s.mat === "plastic"; } },
      { ask: "sim.conductors.t3", done: "sim.conductors.d3", ok: function (s) { return s.tested.length === 5; } }
    ],
    mount: function (body, changed, k) {
      const st = { mat: null, tested: [], phase: 0 };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      const svg = svgOf("0 0 320 180", k.t("sim.conductors.title"));
      pic.appendChild(svg);
      // closed loop path for the electrons (only when the material conducts)
      const loopPts = [[40, 40], [280, 40], [280, 140], [190, 140], [130, 140], [40, 140]];
      function along(f) {
        const segs = loopPts.map(function (p, i) { return [p, loopPts[(i + 1) % loopPts.length]]; });
        const lens = segs.map(function (s) { return Math.hypot(s[1][0] - s[0][0], s[1][1] - s[0][1]); });
        let d = f * lens.reduce(function (a, b) { return a + b; }, 0);
        for (let i = 0; i < segs.length; i++) {
          if (d <= lens[i]) { const t = d / lens[i]; return [segs[i][0][0] + (segs[i][1][0] - segs[i][0][0]) * t, segs[i][0][1] + (segs[i][1][1] - segs[i][0][1]) * t]; }
          d -= lens[i];
        }
        return loopPts[0];
      }
      function draw() {
        const on = st.mat != null && MATERIALS[st.mat];
        let s = "<polyline points='130,140 40,140 40,40 280,40 280,140 190,140' fill='none' stroke='currentColor' stroke-width='3'/>" +
          "<rect x='30' y='75' width='20' height='30' fill='#e0a526' stroke='currentColor'/><text x='60' y='95' font-size='11' fill='currentColor'>" + k.t("sim.conductors.cell") + "</text>" +
          "<circle cx='160' cy='40' r='14' fill='" + (on ? "#f2c418" : "#ddd") + "' stroke='currentColor'/>" +
          (on ? "<circle cx='160' cy='40' r='26' fill='#f2c418' opacity='0.3'/>" : "") +
          "<rect x='120' y='132' width='10' height='16' fill='#2e8b57'/><rect x='190' y='132' width='10' height='16' fill='#2e8b57'/>";
        if (st.mat) s += "<rect x='130' y='134' width='60' height='12' rx='3' fill='" + (MATERIALS[st.mat] ? "#b5651d" : "#7a5cc7") + "'/>";
        if (on) for (let j = 0; j < 10; j++) { const p = along((st.phase + j / 10) % 1); s += "<circle cx='" + p[0].toFixed(1) + "' cy='" + p[1].toFixed(1) + "' r='3' fill='#1f5ac8'/>"; }
        svg.innerHTML = s;
        read.textContent = st.mat ? k.t(on ? "sim.conductors.on" : "sim.conductors.off", { m: k.t("sim.conductors.m." + st.mat) }) : k.t("sim.conductors.pick");
      }
      k.loop(svg, function (dt) { if (st.mat && MATERIALS[st.mat]) { st.phase = (st.phase + dt * 0.15) % 1; draw(); } });
      const pick = k.buttons(k.t("sim.conductors.test"), Object.keys(MATERIALS).map(function (m) {
        return { act: m, label: k.t("sim.conductors.m." + m), value: m };
      }), function (m) {
        st.mat = m;
        if (st.tested.indexOf(m) === -1) st.tested = st.tested.concat([m]);
        draw();
        changed(st);
      });
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [pick.el]));
      body.appendChild(read);
      draw();
    }
  });
})();
