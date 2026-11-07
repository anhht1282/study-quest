// Algebra simulations for Math 7: a balance that solves equations by doing the same to both sides (2.5),
// a two-step function machine with its inverse (9.4) and the line y = mx + c with sliders for m and c (11.2).
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

  // ---------- 2.5 balance: x boxes and unit weights; whatever is done to one pan is done to the other ----------
  const EQS = [{ L: { x: 3, u: 4 }, R: { x: 0, u: 19 } }, { L: { x: 2, u: 7 }, R: { x: 1, u: 10 } }];
  const side = function (p) {
    const parts = [];
    if (p.x) parts.push((p.x === 1 ? "" : p.x) + "x");
    if (p.u || !p.x) parts.push(String(p.u));
    return parts.join(" + ");
  };
  const solved = function (s) { return !s.tilt && s.L.x === 1 && s.L.u === 0 && s.R.x === 0; };
  function panSvg(p, cx, cy) {
    let s = "<path d='M" + (cx - 70) + " " + cy + " Q" + cx + " " + (cy + 26) + " " + (cx + 70) + " " + cy + "' fill='none' stroke='currentColor' stroke-width='3'/>";
    for (let i = 0; i < p.x; i++) {
      s += "<rect x='" + (cx - 62 + i * 26) + "' y='" + (cy - 24) + "' width='22' height='22' rx='3' fill='#7a5cc7'/>" +
        "<text x='" + (cx - 51 + i * 26) + "' y='" + (cy - 8) + "' text-anchor='middle' font-size='13' font-weight='bold' fill='#fff'>x</text>";
    }
    for (let i = 0; i < p.u; i++) {
      const col = i % 10, row = Math.floor(i / 10);
      s += "<circle cx='" + (cx - 58 + p.x * 26 + col * 12) + "' cy='" + (cy - 7 - row * 12) + "' r='5' fill='#e0a526' stroke='currentColor' stroke-width='0.8'/>";
    }
    return s;
  }
  S.define("balance", {
    title: "sim.balance.title", intro: "sim.balance.intro",
    tasks: [
      { ask: "sim.balance.t1", done: "sim.balance.d1", ok: function (s) { return s.eq === 0 && !s.tilt && s.L.u === 0; } },
      { ask: "sim.balance.t2", done: "sim.balance.d2", ok: function (s) { return s.eq === 0 && solved(s); } },
      { ask: "sim.balance.t3", done: "sim.balance.d3", ok: function (s) { return s.tilt; } },
      { ask: "sim.balance.t4", done: "sim.balance.d4", ok: function (s) { return s.eq === 1 && solved(s); } }
    ],
    mount: function (body, changed, k) {
      const st = { eq: 0, L: null, R: null, tilt: false };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      function load(i) { st.eq = i; st.L = Object.assign({}, EQS[i].L); st.R = Object.assign({}, EQS[i].R); st.tilt = false; }
      function draw(note) {
        const a = st.tilt ? -6 : 0;
        const svg = svgOf("0 70 420 115", k.t("sim.balance.title"));
        svg.innerHTML = "<polygon points='200,175 220,175 210,95' fill='currentColor' opacity='0.6'/>" +
          "<g transform='rotate(" + a + " 210 95)'><line x1='90' y1='95' x2='330' y2='95' stroke='currentColor' stroke-width='4'/>" +
          "<line x1='90' y1='95' x2='90' y2='120' stroke='currentColor'/><line x1='330' y1='95' x2='330' y2='120' stroke='currentColor'/>" +
          panSvg(st.L, 90, 140) + panSvg(st.R, 330, 140) + "</g>";
        pic.innerHTML = "";
        pic.appendChild(svg);
        read.textContent = side(st.L) + (st.tilt ? " ≠ " : " = ") + side(st.R) + (note ? " · " + k.t(note) : "");
        read.classList.toggle("hit", solved(st));
      }
      function act(a) {
        let note = null;
        const L = st.L, R = st.R;
        if (a === "eq0" || a === "eq1" || a === "reset") load(a === "eq1" ? 1 : a === "eq0" ? 0 : st.eq);
        else if (st.tilt) note = "sim.balance.tilted";
        else if (a === "u2") { if (L.u > 0 && R.u > 0) { L.u -= 1; R.u -= 1; } else note = "sim.balance.no"; }
        else if (a === "x2") { if (L.x > 0 && R.x > 0) { L.x -= 1; R.x -= 1; } else note = "sim.balance.no"; }
        else if (a === "u1") { if (L.u < 20) { L.u += 1; st.tilt = true; } else note = "sim.balance.no"; }
        else if (a === "div") {
          if (L.u === 0 && R.x === 0 && L.x > 1 && R.u % L.x === 0) { R.u /= L.x; L.x = 1; } else note = "sim.balance.nodiv";
        }
        draw(note);
        changed(st);
      }
      const pick = k.buttons(k.t("sim.balance.eq"), [
        { act: "eq0", label: "3x + 4 = 19", value: "eq0" }, { act: "eq1", label: "2x + 7 = x + 10", value: "eq1" }
      ], act);
      const both = k.buttons(k.t("sim.balance.both"), [
        { act: "u2", label: k.t("sim.balance.u2"), value: "u2" }, { act: "x2", label: k.t("sim.balance.x2"), value: "x2" },
        { act: "div", label: k.t("sim.balance.div"), value: "div" }
      ], act);
      const other = k.buttons("", [
        { act: "u1", label: k.t("sim.balance.u1"), value: "u1" }, { act: "reset", label: "↺ " + k.t("sim.balance.reset"), value: "reset" }
      ], act);
      load(0);
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [pick.el, both.el, other.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 9.4 function machine "× 3 then + 2" and its inverse "− 2 then ÷ 3" ----------
  S.define("machine", {
    title: "sim.machine.title", intro: "sim.machine.intro",
    tasks: [
      { ask: "sim.machine.t1", done: "sim.machine.d1", ok: function (s) { return !s.inv && s.input === 4; } },
      { ask: "sim.machine.t2", done: "sim.machine.d2", ok: function (s) { return !s.inv && s.out === 23; } },
      { ask: "sim.machine.t3", done: "sim.machine.d3", ok: function (s) { return s.inv && s.input === 20; } }
    ],
    mount: function (body, changed, k) {
      const st = { inv: false, input: 1, out: 5 };
      const pic = k.h("div.sim-pic");
      function draw() {
        st.out = st.inv ? (st.input - 2) / 3 : 3 * st.input + 2;
        const steps = st.inv ? ["− 2", "÷ 3"] : ["× 3", "+ 2"];
        const box = function (x, label) {
          return "<rect x='" + x + "' y='40' width='90' height='56' rx='10' fill='#1f7a8c' opacity='0.9'/>" +
            "<text x='" + (x + 45) + "' y='75' text-anchor='middle' font-size='20' font-weight='bold' fill='#fff'>" + label + "</text>";
        };
        const svg = svgOf("0 0 520 130", k.t("sim.machine.title"));
        svg.innerHTML = "<g fill='currentColor' font-size='22' font-weight='bold'>" +
          "<text x='40' y='76' text-anchor='middle'>" + sign(st.input) + "</text>" +
          "<text x='475' y='76' text-anchor='middle'>" + sign(k.num(st.out, Number.isInteger(st.out) ? 0 : 2)) + "</text></g>" +
          "<g stroke='currentColor' stroke-width='2'><line x1='70' y1='68' x2='118' y2='68'/><line x1='210' y1='68' x2='290' y2='68'/>" +
          "<line x1='380' y1='68' x2='440' y2='68'/></g>" + box(120, steps[0]) + box(290, steps[1]) +
          "<text x='260' y='118' text-anchor='middle' font-size='13' fill='currentColor'>" + k.t(st.inv ? "sim.machine.backward" : "sim.machine.forward") + "</text>";
        pic.innerHTML = "";
        pic.appendChild(svg);
        sl.out.textContent = sign(st.input);
      }
      const sl = k.slider(k.t("sim.machine.in"), 0, 30, 1, st.input, function (v) { st.input = v; draw(); changed(st); }, "in");
      const mode = k.buttons(k.t("sim.machine.mode"), [
        { act: "fwd", label: k.t("sim.machine.forward"), value: false }, { act: "inv", label: k.t("sim.machine.backward"), value: true }
      ], function (v) {
        st.inv = v;
        mode.btns.forEach(function (b, i) { b.classList.toggle("on", (i === 1) === v); });
        draw();
        changed(st);
      });
      mode.btns[0].classList.add("on");
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [mode.el, sl.el]));
      draw();
    }
  });

  // ---------- 11.2 the line y = mx + c ----------
  const UNIT = 18, O = 130;
  S.define("linegraph", {
    title: "sim.linegraph.title", intro: "sim.linegraph.intro",
    tasks: [
      { ask: "sim.linegraph.t1", done: "sim.linegraph.d1", ok: function (s) { return s.m === 2 && s.c === 1; } },
      { ask: "sim.linegraph.t2", done: "sim.linegraph.d2", ok: function (s) { return s.m === 2 && s.c === -3; } },
      { ask: "sim.linegraph.t3", done: "sim.linegraph.d3", ok: function (s) { return s.m === 0; } },
      { ask: "sim.linegraph.t4", done: "sim.linegraph.d4", ok: function (s) { return s.m < 0 && s.c === 0; } }
    ],
    mount: function (body, changed, k) {
      const st = { m: 1, c: 0 };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      const px = function (x) { return O + x * UNIT; };
      const py = function (y) { return O - y * UNIT; };
      function draw() {
        let s = "";
        for (let i = -7; i <= 7; i++) {
          s += "<line x1='" + px(i) + "' y1='4' x2='" + px(i) + "' y2='256' stroke='currentColor' opacity='0.12'/>" +
            "<line x1='4' y1='" + py(i) + "' x2='256' y2='" + py(i) + "' stroke='currentColor' opacity='0.12'/>";
        }
        s += "<line x1='4' y1='" + O + "' x2='256' y2='" + O + "' stroke='currentColor'/><line x1='" + O + "' y1='4' x2='" + O + "' y2='256' stroke='currentColor'/>" +
          "<text x='250' y='" + (O - 6) + "' font-size='12' fill='currentColor'>x</text><text x='" + (O + 6) + "' y='14' font-size='12' fill='currentColor'>y</text>" +
          "<line x1='" + px(-8) + "' y1='" + py(st.m * -8 + st.c) + "' x2='" + px(8) + "' y2='" + py(st.m * 8 + st.c) + "' stroke='#e2674f' stroke-width='3'/>" +
          "<circle cx='" + px(0) + "' cy='" + py(st.c) + "' r='5' fill='#1f7a8c'/>";
        let table = "<text x='290' y='40' font-size='14' font-weight='bold' fill='currentColor'>x</text><text x='290' y='66' font-size='14' font-weight='bold' fill='currentColor'>y</text>";
        [-2, -1, 0, 1, 2].forEach(function (x, i) {
          table += "<text x='" + (330 + i * 44) + "' y='40' text-anchor='middle' font-size='14' fill='currentColor'>" + sign(x) + "</text>" +
            "<text x='" + (330 + i * 44) + "' y='66' text-anchor='middle' font-size='14' fill='currentColor'>" + sign(k.num(st.m * x + st.c, Number.isInteger(st.m * x) ? 0 : 1)) + "</text>";
        });
        const svg = svgOf("0 0 540 262", k.t("sim.linegraph.title"));
        svg.innerHTML = "<defs><clipPath id='lg-clip'><rect x='4' y='4' width='252' height='252'/></clipPath></defs>" +
          "<g clip-path='url(#lg-clip)'>" + s + "</g>" + table;
        pic.innerHTML = "";
        pic.appendChild(svg);
        const cTxt = st.c === 0 ? "" : (st.c > 0 ? " + " + st.c : " − " + -st.c);
        read.textContent = "y = " + (st.m === 0 ? (st.c === 0 ? "0" : sign(st.c)) : sign(k.num(st.m, Number.isInteger(st.m) ? 0 : 1)) + "x" + cTxt);
        mS.out.textContent = "m = " + sign(k.num(st.m, Number.isInteger(st.m) ? 0 : 1));
        cS.out.textContent = "c = " + sign(st.c);
      }
      const mS = k.slider(k.t("sim.linegraph.m"), -3, 3, 0.5, st.m, function (v) { st.m = v; draw(); changed(st); }, "m");
      const cS = k.slider(k.t("sim.linegraph.c"), -5, 5, 1, st.c, function (v) { st.c = v; draw(); changed(st); }, "c");
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [mS.el, cS.el]));
      body.appendChild(read);
      draw();
    }
  });
})();
