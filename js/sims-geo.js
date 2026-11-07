// Geometry simulations for Math 7: a protractor with angles on a line / around a point (5.1), drawing a shape
// symmetric about a mirror line on a grid (8.1), translating / reflecting / rotating a triangle (14.3) and building
// a cuboid from unit cubes (15.4).
(function () {
  const S = MQ.sims;
  const NS = "http://www.w3.org/2000/svg";
  const svgOf = function (vb, label) {
    const s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", vb); s.setAttribute("role", "img"); s.setAttribute("aria-label", label);
    s.setAttribute("class", "sim-svg");
    return s;
  };
  const sign = function (v) { return String(v).replace("-", "−"); };
  const rad = function (d) { return d * Math.PI / 180; };

  // ---------- 5.1 protractor ----------
  const PC = { x: 200, y: 150 }, PR = 110;
  const ppt = function (deg, r) { return [(PC.x + r * Math.cos(rad(deg))).toFixed(1), (PC.y - r * Math.sin(rad(deg))).toFixed(1)]; };
  const seg = function (p, q, attrs) { return "<line x1='" + p[0] + "' y1='" + p[1] + "' x2='" + q[0] + "' y2='" + q[1] + "' " + attrs + "/>"; };
  function arc(from, to, r, col) {
    const a = ppt(from, r), b = ppt(to, r);
    return "<path d='M" + a.join(",") + " A" + r + "," + r + " 0 " + (to - from > 180 ? 1 : 0) + " 0 " + b.join(",") + "' fill='none' stroke='" + col + "' stroke-width='4'/>";
  }
  function protractorSvg(st) {
    let s = "<path d='M" + (PC.x - PR) + "," + PC.y + " A" + PR + "," + PR + " 0 0 1 " + (PC.x + PR) + "," + PC.y + "' fill='currentColor' fill-opacity='0.06' stroke='currentColor' stroke-opacity='0.4'/>";
    for (let d = 0; d <= 180; d += 10) {
      s += seg(ppt(d, PR), ppt(d, PR - (d % 30 ? 6 : 12)), "stroke='currentColor' stroke-opacity='0.5'");
      if (d % 30 === 0) s += "<text x='" + ppt(d, PR + 14)[0] + "' y='" + ppt(d, PR + 14)[1] + "' text-anchor='middle' font-size='10' fill='currentColor' opacity='0.7'>" + d + "</text>";
    }
    s += seg([PC.x, PC.y], [PC.x + 150, PC.y], "stroke='currentColor' stroke-width='3'");
    if (st.mode === "line") s += seg([PC.x, PC.y], [PC.x - 150, PC.y], "stroke='currentColor' stroke-width='3'");
    s += seg([PC.x, PC.y], ppt(st.a, 150), "stroke='#e2674f' stroke-width='3'");
    if (st.a > 0) s += arc(0, st.a, 40, "#e2674f");
    if (st.mode === "line" && st.a < 180) s += arc(st.a, 180, 55, "#1f7a8c");
    if (st.mode === "point") s += arc(st.a, 360, 55, "#1f7a8c");
    return s;
  }
  const kindOf = function (a) {
    return a === 0 ? "zero" : a < 90 ? "acute" : a === 90 ? "right" : a < 180 ? "obtuse" : a === 180 ? "straight" : a < 360 ? "reflex" : "full";
  };
  S.define("protractor", {
    title: "sim.protractor.title", intro: "sim.protractor.intro",
    tasks: [
      { ask: "sim.protractor.t1", done: "sim.protractor.d1", ok: function (s) { return s.mode === "one" && s.a === 135; } },
      { ask: "sim.protractor.t2", done: "sim.protractor.d2", ok: function (s) { return s.mode === "line" && s.a === 50; } },
      { ask: "sim.protractor.t3", done: "sim.protractor.d3", ok: function (s) { return s.mode === "point" && s.a === 70; } }
    ],
    mount: function (body, changed, k) {
      const st = { mode: "one", a: 40 };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      function draw() {
        const svg = svgOf("0 0 400 300", k.t("sim.protractor.title"));
        svg.innerHTML = protractorSvg(st);
        pic.innerHTML = "";
        pic.appendChild(svg);
        const other = st.mode === "line" ? 180 - st.a : st.mode === "point" ? 360 - st.a : null;
        read.textContent = st.a + "° (" + k.t("sim.protractor." + kindOf(st.a)) + ")" +
          (other == null ? "" : " · " + k.t("sim.protractor.other", { b: other, s: st.mode === "line" ? 180 : 360 }));
        sl.out.textContent = st.a + "°";
      }
      const sl = k.slider(k.t("sim.protractor.angle"), 0, 360, 5, st.a, function (v) {
        st.a = st.mode === "line" ? Math.min(v, 180) : v; draw(); changed(st);
      }, "angle");
      const modes = k.buttons(k.t("sim.protractor.mode"), ["one", "line", "point"].map(function (m) {
        return { act: m, label: k.t("sim.protractor.m." + m), value: m };
      }), function (m) {
        st.mode = m;
        if (m === "line") st.a = Math.min(st.a, 180);
        sl.input.max = m === "line" ? 180 : 360;   // on a line the angle can only go up to 180°
        sl.input.value = st.a;
        modes.btns.forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-act") === m); });
        draw();
        changed(st);
      });
      modes.btns[0].classList.add("on");
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [modes.el, sl.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 8.1 symmetry on a grid: tap squares; the faint squares show the mirror image ----------
  const N = 8;
  const symV = function (cells) { return cells.every(function (k) { const p = k.split("-"); return cells.indexOf(p[0] + "-" + (N - 1 - p[1])) !== -1; }); };
  const symH = function (cells) { return cells.every(function (k) { const p = k.split("-"); return cells.indexOf((N - 1 - p[0]) + "-" + p[1]) !== -1; }); };
  S.define("reflectgrid", {
    title: "sim.reflectgrid.title", intro: "sim.reflectgrid.intro",
    tasks: [
      { ask: "sim.reflectgrid.t1", done: "sim.reflectgrid.d1", ok: function (s) { return s.cells.length >= 4 && symV(s.cells); } },
      { ask: "sim.reflectgrid.t2", done: "sim.reflectgrid.d2", ok: function (s) { return s.cells.length >= 4 && symH(s.cells) && !symV(s.cells); } },
      { ask: "sim.reflectgrid.t3", done: "sim.reflectgrid.d3", ok: function (s) { return s.cells.length >= 4 && symH(s.cells) && symV(s.cells); } }
    ],
    mount: function (body, changed, k) {
      const st = { cells: [], mirror: "v" };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      const svg = svgOf("0 0 260 260", k.t("sim.reflectgrid.title"));
      pic.appendChild(svg);
      const image = function (r, c) { return st.mirror === "v" ? r + "-" + (N - 1 - c) : (N - 1 - r) + "-" + c; };
      function draw() {
        let s = "";
        for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
          const key = r + "-" + c, on = st.cells.indexOf(key) !== -1;
          const ghost = !on && st.cells.indexOf(image(r, c)) !== -1;
          s += "<rect data-cell='" + key + "' x='" + (10 + c * 30) + "' y='" + (10 + r * 30) + "' width='28' height='28' rx='3' fill='" +
            (on ? "#7a5cc7" : ghost ? "#7a5cc7" : "transparent") + "' fill-opacity='" + (ghost ? 0.25 : 1) + "' stroke='currentColor' stroke-opacity='0.3' style='cursor:pointer'/>";
        }
        s += st.mirror === "v" ? "<line x1='129' y1='4' x2='129' y2='256' stroke='#e2674f' stroke-width='3' stroke-dasharray='8 5'/>"
          : "<line x1='4' y1='129' x2='256' y2='129' stroke='#e2674f' stroke-width='3' stroke-dasharray='8 5'/>";
        svg.innerHTML = s;
        read.textContent = k.t("sim.reflectgrid.read", { n: st.cells.length }) + " · " +
          k.t(symV(st.cells) && st.cells.length ? "sim.reflectgrid.v.yes" : "sim.reflectgrid.v.no") + " · " +
          k.t(symH(st.cells) && st.cells.length ? "sim.reflectgrid.h.yes" : "sim.reflectgrid.h.no");
      }
      svg.addEventListener("click", function (e) {
        const key = e.target.getAttribute && e.target.getAttribute("data-cell");
        if (!key) return;
        const i = st.cells.indexOf(key);
        st.cells = i === -1 ? st.cells.concat([key]) : st.cells.filter(function (x) { return x !== key; });
        draw();
        changed(st);
      });
      const mirror = k.buttons(k.t("sim.reflectgrid.mirror"), [
        { act: "mv", label: k.t("sim.reflectgrid.mv"), value: "v" }, { act: "mh", label: k.t("sim.reflectgrid.mh"), value: "h" }
      ], function (m) { st.mirror = m; draw(); });
      const clear = k.buttons("", [{ act: "clear", label: "↺ " + k.t("sim.reflectgrid.clear"), value: 0 }], function () {
        st.cells = []; draw(); changed(st);
      });
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [mirror.el, clear.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 14.3 transformations of triangle ABC on a coordinate grid ----------
  const START = [[1, 2], [3, 2], [1, 4]];
  const TMAP = {
    left: function (q) { return [q[0] - 1, q[1]]; }, right: function (q) { return [q[0] + 1, q[1]]; },
    up: function (q) { return [q[0], q[1] + 1]; }, down: function (q) { return [q[0], q[1] - 1]; },
    rx: function (q) { return [q[0], -q[1]]; }, ry: function (q) { return [-q[0], q[1]]; }, rot: function (q) { return [-q[1], q[0]]; }
  };
  // grid −7..7, the original triangle (grey) and the moved one (red) with vertex A labelled
  function transformSvg(p) {
    const U = 18, O = 130;
    const X = function (x) { return O + x * U; }, Y = function (y) { return O - y * U; };
    const poly = function (pts, fill, op) {
      return "<polygon points='" + pts.map(function (q) { return X(q[0]) + "," + Y(q[1]); }).join(" ") + "' fill='" + fill + "' fill-opacity='" + op + "' stroke='" + fill + "' stroke-width='2'/>";
    };
    let s = "";
    for (let i = -7; i <= 7; i++) {
      s += "<line x1='" + X(i) + "' y1='4' x2='" + X(i) + "' y2='256' stroke='currentColor' opacity='0.12'/><line x1='4' y1='" + Y(i) + "' x2='256' y2='" + Y(i) + "' stroke='currentColor' opacity='0.12'/>";
    }
    return s + "<line x1='4' y1='" + O + "' x2='256' y2='" + O + "' stroke='currentColor'/><line x1='" + O + "' y1='4' x2='" + O + "' y2='256' stroke='currentColor'/>" +
      poly(START, "#888", 0.15) + poly(p, "#e2674f", 0.45) +
      "<circle cx='" + X(p[0][0]) + "' cy='" + Y(p[0][1]) + "' r='4' fill='currentColor'/><text x='" + (X(p[0][0]) + 6) + "' y='" + (Y(p[0][1]) - 6) + "' font-size='13' font-weight='bold' fill='currentColor'>A</text>";
  }
  S.define("transform", {
    title: "sim.transform.title", intro: "sim.transform.intro",
    tasks: [
      { ask: "sim.transform.t1", done: "sim.transform.d1", ok: function (s) { return s.onlyMoves && s.p[0][0] === 4 && s.p[0][1] === 2; } },
      { ask: "sim.transform.t2", done: "sim.transform.d2", ok: function (s) { return s.last === "rx"; } },
      { ask: "sim.transform.t3", done: "sim.transform.d3", ok: function (s) { return s.p.every(function (q, i) { return q[0] === -START[i][0] && q[1] === -START[i][1]; }); } }
    ],
    mount: function (body, changed, k) {
      const st = { p: START.map(function (q) { return q.slice(); }), last: null, onlyMoves: true };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      function draw(note) {
        const svg = svgOf("0 0 260 260", k.t("sim.transform.title"));
        svg.innerHTML = transformSvg(st.p);
        pic.innerHTML = "";
        pic.appendChild(svg);
        read.textContent = "A(" + sign(st.p[0][0]) + "; " + sign(st.p[0][1]) + ")" + (note ? " · " + k.t(note) : "");
      }
      function act(a) {
        let note = null;
        if (a === "reset") { st.p = START.map(function (q) { return q.slice(); }); st.onlyMoves = true; st.last = null; }
        else {
          const next = st.p.map(TMAP[a]);
          if (next.every(function (q) { return Math.abs(q[0]) <= 6 && Math.abs(q[1]) <= 6; })) {
            st.p = next;
            st.last = a;
            if (["rx", "ry", "rot"].indexOf(a) !== -1) st.onlyMoves = false;
          } else note = "sim.transform.edge";
        }
        draw(note);
        changed(st);
      }
      const move = k.buttons(k.t("sim.transform.move"), [
        { act: "left", label: "←", value: "left" }, { act: "right", label: "→", value: "right" },
        { act: "up", label: "↑", value: "up" }, { act: "down", label: "↓", value: "down" }
      ], act);
      const other = k.buttons("", [
        { act: "rx", label: k.t("sim.transform.rx"), value: "rx" }, { act: "ry", label: k.t("sim.transform.ry"), value: "ry" },
        { act: "rot", label: k.t("sim.transform.rot"), value: "rot" }, { act: "reset", label: "↺", value: "reset" }
      ], act);
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [move.el, other.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 15.4 a cuboid built from unit cubes ----------
  S.define("cuboid", {
    title: "sim.cuboid.title", intro: "sim.cuboid.intro",
    tasks: [
      { ask: "sim.cuboid.t1", done: "sim.cuboid.d1", ok: function (s) { return s.v === 24; } },
      { ask: "sim.cuboid.t2", done: "sim.cuboid.d2", ok: function (s) { return s.shapes24.length >= 2; } },
      { ask: "sim.cuboid.t3", done: "sim.cuboid.d3", ok: function (s) { return s.v === 64 && s.l === s.w && s.w === s.h; } },
      { ask: "sim.cuboid.t4", done: "sim.cuboid.d4", ok: function (s) { return s.v === 24 && s.sa === 52; } }
    ],
    mount: function (body, changed, k) {
      const st = { l: 2, w: 2, h: 2, v: 8, sa: 24, shapes24: [] };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      const iso = function (x, y, z) { return [200 + (x - y) * 16, 200 + (x + y) * 9 - z * 18]; };
      const face = function (pts, fill) {
        return "<polygon points='" + pts.map(function (p) { return p[0].toFixed(1) + "," + p[1].toFixed(1); }).join(" ") + "' fill='" + fill + "' stroke='#1b2438' stroke-width='0.6'/>";
      };
      function cube(x, y, z) {
        return face([iso(x, y, z + 1), iso(x + 1, y, z + 1), iso(x + 1, y + 1, z + 1), iso(x, y + 1, z + 1)], "#f2c418") +
          face([iso(x, y + 1, z), iso(x + 1, y + 1, z), iso(x + 1, y + 1, z + 1), iso(x, y + 1, z + 1)], "#d99a1e") +
          face([iso(x + 1, y, z), iso(x + 1, y + 1, z), iso(x + 1, y + 1, z + 1), iso(x + 1, y, z + 1)], "#b5651d");
      }
      function draw() {
        st.v = st.l * st.w * st.h;
        st.sa = 2 * (st.l * st.w + st.l * st.h + st.w * st.h);
        let s = "";
        for (let z = 0; z < st.h; z++) for (let y = 0; y < st.w; y++) for (let x = 0; x < st.l; x++) s += cube(x, y, z);
        const svg = svgOf("80 80 240 240", k.t("sim.cuboid.title"));   // fits 6 × 6 × 6
        svg.innerHTML = s;
        pic.innerHTML = "";
        pic.appendChild(svg);
        read.textContent = k.t("sim.cuboid.read", { l: st.l, w: st.w, h: st.h, v: st.v, sa: st.sa });
        if (st.v === 24) {
          const key = [st.l, st.w, st.h].sort().join("×");
          if (st.shapes24.indexOf(key) === -1) st.shapes24 = st.shapes24.concat([key]);
        }
      }
      const mk = function (key, lab) {
        return k.slider(lab, 1, 6, 1, st[key], function (v) { st[key] = v; draw(); sls[key].out.textContent = v; changed(st); }, key);
      };
      const sls = { l: mk("l", k.t("sim.cuboid.l")), w: mk("w", k.t("sim.cuboid.w")), h: mk("h", k.t("sim.cuboid.h")) };
      Object.keys(sls).forEach(function (key) { sls[key].out.textContent = st[key]; });
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [sls.l.el, sls.w.el, sls.h.el]));
      body.appendChild(read);
      draw();
    }
  });
})();
