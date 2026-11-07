// Lightweight celebration effects (Web Animations API, transform/opacity only).
// Everything is skipped when the device asks for reduced motion.
window.MQ = window.MQ || {};

MQ.fx = (function () {
  const COLORS = ["#e2674f", "#7a5cc7", "#1f9a8a", "#e0a526", "#5aa9e6", "#f49ac1"];
  const reduced = function () {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };

  function layer() {
    let l = document.getElementById("fx-layer");
    if (!l) {
      l = document.createElement("div");
      l.id = "fx-layer";
      document.body.appendChild(l);
    }
    return l;
  }

  function centerOf(el) {
    if (!el || !el.getBoundingClientRect) return { x: window.innerWidth / 2, y: window.innerHeight / 3 };
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  // Small burst of paper confetti from an element (or screen centre).
  function confetti(from, count) {
    if (reduced()) return;
    const c = centerOf(from);
    const l = layer();
    const n = count || 26;
    for (let i = 0; i < n; i++) {
      const p = document.createElement("i");
      p.className = "confetti";
      p.style.left = c.x + "px";
      p.style.top = c.y + "px";
      p.style.background = COLORS[i % COLORS.length];
      if (i % 3 === 0) p.style.borderRadius = "50%";
      l.appendChild(p);
      const ang = (Math.PI * 2 * i) / n + Math.random() * 0.5;
      const dist = 70 + Math.random() * 110;
      const dx = Math.cos(ang) * dist, dy = Math.sin(ang) * dist - 60;
      const anim = p.animate([
        { transform: "translate(-50%,-50%) rotate(0deg)", opacity: 1 },
        { transform: "translate(" + dx + "px," + dy + "px) rotate(" + (Math.random() * 540) + "deg)", opacity: 1, offset: 0.6 },
        { transform: "translate(" + dx * 1.1 + "px," + (dy + 120) + "px) rotate(" + (Math.random() * 720) + "deg)", opacity: 0 }
      ], { duration: 1100 + Math.random() * 500, easing: "cubic-bezier(.2,.8,.3,1)" });
      anim.onfinish = function () { p.remove(); };
    }
  }

  // "+10 XP" floating up from an element.
  function floatText(from, text) {
    const c = centerOf(from);
    const t = document.createElement("b");
    t.className = "float-text";
    t.textContent = text;
    t.style.left = c.x + "px";
    t.style.top = c.y + "px";
    layer().appendChild(t);
    if (reduced()) { setTimeout(function () { t.remove(); }, 1200); return; }
    t.animate([
      { transform: "translate(-50%,0) scale(.6)", opacity: 0 },
      { transform: "translate(-50%,-30px) scale(1.15)", opacity: 1, offset: 0.25 },
      { transform: "translate(-50%,-80px) scale(1)", opacity: 0 }
    ], { duration: 1300, easing: "ease-out" }).onfinish = function () { t.remove(); };
  }

  // Fireworks: several bursts at random points of the upper screen.
  function fireworks(bursts) {
    if (reduced()) return;
    const n = bursts || 5;
    for (let b = 0; b < n; b++) {
      setTimeout(function () {
        const x = window.innerWidth * (0.15 + Math.random() * 0.7);
        const y = window.innerHeight * (0.15 + Math.random() * 0.35);
        const l = layer();
        const color = COLORS[b % COLORS.length];
        for (let i = 0; i < 28; i++) {
          const p = document.createElement("i");
          p.className = "spark";
          p.style.left = x + "px";
          p.style.top = y + "px";
          p.style.background = i % 4 === 0 ? "#fff6c2" : color;
          l.appendChild(p);
          const ang = (Math.PI * 2 * i) / 28;
          const r = 70 + Math.random() * 60;
          p.animate([
            { transform: "translate(-50%,-50%) scale(1)", opacity: 1 },
            { transform: "translate(" + Math.cos(ang) * r + "px," + (Math.sin(ang) * r + 30) + "px) scale(.3)", opacity: 0 }
          ], { duration: 900 + Math.random() * 300, easing: "cubic-bezier(.1,.7,.3,1)" }).onfinish = function () { p.remove(); };
        }
      }, b * 260);
    }
  }

  // Big praise banner in the middle of the screen; never blocks clicks; auto-hides.
  function banner(title, sub, kind) {
    const l = layer();
    const old = l.querySelector(".fx-banner");
    if (old) old.remove();
    const b = document.createElement("div");
    b.className = "fx-banner " + (kind || "good");
    const tt = document.createElement("b");
    tt.textContent = title;
    b.appendChild(tt);
    if (sub) { const s = document.createElement("span"); s.textContent = sub; b.appendChild(s); }
    l.appendChild(b);
    const keep = 1500;
    if (reduced()) { setTimeout(function () { b.remove(); }, keep); return; }
    b.animate([
      { transform: "translate(-50%,-50%) scale(.3) rotate(-8deg)", opacity: 0 },
      { transform: "translate(-50%,-50%) scale(1.12) rotate(2deg)", opacity: 1, offset: 0.18 },
      { transform: "translate(-50%,-50%) scale(1) rotate(0)", opacity: 1, offset: 0.3 },
      { transform: "translate(-50%,-50%) scale(1)", opacity: 1, offset: 0.82 },
      { transform: "translate(-50%,-70%) scale(.9)", opacity: 0 }
    ], { duration: keep + 400, easing: "ease-out" }).onfinish = function () { b.remove(); };
  }

  // Twinkling stars around an element.
  function sparkle(el, count) {
    if (reduced() || !el) return;
    const r = el.getBoundingClientRect();
    const l = layer();
    for (let i = 0; i < (count || 10); i++) {
      const s = document.createElement("i");
      s.className = "twinkle";
      s.textContent = "✦";
      s.style.left = r.left + Math.random() * r.width + "px";
      s.style.top = r.top + Math.random() * r.height + "px";
      s.style.color = COLORS[i % COLORS.length];
      l.appendChild(s);
      s.animate([
        { transform: "translate(-50%,-50%) scale(0) rotate(0)", opacity: 0 },
        { transform: "translate(-50%,-50%) scale(1.3) rotate(90deg)", opacity: 1, offset: 0.4 },
        { transform: "translate(-50%,-80%) scale(0) rotate(180deg)", opacity: 0 }
      ], { duration: 900, delay: i * 60, easing: "ease-out", fill: "backwards" }).onfinish = function () { s.remove(); };
    }
  }

  // Re-trigger a CSS animation class on an element.
  function pop(el, cls) {
    if (!el || reduced()) return;
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
  }

  return {
    confetti: confetti, floatText: floatText, fireworks: fireworks, banner: banner, sparkle: sparkle,
    pop: pop, reduced: reduced
  };
})();
