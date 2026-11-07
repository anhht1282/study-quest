// Chemistry simulations for Science 7: heating water and its temperature–time graph (2.2: water boils at 100 °C and
// stays at 100 °C while it boils), separating mixtures by their properties (5.4) and neutralising an alkali with acid
// from a burette (8.2: pH about 13 at the start, 7 after 25 cm³, about 6 after 28 cm³). The heating rate is a model.
(function () {
  const S = MQ.sims;
  const NS = "http://www.w3.org/2000/svg";
  const svgOf = function (vb, label) {
    const s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", vb); s.setAttribute("role", "img"); s.setAttribute("aria-label", label);
    s.setAttribute("class", "sim-svg");
    return s;
  };

  // ---------- 2.2 heating water ----------
  const RATE_UP = 8, RATE_DOWN = 3, SEC_PER_MIN = 0.3, MAX_MIN = 30;
  S.define("heating", {
    moving: true,
    title: "sim.heating.title", intro: "sim.heating.intro",
    tasks: [
      { ask: "sim.heating.t1", done: "sim.heating.d1", ok: function (s) { return s.temp >= 100; } },
      { ask: "sim.heating.t2", done: "sim.heating.d2", ok: function (s) { return s.boilMin >= 3 && s.temp === 100; } },
      { ask: "sim.heating.t3", done: "sim.heating.d3", ok: function (s) { return s.boilMin >= 3 && !s.on && s.temp < 90; } }
    ],
    mount: function (body, changed, k) {
      const st = { start: 25, temp: 25, min: 0, on: false, boilMin: 0, pts: [[0, 25]] };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      const svg = svgOf("0 0 420 200", k.t("sim.heating.title"));
      pic.appendChild(svg);
      const span = function () { return Math.max(MAX_MIN, Math.ceil(st.min / 10) * 10); };
      const X = function (m) { return 40 + m / span() * 360; }, Y = function (t) { return 180 - t * 1.5; };
      function draw() {
        let s = "<line x1='40' y1='180' x2='400' y2='180' stroke='currentColor'/><line x1='40' y1='20' x2='40' y2='180' stroke='currentColor'/>" +
          "<line x1='40' y1='" + Y(100) + "' x2='400' y2='" + Y(100) + "' stroke='#e2674f' stroke-dasharray='5 4'/>" +
          "<text x='36' y='" + (Y(100) + 4) + "' text-anchor='end' font-size='11' fill='currentColor'>100</text>" +
          "<text x='36' y='184' text-anchor='end' font-size='11' fill='currentColor'>0</text>" +
          "<text x='400' y='196' text-anchor='end' font-size='11' fill='currentColor'>" + k.t("sim.heating.axis") + "</text>";
        s += "<polyline points='" + st.pts.map(function (p) { return X(p[0]).toFixed(1) + "," + Y(p[1]).toFixed(1); }).join(" ") + "' fill='none' stroke='#1f7a8c' stroke-width='3'/>";
        if (st.on) s += "<text x='60' y='34' font-size='14' fill='#e2674f'>🔥 " + k.t("sim.heating.onLabel") + "</text>";
        svg.innerHTML = s;
        read.textContent = k.t("sim.heating.read", { m: k.num(st.min, 1), t: k.num(st.temp, 0) }) + (st.temp >= 100 && st.on ? " · " + k.t("sim.heating.boiling") : "");
      }
      let acc = 0;
      k.loop(svg, function (dt) {
        if (!st.on && st.temp <= st.start + 0.01) return;
        const dm = dt / SEC_PER_MIN;
        st.min += dm;
        if (st.on) {
          if (st.temp >= 100) st.boilMin += dm;
          st.temp = Math.min(100, st.temp + RATE_UP * dm);
        } else st.temp = Math.max(st.start, st.temp - RATE_DOWN * dm);
        acc += dm;
        if (acc >= 0.5) { acc = 0; st.pts = st.pts.concat([[st.min, st.temp]]); changed(st); }
        draw();
      });
      const heat = k.buttons("", [{ act: "heat", label: "🔥 " + k.t("sim.heating.toggle"), value: 0 }], function () {
        st.on = !st.on; heat.btns[0].classList.toggle("on", st.on); draw(); changed(st);
      });
      const reset = k.buttons("", [{ act: "reset", label: "↺ " + k.t("sim.heating.reset"), value: 0 }], function () {
        Object.assign(st, { temp: st.start, min: 0, on: false, boilMin: 0, pts: [[0, st.start]] }); heat.btns[0].classList.remove("on"); draw();
      });
      const sl = k.slider(k.t("sim.heating.start"), 10, 40, 1, st.start, function (v) {
        st.start = v; Object.assign(st, { temp: v, min: 0, on: false, boilMin: 0, pts: [[0, v]] }); sl.out.textContent = v + " °C"; heat.btns[0].classList.remove("on"); draw();
      }, "start");
      sl.out.textContent = st.start + " °C";
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [heat.el, reset.el, sl.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 5.4 separating mixtures ----------
  function failed() {
    const row = {};
    ["filter", "evaporate", "distil", "magnet"].forEach(function (m) { row[m] = [null, "sim.separate.r.failed"]; });
    return row;
  }
  // result of each method on each mixture state: [new state, message key]
  const SEP = {
    sandsalt: { filter: ["filtered", "sim.separate.r.filter"], evaporate: ["mixedSolids", "sim.separate.r.mixed"], distil: ["mixedSolids", "sim.separate.r.mixed"], magnet: [null, "sim.separate.r.nothing"] },
    filtered: { evaporate: ["salt", "sim.separate.r.salt"], distil: ["salt", "sim.separate.r.salt"], filter: [null, "sim.separate.r.again"], magnet: [null, "sim.separate.r.nothing"] },
    dye: { distil: ["water", "sim.separate.r.water"], evaporate: ["dyeOnly", "sim.separate.r.lost"], filter: [null, "sim.separate.r.through"], magnet: [null, "sim.separate.r.nothing"] },
    mixedSolids: failed(), dyeOnly: failed(),
    ironsulfur: { magnet: ["iron", "sim.separate.r.iron"], filter: [null, "sim.separate.r.nothing"], evaporate: [null, "sim.separate.r.nothing"], distil: [null, "sim.separate.r.nothing"] }
  };
  S.define("separate", {
    table: SEP,
    title: "sim.separate.title", intro: "sim.separate.intro",
    tasks: [
      { ask: "sim.separate.t1", done: "sim.separate.d1", ok: function (s) { return s.state === "salt"; } },
      { ask: "sim.separate.t2", done: "sim.separate.d2", ok: function (s) { return s.state === "water"; } },
      { ask: "sim.separate.t3", done: "sim.separate.d3", ok: function (s) { return s.state === "iron"; } }
    ],
    mount: function (body, changed, k) {
      const st = { mix: "sandsalt", state: "sandsalt", note: null };
      const box = k.h("div.sim-pic.sim-key");
      function draw() {
        box.innerHTML = "";
        box.appendChild(k.h("p", [k.h("b", k.t("sim.separate.now") + " "), k.t("sim.separate.s." + st.state)]));
        if (st.note) box.appendChild(k.h("p.sim-read" + (["salt", "water", "iron"].indexOf(st.state) !== -1 ? ".hit" : ""), k.t(st.note)));
      }
      function use(method) {
        const row = SEP[st.state];
        const r = row && row[method];
        if (!r) st.note = "sim.separate.r.done";
        else { if (r[0]) st.state = r[0]; st.note = r[1]; }
        draw();
        changed(st);
      }
      const mix = k.buttons(k.t("sim.separate.mix"), ["sandsalt", "dye", "ironsulfur"].map(function (m) {
        return { act: m, label: k.t("sim.separate.s." + m), value: m };
      }), function (m) { st.mix = m; st.state = m; st.note = null; draw(); });
      const meth = k.buttons(k.t("sim.separate.method"), ["filter", "evaporate", "distil", "magnet"].map(function (m) {
        return { act: m, label: k.t("sim.separate.m." + m), value: m };
      }), use);
      body.appendChild(box);
      body.appendChild(k.h("div.sim-ctls", [mix.el, meth.el]));
      draw();
    }
  });

  // ---------- 8.2 neutralisation: acid from a burette into an alkali ----------
  const UI = ["#c92a2a", "#e03131", "#f76707", "#fd9a2b", "#fcc419", "#d8e030", "#94d82d", "#40c057",
    "#20c997", "#22b8cf", "#339af0", "#4c6ef5", "#6741d9", "#7048e8", "#5f3dc4"];
  // pH after v cm³ of acid: book points (0, 13), (25, 7), (28, about 6); the shape between them is a model
  function phOf(v) {
    if (v <= 24) return 13 - v / 24;
    if (v <= 25) return 12 - (v - 24) * 5;
    if (v <= 28) return 7 - (v - 25) / 3;
    return Math.max(5.5, 6 - (v - 28) * 0.1);
  }
  S.define("titration", {
    title: "sim.titration.title", intro: "sim.titration.intro",
    tasks: [
      { ask: "sim.titration.t1", done: "sim.titration.d1", ok: function (s) { return s.v >= 10 && s.v < 25; } },
      { ask: "sim.titration.t2", done: "sim.titration.d2", ok: function (s) { return s.v === 25; } },
      { ask: "sim.titration.t3", done: "sim.titration.d3", ok: function (s) { return s.v === 28; } }
    ],
    mount: function (body, changed, k) {
      const st = { v: 0 };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      function draw() {
        const ph = phOf(st.v), col = UI[Math.max(0, Math.min(14, Math.round(ph)))];
        const svg = svgOf("0 0 300 230", k.t("sim.titration.title"));
        svg.innerHTML = "<rect x='136' y='10' width='18' height='120' fill='none' stroke='currentColor'/>" +
          "<rect x='137' y='" + (11 + st.v / 50 * 118) + "' width='16' height='" + (118 - st.v / 50 * 118) + "' fill='#e03131' opacity='0.35'/>" +
          "<line x1='145' y1='130' x2='145' y2='150' stroke='currentColor' stroke-width='3'/>" +
          "<path d='M120,160 L170,160 L200,220 L90,220 Z' fill='" + col + "' fill-opacity='0.85' stroke='currentColor'/>" +
          "<text x='220' y='60' font-size='16' font-weight='bold' fill='currentColor'>pH " + k.num(ph, 1) + "</text>" +
          "<text x='220' y='84' font-size='12' fill='currentColor'>" + k.t(ph > 7.05 ? "sim.titration.alkali" : ph < 6.95 ? "sim.titration.acid" : "sim.titration.neutral") + "</text>";
        pic.innerHTML = "";
        pic.appendChild(svg);
        read.textContent = k.t("sim.titration.read", { v: k.num(st.v, st.v % 1 ? 1 : 0) });
      }
      function add(d) { st.v = d === 0 ? 0 : Math.min(40, Math.round((st.v + d) * 10) / 10); draw(); changed(st); }
      const ctl = k.buttons(k.t("sim.titration.add"), [
        { act: "a5", label: "+5 cm³", value: 5 }, { act: "a1", label: "+1 cm³", value: 1 }, { act: "a01", label: "+" + k.num(0.5, 1) + " cm³", value: 0.5 },
        { act: "reset", label: "↺", value: 0 }
      ], add);
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [ctl.el]));
      body.appendChild(read);
      draw();
    }
  });
})();
