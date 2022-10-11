module.exports = {
  // 跳过一些操作 bump、changelog、commit、tag
  skip: {
    // 不跳过打tag操作
    tag: false,
    changelog: false,
  },
  types: [
    { type: "feat", section: "Features（新功能）" },
    { type: "fix", section: "Bug Fixes（Bug修复）" },
    { type: "init", section: "Init | 初始化", hidden: true },
    { type: "docs", section: "Documentation | 文档", hidden: true },
    { type: "style", section: "Styles | 风格", hidden: true },
    { type: "refactor", section: "Code Refactoring | 代码重构", hidden: true },
    {
      type: "perf",
      section: " Performance Improvements | 性能优化",
      hidden: true,
    },
    { type: "test", section: "Tests | 测试", hidden: true },
    { type: "revert", section: "Revert | 回退", hidden: true },
    { type: "build", section: "Build System | 打包构建", hidden: true },
    { type: "chore", section: "Chore | 构建/工程依赖/工具", hidden: true },
    { type: "ci", section: "Continuous Integration | CI 配置", hidden: true },
  ],
  //hash链接 推荐自行修改为仓库地址 如 https://github.com/MrSeaWave/commit-standard-demo/commit/{{hash}}
  commitUrlFormat: "https://github.com/wyf1023/zhmz-vue-base/commit/{{hash}}",
};
