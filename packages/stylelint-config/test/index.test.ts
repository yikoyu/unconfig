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
 * @returns 第一个（唯一一个）文件的校验结果 / lint result for the first (only) file
 */
async function lintFile(fixturePath: string) {
  const result = await stylelint.lint({
    config: yikoyu(),
    files: resolve(fixturesDir, fixturePath),
  })
  return result.results[0]
}

/**
 * 过滤 "Unknown rule" 配置级警告，仅保留真正的 lint 违规。
 * 原始 config 的 `rules` 中包含 `scss/*` 规则，若当前文件未通过 override
 * 加载 SCSS 插件（例如 `.less`），stylelint 会发出 "Unknown rule" 警告，
 * 这不是实际的 lint 问题。
 *
 * Filter out config-level "Unknown rule" noise — only keep real lint violations.
 * The root config declares `scss/*` rules. When no override loads the SCSS plugin
 * (e.g. for `.less` files), stylelint emits "Unknown rule" warnings that are
 * not actual lint violations.
 */
function actualWarnings(result: { warnings: Array<{ rule: string, text: string }> }) {
  return result.warnings.filter(w => !w.text.includes('Unknown rule'))
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
  describe('pass fixtures', () => {
    const passFixtures: [string, string?][] = [
      ['pass/valid.css', 'CSS'],
      ['pass/valid.scss', 'SCSS'],
      ['pass/valid.less', 'Less'],
      ['pass/valid.vue', 'Vue (CSS)'],
      ['pass/valid-vue-scss.vue', 'Vue (SCSS)'],
      ['pass/valid-vue-less.vue', 'Vue (Less)'],
      ['pass/valid.html', 'HTML'],
    ]

    for (const [fixture, label] of passFixtures) {
      it(`${label ?? fixture} should pass linting`, async () => {
        const result = await lintFile(fixture)
        const warnings = actualWarnings(result)
        expect(warnings, `\n${formatWarnings(warnings)}`).toHaveLength(0)
      })
    }
  })

  describe('fail fixtures', () => {
    it('cSS - should report violations', async () => {
      const result = await stylelint.lint({
        config: yikoyu(),
        code: '/**/\n.test { font-size: 16px; color: #333; }',
      })
      expect(result.results[0].warnings.length, `\n${formatWarnings(result.results[0].warnings)}`).toBeGreaterThan(0)
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
})
