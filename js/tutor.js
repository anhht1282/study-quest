// "Cú Mèo" tutor: Socratic guidance. It never reveals the answer before the learner has tried;
// it asks questions, reacts to the kind of mistake, and invites self-explanation. Lines live in i18n-dict.js.
window.MQ = window.MQ || {};

MQ.tutor = (function () {
  const t = function (k, v) { return MQ.t(k, v); };
  const pickN = function (prefix, n) { return t(prefix + "." + Math.floor(Math.random() * n)); };

  // keyword rules for "Hỏi Cú": both Vietnamese and English phrasings
  const ASK_RULES = [
    { re: /không hiểu|ko hiểu|k hiểu|khó quá|chịu|don'?t understand|confus|too hard|stuck/i, key: "tutor.ask.lost" },
    { re: /bắt đầu|làm sao|làm thế nào|cách nào|how (do|to)|where.*start/i, key: "tutor.ask.start" },
    { re: /công thức|formula/i, key: "tutor.ask.formula" },
    { re: /đáp án|kết quả|cho (tôi|em|mình) xin|answer|tell me/i, key: "tutor.ask.answer" },
    { re: /vẽ|hình|sơ đồ|draw|diagram|picture/i, key: "tutor.ask.draw" },
    { re: /kiểm tra|đúng không|chắc chưa|check|is it right|correct\?/i, key: "tutor.ask.check" }
  ];

  function opener() { return pickN("tutor.opener", 3); }

  // opts.howtoSeen: the learner already opened "What do I do?". A first miss on a question that has
  // task guidance usually means the task was misread, so point there before any hint.
  function onWrong(q, tries, diag, hintItems, opts) {
    const nudge = q.howto && tries === 1 && !(opts && opts.howtoSeen);
    if (diag) return t("tutor.diag." + diag) + (nudge ? " " + t("tutor.howto") : "");   // keep the specific diagnosis
    if (nudge) return t("tutor.howto");
    if (q.type === "mc" && tries === 1) return t("tutor.wrong.mc");
    if (tries === 1) return t("tutor.wrong.1") + " " + opener();
    if (tries === 2) {
      const h2 = hintItems && hintItems[1] ? hintItems[1].main : "";
      return t("tutor.wrong.2") + (h2 ? " " + h2 : "");
    }
    return t("tutor.wrong.3");
  }

  function onRight(q, hints, tries) {
    if (tries > 1) return t("tutor.right.fixed");
    if (hints > 0) return t("tutor.right.hint");
    if (q.diff === 3) return t("tutor.right.hard");
    return pickN("tutor.right", 3);
  }

  function reply(text, firstHint) {
    const s = String(text || "").trim();
    if (!s) return t("tutor.ask.empty");
    const rule = ASK_RULES.find(function (r) { return r.re.test(s); });
    if (rule) return t(rule.key);
    if (/\d/.test(s)) return t("tutor.ask.number");
    if (firstHint) return t("tutor.ask.hint", { hint: firstHint });
    return t("tutor.ask.why");
  }

  return { opener: opener, onWrong: onWrong, onRight: onRight, reply: reply };
})();
