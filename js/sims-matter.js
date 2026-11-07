// Chemistry simulations: the pH scale with universal indicator and litmus (5.6), particles in solids, liquids
// and gases with a piston (2.1). Colours follow the Learner's Book: universal indicator red (strong acid), yellow
// (weak acid), green (neutral), blue (weak alkali), purple (strong alkali); litmus red / purple / blue.
(function () {
  const S = MQ.sims;
  const NS = "http://www.w3.org/2000/svg";
  const svgOf = function (vb, label) {
    const s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", vb); s.setAttribute("role", "img"); s.setAttribute("aria-label", label);
    s.setAttribute("class", "sim-svg");
    return s;
  };

  // ---------- 5.6 pH scale ----------
  // book colours at pH 1, 4, 7, 10, 13; the steps between are blended
  const UI = ["#c92a2a", "#e03131", "#f76707", "#fd9a2b", "#fcc419", "#d8e030", "#94d82d", "#40c057",
    "#20c997", "#22b8cf", "#339af0", "#4c6ef5", "#6741d9", "#7048e8", "#5f3dc4"];
  const BOOK = { 1: "sim.ph.e1", 4: "sim.ph.e4", 7: "sim.ph.e7", 10: "sim.ph.e10", 13: "sim.ph.e13" };
  S.define("ph", {
    title: "sim.ph.title", intro: "sim.ph.intro",
    tasks: [
      { ask: "sim.ph.t1", done: "sim.ph.d1", ok: function (s) { return s.ph === 7; } },
      { ask: "sim.ph.t2", done: "sim.ph.d2", ok: function (s) { return s.ph === 1; } },
      { ask: "sim.ph.t3", done: "sim.ph.d3", ok: function (s) { return s.ph === 10; } },
      { ask: "sim.ph.t4", done: "sim.ph.d4", ok: function (s) { return s.ph === 13; } }
    ],
    mount: function (body, changed, k) {
      const st = { ph: 4 };
      const pic = k.h("div.sim-pic");
      function draw() {
        const p = st.ph;
        const kind = p < 7 ? "acid" : p > 7 ? "alkali" : "neutral";
        const litmus = p < 7 ? "#e03131" : p > 7 ? "#1c7ed6" : "#9c36b5";
        let s = "<path d='M40 30 L40 170 Q40 196 66 196 Q92 196 92 170 L92 30' fill='none' stroke='currentColor' stroke-width='2'/>" +
          "<path d='M42 80 L42 170 Q42 194 66 194 Q90 194 90 170 L90 80 Z' fill='" + UI[p] + "' fill-opacity='0.85' stroke='none'/>" +
          "<rect x='124' y='60' width='22' height='110' rx='3' fill='" + litmus + "' fill-opacity='0.8' stroke='currentColor'/>";
        // the scale 0–14
        for (let i = 0; i <= 14; i++) {
          s += "<rect x='" + (180 + i * 25) + "' y='70' width='25' height='34' fill='" + UI[i] + "' fill-opacity='" + (i === p ? 1 : 0.75) + "' stroke='" + (i === p ? "currentColor" : "none") + "' stroke-width='3'/>" +
            "<text x='" + (192.5 + i * 25) + "' y='92' text-anchor='middle' font-size='12' font-weight='bold' fill='#fff' stroke='none'>" + i + "</text>";
          if (BOOK[i]) s += "<line x1='" + (192.5 + i * 25) + "' y1='104' x2='" + (192.5 + i * 25) + "' y2='118' stroke='currentColor'/>" +
            "<text x='" + (192.5 + i * 25) + "' y='132' text-anchor='middle' font-size='11' fill='currentColor' stroke='none'>" + k.t(BOOK[i]) + "</text>";
        }
        s += "<polygon points='" + (192.5 + p * 25) + ",66 " + (186 + p * 25) + ",54 " + (199 + p * 25) + ",54' fill='currentColor'/>" +
          "<g fill='currentColor' font-family='sans-serif' font-size='13'>" +
          "<text x='66' y='22' text-anchor='middle'>" + k.t("sim.ph.tube") + "</text>" +
          "<text x='135' y='186' text-anchor='middle'>" + k.t("sim.ph.litmus") + "</text>" +
          "<text x='180' y='40' font-weight='bold' font-size='16'>pH " + p + " · " + k.t("sim.ph." + kind) + "</text>" +
          "<text x='180' y='160'>← " + k.t("sim.ph.moreAcid") + "</text>" +
          "<text x='555' y='160' text-anchor='end'>" + k.t("sim.ph.moreAlkali") + " →</text></g>";
        const svg = svgOf("0 0 560 200", k.t("sim.ph.title"));
        svg.innerHTML = s;
        pic.innerHTML = "";
        pic.appendChild(svg);
        sl.out.textContent = "pH " + p;
      }
      const sl = k.slider(k.t("sim.ph.slider"), 0, 14, 1, st.ph, function (v) { st.ph = v; draw(); changed(st); }, "ph");
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [sl.el]));
      draw();
    }
  });

  // ---------- 2.1 particles in a solid, a liquid and a gas, with a piston ----------
  S.define("particles", {
    moving: true,
    title: "sim.particles.title", intro: "sim.particles.intro",
    tasks: [
      { ask: "sim.particles.t1", done: "sim.particles.d1", ok: function (s) { return s.mode === "solid"; } },
      { ask: "sim.particles.t2", done: "sim.particles.d2", ok: function (s) { return s.mode === "gas" && !s.press; } },
      { ask: "sim.particles.t3", done: "sim.particles.d3", ok: function (s) { return s.mode === "gas" && s.press; } },
      { ask: "sim.particles.t4", done: "sim.particles.d4", ok: function (s) { return s.mode === "liquid" && s.press; } }
    ],
    mount: function (body, changed, k) {
      const st = { mode: "liquid", press: false };
      const N = 36, r = 8, X0 = 30, X1 = 330, Y1 = 220;
      let top = 30;                      // piston position (inside top of the box)
      const svg = svgOf("0 0 560 240", k.t("sim.particles.title"));
      svg.innerHTML = "<rect x='" + (X0 - 4) + "' y='14' width='" + (X1 - X0 + 8) + "' height='" + (Y1 - 10) + "' fill='none' stroke='currentColor' stroke-width='3'/>" +
        "<rect class='piston' x='" + (X0 - 2) + "' width='" + (X1 - X0 + 4) + "' height='10' fill='currentColor' fill-opacity='0.5'/>" +
        "<line class='rod' x1='180' x2='180' y1='0' stroke='currentColor' stroke-width='6'/><g class='ps'></g>" +
        "<g fill='currentColor' font-family='sans-serif' font-size='13'><text class='info1' x='350' y='70' font-weight='bold' font-size='15'></text>" +
        "<text class='info2' x='350' y='100'></text><text class='info3' x='350' y='124'></text><text class='info4' x='350' y='170' fill='#e03131'></text></g>";
      const g = svg.querySelector(".ps");
      const ps = [];
      for (let i = 0; i < N; i++) {
        const c = document.createElementNS(NS, "circle");
        c.setAttribute("r", r); c.setAttribute("fill", "#1c7ed6"); c.setAttribute("fill-opacity", "0.6"); c.setAttribute("stroke", "currentColor");
        g.appendChild(c);
        ps.push({ el: c, x: X0 + 20 + (i % 12) * 24, y: Y1 - 20 - Math.floor(i / 12) * 18, vx: 0, vy: 0, hx: 0, hy: 0 });
      }
      const piston = svg.querySelector(".piston"), rod = svg.querySelector(".rod");
      const info = [1, 2, 3, 4].map(function (i) { return svg.querySelector(".info" + i); });
      function setMode(m) {
        st.mode = m;
        ps.forEach(function (p, i) {                           // solid: a fixed 6 × 6 lattice at the bottom
          p.hx = 180 - 2.5 * 2 * r - r + (i % 6) * 2 * r + r; p.hy = Y1 - r - Math.floor(i / 6) * 2 * r;
          const sp = m === "gas" ? 160 : 30, a = Math.random() * 2 * Math.PI;
          p.vx = sp * Math.cos(a); p.vy = sp * Math.sin(a);
          if (m === "solid") { p.x = p.hx; p.y = p.hy; }
        });
        text();
      }
      function text() {
        info[0].textContent = k.t("sim.particles." + st.mode);
        info[1].textContent = k.t("sim.particles." + st.mode + ".a");
        info[2].textContent = k.t("sim.particles." + st.mode + ".b");
        modes.btns.forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-act") === st.mode); });
        press.btns[0].classList.toggle("on", st.press);
      }
      const modes = k.buttons(k.t("sim.particles.state"), ["solid", "liquid", "gas"].map(function (m) {
        return { label: k.t("sim.particles." + m), value: m, act: m };
      }), function (m) { st.press = false; setMode(m); changed(st); });
      const press = k.buttons(null, [{ label: k.t("sim.particles.press"), value: 0, act: "press" }], function () {
        st.press = !st.press; text(); changed(st);
      });
      body.appendChild(k.h("div.sim-pic", [svg]));
      body.appendChild(k.h("div.sim-ctls", [modes.el, press.el]));
      setMode("liquid");
      k.loop(body, function (dt) {
        // pressed, the piston goes down to 170 (a gas is squeezed into a small space) but stops at the surface
        // of a solid or a liquid, measured when the press starts: their particles already touch
        if (st.press && st.surface == null) st.surface = ps.reduce(function (m, p) { return Math.min(m, p.y - r); }, Y1) - 2;
        if (!st.press) st.surface = null;
        const want = st.press ? 170 : 30;
        const limit = st.mode === "gas" || st.surface == null ? want : Math.min(want, st.surface);
        top += (limit - top) * Math.min(1, dt * 4);
        info[3].textContent = st.press && st.mode !== "gas" ? k.t("sim.particles.stuck") : "";
        piston.setAttribute("y", (top - 10).toFixed(1)); rod.setAttribute("y2", (top - 10).toFixed(1));
        ps.forEach(function (p) {
          if (st.mode === "solid") {                         // vibrate in place
            p.x = p.hx + (Math.random() - 0.5) * 2.4; p.y = p.hy + (Math.random() - 0.5) * 2.4;
          } else {
            if (st.mode === "liquid") { p.vy += 300 * dt; p.vx += (Math.random() - 0.5) * 60; p.vx *= 0.96; p.vy *= 0.96; }
            p.x += p.vx * dt; p.y += p.vy * dt;
            if (p.x < X0 + r) { p.x = X0 + r; p.vx = Math.abs(p.vx); }
            if (p.x > X1 - r) { p.x = X1 - r; p.vx = -Math.abs(p.vx); }
            if (p.y < top + r) { p.y = top + r; p.vy = Math.abs(p.vy); }
            if (p.y > Y1 - r) { p.y = Y1 - r; p.vy = -Math.abs(p.vy) * (st.mode === "liquid" ? 0.2 : 1); }
          }
        });
        if (st.mode === "liquid") {                          // touching particles push each other apart
          for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
            const a = ps[i], b = ps[j], dx = b.x - a.x, dy = b.y - a.y, d = Math.sqrt(dx * dx + dy * dy) || 0.01;
            if (d < 2 * r) { const push = (2 * r - d) / 2, ux = dx / d, uy = dy / d; a.x -= ux * push; a.y -= uy * push; b.x += ux * push; b.y += uy * push; }
          }
        }
        ps.forEach(function (p) { p.el.setAttribute("cx", p.x.toFixed(1)); p.el.setAttribute("cy", p.y.toFixed(1)); });
      });
    }
  });
})();
