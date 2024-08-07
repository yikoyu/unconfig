import type { Options } from 'semantic-release'

type CommitAnalyzerPreset = 'angular'
  | 'atom'
  | 'codemirror'
  | 'ember'
  | 'eslint'
  | 'express'
  | 'jquery'
  | 'jshint'
  | 'conventionalcommits'

export interface OptionsCommitAnalyzer {
  /**
   * [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) preset (possible values: [`angular`](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular), [`atom`](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-atom), [`codemirror`](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-codemirror), [`ember`](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-ember), [`eslint`](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-eslint), [`express`](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-express), [`jquery`](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-jquery), [`jshint`](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-jshint), [`conventionalcommits`](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits)).
   *
   * @default 'angular'
   */
  preset?: CommitAnalyzerPreset
  /**
   * npm package name of a custom [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) preset.
   */
  config?: string
  /**
   * Additional [conventional-commits-parser](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-commits-parser#conventionalcommitsparseroptions) options that will extends the ones loaded by `preset` or `config`.
   * This is convenient to use a [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) preset with some customizations without having to create a new module.
   */
  parserOpts?: object
  /**
   * An external module, a path to a module or an `Array` of rules.
   * See [releaseRules](https://github.com/semantic-release/commit-analyzer#releaserules).
   */
  releaseRules?: string | object[]
}

export interface OptionsChangelog {
  /**
   * File path of the changelog.
   *
   * @default 'CHANGELOG.md'
   */
  changelogFile?: string
  /**
   * Title of the changelog file (first line of the file).
   */
  changelogTitle?: string
}

// export interface OptionsGithub {}

export interface OptionsGit {
  /**
   * Files to include in the release commit.
   * Set to `false` to disable adding files to the release commit.
   * See [assets](https://github.com/semantic-release/git/blob/master/README.md#assets).
   *
   * @default 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
   */
  assets?: string[]
  /**
   * The message for the release commit.
   * See [message](https://github.com/semantic-release/git/blob/master/README.md#message).
   *
   * @default ['CHANGELOG.md', 'package.json', 'package-lock.json', 'npm-shrinkwrap.json']
   */
  message?: string
}

export interface OptionsNpm {
  /**
   * Whether to publish the `npm` package to the registry.
   * If `false` the `package.json` version will still be updated.
   *
   * `false` if the `package.json` private property is `true`, `true` otherwise.
   */
  npmPublish?: boolean
  /**
   * Directory path to publish.
   *
   * @default '.'
   */
  pkgRoot?: string
  /**
   * Directory path in which to write the package tarball.
   * If `false` the tarball is not be kept on the file system.
   *
   * @default false
   */
  tarballDir?: false | string
}

// export interface OptionsReleaseNotesGenerator {}

export interface OptionsConfigPlugins {
  /**
   * Enable changelog support.
   *
   * See [@semantic-release/changelog](https://github.com/semantic-release/changelog)
   */
  changelog?: boolean | OptionsChangelog
  /**
   * Enable commit-analyzer support.
   *
   * See [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer)
   */
  commitAnalyzer?: boolean | OptionsCommitAnalyzer
  /**
   * Enable git support.
   *
   * See [@semantic-release/git](https://github.com/semantic-release/git)
   */
  git?: boolean | OptionsGit
  /**
   * Enable github support.
   *
   * See [@semantic-release/github](https://github.com/semantic-release/github)
   */
  github?: boolean | object
  /**
   * Enable npm support.
   *
   * See [@semantic-release/npm](https://github.com/semantic-release/npm)
   */
  npm?: boolean | OptionsNpm
  /**
   * Enable release-notes-generator support.
   *
   * See [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator)
   */
  releaseNotesGenerator?: boolean | object
}

export interface OptionsConfig extends Omit<Options, 'plugins'> {
  plugins: OptionsConfigPlugins
}
