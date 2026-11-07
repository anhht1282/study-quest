// Integer simulations for Math 7 unit 1.1: a number line where the learner jumps by adding / subtracting positive
// and negative numbers (the marker slides, so ⏸ is offered), and +/− counters that cancel in zero pairs.
(function () {
  const S = MQ.sims;
  const NS = "http://www.w3.org/2000/svg";
  const svgOf = function (vb, label) {
    const s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", vb); s.setAttribute("role", "img"); s.setAttribute("aria-label", label);
    s.setAttribute("class", "sim-svg");
    return s;
  };
  const minus = function (v) { return String(v).replace("-", "−"); };

  // ---------- number line: jumps of ±2 / ±5, adding a negative, subtracting a negative ----------
  const START = 2, LO = -10, HI = 10;
  const JUMPS = [
    { act: "p2", label: "+ 2", d: 2, kind: "plus" }, { act: "p5", label: "+ 5", d: 5, kind: "plus" },
    { act: "m2", label: "− 2", d: -2, kind: "minus" },
    { act: "pn2", label: "+ (−2)", d: -2, kind: "addneg" }, { act: "pn5", label: "+ (−5)", d: -5, kind: "addneg" },
    { act: "mn2", label: "− (−2)", d: 2, kind: "subneg" }
  ];
  S.define("numberline", {
    moving: true,
    title: "sim.numberline.title", intro: "sim.numberline.intro",
    tasks: [
      { ask: "sim.numberline.t1", done: "sim.numberline.d1", ok: function (s) { return s.pos === -4 && s.onlyAddNeg; } },
      { ask: "sim.numberline.t2", done: "sim.numberline.d2", ok: function (s) { return s.last === "subneg"; } },
      { ask: "sim.numberline.t3", done: "sim.numberline.d3", ok: function (s) { return s.pos === 6 && s.noPlus && s.moves > 0; } }
    ],
    mount: function (body, changed, k) {
      const st = { pos: START, last: null, onlyAddNeg: true, noPlus: true, moves: 0 };
      let shown = START;
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      const svg = svgOf("0 0 640 130", k.t("sim.numberline.title"));
      pic.appendChild(svg);
      const xOf = function (v) { return 30 + (v - LO) * 29; };
      function draw() {
        let s = "<line x1='20' y1='80' x2='620' y2='80' stroke='currentColor' stroke-width='2'/>";
        for (let v = LO; v <= HI; v++) {
          s += "<line x1='" + xOf(v) + "' y1='" + (v === 0 ? 70 : 74) + "' x2='" + xOf(v) + "' y2='" + (v === 0 ? 90 : 86) + "' stroke='currentColor'/>" +
            "<text x='" + xOf(v) + "' y='106' text-anchor='middle' font-size='12' fill='currentColor'>" + minus(v) + "</text>";
        }
        s += "<circle cx='" + xOf(START) + "' cy='80' r='4' fill='none' stroke='#888'/>" +
          "<g transform='translate(" + xOf(shown) + ",0)'><polygon points='0,72 -9,52 9,52' fill='#e2674f'/>" +
          "<circle cy='42' r='13' fill='#e2674f'/><text y='47' text-anchor='middle' font-size='13' font-weight='bold' fill='#fff'>" +
          minus(st.pos) + "</text></g>";
        svg.innerHTML = s;
      }
      function jump(j) {
        const next = st.pos + j.d;
        if (next < LO || next > HI) { read.textContent = k.t("sim.numberline.edge"); return; }
        read.textContent = minus(st.pos) + " " + j.label + " = " + minus(next);
        st.pos = next; st.last = j.kind; st.moves += 1;
        if (j.kind !== "addneg") st.onlyAddNeg = false;
        if (j.kind === "plus") st.noPlus = false;
        if (st.pos === -4 && !st.onlyAddNeg) read.textContent += " · " + k.t("sim.numberline.hint1");
        changed(st);
      }
      function reset() {
        Object.assign(st, { pos: START, last: null, onlyAddNeg: true, noPlus: true, moves: 0 });
        read.textContent = k.t("sim.numberline.reset.done");
      }
      const ctl = k.buttons(k.t("sim.numberline.jump"), JUMPS.map(function (j) { return { act: j.act, label: j.label, value: j }; }), jump);
      const again = k.buttons("", [{ act: "reset", label: "↺ " + k.t("sim.numberline.reset"), value: 0 }], reset);
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [ctl.el, again.el]));
      body.appendChild(read);
      draw();
      k.loop(svg, function (dt) {
        if (Math.abs(shown - st.pos) < 0.01) { if (shown !== st.pos) { shown = st.pos; draw(); } return; }
        shown += (st.pos - shown) * Math.min(1, dt * 8);
        draw();
      });
    }
  });

  // ---------- +/− counters: a + and a − cancel (zero pair) ----------
  const MAX_TOKENS = 20;
  S.define("counters", {
    title: "sim.counters.title", intro: "sim.counters.intro",
    tasks: [
      { ask: "sim.counters.t1", done: "sim.counters.d1", ok: function (s) { return s.plus - s.minus === -3 && s.plus + s.minus >= 5; } },
      { ask: "sim.counters.t2", done: "sim.counters.d2", ok: function (s) { return s.last === "pair" && s.removed > 0; } },
      { ask: "sim.counters.t3", done: "sim.counters.d3", ok: function (s) { return s.plus - s.minus === 5 && s.minus >= 3; } }
    ],
    mount: function (body, changed, k) {
      const st = { plus: 2, minus: 0, last: null, removed: 0 };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      function token(x, y, plus) {
        return "<circle cx='" + x + "' cy='" + y + "' r='17' fill='" + (plus ? "#f2b705" : "#c2453d") + "' stroke='currentColor' stroke-width='1.5'/>" +
          "<text x='" + x + "' y='" + (y + 6) + "' text-anchor='middle' font-size='20' font-weight='bold' fill='" + (plus ? "#3a2a00" : "#fff") + "'>" + (plus ? "+" : "−") + "</text>";
      }
      function draw() {
        let s = "<text x='10' y='22' font-size='14' fill='currentColor'>" + k.t("sim.counters.plusRow") + "</text>" +
          "<text x='10' y='92' font-size='14' fill='currentColor'>" + k.t("sim.counters.minusRow") + "</text>";
        for (let i = 0; i < st.plus; i++) s += token(30 + i * 40, 50, true);
        for (let i = 0; i < st.minus; i++) s += token(30 + i * 40, 120, false);
        const svg = svgOf("0 0 640 150", k.t("sim.counters.title"));
        svg.innerHTML = s;
        pic.innerHTML = "";
        pic.appendChild(svg);
        read.textContent = k.t("sim.counters.value", { p: st.plus, m: st.minus, v: minus(st.plus - st.minus) });
      }
      function act(a) {
        const total = st.plus + st.minus;
        st.last = a; st.removed = 0;
        if (a === "plus" && total < MAX_TOKENS && st.plus < 15) st.plus += 1;
        if (a === "minus" && total < MAX_TOKENS && st.minus < 15) st.minus += 1;
        if (a === "zero" && total <= MAX_TOKENS - 2 && st.plus < 15 && st.minus < 15) { st.plus += 1; st.minus += 1; }
        if (a === "unplus" && st.plus > 0) st.plus -= 1;
        if (a === "unminus" && st.minus > 0) st.minus -= 1;
        if (a === "pair") { st.removed = Math.min(st.plus, st.minus); st.plus -= st.removed; st.minus -= st.removed; }
        draw();
        changed(st);
      }
      const add = k.buttons(k.t("sim.counters.add"), [
        { act: "plus", label: "+1", value: "plus" }, { act: "minus", label: "−1", value: "minus" },
        { act: "zero", label: k.t("sim.counters.zero"), value: "zero" }
      ], act);
      const take = k.buttons(k.t("sim.counters.take"), [
        { act: "unplus", label: "+", value: "unplus" }, { act: "unminus", label: "−", value: "unminus" },
        { act: "pair", label: k.t("sim.counters.pair"), value: "pair" }
      ], act);
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [add.el, take.el]));
      body.appendChild(read);
      draw();
    }
  });
})();
