// Biology simulations for Science 7: focusing a microscope on onion cells (1.1), following the book's paired-
// statement key (4.4) and the African grassland food web — 9 organisms, 13 arrows — with "what if one species
// disappears?" (7.2). Facts come from the Learner's Book; knob positions of the microscope are only a model.
(function () {
  const S = MQ.sims;
  const NS = "http://www.w3.org/2000/svg";
  const svgOf = function (vb, label) {
    const s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", vb); s.setAttribute("role", "img"); s.setAttribute("aria-label", label);
    s.setAttribute("class", "sim-svg");
    return s;
  };

  // ---------- 1.1 microscope: start with the smallest objective, focus, then the larger ones ----------
  const OBJ = { small: { sharp: 40, cell: 26 }, medium: { sharp: 63, cell: 44 }, large: { sharp: 71, cell: 74 } };
  S.define("microscope", {
    title: "sim.microscope.title", intro: "sim.microscope.intro",
    tasks: [
      { ask: "sim.microscope.t1", done: "sim.microscope.d1", ok: function (s) { return s.obj === "small" && s.sharp; } },
      { ask: "sim.microscope.t2", done: "sim.microscope.d2", ok: function (s) { return s.obj === "medium" && s.sharp; } },
      { ask: "sim.microscope.t3", done: "sim.microscope.d3", ok: function (s) { return s.obj === "large" && s.sharp; } }
    ],
    mount: function (body, changed, k) {
      const st = { obj: "small", focus: 0, sharp: false };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      function cells(size) {
        let s = "";
        for (let r = -1; r * size * 0.6 < 200; r++) {
          for (let c = -1; c * size < 260; c++) {
            const x = c * size + (r % 2 ? size / 2 : 0), y = r * size * 0.6;
            s += "<rect x='" + x + "' y='" + y + "' width='" + (size - 2) + "' height='" + (size * 0.6 - 2) + "' fill='#d8eec0' stroke='#5a8f3a' stroke-width='" + (size / 18) + "'/>" +
              "<circle cx='" + (x + size * 0.3) + "' cy='" + (y + size * 0.3) + "' r='" + (size / 9) + "' fill='#7a5cc7' opacity='0.7'/>";
          }
        }
        return s;
      }
      function draw() {
        const o = OBJ[st.obj], blur = Math.min(8, Math.abs(st.focus - o.sharp) / 2);
        st.sharp = Math.abs(st.focus - o.sharp) <= 1;
        const svg = svgOf("0 0 260 200", k.t("sim.microscope.title"));
        svg.innerHTML = "<defs><filter id='mc-blur'><feGaussianBlur stdDeviation='" + blur.toFixed(1) + "'/></filter>" +
          "<clipPath id='mc-clip'><circle cx='130' cy='100' r='92'/></clipPath></defs>" +
          "<circle cx='130' cy='100' r='96' fill='#111'/><g clip-path='url(#mc-clip)'><rect x='0' y='0' width='260' height='200' fill='#f4f8ea'/>" +
          "<g filter='url(#mc-blur)'>" + cells(o.cell) + "</g></g>";
        pic.innerHTML = "";
        pic.appendChild(svg);
        read.textContent = k.t("sim.microscope.read", { o: k.t("sim.microscope.o." + st.obj) }) + " · " + k.t(st.sharp ? "sim.microscope.sharp" : "sim.microscope.blurry");
        read.classList.toggle("hit", st.sharp);
        coarse.input.value = st.focus;
        coarse.out.textContent = st.focus;
      }
      function set(v) { st.focus = Math.max(0, Math.min(100, v)); draw(); changed(st); }
      const coarse = k.slider(k.t("sim.microscope.coarse"), 0, 100, 5, st.focus, set, "coarse");
      const fine = k.buttons(k.t("sim.microscope.fine"), [{ act: "fine-", label: "−1", value: -1 }, { act: "fine+", label: "+1", value: 1 }],
        function (d) { set(st.focus + d); });
      const obj = k.buttons(k.t("sim.microscope.obj"), ["small", "medium", "large"].map(function (o) {
        return { act: o, label: k.t("sim.microscope.o." + o), value: o };
      }), function (o) {
        st.obj = o;
        obj.btns.forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-act") === o); });
        draw();
        changed(st);
      });
      obj.btns[0].classList.add("on");
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [obj.el, coarse.el, fine.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 4.4 the book's paired-statement key ----------
  const ANIMALS = {
    earthworm: { legs: false, six: false, rings: true, four: false },
    slug: { legs: false, six: false, rings: false, four: false },
    crab: { legs: true, six: false, rings: false, four: false },
    dragonfly: { legs: true, six: true, rings: false, four: true },
    housefly: { legs: true, six: true, rings: false, four: false }
  };
  // step → [question key, trait, next if yes, next if no]
  const KEY = { 1: ["q1", "legs", 2, 3], 2: ["q2", "six", 4, "crab"], 3: ["q3", "rings", "earthworm", "slug"], 4: ["q4", "four", "dragonfly", "housefly"] };
  S.define("keybuilder", {
    title: "sim.keybuilder.title", intro: "sim.keybuilder.intro",
    tasks: [
      { ask: "sim.keybuilder.t1", done: "sim.keybuilder.d1", ok: function (s) { return s.found === "dragonfly" && s.right; } },
      { ask: "sim.keybuilder.t2", done: "sim.keybuilder.d2", ok: function (s) { return s.found === "slug" && s.right; } },
      { ask: "sim.keybuilder.t3", done: "sim.keybuilder.d3", ok: function (s) { return s.named.length === 5; } }
    ],
    mount: function (body, changed, k) {
      const st = { animal: "dragonfly", step: 1, path: [], found: null, right: false, named: [] };
      const box = k.h("div.sim-pic.sim-key");
      const read = k.h("p.sim-read");
      function draw() {
        box.innerHTML = "";
        box.appendChild(k.h("p", [k.h("b", k.t("sim.keybuilder.who") + " "), k.t("sim.keybuilder.a." + st.animal)]));
        box.appendChild(k.h("p.tiny", k.t("sim.keybuilder.traits." + st.animal)));
        box.appendChild(k.h("p", st.found ? "→ " + k.t("sim.keybuilder.a." + st.found) : st.step + ". " + k.t("sim.keybuilder." + KEY[st.step][0])));
        if (st.found && !st.right) box.appendChild(k.h("p.tiny", k.t("sim.keybuilder.wrong")));
        read.textContent = st.path.length ? k.t("sim.keybuilder.path") + " " + st.path.join(", ") : "";
      }
      function answer(yes) {
        if (st.found) { read.textContent = k.t("sim.keybuilder.again"); return; }
        const row = KEY[st.step], next = yes ? row[2] : row[3];
        st.path = st.path.concat([st.step + (yes ? "a" : "b")]);
        if (typeof next === "number") st.step = next;
        else {
          st.found = next;
          st.right = next === st.animal;
          if (st.right && st.named.indexOf(next) === -1) st.named = st.named.concat([next]);
        }
        draw();
        changed(st);
      }
      function pick(a) { st.animal = a; st.step = 1; st.path = []; st.found = null; st.right = false; draw(); }
      const animals = k.buttons(k.t("sim.keybuilder.pick"), Object.keys(ANIMALS).map(function (a) {
        return { act: a, label: k.t("sim.keybuilder.a." + a), value: a };
      }), pick);
      const ab = k.buttons(k.t("sim.keybuilder.answer"), [
        { act: "yes", label: "a — " + k.t("sim.keybuilder.yes"), value: true }, { act: "no", label: "b — " + k.t("sim.keybuilder.no"), value: false }
      ], answer);
      body.appendChild(box);
      body.appendChild(k.h("div.sim-ctls", [animals.el, ab.el]));
      body.appendChild(read);
      draw();
    }
  });

  // ---------- 7.2 African grassland food web: 9 organisms, 13 arrows ("eaten by") ----------
  const POS = {
    grass: [70, 210], acacia: [230, 210], antelope: [150, 150], zebra: [40, 140], termite: [270, 150],
    aardvark: [290, 80], hyena: [120, 80], leopard: [80, 20], cheetah: [220, 20]
  };
  const EATEN_BY = [["grass", "antelope"], ["grass", "zebra"], ["grass", "termite"], ["acacia", "antelope"],
    ["antelope", "hyena"], ["antelope", "leopard"], ["antelope", "cheetah"], ["zebra", "leopard"], ["zebra", "cheetah"],
    ["termite", "aardvark"], ["aardvark", "leopard"], ["aardvark", "cheetah"], ["hyena", "leopard"]];
  function starving(gone) {
    return Object.keys(POS).filter(function (o) {
      if (gone.indexOf(o) !== -1) return false;
      const food = EATEN_BY.filter(function (e) { return e[1] === o; });
      return food.length > 0 && food.every(function (e) { return gone.indexOf(e[0]) !== -1; });
    });
  }
  S.define("foodweb", {
    title: "sim.foodweb.title", intro: "sim.foodweb.intro",
    tasks: [
      { ask: "sim.foodweb.t1", done: "sim.foodweb.d1", ok: function (s) { return s.gone.length === 1 && s.gone[0] === "grass"; } },
      { ask: "sim.foodweb.t2", done: "sim.foodweb.d2", ok: function (s) { return s.gone.length === 1 && s.gone[0] === "aardvark"; } },
      { ask: "sim.foodweb.t3", done: "sim.foodweb.d3", ok: function (s) { return s.gone.length === 1 && starving(s.gone).indexOf("hyena") !== -1; } }
    ],
    mount: function (body, changed, k) {
      const st = { gone: [] };
      const pic = k.h("div.sim-pic");
      const read = k.h("p.sim-read");
      function draw() {
        const hungry = starving(st.gone);
        let s = "<defs><marker id='fw-arrow' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='6' markerHeight='6' orient='auto'><path d='M0,0 L10,5 L0,10 z' fill='currentColor'/></marker></defs>";
        EATEN_BY.forEach(function (e) {
          const a = POS[e[0]], b = POS[e[1]], off = st.gone.indexOf(e[0]) !== -1 || st.gone.indexOf(e[1]) !== -1;
          const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.sqrt(dx * dx + dy * dy);
          s += "<line x1='" + (a[0] + dx * 16 / L) + "' y1='" + (a[1] + dy * 16 / L) + "' x2='" + (b[0] - dx * 18 / L) + "' y2='" + (b[1] - dy * 18 / L) +
            "' stroke='currentColor' stroke-opacity='" + (off ? 0.12 : 0.6) + "' marker-end='url(#fw-arrow)'/>";
        });
        Object.keys(POS).forEach(function (o) {
          const p = POS[o], gone = st.gone.indexOf(o) !== -1, hun = hungry.indexOf(o) !== -1;
          s += "<g data-org='" + o + "' style='cursor:pointer'><circle cx='" + p[0] + "' cy='" + p[1] + "' r='15' fill='" +
            (gone ? "#888" : hun ? "#c2453d" : o === "grass" || o === "acacia" ? "#2e8b57" : "#1f7a8c") + "' opacity='" + (gone ? 0.3 : 1) + "'/>" +
            "<text x='" + p[0] + "' y='" + (p[1] + 28) + "' text-anchor='middle' font-size='11' fill='currentColor'>" + k.t("sim.foodweb.o." + o) + "</text></g>";
        });
        const svg = svgOf("0 0 330 245", k.t("sim.foodweb.title"));
        svg.innerHTML = s;
        svg.addEventListener("click", function (e) {
          const g = e.target.closest && e.target.closest("[data-org]");
          if (!g) return;
          const o = g.getAttribute("data-org");
          st.gone = st.gone.indexOf(o) === -1 ? st.gone.concat([o]) : st.gone.filter(function (x) { return x !== o; });
          draw();
          changed(st);
        });
        pic.innerHTML = "";
        pic.appendChild(svg);
        read.textContent = st.gone.length ? k.t("sim.foodweb.read", {
          gone: st.gone.map(function (o) { return k.t("sim.foodweb.o." + o); }).join(", "),
          hungry: hungry.length ? hungry.map(function (o) { return k.t("sim.foodweb.o." + o); }).join(", ") : k.t("sim.foodweb.nobody")
        }) : k.t("sim.foodweb.tap");
      }
      const reset = k.buttons("", [{ act: "reset", label: "↺ " + k.t("sim.foodweb.reset"), value: 0 }], function () { st.gone = []; draw(); changed(st); });
      body.appendChild(pic);
      body.appendChild(k.h("div.sim-ctls", [reset.el]));
      body.appendChild(read);
      draw();
    }
  });
})();
