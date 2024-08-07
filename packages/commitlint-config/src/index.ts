import type { UserConfig } from '@commitlint/types'

/**
 * Enum representing different commit types with their descriptions, titles, and emojis.
 */
const typeEnum = {
  feat: {
    description: 'A new feature',
    title: 'Features',
    emoji: '✨',
  },
  fix: {
    description: 'A bug fix',
    title: 'Bug Fixes',
    emoji: '🐛',
  },
  docs: {
    description: 'Documentation only changes',
    title: 'Documentation',
    emoji: '📚',
  },
  style: {
    description:
      'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    title: 'Styles',
    emoji: '💎',
  },
  refactor: {
    description: 'A code change that neither fixes a bug nor adds a feature',
    title: 'Code Refactoring',
    emoji: '📦',
  },
  perf: {
    description: 'A code change that improves performance',
    title: 'Performance Improvements',
    emoji: '🚀',
  },
  test: {
    description: 'Adding missing tests or correcting existing tests',
    title: 'Tests',
    emoji: '🚨',
  },
  revert: {
    description: 'Reverts a previous commit',
    title: 'Reverts',
    emoji: '🗑',
  },
  config: {
    description: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
    title: 'Configs',
    emoji: '🔨',
  },
  chore: {
    description: 'Other changes that don\'t modify src or test files',
    title: 'Chores',
    emoji: '♻️',
  },
} as const

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
      'type-enum': [2, 'always', Object.keys(typeEnum)],
    },
    prompt: {
      questions: {
        type: {
          description: 'Select the type of change that you\'re committing',
          enum: typeEnum,
        },
      },
    },
  }

  return Object.assign<UserConfig, UserConfig>(config, userConfig)
}

export default yikoyu
