import { execSync } from 'node:child_process'
import type { UserConfig } from 'cz-git'

import { messages, typeList } from './configs'

const gitStatus = execSync('git status --porcelain || true')
  .toString()
  .trim()
  .split('\n')

const scopeComplete = gitStatus
  .find(r => ~r.indexOf('M  packages'))
  ?.replace(/\//g, '%%')
  ?.match(/packages%%((\w|-)*)/)?.[1]

/**
 * Generates a commitlint configuration object with conventional commit rules.
 * @param {Partial<UserConfig>} userConfig - Custom user configuration to override defaults.
 * @returns {UserConfig} The final commitlint configuration.
 */
export function yikoyu(userConfig: Partial<UserConfig> = {}): UserConfig {
  const config: UserConfig = {
    ignores: [(commit: string) => commit.includes('init')],
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [2, 'always', typeList.map(k => k.value)],
    },
    prompt: {
      /** @use `pnpm commit :f` */
      alias: {
        f: 'docs: :memo: fix typos',
        r: 'docs: :memo: update README',
        s: 'style: :lipstick: update code format',
        b: 'build: :package: bump dependencies',
        c: 'chore: :rewind: update config',
      },
      messages,
      types: typeList,
      /** 是否开启 commit message 带有 Emoji 字符 */
      useEmoji: true,
      /** 设置 Emoji 字符 的 位于头部位置 */
      emojiAlign: 'center',
      /** 设置 选择范围 中 为空选项(empty) 和 自定义选项(custom) 的 位置 */
      customScopesAlign: !scopeComplete ? 'top' : 'bottom',
      /** 如果 defaultScope 与 scopes 选择范围列表项中的 value 相匹配就会进行星标置顶操作 */
      defaultScope: scopeComplete,
      /** 自定义选择issue前缀 */
      issuePrefixs: [
        { value: 'link', name: 'link:     链接 ISSUES 进行中 | ISSUES has been processed' },
        { value: 'closed', name: 'closed:   标记 ISSUES 已完成 | ISSUES has been completed' },
      ],

      // defaultSubject: subjectComplete && `[${subjectComplete}] `,
      // scopes: [...scopes, 'mock'],
    },
  }

  return Object.assign<UserConfig, UserConfig>(config, userConfig)
}

export default yikoyu
