import type { Answers, TypesOption } from 'cz-git'

export const typeList: TypesOption[] = [
  {
    value: 'feat',
    name: 'feat:      ✨ 新增功能 | A new feature',
    emoji: ':sparkles:',
  },
  {
    value: 'fix',
    name: 'fix:       🐛 修复缺陷 | A bug fix',
    emoji: ':bug:',
  },
  {
    value: 'docs',
    name: 'docs:      📝 文档更新 | Documentation only changes',
    emoji: ':memo:',
  },
  {
    value: 'style',
    name: 'style:     💄 代码格式 | Changes that do not affect the meaning of the code',
    emoji: ':lipstick:',
  },
  {
    value: 'refactor',
    name: 'refactor:  ♻️  代码重构 | A code change that neither fixes a bug nor adds a feature',
    emoji: ':recycle:',
  },
  {
    value: 'perf',
    name: 'perf:      ⚡️ 性能提升 | A code change that improves performance',
    emoji: ':zap:',
  },
  {
    value: 'test',
    name: 'test:      ✅ 测试相关 | Adding missing tests or correcting existing tests',
    emoji: ':white_check_mark:',
  },
  {
    value: 'build',
    name: 'build:     📦️ 构建相关 | Changes that affect the build system or external dependencies',
    emoji: ':package:',
  },
  {
    value: 'ci',
    name: 'ci:        🎡 持续集成 | Changes to our CI configuration files and scripts',
    emoji: ':ferris_wheel:',
  },
  {
    value: 'revert',
    name: 'revert:    🔨 回退代码 | Revert to a commit',
    emoji: ':hammer:',
  },
  {
    value: 'chore',
    name: 'chore:     ⏪️ 其他修改 | Other changes that do not modify src or test files',
    emoji: ':rewind:',
  },
]

export const messages: Answers = {
  type: '选择你要提交的类型 \n  Select the type of change that you\'re committing:',
  scope: '选择一个提交范围（可选）\n  Denote the SCOPE of this change (optional):',
  customScope: '请输入自定义的提交范围 \n  Denote the SCOPE of this change:',
  subject: '填写简短精炼的变更描述 \n  Write a SHORT, IMPERATIVE tense description of the change:\n',
  body: '填写更加详细的变更描述（可选）。使用 "|" 换行 \n  Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
  breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 \n  List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
  footerPrefixesSelect: '选择关联issue前缀（可选） \n  Select the ISSUES type of changeList by this change (optional):',
  customFooterPrefix: '输入自定义issue前缀 \n  Input ISSUES prefix:',
  footer: '列举关联issue (可选) 例如: #31, #32 \n  List any ISSUES by this change. E.g.: #31, #34:\n',
  confirmCommit: '是否提交或修改commit ? \n  Are you sure you want to proceed with the commit above?',
}
