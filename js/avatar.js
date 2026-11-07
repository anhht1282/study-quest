// Funny customisable characters drawn as inline SVG. Mood changes the face during play.
// Accessories unlock through learning milestones (badges) — never at random.
window.MQ = window.MQ || {};

MQ.avatar = (function () {
  const ANIMALS = {
    cat: { vi: "Mèo", en: "Cat" }, fox: { vi: "Cáo", en: "Fox" }, panda: { vi: "Gấu trúc", en: "Panda" },
    penguin: { vi: "Cánh cụt", en: "Penguin" }, dino: { vi: "Khủng long", en: "Dino" },
    bunny: { vi: "Thỏ", en: "Bunny" }, bear: { vi: "Gấu", en: "Bear" }, robot: { vi: "Rô-bốt", en: "Robot" }
  };
  const COLORS = ["#f28c38", "#f49ac1", "#5ccfb0", "#5aa9e6", "#f5d547", "#a98ee0", "#b07a52", "#8f9bab"];
  const ACCESSORIES = {
    none: { vi: "Không", en: "None" }, glasses: { vi: "Kính tròn", en: "Glasses" },
    bow: { vi: "Nơ xinh", en: "Bow" }, headphones: { vi: "Tai nghe", en: "Headphones" },
    flower: { vi: "Bông hoa", en: "Flower" },
    party: { vi: "Mũ tiệc", en: "Party hat", badge: "first" },
    crown: { vi: "Vương miện", en: "Crown", badge: "boss" },
    wizard: { vi: "Mũ phù thủy", en: "Wizard hat", badge: "inventor" },
    gradcap: { vi: "Mũ tốt nghiệp", en: "Grad cap", badge: "project" }
  };
  const TRAITS = [
    { vi: "Tò Mò", en: "Curious" }, { vi: "Siêu Tốc", en: "Speedy" }, { vi: "Thông Thái", en: "Wise" },
    { vi: "Lém Lỉnh", en: "Cheeky" }, { vi: "Kiên Trì", en: "Persistent" }, { vi: "Mơ Mộng", en: "Dreamy" },
    { vi: "Dũng Cảm", en: "Brave" }, { vi: "Vui Tính", en: "Jolly" }
  ];
  const DEFAULT = { animal: "fox", color: COLORS[0], acc: "none", trait: 0 };
  const INK = "#2b2f3a";

  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    const c = function (v) { return Math.max(0, Math.min(255, v + amt)); };
    const r = c(n >> 16), g = c((n >> 8) & 255), b = c(n & 255);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  function ears(a, col) {
    const dark = shade(col, -40);
    switch (a) {
      case "cat": return '<polygon points="26,46 34,10 54,32" fill="' + col + '"/><polygon points="66,32 86,10 94,46" fill="' + col + '"/>' +
        '<polygon points="33,38 37,20 47,32" fill="#ffc7d6"/><polygon points="73,32 83,20 87,38" fill="#ffc7d6"/>';
      case "fox": return '<polygon points="24,50 30,4 56,30" fill="' + col + '"/><polygon points="64,30 90,4 96,50" fill="' + col + '"/>' +
        '<polygon points="32,40 34,16 48,30" fill="' + INK + '" opacity=".75"/><polygon points="72,30 86,16 88,40" fill="' + INK + '" opacity=".75"/>';
      case "panda": return '<circle cx="30" cy="32" r="13" fill="' + INK + '"/><circle cx="90" cy="32" r="13" fill="' + INK + '"/>';
      case "bunny": return '<ellipse cx="44" cy="22" rx="10" ry="26" fill="' + col + '"/><ellipse cx="76" cy="22" rx="10" ry="26" fill="' + col + '"/>' +
        '<ellipse cx="44" cy="24" rx="5" ry="18" fill="#ffc7d6"/><ellipse cx="76" cy="24" rx="5" ry="18" fill="#ffc7d6"/>';
      case "bear": return '<circle cx="30" cy="34" r="13" fill="' + col + '"/><circle cx="90" cy="34" r="13" fill="' + col + '"/>' +
        '<circle cx="30" cy="34" r="6" fill="' + dark + '"/><circle cx="90" cy="34" r="6" fill="' + dark + '"/>';
      case "dino": return '<polygon points="40,30 47,12 54,28" fill="' + dark + '"/><polygon points="52,26 60,6 68,26" fill="' + dark + '"/>' +
        '<polygon points="66,28 73,12 80,30" fill="' + dark + '"/>';
      case "robot": return '<line x1="60" y1="24" x2="60" y2="10" stroke="' + INK + '" stroke-width="3"/><circle cx="60" cy="9" r="5" fill="#ff6b6b"/>';
      default: return "";
    }
  }

  function head(a, col) {
    if (a === "robot") {
      return '<rect x="22" y="24" width="76" height="72" rx="18" fill="' + col + '"/>' +
        '<rect x="30" y="40" width="60" height="34" rx="10" fill="#1d2a3a"/>' +
        '<circle cx="24" cy="60" r="4" fill="' + shade(col, -50) + '"/><circle cx="96" cy="60" r="4" fill="' + shade(col, -50) + '"/>';
    }
    const face = a === "panda" ? "#fbfbf8" : col;
    let s = '<circle cx="60" cy="62" r="38" fill="' + face + '"/>';
    if (a === "panda") s += '<ellipse cx="45" cy="60" rx="10" ry="12" fill="' + INK + '" transform="rotate(-20 45 60)"/>' +
      '<ellipse cx="75" cy="60" rx="10" ry="12" fill="' + INK + '" transform="rotate(20 75 60)"/>';
    if (a === "fox") s += '<path d="M28,70 Q60,108 92,70 Q60,86 28,70Z" fill="#fff6ea"/>';
    if (a === "penguin") s += '<ellipse cx="60" cy="70" rx="28" ry="27" fill="#fbfbf8"/>';
    if (a === "dino") s += '<circle cx="52" cy="80" r="2" fill="' + INK + '"/><circle cx="68" cy="80" r="2" fill="' + INK + '"/>';
    if (a === "bear" || a === "bunny") s += '<ellipse cx="60" cy="78" rx="16" ry="11" fill="#fff6ea" opacity=".85"/>';
    return s;
  }

  function face(a, mood) {
    const robot = a === "robot";
    const eye = robot ? "#7cf3ff" : (a === "panda" ? "#fff" : INK);
    const ex = [45, 75], ey = robot ? 56 : 60;
    let s = "";
    if (mood === "happy") {
      s += ex.map(function (x) { return '<path d="M' + (x - 6) + ',' + (ey + 2) + ' Q' + x + ',' + (ey - 7) + ' ' + (x + 6) + ',' + (ey + 2) + '" stroke="' + eye + '" stroke-width="3.2" fill="none" stroke-linecap="round"/>'; }).join("");
    } else if (mood === "wow") {
      s += ex.map(function (x) { return '<circle cx="' + x + '" cy="' + ey + '" r="6.5" fill="' + eye + '"/><circle cx="' + (x + 2) + '" cy="' + (ey - 2) + '" r="2.2" fill="#fff"/>'; }).join("");
    } else if (mood === "think") {
      s += '<circle cx="45" cy="' + ey + '" r="4.5" fill="' + eye + '"/><path d="M69,' + ey + ' L81,' + (ey - 2) + '" stroke="' + eye + '" stroke-width="3.2" stroke-linecap="round"/>';
    } else {
      s += ex.map(function (x) { return '<circle cx="' + x + '" cy="' + ey + '" r="4.5" fill="' + eye + '"/><circle cx="' + (x + 1.5) + '" cy="' + (ey - 1.5) + '" r="1.5" fill="#fff"/>'; }).join("");
    }
    const my = robot ? 68 : 76;
    const mc = robot ? "#7cf3ff" : INK;
    if (a === "penguin") s += '<polygon points="54,' + (my - 6) + ' 66,' + (my - 6) + ' 60,' + (my + 2) + '" fill="#f5a623"/>';
    else if (mood === "wow") s += '<ellipse cx="60" cy="' + (my + 2) + '" rx="5" ry="6" fill="' + mc + '"/>';
    else if (mood === "think") s += '<path d="M52,' + (my + 2) + ' L68,' + my + '" stroke="' + mc + '" stroke-width="3" stroke-linecap="round"/>';
    else s += '<path d="M50,' + my + ' Q60,' + (my + (mood === "happy" ? 11 : 7)) + ' 70,' + my + '" stroke="' + mc + '" stroke-width="3" fill="none" stroke-linecap="round"/>';
    if (!robot) s += '<circle cx="36" cy="72" r="5" fill="#ff8fa3" opacity=".45"/><circle cx="84" cy="72" r="5" fill="#ff8fa3" opacity=".45"/>';
    if (a === "cat") s += '<path d="M22,72 L38,74 M22,80 L38,78 M98,72 L82,74 M98,80 L82,78" stroke="' + INK + '" stroke-width="1.6" opacity=".6"/>';
    if (mood === "think") s += '<text x="98" y="26" font-size="22" font-weight="800" fill="#e0a526">?</text>';
    return s;
  }

  function accessory(acc) {
    switch (acc) {
      case "glasses": return '<g fill="none" stroke="' + INK + '" stroke-width="3"><circle cx="45" cy="60" r="11"/><circle cx="75" cy="60" r="11"/><path d="M56,60 L64,60"/></g>';
      case "bow": return '<g transform="translate(84 28) rotate(15)"><polygon points="0,0 -16,-9 -16,9" fill="#ff5d8f"/><polygon points="0,0 16,-9 16,9" fill="#ff5d8f"/><circle r="4" fill="#d93d6e"/></g>';
      case "headphones": return '<path d="M24,58 Q24,18 60,18 Q96,18 96,58" fill="none" stroke="' + INK + '" stroke-width="5"/><rect x="14" y="52" width="14" height="22" rx="6" fill="#ff6b6b"/><rect x="92" y="52" width="14" height="22" rx="6" fill="#ff6b6b"/>';
      case "flower": return '<g transform="translate(86 30)">' + [0, 72, 144, 216, 288].map(function (r) { return '<ellipse rx="5" ry="9" cy="-8" fill="#fff" transform="rotate(' + r + ')"/>'; }).join("") + '<circle r="5" fill="#f5d547"/></g>';
      case "party": return '<polygon points="60,0 44,30 76,30" fill="#7a5cc7"/><path d="M49,20 L71,20 M53,12 L67,12" stroke="#f5d547" stroke-width="3"/><circle cx="60" cy="2" r="5" fill="#ff6b6b"/>';
      case "crown": return '<polygon points="36,30 40,8 52,22 60,4 68,22 80,8 84,30" fill="#f5c518" stroke="#c99a00" stroke-width="2"/><circle cx="60" cy="20" r="3" fill="#ff5d8f"/>';
      case "wizard": return '<polygon points="66,-6 36,32 90,32" fill="#4b3a8f"/><rect x="30" y="28" width="64" height="7" rx="3" fill="#4b3a8f"/><text x="56" y="25" font-size="12" fill="#f5d547">★</text>';
      case "gradcap": return '<polygon points="60,8 98,22 60,36 22,22" fill="' + INK + '"/><rect x="44" y="26" width="32" height="10" fill="' + INK + '"/><path d="M92,24 L92,42" stroke="#f5d547" stroke-width="3"/><circle cx="92" cy="44" r="3.5" fill="#f5d547"/>';
      default: return "";
    }
  }

  function svg(ch, mood) {
    const c = Object.assign({}, DEFAULT, ch || {});
    const col = c.animal === "panda" ? "#fbfbf8" : c.color;
    return '<svg viewBox="-4 -8 128 128" xmlns="http://www.w3.org/2000/svg" class="mq-avatar mood-' + (mood || "calm") + '" aria-hidden="true">' +
      '<g class="av-body">' + ears(c.animal, col) + head(c.animal, c.animal === "panda" ? "#fbfbf8" : c.color) +
      face(c.animal, mood || "calm") + accessory(c.acc) + '</g></svg>';
  }

  function unlocked(acc) {
    const need = ACCESSORIES[acc] && ACCESSORIES[acc].badge;
    return !need || Boolean(MQ.state && MQ.state.get().badges[need]);
  }

  function label(entry) { return entry[MQ.i18n.uiLang()] || entry.vi; }

  function nickname(ch) {
    const c = Object.assign({}, DEFAULT, ch || {});
    const trait = TRAITS[c.trait] || TRAITS[0];
    return MQ.i18n.uiLang() === "en" ? label(trait) + " " + label(ANIMALS[c.animal]) : label(ANIMALS[c.animal]) + " " + label(trait);
  }

  return {
    ANIMALS: ANIMALS, COLORS: COLORS, ACCESSORIES: ACCESSORIES, TRAITS: TRAITS, DEFAULT: DEFAULT,
    svg: svg, unlocked: unlocked, nickname: nickname, label: label
  };
})();
