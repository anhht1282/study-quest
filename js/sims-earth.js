// Earth-science simulations for Science 7: follow a water drop round the water cycle (2.4), tides from the
// Earth's spin and the Moon (3.4: high tides 12 hours apart, high to low 6 hours), what happens where tectonic
// plates meet (6.4) and measuring depth with an echo (6.2: sound in water 1500 m/s; 0.2 s ↔ 150 m).
(function () {
  const S = MQ.sims;
  const NS = "http://www.w3.org/2000/svg";
  const svgOf = function (vb, label) {
    const s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", vb); s.setAttribute("role", "img"); s.setAttribute("aria-label", label);
    s.setAttribute("class", "sim-svg");
    return s;
  };

  // ---------- 2.4 water cycle: each process moves the drop from one place to another ----------
  const PLACES = { sea: [70, 170], vapour: [90, 100], cloud: [190, 40], land: [260, 140], snow: [330, 70], ground: [250, 190], river: [170, 160], leaf: [40, 120] };
  const MOVES = {
    evaporate: [["sea", "vapour"], ["river", "vapour"]], transpire: [["leaf", "vapour"]], condense: [["vapour", "cloud"]],
    rain: [["cloud", "land"]], snowfall: [["cloud", "snow"]], melt: [["snow", "river"]], runoff: [["land", "river"]],
    soak: [["land", "ground"]], flow: [["river", "sea"], ["ground", "sea"]], uptake: [["ground", "leaf"]]
  };
  S.define("watercycle", {
    title: "sim.watercycle.title", intro: "sim.watercycle.intro",
    tasks: [
      { ask: "sim.watercycle.t1", done: "sim.watercycle.d1", ok: function (s) { return s.at === "cloud"; } },
      { ask: "sim.watercycle.t2", done: "sim.watercycle.d2", ok: function (s) { return s.at === "sea" && s.trip.indexOf("runoff") !== -1; } },
      { ask: "sim.watercycle.t3", done: "sim.watercycle.d3", ok: function (s) { return s.at === "vapour" && s.last === "transpire"; } },
      { ask: "sim.watercycle.t4", done: "sim.watercycle.d4", ok: function (s) { return s.last === "melt"; } }
    ],
    mount: function (body, changed, k) {
      const st = { at: "sea", last: null, trip: [] };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      function draw(note) {
        const p = PLACES[st.at];
        const svg = svgOf("0 0 380 220", k.t("sim.watercycle.title"));
        svg.innerHTML = "<circle cx='350' cy='22' r='16' fill='#f2c418'/>" +
          "<rect x='0' y='160' width='150' height='60' fill='#3a7bd5' opacity='0.7'/>" +
          "<path d='M150,220 L150,150 Q220,120 290,130 L330,60 L380,110 L380,220 Z' fill='#7a9a4a' opacity='0.8'/>" +
          "<path d='M318,82 L330,60 L344,82 Z' fill='#fff'/><path d='M150,160 Q175,150 200,165' stroke='#3a7bd5' stroke-width='5' fill='none'/>" +
          "<rect x='150' y='185' width='230' height='35' fill='#8a6a3a' opacity='0.5'/>" +
          "<ellipse cx='190' cy='40' rx='44' ry='16' fill='#ddd'/><rect x='34' y='120' width='6' height='40' fill='#6b4a2a'/><circle cx='37' cy='112' r='14' fill='#2e8b57'/>" +
          "<circle cx='" + p[0] + "' cy='" + p[1] + "' r='8' fill='#1f5ac8' stroke='#fff' stroke-width='2'/>";
        pic.innerHTML = "";
        pic.appendChild(svg);
        read.textContent = k.t("sim.watercycle.at", { p: k.t("sim.watercycle.p." + st.at) }) + (note ? " · " + k.t(note) : "");
      }
      function go(proc) {
        const m = MOVES[proc].find(function (x) { return x[0] === st.at; });
        if (!m) { draw("sim.watercycle.cant"); return; }
        st.at = m[1]; st.last = proc; st.trip = st.trip.concat([proc]);
        if (st.at === "sea") st.trip = st.trip.slice(-12);
        draw();
        changed(st);
      }
      const ctl = k.buttons(k.t("sim.watercycle.do"), Object.keys(MOVES).map(function (p) {
        return { act: p, label: k.t("sim.watercycle.m." + p), value: p };
      }), go);
      const reset = k.buttons("", [{ act: "reset", label: "↺ " + k.t("sim.watercycle.reset"), value: 0 }], function () {
        st.at = "sea"; st.last = null; st.trip = []; draw();
      });
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [ctl.el, reset.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 3.4 tides: a point on the coast turns with the Earth; bulges face towards and away from the Moon ----------
  // high tide at 0, 12, 24 h and low tide at 6, 18 h; in between, the water is going out (falling) or coming in
  function tideLabel(h) {
    if (h % 12 === 0) return "sim.tides.high";
    if (h % 12 === 6) return "sim.tides.low";
    return h % 12 < 6 ? "sim.tides.falling" : "sim.tides.rising";
  }
  S.define("tides", {
    label: tideLabel,
    title: "sim.tides.title", intro: "sim.tides.intro",
    tasks: [
      { ask: "sim.tides.t1", done: "sim.tides.d1", ok: function (s) { return s.h % 24 === 0; } },
      { ask: "sim.tides.t2", done: "sim.tides.d2", ok: function (s) { return s.h === 12; } },
      { ask: "sim.tides.t3", done: "sim.tides.d3", ok: function (s) { return s.h === 6 || s.h === 18; } }
    ],
    mount: function (body, changed, k) {
      const st = { h: 3 };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      const level = function (h) { return Math.cos(4 * Math.PI * h / 24); };   // +1 high tide, −1 low tide
      function draw() {
        const a = 2 * Math.PI * st.h / 24;
        const px = 110 + 52 * Math.cos(a), py = 110 - 52 * Math.sin(a);
        let graph = "";
        for (let h = 0; h <= 24; h++) graph += (h ? " L" : "M") + (250 + h * 9) + "," + (110 - 30 * level(h)).toFixed(1);
        const svg = svgOf("0 0 490 220", k.t("sim.tides.title"));
        svg.innerHTML = "<ellipse cx='110' cy='110' rx='76' ry='58' fill='#3a7bd5' opacity='0.35'/>" +
          "<circle cx='110' cy='110' r='50' fill='#2e8b57'/><circle cx='" + px.toFixed(1) + "' cy='" + py.toFixed(1) + "' r='7' fill='#e2674f' stroke='#fff' stroke-width='2'/>" +
          "<circle cx='215' cy='110' r='14' fill='#bbb'/><text x='215' y='140' text-anchor='middle' font-size='12' fill='currentColor'>" + k.t("sim.tides.moon") + "</text>" +
          "<line x1='250' y1='110' x2='470' y2='110' stroke='currentColor' stroke-opacity='0.3'/><path d='" + graph + "' fill='none' stroke='#3a7bd5' stroke-width='3'/>" +
          "<circle cx='" + (250 + st.h * 9) + "' cy='" + (110 - 30 * level(st.h)).toFixed(1) + "' r='6' fill='#e2674f'/>" +
          "<text x='250' y='160' font-size='11' fill='currentColor'>0 h</text><text x='466' y='160' text-anchor='end' font-size='11' fill='currentColor'>24 h</text>";
        pic.innerHTML = "";
        pic.appendChild(svg);
        read.textContent = k.t("sim.tides.read", { h: st.h }) + " · " + k.t(tideLabel(st.h));
        sl.out.textContent = st.h + " h";
      }
      const sl = k.slider(k.t("sim.tides.time"), 0, 24, 1, st.h, function (v) { st.h = v; draw(); changed(st); }, "hour");
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [sl.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 6.4 plate boundaries ----------
  const RESULT = { push: { cc: "fold", oc: "subduction" }, apart: { cc: "volcano", oc: "volcano" }, slide: { cc: "quake", oc: "quake" } };
  S.define("plates", {
    title: "sim.plates.title", intro: "sim.plates.intro",
    tasks: [
      { ask: "sim.plates.t1", done: "sim.plates.d1", ok: function (s) { return s.result === "fold"; } },
      { ask: "sim.plates.t2", done: "sim.plates.d2", ok: function (s) { return s.result === "subduction"; } },
      { ask: "sim.plates.t3", done: "sim.plates.d3", ok: function (s) { return s.result === "volcano"; } },
      { ask: "sim.plates.t4", done: "sim.plates.d4", ok: function (s) { return s.result === "quake"; } }
    ],
    mount: function (body, changed, k) {
      const st = { kind: "cc", move: null, result: null };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      function draw() {
        const left = st.kind === "oc" ? "#3a7bd5" : "#b5651d";
        let mid = "";
        if (st.result === "fold") mid = "<path d='M150,90 L175,40 L200,75 L225,30 L250,90 Z' fill='#8a6a3a'/>";
        if (st.result === "subduction") mid = "<path d='M60,90 L200,90 L260,160 L230,160 L190,105 L60,105 Z' fill='" + left + "' opacity='0.8'/>";
        if (st.result === "volcano") mid = "<path d='M170,90 L200,45 L230,90 Z' fill='#6b4a2a'/><path d='M200,45 L194,20 M200,45 L206,18 M200,45 L200,15' stroke='#e2674f' stroke-width='4'/>";
        if (st.result === "quake") mid = "<path d='M200,60 L190,75 L210,85 L195,100' stroke='#e2674f' stroke-width='4' fill='none'/>";
        const arrows = { push: ["→", "←"], apart: ["←", "→"], slide: ["↑", "↓"] }[st.move] || ["", ""];
        const svg = svgOf("0 0 400 170", k.t("sim.plates.title"));
        svg.innerHTML = "<rect x='20' y='90' width='180' height='30' fill='" + left + "'/><rect x='200' y='90' width='180' height='30' fill='#b5651d'/>" +
          "<rect x='20' y='120' width='360' height='45' fill='#e0a526' opacity='0.4'/>" + mid +
          "<text x='110' y='112' text-anchor='middle' font-size='18' fill='#fff' font-weight='bold'>" + arrows[0] + "</text>" +
          "<text x='290' y='112' text-anchor='middle' font-size='18' fill='#fff' font-weight='bold'>" + arrows[1] + "</text>" +
          "<text x='200' y='160' text-anchor='middle' font-size='11' fill='currentColor'>" + k.t("sim.plates.mantle") + "</text>";
        pic.innerHTML = "";
        pic.appendChild(svg);
        read.textContent = st.result ? k.t("sim.plates.r." + st.result) : k.t("sim.plates.pick");
      }
      function move(m) { st.move = m; st.result = RESULT[m][st.kind]; draw(); changed(st); }
      const kind = k.buttons(k.t("sim.plates.kind"), [
        { act: "cc", label: k.t("sim.plates.cc"), value: "cc" }, { act: "oc", label: k.t("sim.plates.oc"), value: "oc" }
      ], function (v) { st.kind = v; st.move = null; st.result = null; kind.btns.forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-act") === v); }); draw(); });
      kind.btns[0].classList.add("on");
      const mv = k.buttons(k.t("sim.plates.move"), ["push", "apart", "slide"].map(function (m) {
        return { act: m, label: k.t("sim.plates.m." + m), value: m };
      }), move);
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [kind.el, mv.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 6.2 echo sounding: a pulse goes down to the fish and back ----------
  const V_WATER = 1500;
  S.define("echo", {
    moving: true,
    title: "sim.echo.title", intro: "sim.echo.intro",
    tasks: [
      { ask: "sim.echo.t1", done: "sim.echo.d1", ok: function (s) { return s.d === 150 && s.heard; } },
      { ask: "sim.echo.t2", done: "sim.echo.d2", ok: function (s) { return s.d === 300 && s.heard; } },
      { ask: "sim.echo.t3", done: "sim.echo.d3", ok: function (s) { return s.d === 750 && s.heard; } }
    ],
    mount: function (body, changed, k) {
      const st = { d: 450, heard: false, t: null };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      const svg = svgOf("0 0 300 230", k.t("sim.echo.title"));
      pic.appendChild(svg);
      const yOf = function (d) { return 40 + d / 800 * 180; };
      function draw() {
        const total = 2 * st.d / V_WATER;
        let pulse = "";
        if (st.t != null) {
          const f = st.t / total, depth = f < 0.5 ? f * 2 * st.d : (1 - f) * 2 * st.d;
          pulse = "<path d='M120," + yOf(depth).toFixed(1) + " q30,-10 60,0' stroke='#e2674f' stroke-width='3' fill='none'/>";
        }
        svg.innerHTML = "<rect x='0' y='38' width='300' height='192' fill='#3a7bd5' opacity='0.3'/>" +
          "<path d='M110,38 L190,38 L180,24 L120,24 Z' fill='#6b4a2a'/>" +
          "<g fill='#888'><ellipse cx='150' cy='" + yOf(st.d) + "' rx='14' ry='6'/><ellipse cx='175' cy='" + (yOf(st.d) + 8) + "' rx='12' ry='5'/><ellipse cx='128' cy='" + (yOf(st.d) + 7) + "' rx='11' ry='5'/></g>" +
          pulse + "<text x='10' y='" + yOf(st.d) + "' font-size='12' fill='currentColor'>" + st.d + " m</text>";
      }
      function ping() { st.t = 0; st.heard = false; read.textContent = k.t("sim.echo.sent"); }
      k.loop(svg, function (dt) {
        if (st.t == null) return;
        const total = 2 * st.d / V_WATER;
        st.t += dt * total / 1.5;         // the animation takes 1.5 s whatever the depth (time is slowed down)
        if (st.t >= total) {
          st.t = null; st.heard = true;
          read.textContent = k.t("sim.echo.read", { t: k.num(total, 2), d: st.d });
          changed(st);
        }
        draw();
      });
      const sl = k.slider(k.t("sim.echo.depth"), 50, 800, 25, st.d, function (v) {
        st.d = v; st.heard = false; st.t = null; sl.out.textContent = v + " m"; read.textContent = ""; draw();
      }, "depth");
      sl.out.textContent = st.d + " m";
      const btn = k.buttons("", [{ act: "ping", label: "🔊 " + k.t("sim.echo.ping"), value: 0 }], ping);
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [sl.el, btn.el]));
      body.appendChild(read);
      draw();
    }
  });
})();
