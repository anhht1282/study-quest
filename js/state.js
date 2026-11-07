// Persistent learner state (localStorage), XP and mastery bookkeeping.
window.MQ = window.MQ || {};

// Which Learner's Book is active (parts are listed in books.js); each book keeps its own progress.
MQ.bookChosen = (function () {
  try {
    const b = localStorage.getItem("mathquest.book");
    return Object.prototype.hasOwnProperty.call(MQ.BOOKS, b) ? b : null;
  } catch (e) {
    return null;
  }
})();
MQ.book = MQ.bookChosen || "7";
MQ.subject = MQ.BOOKS[MQ.book].subject;
MQ.switchBook = function (b) {
  try { localStorage.setItem("mathquest.book", b); } catch (e) { console.warn("MathQuest: cannot save book choice", e); }
  location.reload();
};
// Lightweight progress summary of any part, read straight from storage.
MQ.bookSummary = function (b) {
  try {
    const d = JSON.parse(localStorage.getItem("mathquest" + b + ".v1") || "null");
    if (!d || typeof d !== "object") return { xp: 0, solved: 0, spark: 0 };
    const answers = d.answers && typeof d.answers === "object" ? d.answers : {};
    const solved = Object.keys(answers).filter(function (k) { return answers[k] && answers[k].correct; }).length;
    return { xp: Number(d.xp) || 0, solved: solved, spark: Math.max(0, Number(d.spark) || 0) };
  } catch (e) {
    return { xp: 0, solved: 0, spark: 0 };
  }
};

