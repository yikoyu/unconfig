import type { Options, PluginSpec } from 'semantic-release'

import {
  configChangelog,
  configCommitAnalyzer,
  configGit,
  configGithub,
  configNpm,
  configReleaseNotesGenerator,
} from './configs'
import type { OptionsConfig } from './types'
import { createPlugin } from './utils'

export function yikoyu(userConfig: Partial<OptionsConfig> = {}): Options {
  const { plugins: plugs = {}, ...releaseConfig } = userConfig ?? {}
  const {
    commitAnalyzer = true,
    releaseNotesGenerator = true,
    changelog = true,
    github = true,
    git = true,
    npm = true,
  } = plugs

  const pluginCommitAnalyzer = createPlugin('@semantic-release/commit-analyzer', configCommitAnalyzer, commitAnalyzer)
  const pluginReleaseNotesGenerator = createPlugin('@semantic-release/release-notes-generator', configReleaseNotesGenerator, releaseNotesGenerator)
  const pluginChangelog = createPlugin('@semantic-release/changelog', configChangelog, changelog)
  const pluginGithub = createPlugin('@semantic-release/github', configGithub, github)
  const pluginGit = createPlugin('@semantic-release/git', configGit, git)
  const pluginNpm = createPlugin('@semantic-release/npm', configNpm, npm)

  const plugins: PluginSpec[] = []

  if (pluginCommitAnalyzer)
    plugins.push(pluginCommitAnalyzer)

  if (pluginReleaseNotesGenerator)
    plugins.push(pluginReleaseNotesGenerator)

  if (pluginChangelog)
    plugins.push(pluginChangelog)

  if (pluginGithub)
    plugins.push(pluginGithub)

  if (pluginGit)
    plugins.push(pluginGit)

  if (pluginNpm)
    plugins.push(pluginNpm)

  const configs: Options = {
    branches: ['master'],
    plugins,
    ...releaseConfig,
  }

  return configs
}

export default yikoyu
