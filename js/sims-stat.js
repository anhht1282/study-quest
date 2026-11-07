// Statistics and probability simulations for Math 7: a spinner experiment comparing relative frequency with the
// theoretical probability (13.3) — chance is the subject of the lesson here, never a reward — and five data
// values the learner changes to watch the mean, median, mode and range move (16.6).
(function () {
  const S = MQ.sims;
  const NS = "http://www.w3.org/2000/svg";
  const svgOf = function (vb, label) {
    const s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", vb); s.setAttribute("role", "img"); s.setAttribute("aria-label", label);
    s.setAttribute("class", "sim-svg");
    return s;
  };

  // ---------- 13.3 spinner with 4 equal parts, 1 or 2 of them red ----------
  const COLORS = ["#c2453d", "#1f7a8c", "#e0a526", "#2e8b57"];
  S.define("spinner", {
    title: "sim.spinner.title", intro: "sim.spinner.intro",
    tasks: [
      { ask: "sim.spinner.t1", done: "sim.spinner.d1", ok: function (s) { return s.n >= 10; } },
      { ask: "sim.spinner.t2", done: "sim.spinner.d2", ok: function (s) { return s.reds === 1 && s.n >= 100; } },
      { ask: "sim.spinner.t3", done: "sim.spinner.d3", ok: function (s) { return s.reds === 2 && s.n >= 50; } }
    ],
    mount: function (body, changed, k) {
      const st = { reds: 1, n: 0, red: 0, last: 0 };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      const colorOf = function (i) { return i < st.reds ? COLORS[0] : COLORS[i]; };
      function draw() {
        let s = "";
        for (let i = 0; i < 4; i++) {
          const a0 = i * Math.PI / 2, a1 = (i + 1) * Math.PI / 2;
          s += "<path d='M90,90 L" + (90 + 70 * Math.cos(a0)) + "," + (90 - 70 * Math.sin(a0)) + " A70,70 0 0 0 " +
            (90 + 70 * Math.cos(a1)) + "," + (90 - 70 * Math.sin(a1)) + " Z' fill='" + colorOf(i) + "' stroke='#fff' stroke-width='2'/>";
        }
        const a = (st.last + 0.5) * Math.PI / 2;
        s += "<line x1='90' y1='90' x2='" + (90 + 58 * Math.cos(a)) + "' y2='" + (90 - 58 * Math.sin(a)) + "' stroke='currentColor' stroke-width='4' stroke-linecap='round'/>" +
          "<circle cx='90' cy='90' r='6' fill='currentColor'/>";
        // bar: relative frequency of red vs theoretical probability
        const p = st.reds / 4, f = st.n ? st.red / st.n : 0;
        s += "<rect x='200' y='40' width='280' height='22' fill='none' stroke='currentColor' stroke-opacity='0.4'/>" +
          "<rect x='200' y='40' width='" + (280 * f) + "' height='22' fill='#c2453d'/>" +
          "<line x1='" + (200 + 280 * p) + "' y1='30' x2='" + (200 + 280 * p) + "' y2='72' stroke='currentColor' stroke-width='3' stroke-dasharray='4 3'/>" +
          "<text x='200' y='96' font-size='13' fill='currentColor'>" + k.t("sim.spinner.bar", { f: k.num(f, 2), p: k.num(p, 2) }) + "</text>";
        const svg = svgOf("0 0 500 180", k.t("sim.spinner.title"));
        svg.innerHTML = s;
        pic.innerHTML = "";
        pic.appendChild(svg);
        read.textContent = k.t("sim.spinner.read", { n: st.n, r: st.red });
      }
      function spin(times) {
        for (let i = 0; i < times; i++) {
          st.last = Math.floor(Math.random() * 4);
          st.n += 1;
          if (st.last < st.reds) st.red += 1;
        }
        draw();
        changed(st);
      }
      const go = k.buttons(k.t("sim.spinner.spin"), [
        { act: "s1", label: "× 1", value: 1 }, { act: "s10", label: "× 10", value: 10 }, { act: "s100", label: "× 100", value: 100 }
      ], spin);
      const kind = k.buttons(k.t("sim.spinner.kind"), [
        { act: "r1", label: k.t("sim.spinner.r1"), value: 1 }, { act: "r2", label: k.t("sim.spinner.r2"), value: 2 }
      ], function (r) { st.reds = r; st.n = 0; st.red = 0; draw(); changed(st); });
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [go.el, kind.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 16.6 five data values: mean, median, mode, range ----------
  function stats(values) {
    const v = values.slice().sort(function (a, b) { return a - b; });
    const count = {};
    v.forEach(function (x) { count[x] = (count[x] || 0) + 1; });
    const top = Math.max.apply(null, Object.keys(count).map(function (x) { return count[x]; }));
    const modes = top > 1 ? Object.keys(count).filter(function (x) { return count[x] === top; }).map(Number) : [];
    return { mean: v.reduce(function (a, b) { return a + b; }, 0) / v.length, median: v[2], range: v[4] - v[0], modes: modes };
  }
  S.define("datastats", {
    title: "sim.datastats.title", intro: "sim.datastats.intro",
    tasks: [
      { ask: "sim.datastats.t1", done: "sim.datastats.d1", ok: function (s) { return s.st.mean === 10; } },
      { ask: "sim.datastats.t2", done: "sim.datastats.d2", ok: function (s) { return s.st.mean === 10 && s.st.median === 8; } },
      { ask: "sim.datastats.t3", done: "sim.datastats.d3", ok: function (s) { return s.st.range === 15 && s.st.median === 10; } }
    ],
    mount: function (body, changed, k) {
      const st = { v: [3, 8, 8, 12, 14], st: null };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      const X = function (x) { return 20 + x * 22; };
      function draw() {
        st.st = stats(st.v);
        const heights = {};
        let s = "<line x1='14' y1='120' x2='" + X(20) + "' y2='120' stroke='currentColor'/>";
        for (let x = 0; x <= 20; x += 2) s += "<text x='" + X(x) + "' y='138' text-anchor='middle' font-size='11' fill='currentColor'>" + x + "</text>";
        st.v.forEach(function (x) {
          heights[x] = (heights[x] || 0) + 1;
          s += "<circle cx='" + X(x) + "' cy='" + (120 - heights[x] * 16) + "' r='7' fill='#1f7a8c'/>";
        });
        s += "<line x1='" + X(st.st.mean) + "' y1='20' x2='" + X(st.st.mean) + "' y2='124' stroke='#e2674f' stroke-width='2' stroke-dasharray='5 3'/>" +
          "<text x='" + X(st.st.mean) + "' y='16' text-anchor='middle' font-size='11' fill='#e2674f'>" + k.t("sim.datastats.meanTag") + "</text>";
        const svg = svgOf("0 0 480 146", k.t("sim.datastats.title"));
        svg.innerHTML = s;
        pic.innerHTML = "";
        pic.appendChild(svg);
        read.textContent = k.t("sim.datastats.read", {
          mean: k.num(st.st.mean, Number.isInteger(st.st.mean) ? 0 : 1), median: st.st.median, range: st.st.range,
          mode: st.st.modes.length ? st.st.modes.join(", ") : k.t("sim.datastats.nomode")
        });
      }
      const sliders = st.v.map(function (x, i) {
        const sl = k.slider(k.t("sim.datastats.value", { i: i + 1 }), 0, 20, 1, x, function (v) {
          st.v[i] = v; sl.out.textContent = v; draw(); changed(st);
        }, "v" + i);
        sl.out.textContent = x;
        return sl;
      });
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", sliders.map(function (x) { return x.el; })));
      body.appendChild(read);
      draw();
    }
  });

  if (typeof module !== "undefined") module.exports = { stats: stats };
})();
