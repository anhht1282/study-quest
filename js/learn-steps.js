// "Học từng thẻ": the key ideas of a section as a sequence of cards, each followed by a quick key-word check
// (the idea's sentence with its **key word** blanked), figures whose labels can be hidden for self-testing,
// and a closing English–Vietnamese key-word match. Everything is built from the section's own book text,
// so nothing new is invented; checks never cost points or lives.
window.MQ = window.MQ || {};

MQ.learnSteps = (function () {
  // ---------- pure helpers (unit-tested) ----------
  function marks(s) {
    return (String(s).match(/\*\*(.+?)\*\*/g) || []).map(function (x) { return x.slice(2, -2); });
  }

  function cloze(s) {
    const m = /\*\*(.+?)\*\*/.exec(String(s));
    if (!m) return null;
    return { before: s.slice(0, m.index), answer: m[1], after: s.slice(m.index + m[0].length) };
  }

  const norm = function (x) { return String(x).toLowerCase().trim(); };

  // The answer plus up to n-1 other key words of the section, sorted alphabetically so the position of the
  // right option gives nothing away. Distractors are the nearest in length (similar-looking choices).
  function options(answer, pool, n) {
    const seen = {};
    seen[norm(answer)] = true;
    const others = (pool || []).filter(function (p) {
      const k = norm(p);
      if (seen[k]) return false;
      seen[k] = true;
      return true;
    }).sort(function (a, b) {
      return Math.abs(a.length - answer.length) - Math.abs(b.length - answer.length) || a.localeCompare(b);
    });
    return [answer].concat(others.slice(0, Math.max(0, n - 1))).sort(function (a, b) { return a.localeCompare(b); });
  }

  // Check for one idea: blank the headline's key word, else the first detail that has one.
  function checkFor(head, details, pool) {
    const src = [head].concat(details || []).find(function (s) { return marks(s).length; });
    const c = src && cloze(src);
    if (!c) return null;
    const opts = options(c.answer, pool, 4);
    return opts.length < 2 ? null : { before: c.before, answer: c.answer, after: c.after, options: opts };
  }

  // Check for an idea without a key word: show its first detail and ask which idea it belongs to. The other
  // options are the ideas a third and two thirds of the section away (far apart, so only one fits), in book order.
  function belongs(i, heads, details) {
    const n = heads.length;
    const d = (details[i] || [])[0];
    if (!d || n < 3) return null;
    const step = Math.max(1, Math.floor(n / 3));
    const opts = [i, (i + step) % n, (i + 2 * step) % n].filter(function (x, k, a) { return a.indexOf(x) === k; });
    return opts.length < 3 ? null : { detail: d, answer: i, options: opts.sort(function (a, b) { return a - b; }) };
  }

  // Key words worth matching: the Vietnamese term differs from the English one; book order, at most n.
  function pairs(keywords, n) {
    return (keywords || []).filter(function (k) { return k.vi && norm(k.vi) !== norm(k.en); }).slice(0, n);
  }

  const plain = function (s) { return String(s).replace(/\*\*(.+?)\*\*/g, "$1"); };

  const escapeRe = function (x) { return String(x).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); };

  // Key words the book itself uses as nouns ("the nucleus", "a cell wall", "of chlorophyll"). Only these are
  // swapped, so the swapped sentence stays grammatical: a verb such as "magnifies" swapped for "cell wall"
  // would give itself away without any understanding.
  // English and Vietnamese words that come before a noun (the book text is shown in either language).
  const DETERMINERS = "(?:the|a|an|this|that|these|those|each|its|their|of|in|no|" +
    "các|những|một|mỗi|của|cái|chiếc|con|là|có|gồm|trong|từ|vào|với|và|thành|gọi là)";
  function nouns(pool, texts) {
    const all = plain((texts || []).join(" \n "));
    return (pool || []).filter(function (k) {
      return new RegExp("(?:^|[^\\p{L}])" + DETERMINERS + "\\s+" + escapeRe(k) + "(?![\\p{L}\\p{N}])", "iu").test(all);
    });
  }

  // "Find the swapped word": the sentence's first allowed key word is replaced by another allowed key word of
  // the section (the nearest in length, never one already in the sentence). Marks are stripped so bold type
  // gives nothing away. options: the right word plus other key words (not the swapped-in one), to fix it.
  // allowed: optional list of key words that may be swapped (see nouns); all key words when omitted.
  function swapFor(s, pool, allowed) {
    const ok = function (k) { return !allowed || allowed.map(norm).indexOf(norm(k)) !== -1; };
    const re = /\*\*(.+?)\*\*/g;
    let m;
    while ((m = re.exec(String(s))) && !ok(m[1])) { /* skip key words that may not be swapped */ }
    if (!m) return null;
    const right = m[1];
    const before = s.slice(0, m.index);
    const text = norm(plain(s));
    const seen = {};
    // "cells" swapped for "nucleus" (or "a organs") gives itself away: prefer the same singular/plural form.
    const plural = function (w) { return /[^siu]s$/i.test(String(w).trim()); };   // not "epidermis", "nucleus", "gas"…
    // "an spongy layer" / "a organ" would give it away too: after a/an, only a word that fits the article.
    const article = (/\b(an?)\s+$/i.exec(before) || [])[1];
    const fits = function (w) { return !article || (/^[aeiou]/i.test(w) === (article.toLowerCase() === "an")); };
    const cost = function (w) { return (plural(w) !== plural(right) ? 100 : 0) + Math.abs(w.length - right.length); };
    const others = (pool || []).filter(function (p) {
      const k = norm(p);
      const stem = k.replace(/\s*\(.*\)$/, "");      // "khối lượng (mass)" → "khối lượng"
      // never a word that is already somewhere in the sentence, bold or not
      if (seen[k] || text.indexOf(k) !== -1 || (stem && text.indexOf(stem) !== -1) || !ok(p) || !fits(p)) return false;
      seen[k] = true;
      return true;
    }).sort(function (a, b) { return cost(a) - cost(b) || a.localeCompare(b); });
    if (!others.length) return null;
    const startCap = !before.trim() && right[0] !== right[0].toLowerCase();
    // capital at the start of a sentence, but leave words with their own capitals alone ("pH scale")
    const cap = function (w) { return startCap && w === w.toLowerCase() ? w[0].toUpperCase() + w.slice(1) : w; };
    return {
      before: plain(before), right: right, wrong: cap(others[0]), after: plain(s.slice(m.index + m[0].length)),
      options: options(right, others.slice(1).map(cap), 3)
    };
  }

  // Up to n swaps spread evenly over the section: per idea the first detail that can be swapped, else its headline.
  function pickSwaps(heads, details, pool, n, allowed) {
    const all = heads.map(function (hd, i) {
      return (details[i] || []).concat([hd]).reduce(function (found, x) { return found || swapFor(x, pool, allowed); }, null);
    }).filter(Boolean);
    if (all.length <= n) return all;
    return Array.from({ length: n }, function (_, k) { return all[Math.round((k * (all.length - 1)) / (n - 1))]; });
  }

  const api = {
    marks: marks, cloze: cloze, options: options, checkFor: checkFor, belongs: belongs, pairs: pairs,
    swapFor: swapFor, pickSwaps: pickSwaps, nouns: nouns
  };
  if (typeof document === "undefined") return api;

  // ---------- UI ----------
  const h = function () { return MQ.ui.h.apply(null, arguments); };
  const t = function (k, v) { return MQ.t(k, v); };

  function rich(s) {
    return String(s).split(/\*\*(.+?)\*\*/).map(function (x, i) { return i % 2 ? h("b.kw", x) : x; });
  }
  function biRich(sel, p) {
    return h(sel, rich(p.main).concat(p.sub ? [h("span.sub", { lang: "vi" }, rich(p.sub))] : []));
  }

  // Figure with an optional "hide the labels" self-test: bold labels get a cover; tap a cover to reveal it.
  function figure(f) {
    const box = h("div.figure", { svg: f.svg });
    const cap = MQ.ui.bi("figcaption", f.cap);
    const fig = h("figure.step-fig", [f.photos ? MQ.photos.view(f.photos) : null, box, cap]);
    const labels = function () { return [].slice.call(box.querySelectorAll("text[font-weight='bold']")); };
    if (labels().length < 2) return fig;          // one label is not a quiz
    const btn = h("button.btn.ghost.small.lq-btn", t("learn.labels.hide"));
    const note = h("span.tiny.lq-note");
    let on = false;
    btn.onclick = function () {
      on = !on;
      btn.textContent = t(on ? "learn.labels.show" : "learn.labels.hide");
      note.textContent = "";
      [].slice.call(box.querySelectorAll(".lq-cover")).forEach(function (c) { c.remove(); });
      if (!on) return;
      const NS = "http://www.w3.org/2000/svg";
      const list = labels();
      let left = list.length;
      list.forEach(function (tx) {
        const b = tx.getBBox();
        const r = document.createElementNS(NS, "rect");
        r.setAttribute("x", b.x - 3); r.setAttribute("y", b.y - 2);
        r.setAttribute("width", b.width + 6); r.setAttribute("height", b.height + 4);
        r.setAttribute("rx", 4); r.setAttribute("class", "lq-cover");
        r.addEventListener("click", function () {
          r.remove();
          left -= 1;
          if (!left) { note.textContent = t("learn.labels.done"); MQ.fx.pop(note, "jump"); }
        });
        tx.parentNode.insertBefore(r, tx.nextSibling);
      });
    };
    fig.insertBefore(h("div.lq-bar", [btn, note]), cap);
    return fig;
  }

  // ctx: { ideas: [{ head: {main, sub}, details: [{main, sub}], page, figs: [{svg, cap}], sims: [id] }], keywords, srcLabel(p) }
  function mount(ctx, onList) {
    const ideas = ctx.ideas;
    const pool = ideas.reduce(function (acc, it) {
      return acc.concat(marks(it.head.main), it.details.reduce(function (a, d) { return a.concat(marks(d.main)); }, []));
    }, []);
    const heads = ideas.map(function (it) { return it.head.main; });
    const dets = ideas.map(function (it) { return it.details.map(function (d) { return d.main; }); });
    // a key-word check where the idea has a key word, else "which idea does this detail belong to?"
    const checks = ideas.map(function (it, i) {
      const c = checkFor(heads[i], dets[i], pool);
      if (c) return { kind: "word", c: c };
      const b = belongs(i, heads, dets);
      return b ? { kind: "which", c: b } : null;
    });
    const result = [];          // per idea: "first" | "later" | "skip"
    const swaps = pickSwaps(heads, dets, pool, 3, nouns(pool, heads.concat.apply(heads, dets)));
    const swapResult = [];      // per swap: "first" | "later" | "skip"
    let idx = 0;

    const bar = h("i");
    const count = h("span.step-count");
    const stage = h("div.step-stage");
    const root = h("div.lsteps", [
      h("div.step-top", [h("div.bar.small.step-bar", [bar]), count,
        h("button.btn.ghost.small", { onclick: onList }, t("learn.list"))]),
      stage
    ]);

    function show(node) {
      stage.innerHTML = "";
      stage.appendChild(node);
      bar.style.width = Math.round((Math.min(idx, ideas.length) / ideas.length) * 100) + "%";
      count.textContent = idx < ideas.length ? t("learn.step", { n: idx + 1, total: ideas.length }) : "✓";
      if (root.getBoundingClientRect && root.getBoundingClientRect().top < 0) root.scrollIntoView({ behavior: "smooth" });
    }

    function nav(main, back) {
      return h("div.row.step-nav", [
        idx > 0 || back ? h("button.btn.ghost", { onclick: back || function () { idx -= 1; read(); } }, t("learn.prev")) : null,
        main
      ]);
    }

    function next() {
      idx += 1;
      if (idx < ideas.length) read();
      else if (swaps.length) swap(0);
      else done();
    }

    function read() {
      const it = ideas[idx];
      const c = checks[idx];
      const head = biRich("h3.step-head", it.head);
      if (it.page) head.appendChild(h("span.learn-src", "📘 " + ctx.srcLabel(it.page)));
      show(h("article.card.step-card", [
        h("p.kicker", t("learn.step", { n: idx + 1, total: ideas.length })),
        head,
        it.details.length ? h("ul.learn-detail.step-detail", it.details.map(function (d) { return biRich("li", d); })) : null,
        h("div.step-figs", it.figs.map(figure)),
        h("div.step-sims", (it.sims || []).map(function (id) { return MQ.sims.mount(id); })),
        nav(c ? h("button.btn", { onclick: check }, t("learn.check")) : h("button.btn", { onclick: next }, t("learn.next")))
      ]));
    }

    // One quick check: tap options until the right one; a wrong option is crossed out, never costs anything.
    function check() {
      const k = checks[idx];
      const c = k.c;
      const word = k.kind === "word";
      const blank = h("span.blank", "____");
      const fb = h("p.step-fb");
      let tries = 0;
      const go = h("button.btn", { onclick: next, disabled: true }, t("learn.next"));
      const choices = word
        ? c.options.map(function (o) { return { label: [o], right: norm(o) === norm(c.answer) }; })
        : c.options.map(function (i) { return { label: rich(heads[i]), right: i === c.answer }; });
      const opts = choices.map(function (o) {
        const b = h("button.opt" + (word ? "" : ".opt-idea"), o.label);
        b.onclick = function () {
          tries += 1;
          if (o.right) {
            if (word) { blank.textContent = c.answer; blank.className = "blank ok"; }
            b.classList.add("ok");
            opts.forEach(function (x) { x.disabled = true; });
            result[idx] = tries === 1 ? "first" : "later";
            fb.textContent = t(tries === 1 ? "learn.check.right" : "learn.check.right2");
            fb.className = "step-fb ok";
            if (tries === 1) MQ.fx.sparkle(b);
            go.disabled = false;
            go.focus();
          } else {
            b.classList.add("no");
            b.disabled = true;
            fb.textContent = t("learn.check.retry", { p: ideas[idx].page || "" });
            fb.className = "step-fb no";
            MQ.fx.pop(b, "wobble");
          }
        };
        return b;
      });
      show(h("article.card.step-card.step-check", [
        h("p.kicker", "🎯 " + t("learn.check.kicker") + " · " + t("learn.step", { n: idx + 1, total: ideas.length })),
        h("p.step-ask", t(word ? "learn.check.ask" : "learn.check.which")),
        word ? h("p.cloze", rich(c.before).concat([blank], rich(c.after))) : h("blockquote.step-quote", rich(c.detail)),
        h("div.opts" + (word ? "" : ".opts-col"), opts),
        fb,
        nav(h("div.row", [
          h("button.btn.ghost.small", { onclick: function () { result[idx] = result[idx] || "skip"; next(); } }, t("learn.check.skip")),
          go
        ]), read)
      ]));
    }

    // "Find the swapped word": every word of the sentence can be tapped; only the swapped-in key word is right.
    // Then fix it by picking the book's word; the corrected sentence always ends the item (no false fact remains).
    function swap(j) {
      const s = swaps[j];
      const fb = h("p.step-fb");
      const advance = function () { if (j + 1 < swaps.length) swap(j + 1); else done(); };
      const go = h("button.btn", { onclick: advance, disabled: true }, t("learn.next"));
      const fix = h("div.opts");
      let tries = 0;
      const odd = h("button.sw-word", s.wrong);
      const words = [];
      const split = function (txt) {
        return txt.split(/(\s+)/).map(function (w) {
          if (!w.trim()) return w;
          const b = h("button.sw-word", w);
          words.push(b);
          return b;
        });
      };
      const sentence = h("p.cloze.sw-sent", split(s.before).concat([odd], split(s.after)));
      words.forEach(function (b) {
        b.onclick = function () {
          tries += 1;
          b.classList.add("no");
          fb.textContent = t("learn.swap.notThis");
          fb.className = "step-fb no";
          MQ.fx.pop(b, "wobble");
        };
      });
      function solved() {
        odd.innerHTML = "";
        odd.appendChild(h("s.sw-bad", s.wrong));
        odd.appendChild(document.createTextNode(" "));
        odd.appendChild(h("b.kw.sw-good", s.right));
        swapResult[j] = swapResult[j] || (tries === 0 ? "first" : "later");
        fb.textContent = t(tries === 0 ? "learn.swap.right" : "learn.swap.right2");
        fb.className = "step-fb ok";
        if (tries === 0) MQ.fx.sparkle(odd);
        go.disabled = false;
        go.focus();
      }
      odd.onclick = function () {
        words.concat([odd]).forEach(function (x) { x.disabled = true; });
        odd.classList.add("found");
        if (s.options.length < 2) { solved(); return; }
        fb.textContent = t("learn.swap.fix", { w: s.wrong });
        fb.className = "step-fb";
        s.options.forEach(function (o) {
          const b = h("button.opt", o);
          b.onclick = function () {
            if (norm(o) === norm(s.right)) {
              b.classList.add("ok");
              [].slice.call(fix.children).forEach(function (x) { x.disabled = true; });
              solved();
            } else {
              tries += 1;
              b.classList.add("no");
              b.disabled = true;
              MQ.fx.pop(b, "wobble");
            }
          };
          fix.appendChild(b);
        });
      };
      show(h("article.card.step-card.step-check.step-swap", [
        h("p.kicker", "🕵️ " + t("learn.swap.kicker") + " · " + (j + 1) + "/" + swaps.length),
        h("p.step-ask", t("learn.swap.ask")),
        sentence,
        fix,
        fb,
        nav(h("div.row", [
          h("button.btn.ghost.small", { onclick: function () { swapResult[j] = swapResult[j] || "skip"; advance(); } },
            t("learn.check.skip")),
          go
        ]), function () { if (j > 0) swap(j - 1); else { idx = ideas.length - 1; read(); } })
      ]));
    }

    function match() {
      const ps = pairs(ctx.keywords, 6);
      if (ps.length < 3) return null;
      let pick = null;
      let left = ps.length;
      const msg = h("p.step-fb", t("learn.match.hint"));
      const en = ps.map(function (k, i) { return h("button.opt.m-en", { "data-i": i }, k.en); });
      const vi = ps.map(function (k, i) { return { k: k, i: i }; }).sort(function (a, b) { return a.k.vi.localeCompare(b.k.vi); })
        .map(function (x) { return h("button.opt.m-vi", { "data-i": x.i }, x.k.vi); });
      en.forEach(function (b) {
        b.onclick = function () { en.forEach(function (x) { x.classList.remove("sel"); }); pick = b; b.classList.add("sel"); };
      });
      vi.forEach(function (b) {
        b.onclick = function () {
          if (!pick) { MQ.fx.pop(msg, "wobble"); return; }
          if (pick.getAttribute("data-i") === b.getAttribute("data-i")) {
            [pick, b].forEach(function (x) { x.classList.remove("sel"); x.classList.add("ok"); x.disabled = true; });
            pick = null;
            left -= 1;
            if (!left) { msg.textContent = t("learn.match.done"); msg.className = "step-fb ok"; MQ.fx.confetti(msg, 24); }
          } else {
            b.classList.add("no");
            setTimeout(function () { b.classList.remove("no"); }, 450);
          }
        };
      });
      return h("div.match", [h("h4", t("learn.match.title")), h("div.match-cols", [h("div", en), h("div", vi)]), msg]);
    }

    function done() {
      const asked = result.filter(Boolean).length;
      const first = result.filter(function (r) { return r === "first"; }).length;
      show(h("article.card.step-card.step-done", [
        h("h3", "🏁 " + t("learn.done.title", { n: ideas.length })),
        asked ? h("p", t("learn.done.score", { a: first, b: asked })) : null,
        swapResult.filter(Boolean).length ? h("p", t("learn.done.swap", {
          a: swapResult.filter(function (r) { return r === "first"; }).length, b: swapResult.filter(Boolean).length
        })) : null,
        match(),
        h("p.tiny", t("learn.done.go")),
        nav(h("button.btn.ghost", { onclick: function () { idx = 0; read(); } }, t("learn.again")),
          function () { if (swaps.length) swap(swaps.length - 1); else { idx = ideas.length - 1; read(); } })
      ]));
    }

    read();
    return root;
  }

  api.mount = mount;
  api.rich = rich;
  api.biRich = biRich;
  return api;
})();

if (typeof module !== "undefined") module.exports = MQ.learnSteps;
