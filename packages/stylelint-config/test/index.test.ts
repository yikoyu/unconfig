import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { yikoyu } from '@yikoyu/stylelint-config'
import stylelint from 'stylelint'
import { describe, expect, it } from 'vitest'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const fixturesDir = resolve(__dirname, 'fixtures')

/**
 * 使用 stylelint 校验指定的 fixture 文件。
 * Lint a fixture file with the stylelint config.
 * @param fixturePath - `test/fixtures/` 下的相对路径 / relative path under `test/fixtures/`
 * @param config - 可选的 stylelint 配置 / optional stylelint config
 * @returns 第一个（唯一一个）文件的校验结果 / lint result for the first (only) file
 */
async function lintFile(fixturePath: string, config = yikoyu()) {
  const result = await stylelint.lint({
    config,
    files: resolve(fixturesDir, fixturePath),
  })
  return result.results[0]
}

/**
 * 校验内联代码 / Lint inline code
 */
async function lintCode(code: string, config = yikoyu()) {
  const result = await stylelint.lint({ config, code })
  return result.results[0]
}

/**
 * 把违规列表格式化为可读的错误信息。
 * Format warnings into human-readable error messages.
 * @example ` 3:5  [comment-no-empty] Unexpected empty comment`
 */
function formatWarnings(warnings: Array<{ line?: number, column?: number, rule: string, text: string }>) {
  return warnings.map(w => `  ${w.line ?? '-'}:${w.column ?? '-'}  [${w.rule}] ${w.text}`).join('\n')
}

