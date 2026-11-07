// Small interactive simulations ("🧪 Thử nghiệm"), shown after a key idea (section.sims: [{ id, at }]).
// Each one has a few controls, a live picture and a short list of tasks built from the book's facts; a task is
// ticked when the learner's own setting shows the idea, with a sentence explaining why. No scores, no timers.
// Simulations are defined in js/sims-*.js with MQ.sims.define(id, { title, intro, tasks, mount }).
window.MQ = window.MQ || {};

MQ.sims = (function () {
  const IDS = ["circuit", "weight", "eclipse", "sound", "ph", "particles", "numberline", "counters", "matchsticks",
    "balance", "machine", "linegraph", "roundzoom", "placevalue", "percentgrid", "fractionbars", "paintmix", "protractor", "reflectgrid", "transform", "cuboid", "spinner", "datastats",
    "microscope", "keybuilder", "foodweb", "watercycle", "tides", "plates", "echo", "heating", "separate", "titration", "sankey", "ammeter", "conductors",
    "lab-mg", "lab-h2", "lab-co2", "lab-o2", "lab-fes", "lab-cabbage", "lab-soil", "lab-cheek", "lab-agar", "lab-candle", "lab-tea"];
  const defs = {};
  function define(id, def) { defs[id] = def; }
  // outside a browser (unit tests) the definitions can be read back to test their task rules
  if (typeof document === "undefined") return { IDS: IDS, define: define, def: function (id) { return defs[id]; } };

  const h = function () { return MQ.ui.h.apply(null, arguments); };
  const t = function (k, v) { return MQ.t(k, v); };

  // number with d decimals, Vietnamese decimal comma in Vietnamese
  function num(x, d) {
    const s = (Math.round(x * Math.pow(10, d || 0)) / Math.pow(10, d || 0)).toFixed(d || 0);
    return MQ.i18n.uiLang() === "vi" ? s.replace(".", ",") : s;
  }

  // Runs step(dt) every frame while el is on the page. The motion is what the simulation teaches, so it also
  // runs with "reduce motion"; the ⏸ button of the card (class "paused") stops it.
  function loop(el, step) {
    let last = null;
    function frame(ts) {
      if (!el.isConnected && last != null) return;
      const card = el.closest && el.closest(".sim");
      const dt = last == null || (card && card.classList.contains("paused")) ? 0 : Math.min(0.05, (ts - last) / 1000);
      last = ts;
      step(dt);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  // Control helpers: a labelled group of buttons, or a range slider with its value.
  function buttons(label, items, onPick) {
    const btns = items.map(function (it) {
      return h("button.btn.ghost.small.sim-btn", { "data-act": it.act, onclick: function () { onPick(it.value); } }, it.label);
    });
    return { el: h("div.sim-ctl", [label ? h("span.sim-lab", label) : null].concat(btns)), btns: btns };
  }
  function slider(label, min, max, step, value, onInput, act) {
    const out = h("b.sim-val");
    const input = h("input.sim-range", { type: "range", min: min, max: max, step: step, value: value, "data-act": act, "aria-label": label });
    input.oninput = function () { onInput(Number(input.value)); };
    return { el: h("label.sim-ctl", [h("span.sim-lab", label), input, out]), input: input, out: out };
  }

  function mount(id) {
    const def = defs[id];
    if (!def) return null;
    const body = h("div.sim-body");
    const ask = h("p.sim-task");
    const said = h("p.sim-done");
    const dots = h("span.sim-dots");
    const tasks = def.tasks;
    let cur = 0;
    function showTask() {
      ask.textContent = cur < tasks.length ? "🎯 " + t(tasks[cur].ask) : "🏆 " + t("sim.alldone");
      dots.textContent = tasks.map(function (x, i) { return i < cur ? "●" : "○"; }).join(" ");
    }
    function changed(state) {
      if (cur >= tasks.length) return;
      const k = tasks[cur];
      if (!k.ok(state)) return;
      said.textContent = "✓ " + t(k.done, k.vars ? k.vars(state) : undefined);
      MQ.fx.pop(said, "jump");
      cur += 1;
      showTask();
      if (cur === tasks.length) MQ.fx.sparkle(card);
    }
    const pause = h("button.btn.ghost.small.sim-pause", { "data-act": "pause", title: t("sim.pause") }, "⏸");
    pause.onclick = function () {
      const on = card.classList.toggle("paused");
      pause.textContent = on ? "▶" : "⏸";
      pause.title = t(on ? "sim.play" : "sim.pause");
    };
    const card = h("section.card.sim", { "data-sim": id }, [
      h("div.sim-head", [h("h4", "🧪 " + t(def.title)), h("span.sim-head-r", [dots, def.moving ? pause : null])]),
      h("p.tiny.sim-intro", t(def.intro)),
      body,
      h("div.sim-tasks", [ask, said])
    ]);
    showTask();
    def.mount(body, changed, { h: h, t: t, num: num, loop: loop, buttons: buttons, slider: slider });
    return card;
  }

  return { IDS: IDS, define: define, mount: mount, num: num };
})();

if (typeof module !== "undefined") module.exports = MQ.sims;
