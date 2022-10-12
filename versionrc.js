module.exports = {
  types: [
    { type: "feat", section: "✨ Features" },
    { type: "fix", section: "🐛 Bug Fixes" },
    { type: "docs", section: "✏️ Documentation" },
    { type: "style", section: "💄 Styles" },
    { type: "refactor", section: "♻️ Code Refactoring" },
    { type: "perf", section: "⚡ Performance Improvements" },
    { type: "chore", section: "🚀 Chore" },
    { type: "ci", section: "👷 Continuous Integration" },
  ],
  releaseCommitMessageFormat: "{{currentTag}}",
};
