// Step-by-step lab animations ("🧪 Thí nghiệm từng bước"). A lab is a simulation (MQ.sims) whose tasks are the
// steps of a book practical: the learner presses each step's action button and watches a short animation of what
// happens, with a sentence explaining it. Some steps first ask for a prediction ("What do you think will happen?");
// any answer is fine — after the animation the lab says whether it matched, never scores it.
// spec = { title, intro, safety?, view?, steps: [{ ask, act, say, dur?, predict?: { q, opts: [keys], ans } }],
//          draw(K, i, p) → SVG markup of step i at progress p (0..1); i = -1 before the first step }
window.MQ = window.MQ || {};
MQ.labs = (function () {
  const specs = {};
  const NS = "http://www.w3.org/2000/svg";
  let seq = 0;

  function define(id, spec) {
    specs[id] = spec;
    const tasks = spec.steps.map(function (s, i) {
      return { ask: s.ask, done: s.say, ok: function (st) { return st.done > i; } };
    });
    MQ.sims.define(id, {
      moving: true, lab: spec, title: spec.title, intro: spec.intro, tasks: tasks,
      mount: function (body, changed, k) { mountLab(id, spec, body, changed, k); }
    });
  }

  function reduced() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  // a fresh card restarts the lab and its challenge dots (the sims task counter only moves forward)
  function remount(id, body) {
    const card = body.closest && body.closest(".sim");
    const fresh = card && MQ.sims.mount(id);
    if (!fresh) return;
    card.replaceWith(fresh);
    const go = fresh.querySelector(".lab-ctls button");
    if (go) go.focus();
  }

  function mountLab(id, spec, body, changed, k) {
    const K = MQ.labKit.make("lab" + (++seq) + "_", k.t);
    const st = { done: 0, run: null, guess: {} };
    const still = reduced();
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", spec.view || "0 0 480 260");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", k.t(spec.title));
    svg.setAttribute("class", "sim-svg lab-svg");
    svg.setAttribute("fill", "none");
    svg.setAttribute("font-family", "sans-serif");
    const ctl = k.h("div.sim-ctls.lab-ctls");
    const note = k.h("p.lab-note", { "aria-live": "polite" });
    // the card's "✓ explanation" line is announced too, so every step is heard, not only predictions
    const said = body.closest && body.closest(".sim") && body.closest(".sim").querySelector(".sim-done");
    if (said) said.setAttribute("aria-live", "polite");
    let visible = true, idle = 0;
    if (window.IntersectionObserver) {
      new IntersectionObserver(function (es) { visible = es[es.length - 1].isIntersecting; }).observe(svg);
    }

    function draw() {
      const i = st.run ? st.run.i : st.done - 1, p = st.run ? st.run.p : 1;
      svg.innerHTML = K.defs() + spec.draw(K, i, p);
    }
    function btn(act, label, fn, cls) {
      return k.h("button.btn.small.sim-btn" + (cls || ""), { "data-act": act, onclick: fn }, label);
    }
    // rebuilds the controls; keyboard focus moves to the new control when it was inside them before
    function renderCtl() {
      const had = ctl.contains(document.activeElement);
      ctl.textContent = "";
      ctl.appendChild(control());
      const first = ctl.querySelector("button, .lab-busy");
      if (had && first) first.focus();
    }
    function control() {
      if (st.run) return k.h("span.lab-busy", { tabindex: "-1" }, "⏳ " + k.t("exp.watch"));
      const s = spec.steps[st.done];
      if (!s) return btn("again", "↺ " + k.t("exp.again"), function () { remount(id, body); }, ".ghost");
      if (s.predict && st.guess[st.done] == null) {
        return k.h("div.lab-predict", [
          k.h("p.lab-q", "🔮 " + k.t(s.predict.q)),
          k.h("div.sim-ctl", s.predict.opts.map(function (o, j) {
            return btn("g" + j, k.t(o), function () {
              st.guess[st.done] = j;
              note.textContent = "🔮 " + k.t("exp.guess", { a: k.t(o) });
              renderCtl();
            }, ".ghost");
          }))
        ]);
      }
      return btn("go", "▶ " + k.t(s.act), start, ".lab-go");
    }
    function start() {
      st.run = { i: st.done, p: still ? 1 : 0 };
      if (!spec.steps[st.done].predict) note.textContent = "";
      renderCtl();
      if (still) finish();
    }
    function finish() {
      const i = st.run.i, s = spec.steps[i];
      st.run = null;
      st.done = i + 1;
      if (s.predict) {
        const g = st.guess[i];
        note.textContent = g === s.predict.ans ? "🔮 " + k.t("exp.right")
          : "🔮 " + k.t("exp.other", { a: k.t(s.predict.opts[s.predict.ans]) });
      }
      renderCtl();
      draw();
      changed(st);
    }
    // a running step is drawn every frame; between steps the scene (flames, bubbles) is redrawn about 20 times a
    // second, only while it is on screen and motion is allowed
    k.loop(svg, function (dt) {
      if (!still) K.now += dt;
      if (st.run) {
        st.run.p = Math.min(1, st.run.p + dt / (spec.steps[st.run.i].dur || 1.8));
        if (st.run.p >= 1) { finish(); return; }
        draw();
        return;
      }
      idle += dt;
      if (!still && visible && idle >= 0.05) { idle = 0; draw(); }
    });
    if (spec.safety) body.appendChild(k.h("p.tiny.lab-safe", "🥽 " + k.t(spec.safety)));
    body.appendChild(k.h("div.sim-pic", [svg]));
    body.appendChild(ctl);
    body.appendChild(note);
    renderCtl();
    draw();
  }

  return { define: define, spec: function (id) { return specs[id]; }, ids: function () { return Object.keys(specs); } };
})();

if (typeof module !== "undefined") module.exports = MQ.labs;
