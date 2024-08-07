import type {
  OptionsChangelog,
  OptionsCommitAnalyzer,
  OptionsGit,
  OptionsNpm,
} from './types'

export const configCommitAnalyzer: OptionsCommitAnalyzer = {
  releaseRules: [
    { breaking: true, release: 'major' },
    { revert: true, release: 'patch' },
    { type: 'feat', release: 'minor' },
    { type: 'fix', release: 'patch' },
    { type: 'perf', release: 'patch' },
    { type: 'refactor', release: 'patch' },
    { type: 'test', release: 'patch' },
    { type: 'revert', release: 'patch' },
  ],
}

export const configReleaseNotesGenerator: object = {
  preset: 'conventionalcommits',
  presetConfig: {
    types: [
      {
        type: 'feat',
        section: 'Features',
        hidden: false,
      },
      {
        type: 'fix',
        section: 'Bug Fixes',
        hidden: false,
      },
      {
        type: 'perf',
        section: 'Performance',
        hidden: false,
      },
      {
        type: 'refactor',
        section: 'Refactor',
        hidden: false,
      },
      {
        type: 'test',
        section: 'Tests',
        hidden: false,
      },
      {
        type: 'revert',
        section: 'Revert',
        hidden: false,
      },
      {
        type: 'docs',
        section: 'Docs',
        hidden: true,
      },
      {
        type: 'style',
        section: 'Styles',
        hidden: true,
      },
      {
        type: 'build',
        section: 'Build',
        hidden: true,
      },
      {
        type: 'ci',
        section: 'CI/CD',
        hidden: true,
      },
    ],
  },
}

export const configChangelog: OptionsChangelog = {
  changelogFile: 'CHANGELOG.md', // 把发布日志写入该文件
}

export const configGithub: object = {}

export const configGit: OptionsGit = {
  assets: ['CHANGELOG.md', 'package.json'], // 前面说到日志记录和版本好是新增修改的，需要 push 回 Git
  // eslint-disable-next-line no-template-curly-in-string
  message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
}

export const configNpm: OptionsNpm = {
  npmPublish: true,
}
