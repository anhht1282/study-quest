// Physics simulations: series circuit (9.5), weight on the planets (3.1), eclipses (6.5), sound waves (6.1).
// Numbers come from the Learner's Book: 1 cell + 1 lamp = 1.4 A, two cells double it, two lamps halve it;
// gravitational field strengths in N/kg; the Moon takes 28 days to go round the Earth; sound in air ≈ 343 m/s.
(function () {
  const S = MQ.sims;
  const NS = "http://www.w3.org/2000/svg";
  const svgOf = function (vb, label) {
    const s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", vb); s.setAttribute("role", "img"); s.setAttribute("aria-label", label);
    s.setAttribute("class", "sim-svg");
    return s;
  };

  // ---------- 9.5 series circuit ----------
  S.define("circuit", {
    moving: true,
    title: "sim.circuit.title", intro: "sim.circuit.intro",
    tasks: [
      { ask: "sim.circuit.t1", done: "sim.circuit.d1", ok: function (s) { return s.closed && s.cells === 1 && s.lamps === 1; } },
      { ask: "sim.circuit.t2", done: "sim.circuit.d2", ok: function (s) { return s.closed && s.cells === 2 && s.lamps === 1; } },
      { ask: "sim.circuit.t3", done: "sim.circuit.d3", ok: function (s) { return s.closed && s.cells === 1 && s.lamps === 2; } },
      { ask: "sim.circuit.t4", done: "sim.circuit.d4", ok: function (s) { return s.closed && s.cells === 2 && s.lamps === 2; } }
    ],
    mount: function (body, changed, k) {
      const st = { cells: 1, lamps: 1, closed: false };
      const amps = function () { return st.closed ? 1.4 * st.cells / st.lamps : 0; };
      const svg = svgOf("0 0 640 260", k.t("sim.circuit.title"));
      svg.innerHTML = "<g class='circ'></g><g class='sim-electrons'></g><g class='gauge'></g><line class='needle' stroke='#e03131' stroke-width='3' stroke-linecap='round'/>" +
        "<circle cx='550' cy='150' r='5' fill='#e03131'/><text class='gauge-read' x='550' y='205' text-anchor='middle' font-family='sans-serif' font-size='22' font-weight='bold' fill='currentColor'></text>";
      const circ = svg.querySelector(".circ");
      const electrons = svg.querySelector(".sim-electrons");
      const needle = svg.querySelector(".needle");
      const gaugeRead = svg.querySelector(".gauge-read");
      const reading = k.h("p.sim-read");
      let pos = 0, shown = 0, prev = null;
      // the circuit loop: top (left → right), right side down, bottom (right → left), left side up
      const L = 60, R = 420, T = 50, B = 210, P = 2 * (R - L) + 2 * (B - T);
      const at = function (d) {
        d = ((d % P) + P) % P;
        if (d < R - L) return [L + d, T];
        d -= R - L; if (d < B - T) return [R, T + d];
        d -= B - T; if (d < R - L) return [R - d, B];
        d -= R - L; return [L, B - d];
      };
      for (let i = 0; i < 18; i++) {
        const c = document.createElementNS(NS, "circle");
        c.setAttribute("r", "4.5"); c.setAttribute("fill", "#1c7ed6"); c.setAttribute("stroke", "#fff"); c.setAttribute("stroke-width", "1");
        electrons.appendChild(c);
      }
      // needle ammeter 0–3 A, like the book's ammeter scales
      const ang = function (a) { return Math.PI * (1 - Math.min(3, a) / 3); };
      let gs = "<path d='M480 150 A70 70 0 0 1 620 150' fill='none' stroke='currentColor' stroke-width='2'/>";
      for (let v = 0; v <= 3.001; v += 0.5) {
        const a = ang(v), big = Math.abs(v - Math.round(v)) < 0.01, r2 = big ? 58 : 63;
        gs += "<line x1='" + (550 + 70 * Math.cos(a)).toFixed(1) + "' y1='" + (150 - 70 * Math.sin(a)).toFixed(1) + "' x2='" + (550 + r2 * Math.cos(a)).toFixed(1) +
          "' y2='" + (150 - r2 * Math.sin(a)).toFixed(1) + "' stroke='currentColor' stroke-width='2'/>";
        if (big) gs += "<text x='" + (550 + 46 * Math.cos(a)).toFixed(1) + "' y='" + (155 - 46 * Math.sin(a)).toFixed(1) +
          "' text-anchor='middle' font-family='sans-serif' font-size='13' fill='currentColor'>" + v + "</text>";
      }
      gs += "<text x='550' y='120' text-anchor='middle' font-family='sans-serif' font-size='15' font-weight='bold' fill='currentColor'>A</text>" +
        "<text x='550' y='60' text-anchor='middle' font-family='sans-serif' font-size='12' fill='currentColor'>" + k.t("sim.circuit.ammeter") + "</text>";
      svg.querySelector(".gauge").innerHTML = gs;

      function place() {
        [].slice.call(electrons.childNodes).forEach(function (c, i) {
          const p = at(pos + (i * P) / 18);
          c.setAttribute("cx", p[0].toFixed(1)); c.setAttribute("cy", p[1].toFixed(1));
        });
        const a = ang(shown);
        needle.setAttribute("x1", 550); needle.setAttribute("y1", 150);
        needle.setAttribute("x2", (550 + 62 * Math.cos(a)).toFixed(1)); needle.setAttribute("y2", (150 - 62 * Math.sin(a)).toFixed(1));
      }
      const ln = function (x1, y1, x2, y2, extra) {
        return "<line x1='" + x1 + "' y1='" + y1 + "' x2='" + x2 + "' y2='" + y2 + "'" + (extra || "") + "/>";
      };
      function draw() {
        const I = amps(), glow = Math.min(1, I / 2.8);
        let s = "<g stroke='currentColor' stroke-width='3' fill='none'>";
        // top wire with the cells (long thin line = +, short thick line = −)
        const cw = 34, cx0 = 240 - (st.cells * cw) / 2;
        s += ln(L, T, cx0 + 8, T);
        for (let i = 0; i < st.cells; i++) {
          const x = cx0 + i * cw + 8;
          s += ln(x, T - 20, x, T + 20) + ln(x + 12, T - 10, x + 12, T + 10, " stroke-width='7'");
          if (i < st.cells - 1) s += ln(x + 12, T, x + cw, T);
        }
        s += ln(cx0 + (st.cells - 1) * cw + 20, T, R, T);
        // right side with the ammeter in series
        s += ln(R, T, R, 112) + ln(R, 148, R, B) + "<circle cx='" + R + "' cy='130' r='18' style='fill:var(--card)'/>";
        // bottom wire with the lamps: brighter glow and longer rays for a bigger current
        const lw = 100, lx0 = 240 - ((st.lamps - 1) * lw) / 2;
        s += ln(R, B, lx0 + (st.lamps - 1) * lw + 16, B);
        for (let i = 0; i < st.lamps; i++) {
          const x = lx0 + i * lw;
          if (glow > 0) {
            s += "<circle cx='" + x + "' cy='" + B + "' r='" + (18 + 22 * glow) + "' fill='#fab005' fill-opacity='" + (0.15 + 0.6 * glow).toFixed(2) + "' stroke='none'/>";
            for (let j = 0; j < 8; j++) {
              const a = (j * Math.PI) / 4, r1 = 22 + 20 * glow, r2 = r1 + 4 + 12 * glow;
              s += ln((x + r1 * Math.cos(a)).toFixed(1), (B + r1 * Math.sin(a)).toFixed(1), (x + r2 * Math.cos(a)).toFixed(1), (B + r2 * Math.sin(a)).toFixed(1),
                " stroke='#f59f00' stroke-width='2.5'");
            }
          }
          s += "<circle cx='" + x + "' cy='" + B + "' r='16' style='fill:var(--card)'/>" +
            ln(x - 11, B - 11, x + 11, B + 11, " stroke-width='2'") + ln(x - 11, B + 11, x + 11, B - 11, " stroke-width='2'");
          if (i < st.lamps - 1) s += ln(x + 16, B, x + lw - 16, B);
        }
        s += ln(lx0 - 16, B, L, B);
        // left side with the switch: an orange lever between two contacts (click it)
        s += ln(L, B, L, 155) + ln(L, 105, L, T) + "</g>" +
          (st.closed ? ln(L, 155, L, 105, " stroke='#e8590c' stroke-width='5' stroke-linecap='round'")
            : ln(L, 155, L - 30, 114, " stroke='#e8590c' stroke-width='5' stroke-linecap='round'")) +
          "<g fill='currentColor' stroke='none' font-family='sans-serif' font-size='13'>" +
          "<circle cx='" + L + "' cy='155' r='5'/><circle cx='" + L + "' cy='105' r='5'/>" +
          "<text x='" + R + "' y='135' text-anchor='middle' font-weight='bold' font-size='15'>A</text>" +
          "<text x='" + (cx0 + 4) + "' y='" + (T - 26) + "' font-size='15' font-weight='bold'>+</text>" +
          "<text x='" + (L + 12) + "' y='126' font-weight='bold' fill='#e8590c'>" + k.t(st.closed ? "sim.circuit.closed" : "sim.circuit.opened") + "</text></g>" +
          "<rect x='" + (L - 45) + "' y='95' width='75' height='70' fill='transparent' stroke='none' style='cursor:pointer' data-act='switch'/>";
        circ.innerHTML = s;
        circ.querySelector("[data-act='switch']").addEventListener("click", function () { st.closed = !st.closed; update(); });
        gaugeRead.textContent = k.num(I, 1) + " A";
        let change = "";
        if (prev != null && Math.abs(prev - I) > 1e-9) {
          const ratio = prev > 0 ? I / prev : 0;
          const how = Math.abs(ratio - 2) < 1e-9 ? k.t("sim.circuit.x2") : Math.abs(ratio - 0.5) < 1e-9 ? k.t("sim.circuit.half") : "";
          change = " · " + k.num(prev, 1) + " A → " + k.num(I, 1) + " A " + (I > prev ? "▲" : "▼") + (how ? " " + how : "");
        }
        reading.textContent = k.t(st.closed ? "sim.circuit.read" : "sim.circuit.open", { a: k.num(I, 1), c: st.cells, l: st.lamps }) + change;
        reading.className = "sim-read" + (change ? " hit" : "");
        prev = I;
        place();
      }
      const sw = k.buttons(null, [{ label: k.t("sim.circuit.toggle"), value: 0, act: "switch" }], function () { st.closed = !st.closed; update(); });
      const cells = k.buttons(k.t("sim.circuit.cells"), [{ label: "−", value: -1, act: "cells-" }, { label: "+", value: 1, act: "cells+" }],
        function (v) { st.cells = Math.max(1, Math.min(2, st.cells + v)); update(); });
      const lamps = k.buttons(k.t("sim.circuit.lamps"), [{ label: "−", value: -1, act: "lamps-" }, { label: "+", value: 1, act: "lamps+" }],
        function (v) { st.lamps = Math.max(1, Math.min(2, st.lamps + v)); update(); });
      function update() { draw(); changed(st); }
      body.appendChild(k.h("div.sim-pic", [svg]));
      body.appendChild(reading);
      body.appendChild(k.h("div.sim-ctls", [sw.el, cells.el, lamps.el, k.h("span.tiny", k.t("sim.circuit.limit"))]));
      draw();
      // electrons move from the − terminal round to + (faster for a bigger current); the needle swings to the reading
      k.loop(body, function (dt) {
        pos += dt * 70 * amps() / 1.4;
        shown += (amps() - shown) * Math.min(1, dt * 5);
        place();
      });
    }
  });

  // ---------- 3.1 weight on the planets ----------
  const PLANETS = [["moon", 1.6, "#adb5bd"], ["mercury", 3.7, "#a0703c"], ["venus", 8.9, "#f59f00"], ["earth", 10, "#2b8a3e"],
    ["mars", 3.7, "#e8590c"], ["jupiter", 25, "#d9480f"], ["saturn", 10, "#fab005"], ["uranus", 8.7, "#3bc9db"], ["neptune", 11, "#4263eb"]];
  S.define("weight", {
    title: "sim.weight.title", intro: "sim.weight.intro",
    tasks: [
      { ask: "sim.weight.t1", done: "sim.weight.d1", ok: function (s) { return s.p === "earth" && s.m === 10; } },
      { ask: "sim.weight.t2", done: "sim.weight.d2", ok: function (s) { return s.p === "moon"; },
        vars: function (s) { return { m: s.m, w: S.num(s.m * 1.6, 1) }; } },
      { ask: "sim.weight.t3", done: "sim.weight.d3", ok: function (s) { return s.p === "jupiter"; } },
      { ask: "sim.weight.t4", done: "sim.weight.d4", ok: function (s) { return s.p === "saturn"; } }
    ],
    mount: function (body, changed, k) {
      const st = { m: 30, p: "earth" };
      const pic = k.h("div.sim-pic");
      function draw() {
        const pl = PLANETS.find(function (x) { return x[0] === st.p; });
        const g = pl[1], W = st.m * g;
        const len = 18 + Math.min(150, (W / 2500) * 150);
        const box = 26 + st.m * 0.3;
        const name = k.t("sim.p." + st.p);
        const n1 = function (x) { return k.num(x, Math.round(x * 10) % 10 ? 1 : 0); };   // 100 N, 16 N, 3,7 N/kg
        const svg = svgOf("0 0 560 250", k.t("sim.weight.title"));
        svg.innerHTML =
          "<path d='M0 250 Q140 196 280 196 L280 250 Z' fill='" + pl[2] + "' fill-opacity='0.5' stroke='currentColor' stroke-width='1.5'/>" +
          "<rect x='" + (130 - box / 2) + "' y='" + (196 - box) + "' width='" + box + "' height='" + box + "' rx='4' fill='#7048e8' fill-opacity='0.35' stroke='currentColor' stroke-width='1.5'/>" +
          "<line x1='130' y1='" + (196 - box / 2) + "' x2='130' y2='" + (196 - box / 2 + len - 10) + "' stroke='#e03131' stroke-width='4'/>" +
          "<polygon points='130," + (196 - box / 2 + len) + " 122," + (196 - box / 2 + len - 13) + " 138," + (196 - box / 2 + len - 13) + "' fill='#e03131'/>" +
          "<g fill='currentColor' font-family='sans-serif' font-size='13'>" +
          "<text x='130' y='" + (196 - box - 8) + "' text-anchor='middle' font-weight='bold'>m = " + st.m + " kg</text>" +
          "<text x='300' y='40' font-weight='bold' font-size='16'>" + name + "</text>" +
          "<text x='300' y='70'>" + k.t("sim.weight.g", { g: n1(g) }) + "</text>" +
          "<text x='300' y='104' font-weight='bold' font-size='16' fill='#e03131'>W = m × g = " + st.m + " × " + n1(g) + " = " + n1(W) + " N</text>" +
          "<text x='300' y='138'>" + k.t("sim.weight.mass", { m: st.m }) + "</text>" +
          "<text x='150' y='" + Math.min(240, 196 - box / 2 + len / 2 + 6) + "' fill='#e03131'>W</text></g>";
        pic.innerHTML = "";
        pic.appendChild(svg);
        mass.out.textContent = st.m + " kg";
        planets.btns.forEach(function (b, i) { b.classList.toggle("on", PLANETS[i][0] === st.p); });
      }
      const mass = k.slider(k.t("sim.weight.slider"), 1, 100, 1, st.m, function (v) { st.m = v; draw(); changed(st); }, "mass");
      const planets = k.buttons(null, PLANETS.map(function (p) { return { label: k.t("sim.p." + p[0]), value: p[0], act: "p-" + p[0] }; }),
        function (v) { st.p = v; draw(); changed(st); });
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [mass.el, planets.el]));
      draw();
    }
  });

  // ---------- 6.5 solar and lunar eclipses (top view, not to scale) ----------
  S.define("eclipse", {
    title: "sim.eclipse.title", intro: "sim.eclipse.intro",
    tasks: [
      { ask: "sim.eclipse.t1", done: "sim.eclipse.d1", ok: function (s) { return s.kind === "solar"; } },
      { ask: "sim.eclipse.t2", done: "sim.eclipse.d2", ok: function (s) { return s.kind === "lunar"; } },
      { ask: "sim.eclipse.t3", done: "sim.eclipse.d3", ok: function (s) { return s.kind === "solar"; } }
    ],
    mount: function (body, changed, k) {
      const st = { day: 7, kind: "none" };
      const pic = k.h("div.sim-pic");
      const status = k.h("p.sim-read");
      const EX = 360, EY = 130, R = 110;
      function draw() {
        const a = Math.PI + (2 * Math.PI * st.day) / 28;     // day 0: Moon between Sun and Earth
        const mx = EX + R * Math.cos(a), my = EY + R * Math.sin(a);
        st.kind = Math.abs(my - EY) < 12 ? (mx < EX ? "solar" : "lunar") : "none";
        let s = "<circle cx='-60' cy='130' r='120' fill='#fab005' fill-opacity='0.6' stroke='currentColor' stroke-width='1.5'/>";
        for (let y = 40; y <= 220; y += 30) s += "<line x1='62' y1='" + y + "' x2='540' y2='" + y + "' stroke='#fab005' stroke-width='1' stroke-dasharray='6 6' stroke-opacity='0.7'/>";
        s += "<polygon points='" + EX + "," + (EY - 34) + " 560," + (EY - 16) + " 560," + (EY + 16) + " " + EX + "," + (EY + 34) + "' fill='currentColor' fill-opacity='0.18' stroke='none'/>" +
          "<circle cx='" + EX + "' cy='" + EY + "' r='" + R + "' fill='none' stroke='currentColor' stroke-dasharray='4 5' stroke-opacity='0.5'/>" +
          "<circle cx='" + EX + "' cy='" + EY + "' r='34' fill='#1c7ed6' fill-opacity='0.55' stroke='currentColor' stroke-width='1.5'/>";
        if (st.kind === "solar") s += "<polygon points='" + (mx + 4) + "," + (my - 11) + " " + (EX - 31) + "," + (EY - 4) + " " + (EX - 31) + "," + (EY + 4) + " " + (mx + 4) + "," + (my + 11) + "' fill='currentColor' fill-opacity='0.55'/>";
        s += "<circle cx='" + mx.toFixed(1) + "' cy='" + my.toFixed(1) + "' r='11' fill='" + (st.kind === "lunar" ? "#495057" : "#ced4da") + "' stroke='currentColor' stroke-width='1.5'/>" +
          "<g fill='currentColor' font-family='sans-serif' font-size='13'><text x='18' y='24' font-weight='bold'>" + k.t("sim.eclipse.sun") + "</text>" +
          "<text x='" + EX + "' y='" + (EY + 54) + "' text-anchor='middle' font-weight='bold'>" + k.t("sim.eclipse.earth") + "</text>" +
          "<text x='" + mx.toFixed(1) + "' y='" + (my - 16).toFixed(1) + "' text-anchor='middle'>" + k.t("sim.eclipse.moon") + "</text>" +
          "<text x='545' y='245' text-anchor='end' font-size='11'>" + k.t("sim.eclipse.scale") + "</text></g>";
        const svg = svgOf("0 0 560 250", k.t("sim.eclipse.title"));
        svg.innerHTML = s;
        pic.innerHTML = "";
        pic.appendChild(svg);
        day.out.textContent = k.t("sim.eclipse.day", { d: st.day });
        status.textContent = k.t("sim.eclipse." + st.kind);
        status.className = "sim-read" + (st.kind === "none" ? "" : " hit");
      }
      const day = k.slider(k.t("sim.eclipse.slider"), 0, 28, 1, st.day, function (v) { st.day = v; draw(); changed(st); }, "day");
      body.appendChild(pic);
      body.appendChild(status);
      body.appendChild(k.h("div.sim-ctls", [day.el]));
      draw();
    }
  });

  // ---------- 6.1 sound waves: loudness, pitch, vacuum ----------
  S.define("sound", {
    moving: true,
    title: "sim.sound.title", intro: "sim.sound.intro",
    tasks: [
      { ask: "sim.sound.t1", done: "sim.sound.d1", ok: function (s) { return s.amp === 3 && !s.vac; } },
      { ask: "sim.sound.t2", done: "sim.sound.d2", ok: function (s) { return s.pitch === 3 && !s.vac; } },
      { ask: "sim.sound.t3", done: "sim.sound.d3", ok: function (s) { return s.vac; } }
    ],
    mount: function (body, changed, k) {
      const st = { amp: 2, pitch: 1, vac: false };
      const svg = svgOf("0 0 560 200", k.t("sim.sound.title"));
      const dots = [];
      let html = "<rect x='14' y='70' width='26' height='60' fill='currentColor' fill-opacity='0.25' stroke='currentColor'/>" +
        "<polygon class='cone' points='40,70 74,40 74,160 40,130' fill='currentColor' fill-opacity='0.12' stroke='currentColor' stroke-width='1.5'/>" +
        "<g class='air'></g><text class='ear-t' x='550' y='190' text-anchor='end' font-family='sans-serif' font-size='13' fill='currentColor'></text>" +
        "<text x='530' y='110' font-size='30' text-anchor='middle'>👂</text>";
      svg.innerHTML = html;
      const air = svg.querySelector(".air");
      for (let c = 0; c < 42; c++) {
        for (let r = 0; r < 6; r++) {
          const d = document.createElementNS(NS, "circle");
          d.setAttribute("r", "3"); d.setAttribute("fill", "currentColor"); d.setAttribute("cy", 40 + r * 24 + (c % 2) * 6);
          air.appendChild(d);
          dots.push({ el: d, x0: 90 + c * 10 });
        }
      }
      const cone = svg.querySelector(".cone");
      const earT = svg.querySelector(".ear-t");
      let time = 0;
      function label() {
        air.style.display = st.vac ? "none" : "";
        earT.textContent = st.vac ? k.t("sim.sound.silent") :
          k.t("sim.sound.hear", { l: k.t("sim.sound.l." + st.amp), p: k.t("sim.sound.p." + st.pitch) });
        loud.btns.forEach(function (b, i) { b.classList.toggle("on", i + 1 === st.amp); });
        high.btns.forEach(function (b, i) { b.classList.toggle("on", i + 1 === st.pitch); });
        vac.btns[0].classList.toggle("on", st.vac);
      }
      const loud = k.buttons(k.t("sim.sound.loud"), [1, 2, 3].map(function (v) { return { label: k.t("sim.sound.l." + v), value: v, act: "amp" + v }; }),
        function (v) { st.amp = v; label(); changed(st); });
      const high = k.buttons(k.t("sim.sound.pitch"), [1, 2, 3].map(function (v) { return { label: k.t("sim.sound.p." + v), value: v, act: "pitch" + v }; }),
        function (v) { st.pitch = v; label(); changed(st); });
      const vac = k.buttons(null, [{ label: k.t("sim.sound.vac"), value: 0, act: "vac" }], function () { st.vac = !st.vac; label(); changed(st); });
      body.appendChild(k.h("div.sim-pic", [svg]));
      body.appendChild(k.h("div.sim-ctls", [loud.el, high.el, vac.el]));
      label();
      // particles move backwards and forwards; the wave always travels at the same speed
      k.loop(body, function (dt) {
        time += dt;
        const A = 2.5 * st.amp, w = 2 * Math.PI * 0.7 * st.pitch, v = 110;
        cone.setAttribute("transform", "translate(" + (A * Math.sin(w * time)).toFixed(2) + " 0)");
        if (st.vac) return;
        dots.forEach(function (d) {
          d.el.setAttribute("cx", (d.x0 + A * Math.sin(w * (time - (d.x0 - 74) / v))).toFixed(2));
        });
      });
    }
  });
})();
