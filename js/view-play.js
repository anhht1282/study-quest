// The play loop: adaptive question run with hints, Socratic tutor, instant feedback and reflection.
(function () {
  const h = MQ.ui.h;
  const t = MQ.t;
  const I = MQ.i18n;
  const MAX_TRIES = 3;

  function poolFor(p) {
    if (p.review) {   // 🔁 today's due questions, interleaved across units; each item carries its own unit
      const d = MQ.state.get(), R = MQ.review;
      const items = R.due(MQ.units(), d.answers, d.review, R.dayIndex(Date.now()), MQ.state.reviewLeft());
      return { unit: items.length ? items[0].unit : MQ.units()[0], items: items, questions: items.map(function (x) { return x.q; }), title: t("review.title") };
    }
    if (p.mine) return { unit: { id: 0 }, questions: MQ.state.get().myQuestions, title: t("play.mine") };
    const u = MQ.unit(p.id);
    if (p.boss) return { unit: u, questions: u.challenge.questions, title: I.c(u, "u.challenge.title", u.challenge.title || t("boss.title")) };
    const sec = u.sections.find(function (s) { return s.id === p.sec; });
    return { unit: u, questions: sec.questions, title: sec.id + " · " + I.pick(sec.title, sec.titleVi).main, sec: sec };
  }

  // Choices are shown in random order so the answer position can't be guessed;
  // lists that refer to other options ("all of the above", "cả hai"...) keep their order.
  const ORDER_BOUND = /all of the above|none of the|both|neither|tất cả|cả hai|cả ba|không có .*nào|đều đúng|đều sai/i;
  // Choices that are only diagram labels ("A", "P", "X'"): shown as the label itself, in label order,
  // so a choice "D" is never displayed next to a different badge letter.
  function isLabelChoices(choices) {
    return choices.length > 0 && choices.every(function (c) { return /^[A-Z][0-9']?$/.test(String(c).trim()); });
  }

  function displayOrder(choices) {
    const idx = choices.map(function (_, i) { return i; });
    if (isLabelChoices(choices)) return idx.sort(function (a, b) { return String(choices[a]).localeCompare(String(choices[b])); });
    if (choices.some(function (c) { return ORDER_BOUND.test(c); })) return idx;
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = idx[i]; idx[i] = idx[j]; idx[j] = tmp;
    }
    return idx;
  }

  function answerText(q, choices) {
    if (q.type === "mc") return choices[q.answer];
    if (q.type === "multi") return (q.answer || []).map(function (i) { return choices[i]; }).join("; ");
    return Array.isArray(q.answer) ? q.answer.join(" / ") : String(q.answer);
  }

  MQ.ui.route("play", function (p) {
    const pool = poolFor(p);
    if (p.review && !pool.items.length) { setTimeout(function () { MQ.ui.go("map"); }, 0); return h("div"); }
    let U = pool.unit;   // in review mode it switches to each question's own unit (see ask)
    let curItem = null;  // 🔁 review mode: the section card being asked ({ unit, sec, q })
    const run = MQ.adaptive.createRun(U, pool.questions, MQ.adaptive.startLevelFor(U, pool.questions));
    if (p.boss || p.mine) run.length = Math.min(p.mine ? 10 : 8, pool.questions.length);
    if (p.review) run.length = pool.items.length;
    const summary = { ok: 0, xp: 0, hints: 0, fixed: 0, combo: 0, bestCombo: 0, perfect: true };
    const starsBefore = pool.sec ? MQ.state.starsFor(MQ.state.sectionMastery(U, pool.sec)) : 0;
    const bossBefore = p.boss ? MQ.state.challengeMastery(U) : 0;
    // review pays a fixed +2 XP, so a countdown promising "full 10 XP" would mislead
    const useTimer = MQ.state.get().settings.timer !== false && !p.mine && !p.review;
    let stopTick = function () {};

    const root = h("section.play" + (p.boss ? ".boss-mode" : ""));
    const head = h("div.play-head");
    const stage = h("div.play-stage");
    root.appendChild(head);
    root.appendChild(stage);

    function exit() {
      stopTick();
      if (p.mine) MQ.ui.go("creator"); else if (p.review) MQ.ui.go("map"); else MQ.ui.go("unit", { id: U.id });
    }

    function renderHead() {
      const lv = MQ.adaptive.levelLabel(run.level);
      head.innerHTML = "";
      head.appendChild(h("button.btn.ghost", { onclick: exit }, "✕ " + t("play.exit")));
      head.appendChild(h("div.play-title", pool.title));
      head.appendChild(h("div.dots", Array.from({ length: run.length }, function (_, i) {
        return h("i" + (i < run.done.length ? ".done" : i === run.done.length ? ".cur" : ""));
      })));
      head.appendChild(h("span.level." + lv.cls, { title: t("play.level.title") }, t(lv.key)));
    }

    // Countdown ring: full XP inside the budget, then the maximum shrinks to a floor (timer.js).
    function timerWidget(q) {
      if (!useTimer) return { el: null, factor: function () { return 1; }, stop: function () {}, extend: null };
      const baseBudget = MQ.timer.budget(q, p.boss);
      let budget = baseBudget;
      const clock = MQ.timer.clock();
      const R = 20, C = 2 * Math.PI * R;
      const ring = h("span.tm-ring", {
        svg: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="' + R + '" class="tm-bg"/>' +
          '<circle cx="24" cy="24" r="' + R + '" class="tm-fg" stroke-dasharray="' + C.toFixed(1) + '"/></svg>'
      }, [h("b.tm-sec")]);
      const label = h("span.tm-label");
      const el = h("div.timer", { title: t("timer.tip", { s: budget }) }, [ring, label]);
      let lastState = "";
      function tick() {
        if (lastState && !document.body.contains(el)) { stop(); return; }   // left the screen
        const s = clock.seconds();
        const f = MQ.timer.factor(s, budget);
        const left = Math.max(0, budget - s);
        const xp = MQ.timer.points(q.diff, 0, f);
        const state = s <= budget ? "full" : f > MQ.timer.FLOOR ? "decay" : "floor";
        ring.querySelector(".tm-fg").style.strokeDashoffset = String(C * (1 - (s <= budget ? left / budget : 0)));
        ring.querySelector(".tm-sec").textContent = s <= budget ? String(Math.ceil(left)) : "⌛";
        label.textContent = t("timer." + state, { xp: xp });
        if (state !== lastState) { el.className = "timer " + state; if (lastState) MQ.fx.pop(el, "jump"); lastState = state; }
      }
      tick();
      const id = setInterval(tick, 250);
      const stop = function () { clearInterval(id); clock.stop(); };
      stopTick = stop;
      // reading time for "What do I do?": the budget grows while the clock keeps running. Only inside the
      // full-value window, so opening the panel late can't buy back a decayed maximum.
      const extend = function (s) {
        if (clock.seconds() > budget) return false;
        budget += s;
        el.title = t("timer.tip", { s: budget });
        tick();
        return true;
      };
      return {
        el: el, factor: function () { return MQ.timer.factor(clock.seconds(), budget); }, seconds: clock.seconds,
        baseBudget: baseBudget, stop: stop, extend: extend
      };
    }

    function praise(q, tries, hints, tm) {
      const fast = tm.seconds && tries === 1 && tm.seconds() <= tm.baseBudget / 2;
      if (tries === 1 && hints === 0) {
        summary.combo += 1;
        summary.bestCombo = Math.max(summary.bestCombo, summary.combo);
      } else {
        summary.combo = 0;
        summary.perfect = false;
      }
      if (q.diff === 3 && tries === 1 && hints === 0) { MQ.fx.banner(t("praise.super"), t("praise.super.sub"), "gold"); MQ.fx.fireworks(2); }
      else if (summary.combo >= 3) MQ.fx.banner(t("praise.combo", { n: summary.combo }), t("praise.combo.sub"), "fire");
      else if (fast) MQ.fx.banner(t("praise.fast"), t("praise.fast.sub"), "cool");
      else if (tries > 1) MQ.fx.banner(t("praise.persist"), t("praise.persist.sub"), "good");
    }

    function ask() {
      stopTick();
      const item = p.review ? pool.items[run.done.length] : null;
      const q = p.review ? (item ? item.q : null) : MQ.adaptive.next(run);
      curItem = item;
      if (item) U = item.unit;
      renderHead();
      stage.innerHTML = "";
      stage.appendChild(q ? questionCard(q) : finish());
    }

    function questionCard(q) {
      const k = "q." + q.id;
      const qText = I.pair(U, k + ".q", q.q);
      const choiceItems = q.choices ? MQ.ui.biItems(I.pair(U, k + ".choices", q.choices)) : [];
      const hintItems = MQ.ui.biItems(I.pair(U, k + ".hints", q.hints || []));
      const explain = I.pair(U, k + ".explain", q.explain || "");
      let tries = 0, hints = 0, closed = false, selected = q.type === "multi" ? [] : null;
      const tm = timerWidget(q);

      const tutorText = h("p", MQ.tutor.opener());
      const tutorBox = h("div.tutor", [h("span.owl", "🦉"), tutorText]);
      const feedback = h("div.feedback");
      const hintList = h("ol.hints");
      let tutorAct = null;
      // action (optional): { label, run } shown as a button under the owl's line, e.g. "Open the guide"
      const say = function (text, moodCls, action) {
        tutorBox.className = "tutor" + (moodCls ? " " + moodCls : "");
        tutorText.textContent = text;
        if (tutorAct) tutorAct.remove();
        tutorAct = action ? h("button.btn.ghost.tutor-act", {
          onclick: function () { tutorAct.remove(); tutorAct = null; action.run(); }
        }, [h("span", { "aria-hidden": "true" }, "📖 "), action.label]) : null;
        if (tutorAct) tutorBox.appendChild(tutorAct);
        MQ.fx.pop(tutorBox, "talk");
      };

      let input;
      const btnByIndex = [];
      if (q.type === "mc" || q.type === "multi") {
        const labels = isLabelChoices(q.choices || []);
        input = h("div.choices" + (labels ? ".label-choices" : ""), displayOrder(q.choices || []).map(function (i, pos) {
          const b = btnByIndex[i] = h("button.choice", {
            onclick: function () {
              if (closed) return;
              if (q.type === "mc") {
                selected = i;
                btnByIndex.forEach(function (x) { if (x) x.classList.remove("sel"); });
                b.classList.add("sel");
              } else {
                selected = selected.indexOf(i) === -1 ? selected.concat([i]) : selected.filter(function (x) { return x !== i; });
                b.classList.toggle("sel");
              }
            }
          }, labels ? [h("span.letter", String(q.choices[i]).trim())]
            : [h("span.letter", String.fromCharCode(65 + pos)), MQ.ui.bi("span", choiceItems[i])]);
          return b;
        }));
      } else {
        const ph = MQ.howto.placeholder(q);   // the expected shape, e.g. "(x, y)" or "a : b"
        const field = h("input.input.answer", {
          placeholder: ph ? t(ph.key, ph.vars) : q.type === "text" ? t("play.ph.text") : t("play.ph.num"), autocomplete: "off",
          onkeydown: function (e) { if (e.key === "Enter") submit(); },
          oninput: function () { field.classList.remove("slip"); }
        });
        input = h("div.answer-row", [field, q.unitLabel ? h("span.unit-label", q.unitLabel) : null]);
        setTimeout(function () { field.focus(); }, 50);
      }

      function value() {
        return q.type === "mc" || q.type === "multi" ? selected : input.querySelector("input").value;
      }

      const checkBtn = h("button.btn.big", { onclick: submit }, t("play.check"));
      const hintBtn = h("button.btn.ghost", { onclick: giveHint }, "💡 " + t("play.hint", { n: 0 }));
      const askField = h("input.input", { placeholder: t("play.ask.ph"), onkeydown: function (e) { if (e.key === "Enter") askCu(); } });
      const askBox = h("div.ask", { hidden: true }, [askField, h("button.btn.ghost", { onclick: askCu }, t("play.ask.send"))]);
      const askBtn = h("button.btn.ghost", {
        onclick: function () { askBox.hidden = !askBox.hidden; if (!askBox.hidden) askField.focus(); }
      }, "🦉 " + t("play.ask"));

      function askCu() {
        say(MQ.tutor.reply(askField.value, hintItems[0] && hintItems[0].main));
        askField.value = "";
      }

      function giveHint() {
        if (closed || hints >= 3) return;
        const item = hintItems[hints] || { main: t("tutor.hint.done"), sub: null };
        hintList.appendChild(MQ.ui.bi("li", item));
        hints += 1;
        summary.hints += 1;
        hintBtn.textContent = "💡 " + t("play.hint", { n: hints });
        if (hints >= 3) hintBtn.disabled = true;
        MQ.ui.mood("think");
      }

      function submit() {
        if (closed) return;
        const v = value();
        const res = MQ.checker.check(q, v);
        // wrong shape (unit typed, missing brackets…) or right value not simplified: explain, don't use up a try
        const slip = res.ok ? null : MQ.howto.inputIssue(q, v);
        if (slip) return formatSlip(slip);
        if (res.invalid || v === null || v === "") { say(t("play.empty")); return; }
        tries += 1;
        if (res.ok) return win();
        if (q.type === "mc" && btnByIndex[v]) btnByIndex[v].classList.add("wrong");
        MQ.fx.pop(root, "shake");
        MQ.ui.mood("think");
        const nudge = q.howto && tries === 1 && !guide.seen();
        say(MQ.tutor.onWrong(q, tries, MQ.checker.diagnose(q, v), hintItems, { howtoSeen: guide.seen() }), "warn", nudge ? openGuide : null);
        if (nudge) MQ.fx.pop(guide.btn, "nudge-once");
        if (tries >= MAX_TRIES) lose();
      }

      function formatSlip(slip) {
        const field = input.querySelector("input");
        say(t(slip.key, slip.vars) + " " + t("play.free"), "warn", guide.isOpen() ? null : openGuide);
        field.classList.add("slip");
        MQ.fx.pop(field, "shake");
        field.focus();
      }

      function win() {
        closed = true;
        const f = tm.factor();
        tm.stop();
        // review first: recordAnswer moves "last answered" to today, which would make the question look not due
        const reviewed = p.review && curItem ? MQ.state.reviewAnswer(curItem.unit, curItem.sec, true) : 0;
        const gained = MQ.state.recordAnswer(U.id, q, true, hints, f) + reviewed;
        praise(q, tries, hints, tm);
        summary.ok += 1; summary.xp += gained;
        if (tries > 1) summary.fixed += 1;
        MQ.ui.renderHud();
        MQ.ui.mood(q.diff === 3 ? "wow" : "happy");
        MQ.fx.confetti(checkBtn, q.diff === 3 ? 36 : 22);
        if (gained) MQ.fx.floatText(checkBtn, "+" + gained + " XP");
        MQ.ui.badge("first");
        if (tries > 1) MQ.ui.badge("persist");
        if (q.diff === 3 && hints === 0 && tries === 1) MQ.ui.badge("selfmade");
        MQ.adaptive.report(run, q, true, hints, tries);
        say(MQ.tutor.onRight(q, hints, tries), "good");
        if (q.type === "mc") btnByIndex[q.answer].classList.add("right");
        reveal(true, gained);
      }

      function lose() {
        closed = true;
        tm.stop();
        summary.combo = 0;
        summary.perfect = false;
        if (p.review && curItem) MQ.state.reviewAnswer(curItem.unit, curItem.sec, false);
        MQ.state.recordAnswer(U.id, q, false, hints);
        MQ.adaptive.report(run, q, false, hints, tries);
        reveal(false, 0);
      }

      function reveal(ok, gained) {
        checkBtn.remove(); hintBtn.remove();
        const shown = choiceItems.map(function (c) { return c.main; });
        feedback.appendChild(h("div.card.fb" + (ok ? ".ok" : ".no"), [
          h("div.fb-title" + (ok ? ".ok" : ".no"), ok ? "✔ " + t("play.right") + (gained ? " · +" + gained + " XP" : "") : t("play.solution")),
          !ok ? h("p.answer-key", t("play.answer") + ": " + answerText(q, shown)) : null,
          explain.main ? MQ.ui.bi("p.explain", explain) : null
        ]));
        if (ok && q.why) feedback.appendChild(whyBlock(q));
        if (!ok) feedback.appendChild(h("p.tiny", t("play.retryLater")));
        feedback.appendChild(h("div.row.end", [h("button.btn.big", { onclick: ask }, run.done.length >= run.length ? t("play.results") + " ▸" : t("play.next") + " ▸")]));
      }

      const guide = howtoGuide(q, k, tm, function () { return closed; });
      const openGuide = { label: t("play.howto.open"), run: function () { guide.open(); } };
      const qMeta = h("div.q-meta", [
        h("span.pill.d" + q.diff, t("diff." + q.diff)),
        q.source === "vn" ? h("span.pill.vn", "🐉 " + t("play.src.vn"))
          : q.source === "me" ? h("span.pill", "✏️ " + t("play.src.me"))
          : q.source === "wb" ? h("span.pill.book", "📗 Workbook") : h("span.pill.book", "📘 Cambridge"),
        q.skill ? h("span.pill.skill", q.skill) : null,
        tm.el
      ]);
      return h("article.card.qcard", [
        qMeta,
        MQ.ui.bi("p.q", qText),
        q.svg ? h("div.figure", { svg: q.svg }) : null,
        guide.btn, guide.panel,
        input,
        h("div.row", [checkBtn, hintBtn, askBtn]),
        askBox, hintList, tutorBox, feedback
      ]);
    }

    // "📖 What do I do?": the task in plain words (q.howto, optional) + how to type the answer (howto.js).
    // Free: no XP cost, not a hint; the first opening adds reading time to the clock.
    function howtoGuide(q, k, tm, isClosed) {
      let seen = false;
      const id = "howto-" + String(q.id).replace(/[^\w-]/g, "_");
      const tips = MQ.howto.formatTips(q);
      const panel = h("div.howto-panel#" + id, { hidden: true, role: "region", "aria-label": t("play.howto.title") }, [
        h("p.kicker", t("play.howto.title")),
        q.howto ? h("div.howto-sec", [h("h3", "🎯 " + t("play.howto.task")), MQ.ui.bi("p", I.pair(U, k + ".howto", q.howto))]) : null,
        h("div.howto-sec", [
          h("h3", "⌨️ " + t("play.howto.format")),
          h("ul", tips.map(function (x) { return h("li", t(x.key, x.vars)); }))
        ]),
        h("p.tiny", t("play.howto.free") + (tm.extend ? " " + t("play.howto.time", { s: MQ.timer.READ_BONUS }) : ""))
      ]);
      function toggle() {
        panel.hidden = !panel.hidden;
        btn.setAttribute("aria-expanded", String(!panel.hidden));
        if (panel.hidden) return;
        MQ.fx.pop(panel, "unfold");
        if (!seen && tm.extend && !isClosed() && tm.extend(MQ.timer.READ_BONUS)) {
          MQ.fx.floatText(btn, t("play.howto.bonus", { s: MQ.timer.READ_BONUS }));
        }
        seen = true;
      }
      const btn = h("button.btn.ghost.howto-btn", { "aria-expanded": "false", "aria-controls": id, onclick: toggle },
        [h("span", { "aria-hidden": "true" }, "📖 "), t("play.howto")]);
      return {
        btn: btn, panel: panel,
        seen: function () { return seen; },
        isOpen: function () { return !panel.hidden; },
        open: function () { if (panel.hidden) toggle(); panel.scrollIntoView({ block: "nearest" }); }
      };
    }

    function whyBlock(q) {
      const why = q.why;
      const k = "q." + q.id + ".why";
      const items = MQ.ui.biItems(I.pair(U, k + ".choices", why.choices));
      const box = h("div.card.why", [h("p.kicker", t("play.why")), MQ.ui.bi("p", I.pair(U, k + ".q", why.q))]);
      const btns = [];
      const list = h("div.choices", displayOrder(why.choices).map(function (i, pos) {
        return btns[i] = h("button.choice", {
          onclick: function () {
            if (box.dataset.done) return;
            box.dataset.done = "1";
            const ok = i === why.answer;
            btns[why.answer].classList.add("right");
            if (!ok) btns[i].classList.add("wrong");
            const paid = ok && MQ.state.claimWhy(U.id, q.id);
            if (paid) { summary.xp += 5; MQ.ui.renderHud(); MQ.fx.floatText(btns[i], "+5 XP"); }
            if (ok) { MQ.ui.badge("explain"); MQ.ui.mood("happy"); }
            box.appendChild(h("p.tiny", ok ? t("play.why.ok") + (paid ? " +5 XP" : "") : t("play.why.no")));
          }
        }, [h("span.letter", String.fromCharCode(65 + pos)), MQ.ui.bi("span", items[i])]);
      }));
      box.appendChild(list);
      return box;
    }

    function finishMessage() {
      if (summary.fixed) return t("finish.fixed", { n: summary.fixed });
      if (summary.ok < run.done.length / 2) return t("finish.hard");
      return t("finish.good");
    }

    function finish() {
      if (p.boss && MQ.state.challengeMastery(U) >= 0.7) MQ.ui.badge("boss");
      const m = pool.sec ? MQ.state.sectionMastery(U, pool.sec) : null;
      const great = summary.ok >= run.done.length * 0.7;
      const starsAfter = m !== null ? MQ.state.starsFor(m) : 0;
      const perfect = summary.perfect && summary.ok === run.done.length && run.done.length >= 3;
      // one headline celebration, the most meaningful first
      const celebration = p.boss && bossBefore < 0.7 && MQ.state.challengeMastery(U) >= 0.7 ? ["celebrate.boss", "celebrate.boss.sub", 7]
        : perfect ? ["celebrate.perfect", "celebrate.perfect.sub", 6]
        : starsAfter > starsBefore ? ["celebrate.stars", "celebrate.stars.sub", 4]
        : null;
      const note = h("textarea.input", { rows: "3", placeholder: t("finish.journal.ph") });
      const card = h("article.card.finish", [
        MQ.ui.avatarEl("div.finish-av", great ? "wow" : "happy"),
        h("h2", t("finish.title")),
        h("div.stats", [
          stat(summary.ok + "/" + run.done.length, t("finish.correct")),
          stat("+" + summary.xp, "XP"),
          stat(String(summary.fixed), t("finish.fixedLabel")),
          stat("🔥 " + summary.bestCombo, t("finish.combo")),
          m !== null ? stat(Math.round(m * 100) + "%", t("finish.mastery")) : null
        ]),
        m !== null ? MQ.ui.stars(MQ.state.starsFor(m)) : null,
        h("p", finishMessage()),
        h("label.lbl", "📓 " + t("finish.journal")), note,
        h("div.row", [
          h("button.btn", {
            onclick: function () {
              const text = note.value.trim();
              if (text) {
                MQ.state.update(function (d) { d.journal.push({ at: Date.now(), where: pool.title, text: text }); });
                if (MQ.state.get().journal.length >= 3) MQ.ui.badge("reflect");
                MQ.ui.toast(t("finish.saved"));
              }
              exit();
            }
          }, t("finish.save")),
          p.review ? null : h("button.btn.ghost", { onclick: function () { MQ.ui.go("play", p); } }, t("finish.again"))
        ])
      ]);
      setTimeout(function () {
        if (celebration) {
          MQ.fx.banner(t(celebration[0], { n: starsAfter }), t(celebration[1]), "gold");
          MQ.fx.fireworks(celebration[2]);
          MQ.fx.sparkle(card.querySelector(".stars"), 14);
          MQ.ui.mood("wow", 3000);
          card.classList.add("celebrate");
        } else if (great) {
          MQ.fx.confetti(card.querySelector(".finish-av"), 44);
        }
      }, 300);
      return card;
    }

    function stat(v, l) { return h("div.stat", [h("b", v), h("span", l)]); }

    ask();
    return root;
  });
})();
