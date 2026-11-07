// Sequence simulation for Math 7 unit 9.2: matchstick patterns. A row of n squares uses 3n + 1 sticks, a row of
// n triangles uses 2n + 1; the learner changes n and watches the count grow by the same amount each time.
(function () {
  const S = MQ.sims;
  const NS = "http://www.w3.org/2000/svg";
  const SHAPES = {
    squares: { sticks: function (n) { return 3 * n + 1; } },
    triangles: { sticks: function (n) { return 2 * n + 1; } }
  };

  function stick(x1, y1, x2, y2) {
    return "<line x1='" + x1 + "' y1='" + y1 + "' x2='" + x2 + "' y2='" + y2 + "' stroke='#c77d0a' stroke-width='5' stroke-linecap='round'/>" +
      "<circle cx='" + x2 + "' cy='" + y2 + "' r='3.5' fill='#c2453d'/>";
  }
  function drawSquares(n, size) {
    let s = stick(10, 10, 10, 10 + size);
    for (let i = 0; i < n; i++) {
      const x = 10 + i * size;
      s += stick(x, 10, x + size, 10) + stick(x, 10 + size, x + size, 10 + size) + stick(x + size, 10, x + size, 10 + size);
    }
    return s;
  }
  function drawTriangles(n, size) {
    const hgt = size * 0.87;
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = 10 + (i * size) / 2;
      if (i % 2 === 0) {
        if (i === 0) s += stick(x, 10 + hgt, x + size / 2, 10);
        s += stick(x + size / 2, 10, x + size, 10 + hgt) + stick(x, 10 + hgt, x + size, 10 + hgt);
      } else {
        s += stick(x, 10, x + size, 10) + stick(x + size, 10, x + size / 2, 10 + hgt);
      }
    }
    return s;
  }

  S.define("matchsticks", {
    title: "sim.matchsticks.title", intro: "sim.matchsticks.intro",
    tasks: [
      { ask: "sim.matchsticks.t1", done: "sim.matchsticks.d1", ok: function (s) { return s.shape === "squares" && s.n === 4; } },
      { ask: "sim.matchsticks.t2", done: "sim.matchsticks.d2", ok: function (s) { return s.shape === "squares" && s.sticks === 31; } },
      { ask: "sim.matchsticks.t3", done: "sim.matchsticks.d3", ok: function (s) { return s.shape === "triangles" && s.n === 5; } },
      { ask: "sim.matchsticks.t4", done: "sim.matchsticks.d4", ok: function (s) { return s.shape === "triangles" && s.sticks === 21; } }
    ],
    mount: function (body, changed, k) {
      const st = { shape: "squares", n: 1, sticks: 4 };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      function draw() {
        st.sticks = SHAPES[st.shape].sticks(st.n);
        const size = st.n > 6 ? 44 : 64;
        const svg = document.createElementNS(NS, "svg");
        svg.setAttribute("viewBox", "0 0 " + Math.max(300, 30 + st.n * size) + " " + (size + 30));
        svg.setAttribute("role", "img");
        svg.setAttribute("aria-label", k.t("sim.matchsticks.title"));
        svg.setAttribute("class", "sim-svg");
        svg.innerHTML = st.shape === "squares" ? drawSquares(st.n, size) : drawTriangles(st.n, size);
        pic.innerHTML = "";
        pic.appendChild(svg);
        const prev = st.n > 1 ? SHAPES[st.shape].sticks(st.n - 1) : null;
        read.textContent = k.t("sim.matchsticks.count", { n: st.n, s: st.sticks }) +
          (prev == null ? "" : " · " + k.t("sim.matchsticks.step", { d: st.sticks - prev }));
        sl.out.textContent = "n = " + st.n;
      }
      const shapes = k.buttons(k.t("sim.matchsticks.shape"), [
        { act: "squares", label: k.t("sim.matchsticks.squares"), value: "squares" },
        { act: "triangles", label: k.t("sim.matchsticks.triangles"), value: "triangles" }
      ], function (v) {
        st.shape = v;
        shapes.btns.forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-act") === v); });
        draw();
        changed(st);
      });
      const sl = k.slider(k.t("sim.matchsticks.n"), 1, 10, 1, st.n, function (v) { st.n = v; draw(); changed(st); }, "n");
      shapes.btns[0].classList.add("on");
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [shapes.el, sl.el]));
      body.appendChild(read);
      draw();
    }
  });
})();