describe('stylelint-config', () => {
  // =========================================================================
  // 默认配置 (vueStyle: 'css')
  // 测试不传 vueStyle 时，CSS/SCSS/Less 独立文件和 Vue CSS 文件均能正常 lint
  // =========================================================================
  describe('default config (vueStyle: css)', () => {
    const passFixtures: [string, string?][] = [
      ['pass/valid.css', 'CSS'],
      ['pass/valid.scss', 'SCSS'],
      ['pass/valid-scss-basic.scss', 'SCSS (mixins, placeholders)'],
      ['pass/valid.less', 'Less'],
      ['pass/valid.vue', 'Vue (CSS)'],
      ['pass/valid.html', 'HTML'],
    ]

    for (const [fixture, label] of passFixtures) {
      it(`${label ?? fixture} should pass linting`, async () => {
        const result = await lintFile(fixture)
        expect(result.warnings, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
      })
    }

    it('vue files should NOT produce "Unknown rule" warnings', async () => {
      const result = await lintFile('pass/valid.vue')
      const unknown = result.warnings.filter(w => w.text.includes('Unknown rule'))
      expect(unknown, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })
  })

  // =========================================================================
  // 违规测试
  // 测试 CSS/SCSS/Less/Vue/HTML 各语言的违规文件能被正确检出
  // =========================================================================
  describe('fail fixtures', () => {
    it('cSS - should report violations', async () => {
      const result = await lintCode('/**/\n.test { font-size: 16px; color: #333; }')
      expect(result.warnings.length, `\n${formatWarnings(result.warnings)}`).toBeGreaterThan(0)
    })

    it('sCSS - should report violations', async () => {
      const result = await lintFile('fail/invalid.scss')
      expect(result.warnings.length, `\n${formatWarnings(result.warnings)}`).toBeGreaterThan(0)
    })

    it('less - should report violations', async () => {
      const result = await lintFile('fail/invalid.less')
      expect(result.warnings.length, `\n${formatWarnings(result.warnings)}`).toBeGreaterThan(0)
    })

    it('vue - should report violations', async () => {
      const result = await lintFile('fail/invalid.vue')
      expect(result.warnings.length, `\n${formatWarnings(result.warnings)}`).toBeGreaterThan(0)
    })

    it('hTML - should report violations', async () => {
      const result = await lintFile('fail/invalid.html')
      expect(result.warnings.length, `\n${formatWarnings(result.warnings)}`).toBeGreaterThan(0)
    })
  })

  // =========================================================================
  // vueStyle: 'scss' — Vue 文件使用 SCSS
  // 测试 Vue SCSS/CSS、SCSS/Less 独立文件均能正常 lint
  // 验证 scss/ 规则能正确检出 Vue SCSS 和独立 SCSS 中的违规
  // =========================================================================
  describe('vueStyle: scss', () => {
    const scssConfig = yikoyu({ vueStyle: 'scss', uniapp: true })

    it('vue SCSS should pass linting', async () => {
      const result = await lintFile('pass/valid-vue-scss-complex.vue', scssConfig)
      expect(result.warnings, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })

    it('vue CSS should pass linting', async () => {
      const result = await lintFile('pass/valid.vue', scssConfig)
      expect(result.warnings, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })

    it('standalone SCSS should pass linting', async () => {
      const result = await lintFile('pass/valid-scss.scss', scssConfig)
      expect(result.warnings, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })

    it('standalone Less should pass linting', async () => {
      const result = await lintFile('pass/valid.less', scssConfig)
      expect(result.warnings, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })

    it('vue SCSS should produce scss/ warnings on violations', async () => {
      const result = await lintFile('fail/invalid-scss-in-vue.vue', scssConfig)
      const scssWarnings = result.warnings.filter(w => w.rule.startsWith('scss/'))
      expect(scssWarnings.length, `\n${formatWarnings(result.warnings)}`).toBeGreaterThan(0)
    })

    it('standalone SCSS should produce scss/ warnings', async () => {
      const result = await lintFile('fail/invalid-scss.scss', scssConfig)
      const scssWarnings = result.warnings.filter(w => w.rule.startsWith('scss/'))
      expect(scssWarnings.length, `\n${formatWarnings(result.warnings)}`).toBeGreaterThan(0)
    })
  })

  // =========================================================================
  // vueStyle: 'less' — Vue 文件使用 Less
  // 测试 Vue Less/CSS、Less/SCSS 独立文件均能正常 lint
  // 验证 Vue Less 不会因 SCSS 规则而崩溃
  // =========================================================================
  describe('vueStyle: less', () => {
    const lessConfig = yikoyu({ vueStyle: 'less', uniapp: true })

    it('vue Less should pass linting', async () => {
      const result = await lintFile('pass/valid-vue-less.vue', lessConfig)
      expect(result.warnings, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })

    it('vue CSS should pass linting', async () => {
      const result = await lintFile('pass/valid.vue', lessConfig)
      expect(result.warnings, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })

    it('standalone Less should pass linting', async () => {
      const result = await lintFile('pass/valid.less', lessConfig)
      expect(result.warnings, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })

    it('standalone SCSS should pass linting', async () => {
      const result = await lintFile('pass/valid-scss.scss', lessConfig)
      expect(result.warnings, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })

    it('vue Less should NOT crash with SCSS rules', async () => {
      const result = await lintFile('pass/valid-vue-less.vue', lessConfig)
      const crashes = result.warnings.filter(w => w.text.includes('TypeError'))
      expect(crashes, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })

    it('vue Less should report violations', async () => {
      const result = await lintFile('fail/invalid-vue-less.vue', lessConfig)
      expect(result.warnings.length, `\n${formatWarnings(result.warnings)}`).toBeGreaterThan(0)
    })

    it('standalone Less should report violations', async () => {
      const result = await lintFile('fail/invalid.less', lessConfig)
      expect(result.warnings.length, `\n${formatWarnings(result.warnings)}`).toBeGreaterThan(0)
    })
  })

  // =========================================================================
  // 规则隔离测试
  // 测试非预处理器文件不会产生 "Unknown rule" 警告
  // =========================================================================
  describe('unknown rule isolation', () => {
    it('cSS and Less should not produce "Unknown rule" warnings', async () => {
      const cssResult = await lintFile('pass/valid.css')
      const lessResult = await lintFile('pass/valid.less')
      const unknownCss = cssResult.warnings.filter(w => w.text.includes('Unknown rule'))
      const unknownLess = lessResult.warnings.filter(w => w.text.includes('Unknown rule'))
      expect(unknownCss, `\nCSS warnings: ${formatWarnings(cssResult.warnings)}`).toHaveLength(0)
      expect(unknownLess, `\nLess warnings: ${formatWarnings(lessResult.warnings)}`).toHaveLength(0)
    })

    it('vue files should not produce "Unknown rule" warnings', async () => {
      const vueResult = await lintFile('pass/valid.vue')
      const unknownVue = vueResult.warnings.filter(w => w.text.includes('Unknown rule'))
      expect(unknownVue, `\nVue warnings: ${formatWarnings(vueResult.warnings)}`).toHaveLength(0)
    })
  })

  // =========================================================================
  // uniapp 选项测试
  // 测试 uniapp: true 时允许 rpx 单位和小程序标签
  // 测试 uniapp: false (默认) 时 rpx 被报告为未知单位
  // =========================================================================
  describe('uniapp option', () => {
    it('uniapp: true should allow rpx unit', async () => {
      const config = yikoyu({ uniapp: true })
      const result = await lintCode('.test { padding: 8rpx 16rpx; }', config)
      const rpxWarnings = result.warnings.filter(w => w.text.includes('rpx'))
      expect(rpxWarnings, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })

    it('uniapp: false should report rpx as unknown unit', async () => {
      const config = yikoyu()
      const result = await lintCode('.test { padding: 8rpx; }', config)
      const rpxWarnings = result.warnings.filter(w => w.text.includes('rpx'))
      expect(rpxWarnings.length, `\n${formatWarnings(result.warnings)}`).toBeGreaterThan(0)
    })

    it('uniapp: true should allow mini-program tags', async () => {
      const config = yikoyu({ uniapp: true })
      const result = await lintCode('scroll-view { color: #333; }', config)
      const tagWarnings = result.warnings.filter(w => w.rule === 'selector-type-no-unknown')
      expect(tagWarnings, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })

    it('uniapp: false should report mini-program tags as unknown', async () => {
      const config = yikoyu()
      const result = await lintCode('scroll-view { color: #333; }', config)
      const tagWarnings = result.warnings.filter(w => w.rule === 'selector-type-no-unknown')
      expect(tagWarnings.length, `\n${formatWarnings(result.warnings)}`).toBeGreaterThan(0)
    })
  })

  // =========================================================================
  // unocss / tailwind 选项测试
  // 测试 @apply、@screen、@tailwind、@source 等 @rule 白名单
  // =========================================================================
  describe('unocss and tailwind options', () => {
    it('unocss: true should allow @screen', async () => {
      const config = yikoyu({ unocss: true })
      const result = await lintCode('@screen sm { .test { color: #333; } }', config)
      const atRuleWarnings = result.warnings.filter(w => w.rule === 'at-rule-no-unknown')
      expect(atRuleWarnings, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })

    it('tailwind: true should allow @tailwind', async () => {
      const config = yikoyu({ tailwind: true })
      const result = await lintCode('@tailwind base;', config)
      const atRuleWarnings = result.warnings.filter(w => w.rule === 'at-rule-no-unknown')
      expect(atRuleWarnings, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })

    it('tailwind: true should allow @source', async () => {
      const config = yikoyu({ tailwind: true })
      const result = await lintCode('@source "../";', config)
      const atRuleWarnings = result.warnings.filter(w => w.rule === 'at-rule-no-unknown')
      expect(atRuleWarnings, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })

    it('both disabled should report @screen as unknown', async () => {
      const config = yikoyu()
      const result = await lintCode('@screen sm { .test { color: #333; } }', config)
      const atRuleWarnings = result.warnings.filter(w => w.rule === 'at-rule-no-unknown')
      expect(atRuleWarnings.length, `\n${formatWarnings(result.warnings)}`).toBeGreaterThan(0)
    })
  })

  // =========================================================================
  // v-bind 默认支持测试
  // 测试 v-bind() CSS 函数始终被允许（无需启用选项）
  // =========================================================================
  describe('vbind (always enabled)', () => {
    it('v-bind() should always be allowed', async () => {
      const config = yikoyu()
      const result = await lintCode('.test { color: v-bind(color); }', config)
      const fnWarnings = result.warnings.filter(w => w.rule === 'function-no-unknown')
      expect(fnWarnings, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })

    it('v-bind() should be allowed in Vue files', async () => {
      const config = yikoyu({ vueStyle: 'scss' })
      const result = await lintCode('<style>.test { color: v-bind(color); }</style>', config)
      const fnWarnings = result.warnings.filter(w => w.rule === 'function-no-unknown')
      expect(fnWarnings, `\n${formatWarnings(result.warnings)}`).toHaveLength(0)
    })
  })
})
