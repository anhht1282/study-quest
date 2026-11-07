// The parts of the game, one per Learner's Book. Each part has its own map, data folder (data/book<key>/)
// and progress. subject picks the map strands and subject-specific UI wording: MQ.t looks up
// "<key>@<subject>" before "<key>" (e.g. "rank.4@sci"). Names and blurbs are UI strings book.<key>.*.
window.MQ = window.MQ || {};

MQ.BOOKS = {
  "7": { subject: "math", stage: "Stage 7", emoji: "🏝️", book: "Learner's Book 7", short: "Book 7", title: "Math Quest 7" },
  "8": { subject: "math", stage: "Stage 8", emoji: "🏔️", book: "Learner's Book 8", short: "Book 8", title: "Math Quest 8" },
  "s7": { subject: "sci", stage: "Stage 7", emoji: "🔬", book: "Science Learner's Book 7", short: "Science 7", title: "Science Quest 7" }
};

// Map strands per subject: unit.strand (English, as in the data) -> UI label key and colour class.
MQ.STRANDS = {
  math: {
    "Number": { key: "strand.num", cls: "s-num" },
    "Algebra": { key: "strand.alg", cls: "s-alg" },
    "Geometry and measure": { key: "strand.geo", cls: "s-geo" },
    "Statistics and probability": { key: "strand.sta", cls: "s-sta" }
  },
  sci: {
    "Biology": { key: "strand.bio", cls: "s-bio" },
    "Chemistry": { key: "strand.chem", cls: "s-chem" },
    "Physics": { key: "strand.phys", cls: "s-phys" },
    "Earth and space": { key: "strand.earth", cls: "s-earth" }
  }
};

if (typeof module !== "undefined") module.exports = MQ.BOOKS;
