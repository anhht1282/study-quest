// Small DOM helpers, router, toasts, badges, HUD (character, language) and healthy-play timer.
window.MQ = window.MQ || {};

MQ.ui = (function () {
  const t = MQ.t;

  // h("div.card#id", { onclick, html }, [children]) — text children are always set as text.
  function h(sel, attrs, kids) {
    const m = sel.match(/^([a-z0-9]+)?((?:[.#][\w-]+)*)$/i);
    const el = document.createElement((m && m[1]) || "div");
    ((m && m[2]) || "").replace(/([.#])([\w-]+)/g, function (_, k, v) {
      if (k === ".") el.classList.add(v); else el.id = v;
    });
    if (Array.isArray(attrs) || typeof attrs === "string" || attrs instanceof Node) { kids = attrs; attrs = {}; }
    Object.keys(attrs || {}).forEach(function (k) {
      const v = attrs[k];
      if (v == null || v === false) return;
      if (k.indexOf("on") === 0) el.addEventListener(k.slice(2), v);
      else if (k === "svg") el.innerHTML = v;               // trusted, bundled diagram / avatar markup only
      else if (k === "style" && typeof v === "object") Object.assign(el.style, v);
      else el.setAttribute(k, v === true ? "" : v);
    });
    [].concat(kids == null ? [] : kids).forEach(function (c) {
      if (c == null || c === false) return;
      el.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    });
    return el;
  }

  // Bilingual text: main line plus an optional subtitle (Song ngữ mode).
  function bi(sel, p) {
    return h(sel, [p.main, p.sub ? h("span.sub", { lang: "vi" }, p.sub) : null]);
  }
  // Per-item pairs of an array field: [{main, sub}, …]
  function biItems(p) {
    return (p.main || []).map(function (m, i) { return { main: m, sub: p.sub ? p.sub[i] : null }; });
  }

  const routes = {};
  function route(name, fn) { routes[name] = fn; }

  function go(name, params) {
    const root = document.getElementById("app");
    const old = document.querySelector("#fx-layer .fx-banner");   // celebrations belong to the screen that raised them
    if (old) old.remove();
    root.innerHTML = "";
    root.appendChild(routes[name](params || {}));
    root.setAttribute("data-view", name);
    window.scrollTo(0, 0);
    MQ.ui.current = { name: name, params: params || {} };
    renderHud();
  }
  function refresh() { if (MQ.ui.current) go(MQ.ui.current.name, MQ.ui.current.params); }

  function toast(text, kind) {
    const box = document.getElementById("toasts");
    const el = h("div.toast" + (kind ? "." + kind : ""), text);
    box.appendChild(el);
    setTimeout(function () { el.classList.add("out"); }, 2600);
    setTimeout(function () { el.remove(); }, 3100);
  }

  function modal(content, opts) {
    const back = h("div.modal-back");
    const close = function () { back.remove(); if (opts && opts.onClose) opts.onClose(); };
    const box = h("div.modal", [content, h("button.btn.ghost.modal-x", { onclick: close, "aria-label": t("ui.close") }, "✕")]);
    back.appendChild(box);
    back.addEventListener("click", function (e) { if (e.target === back) close(); });
    document.body.appendChild(back);
    return close;
  }

  const RANK_XP = [0, 150, 400, 800, 1400, 2200];
  function rank(xp) {
    let i = 0;
    RANK_XP.forEach(function (x, k) { if (xp >= x) i = k; });
    return { index: i, name: t("rank." + i), from: RANK_XP[i], next: RANK_XP[i + 1] == null ? null : RANK_XP[i + 1] };
  }

  // ---- character ----
  function charOf(profile) { return (profile && profile.char) || MQ.avatar.DEFAULT; }
  function avatarEl(sel, mood, profile) {
    return h(sel, { svg: MQ.avatar.svg(charOf(profile || MQ.state.get().profile), mood) });
  }
  let moodTimer = null;
  // Briefly shows a mood on the HUD character (happy / think / wow), then back to calm.
  function mood(m, ms) {
    const el = document.querySelector(".hud-avatar");
    if (!el) return;
    el.innerHTML = MQ.avatar.svg(charOf(MQ.state.get().profile), m);
    MQ.fx.pop(el, m === "happy" || m === "wow" ? "jump" : "wobble");
    clearTimeout(moodTimer);
    moodTimer = setTimeout(function () { el.innerHTML = MQ.avatar.svg(charOf(MQ.state.get().profile), "calm"); }, ms || 1800);
  }

  let lastRank = null;
  function renderHud() {
    const hud = document.getElementById("hud");
    const d = MQ.state.get();
    hud.innerHTML = "";
    if (!d.profile) return;
    const r = rank(d.xp);
    const pct = r.next ? Math.round(100 * (d.xp - r.from) / (r.next - r.from)) : 100;
    hud.appendChild(h("button.hud-home", { onclick: function () { go("map"); }, title: t("hud.map") }, [
      avatarEl("span.hud-avatar", "calm", d.profile), h("span.hud-name", d.profile.name)
    ]));
    hud.appendChild(h("div.hud-xp", [
      h("div.hud-rank", [r.name + " · " + d.xp + " XP · ", h("span.hud-spark", { title: t("hud.spark") }, "💡 " + (d.spark || 0))]),
      h("div.bar", [h("i", { style: { width: pct + "%" } })])
    ]));
    hud.appendChild(h("nav.hud-nav", [
      langSwitch(),
      h("button.btn.ghost.book-switch", { onclick: function () { go("books"); }, title: t("hud.books.title") },
        MQ.BOOKS[MQ.book].emoji + " " + t("book." + MQ.book + ".part") + " · " + MQ.BOOKS[MQ.book].short),
      h("button.btn.ghost", { onclick: function () { go("creator"); } }, "✏️ " + t("hud.creator")),
      h("button.btn.ghost", { onclick: function () { go("profile"); } }, "📒 " + t("hud.journey"))
    ]));
    if (lastRank !== null && r.index > lastRank) levelUp(r);
    lastRank = r.index;
  }

  function langSwitch() {
    const labels = { vi: "Tiếng Việt", en: "English", both: "VI + EN" };   // no flag emoji: Windows renders them as letters
    return h("div.lang-switch", { role: "group", "aria-label": t("hud.lang") }, MQ.i18n.MODES.map(function (m) {
      return h("button" + (MQ.i18n.mode === m ? ".on" : ""), {
        title: t("lang." + m), "aria-pressed": MQ.i18n.mode === m ? "true" : "false",
        onclick: function () { MQ.i18n.setMode(m); refresh(); }
      }, labels[m]);
    }));
  }

  function levelUp(r) {
    const box = h("div.levelup", [
      avatarEl("div.levelup-av", "wow"),
      h("h2", t("levelup.title")),
      h("p", t("levelup.body", { rank: r.name })),
      h("button.btn", { onclick: function () { close(); } }, t("levelup.ok"))
    ]);
    const close = modal(box);
    MQ.fx.confetti(box.querySelector(".levelup-av"), 40);
  }

  const BADGE_ICONS = {
    first: "🌱", persist: "🧗", selfmade: "🦉", explain: "💬", boss: "🐉", creator: "🎨",
    inventor: "🛠️", project: "🔭", reflect: "📓", rest: "🌿"
  };
  function badgeInfo(id) {
    return { icon: BADGE_ICONS[id], name: t("badge." + id + ".name"), desc: t("badge." + id + ".desc") };
  }
  function badge(id) {
    if (BADGE_ICONS[id] && MQ.state.award(id)) {
      const b = badgeInfo(id);
      toast(b.icon + " " + t("badge.new", { name: b.name }), "gold");
      MQ.fx.confetti(null, 30);
    }
  }

  // Healthy engagement: count active minutes, suggest a break, never punish stopping.
  let activeMin = 0;
  function startTimer() {
    setInterval(function () {
      if (document.hidden || !MQ.state.get().profile) return;
      activeMin += 1;
      MQ.state.addMinutes(1);
      if (activeMin > 0 && activeMin % MQ.state.get().settings.sessionMin === 0) breakTime();
    }, 60000);
  }
  function breakTime() {
    const close = modal(h("div.break", [
      avatarEl("div.break-av", "happy"),
      h("h2", t("break.title")),
      h("p", t("break.body", { min: activeMin })),
      h("div.row", [
        h("button.btn", { onclick: function () { badge("rest"); close(); go("map"); } }, t("break.rest")),
        h("button.btn.ghost", { onclick: function () { close(); } }, t("break.finish"))
      ])
    ]));
  }

  function stars(n) {
    return h("span.stars", { "aria-label": t("ui.stars", { n: n }) }, [0, 1, 2].map(function (i) {
      return h("span" + (i < n ? ".on" : ""), { style: { "--d": i * 90 + "ms" } }, "★");
    }));
  }

  function ring(pct, label) {
    const r = 26, c = 2 * Math.PI * r;
    const off = c * (1 - Math.max(0, Math.min(1, pct)));
    return h("span.ring", {
      svg: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="' + r + '" class="ring-bg"/>' +
        '<circle cx="32" cy="32" r="' + r + '" class="ring-fg" stroke-dasharray="' + c.toFixed(1) +
        '" stroke-dashoffset="' + off.toFixed(1) + '"/></svg>'
    }, label ? [h("b", label)] : null);
  }

  return {
    h: h, bi: bi, biItems: biItems, route: route, go: go, refresh: refresh, toast: toast, modal: modal,
    rank: rank, renderHud: renderHud, BADGE_IDS: Object.keys(BADGE_ICONS), badgeInfo: badgeInfo, badge: badge,
    startTimer: startTimer, stars: stars, ring: ring, avatarEl: avatarEl, mood: mood, charOf: charOf,
    langSwitchEl: langSwitch
  };
})();