MQ.state = (function () {
  const KEY = "mathquest" + MQ.book + ".v1";
  const blank = function () {
    return {
      profile: null,          // { name, avatar }
      xp: 0,
      answers: {},            // qKey -> { tries, correct, hints, firstTry, last }
      sections: {},           // "u1:1.1" -> { best: 0..1, runs }
      challenges: {},         // "u1" -> { best }
      projects: {},           // "u1" -> { notes: {...}, done }
      examples: {},           // "u1:1.1" -> { best, selfCheck: {same, other, learned}, runs }
      myQuestions: [],        // learner-authored questions
      journal: [],            // { at, text }
      badges: {},             // id -> timestamp
      minutesByDay: {},       // "2026-11-02" -> minutes
      spark: 0,               // 💡 creativity points (separate from XP)
      quests: {},             // "u1:1.1-x1" -> { best, keys: [found results], runs }
      sparkLog: [],           // last SPARK_LOG entries: { at, k, p, why: { key, vars } }
      review: {},             // 🔁 "u1:1.1-03" -> { box: 0..5, due: local day number } (js/review.js)
      reviewDay: { day: 0, n: 0 },  // 🔁 review answers counted today (daily cap across runs)
      settings: { sessionMin: 25, sound: false, timer: true }
    };
  };

  const QUEST_KEYS = 60, RESULT_KEYS = 40, SPARK_LOG = 200, REVIEW_KEYS = 5000;
  let data = null; // assigned after the helpers below are initialised

  // UI message in the current language (falls back to Vietnamese when the dictionary is absent, e.g. in tests)
  const msg = function (k, v, fallback) { return MQ.t && MQ.DICT && MQ.DICT[k] ? MQ.t(k, v) : fallback; };
  const isObj = function (v) { return v && typeof v === "object" && !Array.isArray(v); };
  const str = function (v, max) { return String(v == null ? "" : v).slice(0, max); };

  // Coerces untrusted saved/imported data into the expected shape (never throws).
  function sanitize(src) {
    const d = blank();
    if (!isObj(src)) return d;
    if (isObj(src.profile) && src.profile.name) {
      d.profile = { name: str(src.profile.name, 20), avatar: str(src.profile.avatar, 8) };
      const c = src.profile.char;
      if (isObj(c) && MQ.avatar) {
        const A = MQ.avatar;
        d.profile.char = {
          animal: Object.prototype.hasOwnProperty.call(A.ANIMALS, c.animal) ? c.animal : A.DEFAULT.animal,
          color: A.COLORS.indexOf(c.color) !== -1 ? c.color : A.DEFAULT.color,
          acc: Object.prototype.hasOwnProperty.call(A.ACCESSORIES, c.acc) ? c.acc : "none",
          trait: Math.max(0, Math.min(A.TRAITS.length - 1, Number(c.trait) || 0))
        };
      }
      const motto = Number(src.profile.motto);
      if (motto >= 0 && motto <= 5) d.profile.motto = Math.floor(motto);
    }
    d.xp = Math.max(0, Number(src.xp) || 0);
    ["answers", "sections", "challenges", "projects", "examples", "badges", "minutesByDay"].forEach(function (k) {
      if (isObj(src[k])) d[k] = src[k];
    });
    if (Array.isArray(src.journal)) {
      d.journal = src.journal.filter(isObj).map(function (j) {
        return { at: Number(j.at) || Date.now(), where: str(j.where, 120), text: str(j.text, 2000) };
      });
    }
    if (Array.isArray(src.myQuestions)) {
      // whitelist fields: imported questions must never carry markup such as `svg`
      d.myQuestions = src.myQuestions.filter(isObj).map(function (q) {
        return {
          id: str(q.id, 40), type: "num", diff: 2, skill: "đề tự tạo", source: "me", lang: "vi",
          q: str(q.q, 1000), answer: str(q.answer, 40),
          hints: Array.isArray(q.hints) ? q.hints.slice(0, 3).map(function (x) { return str(x, 300); }) : [],
          explain: str(q.explain, 1000)
        };
      }).filter(function (q) { return q.q && !Number.isNaN(MQ.checker.parseNumber(q.answer)); });
    }
    sanitizeSpark(src, d);
    sanitizeReview(src, d);
    if (isObj(src.settings)) {
      d.settings.sessionMin = Math.min(90, Math.max(10, Number(src.settings.sessionMin) || 25));
      d.settings.timer = src.settings.timer !== false;
    }
    return d;
  }

  function cleanWhy(w) {
    const vars = {};
    if (isObj(w.vars)) Object.keys(w.vars).slice(0, 4).forEach(function (v) { vars[str(v, 12)] = str(w.vars[v], 80); });
    return { key: str(w.key, 60), vars: vars };
  }

  // Result keys ("a:" answers, "p:" problems) grow with every try, so only they are capped; scoring keys
  // (criteria, strategies, terms, rule, prediction) are few per quest and must never be dropped.
  function boundKeys(keys) {
    const isResult = function (k) { return /^[ap]:/.test(k); };
    const scoring = keys.filter(function (k) { return !isResult(k); });
    return scoring.concat(keys.filter(isResult).slice(0, RESULT_KEYS)).slice(0, QUEST_KEYS);
  }

  // 💡 fields: numbers clamped, strings capped, arrays bounded; anything else is dropped.
  function sanitizeSpark(src, d) {
    const n0 = function (v) { return Math.max(0, Math.floor(Number(v) || 0)); };
    d.spark = n0(src.spark);
    if (isObj(src.quests)) {
      Object.keys(src.quests).slice(0, 2000).forEach(function (k) {
        const q = src.quests[k];
        if (!isObj(q)) return;
        const keys = Array.isArray(q.keys) ? q.keys.filter(function (x) { return typeof x === "string"; }) : [];
        d.quests[str(k, 60)] = { best: n0(q.best), keys: boundKeys(keys.map(function (x) { return str(x, 60); })), runs: n0(q.runs) };
      });
    }
    if (Array.isArray(src.sparkLog)) {
      d.sparkLog = src.sparkLog.filter(function (l) { return isObj(l) && isObj(l.why) && typeof l.why.key === "string"; })
        .slice(-SPARK_LOG).map(function (l) {
          const also = Array.isArray(l.also) ? l.also.filter(function (w) { return isObj(w) && typeof w.key === "string"; }).slice(0, 4) : [];
          return { at: Number(l.at) || 0, k: str(l.k, 60), p: n0(l.p), why: cleanWhy(l.why), also: also.map(cleanWhy) };
        });
    }
  }

  function sanitizeReview(src, d) {
    const rd = src.reviewDay;
    if (isObj(rd) && Number.isFinite(Number(rd.day))) d.reviewDay = { day: Math.floor(Number(rd.day)), n: Math.max(0, Math.floor(Number(rd.n) || 0)) };
    if (!isObj(src.review)) return;
    Object.keys(src.review).slice(0, REVIEW_KEYS).forEach(function (k) {
      const r = src.review[k];
      if (!isObj(r)) return;
      const due = Math.floor(Number(r.due));
      if (!Number.isFinite(due)) return;
      d.review[str(k, 60)] = { box: Math.max(0, Math.min(5, Math.floor(Number(r.box) || 0))), due: due };
    });
  }

  function load() {
    let raw = null;
    try {
      raw = localStorage.getItem(KEY);
    } catch (e) {
      console.warn("MathQuest: storage unavailable", e);
      return blank();
    }
    let loaded = blank();
    if (raw) {
      try {
        loaded = sanitize(JSON.parse(raw));
      } catch (e) {
        // keep the unreadable save so a parent can recover it; never silently overwrite it
        try { localStorage.setItem(KEY + ".bak-" + Date.now(), raw); } catch (e2) { console.warn("MathQuest: backup failed", e2); }
        console.warn("MathQuest: saved progress unreadable, backed up", e);
      }
    }
    if (!loaded.profile) loaded.profile = profileFromOtherBook();
    return loaded;
  }

  // The character and name carry over when the learner opens another book.
  function profileFromOtherBook() {
    const other = Object.keys(MQ.BOOKS).filter(function (b) { return b !== MQ.book; });
    for (let i = 0; i < other.length; i++) {
      try {
        const p = sanitize(JSON.parse(localStorage.getItem("mathquest" + other[i] + ".v1") || "null")).profile;
        if (p) return p;
      } catch (e) {
        console.warn("MathQuest: other book save unreadable", e);
      }
    }
    return null;
  }

  let saveWarned = false;
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("MathQuest: cannot save progress", e);
      if (!saveWarned && MQ.ui && MQ.ui.toast) {
        saveWarned = true;
        MQ.ui.toast(msg("state.saveFail", null, "Không lưu được tiến trình trên trình duyệt này."), "warn");
      }
    }
  }

  data = load();

  function get() { return data; }

  function update(fn) {
    const next = JSON.parse(JSON.stringify(data));
    fn(next);
    data = next;
    save();
    return data;
  }

  function qKey(unitId, qid) { return "u" + unitId + ":" + qid; }

  // timeFactor: 1 = answered within the countdown; lower when the learner took longer (see timer.js)
  function recordAnswer(unitId, q, ok, hintsUsed, timeFactor) {
    const key = qKey(unitId, q.id);
    let gained = 0;
    update(function (d) {
      const rec = d.answers[key] || { tries: 0, correct: false, hints: 0, firstTry: null };
      rec.tries += 1;
      rec.hints = Math.max(rec.hints, hintsUsed);
      if (rec.firstTry === null) rec.firstTry = ok && hintsUsed === 0;
      if (ok && !rec.correct) {
        rec.correct = true;
        // learner-authored questions (unit 0) give no XP, so they cannot be farmed
        const f = timeFactor == null ? 1 : timeFactor;
        gained = unitId === 0 ? 0 : Math.max(2, Math.round(10 * q.diff * f) - 3 * hintsUsed);
        d.xp += gained;
        // 🔁 first solve: due for review tomorrow; a record means later replays never push the review back
        if (MQ.review && unitId !== 0 && !d.review[key]) d.review[key] = { box: 0, due: MQ.review.dayIndex(Date.now()) + 1 };
      }
      rec.last = Date.now();
      d.answers[key] = rec;
    });
    return gained;
  }

  // 🔁 Records a review answer. Only a question that is due today counts: it is rescheduled and, when right,
  // pays MQ.review.XP. Anything else (not due, already reviewed today) changes nothing — no farming by replaying.
  function reviewAnswer(unitId, qid, ok) {
    const R = MQ.review, key = qKey(unitId, qid), today = R.dayIndex(Date.now());
    if (!R.isDue(data.answers, data.review, key, today) || reviewLeft() <= 0) return 0;
    const gained = ok ? R.XP : 0;
    update(function (d) {
      d.review[key] = R.schedule(d.review[key] || null, ok, today);
      d.reviewDay = { day: today, n: reviewDoneToday(d, today) + 1 };
      d.xp += gained;
    });
    return gained;
  }
  // the daily cap counts every review answer of the day, across runs and reloads
  function reviewDoneToday(d, today) { return d.reviewDay && d.reviewDay.day === today ? d.reviewDay.n : 0; }
  function reviewLeft() {
    const today = MQ.review.dayIndex(Date.now());
    return Math.max(0, MQ.review.DAILY - reviewDoneToday(data, today));
  }

  function addXp(n) { update(function (d) { d.xp += n; }); }

  function answerOf(unitId, qid) { return data.answers[qKey(unitId, qid)] || null; }

  // Section mastery = share of its questions solved; diff-3 items weigh double.
  function sectionMastery(unit, section) {
    let total = 0, got = 0;
    section.questions.forEach(function (q) {
      const w = q.diff === 3 ? 2 : 1;
      total += w;
      const a = answerOf(unit.id, q.id);
      if (a && a.correct) got += a.hints > 0 ? w * 0.75 : w;
    });
    return total ? got / total : 0;
  }

  function starsFor(m) { return m >= 0.95 ? 3 : m >= 0.7 ? 2 : m >= 0.4 ? 1 : 0; }

  function challengeMastery(unit) {
    const qs = (unit.challenge && unit.challenge.questions) || [];
    if (!qs.length) return 0;
    const got = qs.filter(function (q) { const a = answerOf(unit.id, q.id); return a && a.correct; }).length;
    return got / qs.length;
  }

  function unitProgress(unit) {
    const parts = unit.sections.map(function (s) { return sectionMastery(unit, s); });
    parts.push(challengeMastery(unit));
    return parts.reduce(function (a, b) { return a + b; }, 0) / parts.length;
  }

  function skillStats(unit) {
    const stats = {};
    const all = [];
    unit.sections.forEach(function (s) { all.push.apply(all, s.questions); });
    if (unit.challenge) all.push.apply(all, unit.challenge.questions);
    all.forEach(function (q) {
      const st = stats[q.skill] || (stats[q.skill] = { seen: 0, ok: 0, firstTry: 0, total: 0 });
      st.total += 1;
      const a = answerOf(unit.id, q.id);
      if (a) {
        st.seen += 1;
        if (a.correct) st.ok += 1;
        if (a.firstTry) st.firstTry += 1;
      }
    });
    return stats;
  }

  function award(id) {
    if (data.badges[id]) return false;
    update(function (d) { d.badges[id] = Date.now(); });
    return true;
  }

  function exampleOf(unitId, secId) { return data.examples[qKey(unitId, secId)] || null; }

  // Saves one lab run; pays only the improvement over the best earlier run. Returns XP paid.
  function finishExample(unitId, secId, score, selfCheck, notes) {
    const key = qKey(unitId, secId);
    const prev = data.examples[key] || { best: 0, runs: 0 };
    const paid = MQ.exampleScore.payable(prev.best, score);
    update(function (d) {
      d.examples[key] = { best: Math.max(prev.best || 0, score), runs: (prev.runs || 0) + 1, selfCheck: selfCheck };
      d.xp += paid;
      (notes || []).forEach(function (n) {
        if (n.text && n.text.trim()) d.journal.push({ at: Date.now(), where: n.where, text: n.text.trim().slice(0, 2000) });
      });
    });
    return paid;
  }

  // The "Vì sao?" bonus is paid once per question.
  function claimWhy(unitId, qid) {
    const key = qKey(unitId, qid);
    if (data.answers[key] && data.answers[key].whyDone) return false;
    update(function (d) {
      d.answers[key] = Object.assign({ tries: 0, correct: true, hints: 0, firstTry: null }, d.answers[key], { whyDone: true });
      d.xp += 5;
    });
    return true;
  }

  function questOf(key) { return data.quests[key] || null; }

  // Saves one quest run: keys = results found this run, score = the quest's total over all results so far.
  // Pays only the improvement over the best score already rewarded; logs one "why" line when something is paid.
  function finishQuest(key, keys, score, why) {
    const prev = data.quests[key] || { best: 0, keys: [], runs: 0 };
    const paid = MQ.spark.payable(prev.best, score);
    update(function (d) {
      const merged = prev.keys.concat((keys || []).filter(function (k) { return prev.keys.indexOf(k) === -1; }));
      d.quests[key] = { best: Math.max(prev.best, score), keys: boundKeys(merged), runs: prev.runs + 1 };
      if (paid > 0) {
        d.spark += paid;
        const lines = (why && why.length ? why : [{ key: "spark.why.more" }]).map(cleanWhy);
        d.sparkLog.push({ at: Date.now(), k: key, p: paid, why: lines[0], also: lines.slice(1, 5) });
        d.sparkLog = d.sparkLog.slice(-SPARK_LOG);
      }
    });
    return paid;
  }

  function localDay() {
    const t = new Date();
    const p = function (n) { return (n < 10 ? "0" : "") + n; };
    return t.getFullYear() + "-" + p(t.getMonth() + 1) + "-" + p(t.getDate());
  }

  function addMinutes(min) {
    const day = localDay();
    update(function (d) { d.minutesByDay[day] = (d.minutesByDay[day] || 0) + min; });
  }

  function exportJson() { return JSON.stringify(Object.assign({ book: MQ.book }, data), null, 1); }

  function importJson(text) {
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      throw new Error(msg("import.notJson", null, "File không đọc được (không phải JSON)."));
    }
    if (!isObj(parsed) || !isObj(parsed.answers)) {
      throw new Error(msg("import.bad", null, "File không đúng định dạng tiến trình Math Quest."));
    }
    if (parsed.book && String(parsed.book) !== MQ.book) {
      const part = MQ.BOOKS[String(parsed.book)] ? MQ.BOOKS[String(parsed.book)].book : "Book " + parsed.book;
      throw new Error(msg("import.otherBook", { b: part }, "Đây là tiến trình của " + part + "."));
    }
    const clean = sanitize(parsed);
    clean.profile = clean.profile || data.profile;
    if (!clean.profile) throw new Error(msg("import.noProfile", null, "File thiếu thông tin người chơi."));
    data = clean;
    save();
  }

  function reset() { data = blank(); save(); }

  return {
    get: get, update: update, recordAnswer: recordAnswer, addXp: addXp, answerOf: answerOf,
    sectionMastery: sectionMastery, starsFor: starsFor, challengeMastery: challengeMastery,
    unitProgress: unitProgress, skillStats: skillStats, award: award, addMinutes: addMinutes,
    exportJson: exportJson, importJson: importJson, reset: reset, claimWhy: claimWhy,
    exampleOf: exampleOf, finishExample: finishExample, questOf: questOf, finishQuest: finishQuest,
    reviewAnswer: reviewAnswer, reviewLeft: reviewLeft
  };
})();
