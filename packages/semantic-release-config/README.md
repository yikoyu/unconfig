# @yikoyu/semantic-release-config

![package version badge]

➡️ **Extendable ![semantic-release icon] [semantic-release] configuration**, part of the
[yikoyu/unconfig] project.

[package version badge]: https://img.shields.io/npm/v/@yikoyu/semantic-release-config/latest?style=for-the-badge&logo=npm
[semantic-release]: https://semantic-release.gitbook.io/
[semantic-release icon]: https://api.iconify.design/logos/semantic-release.svg
[yikoyu/unconfig]: https://github.com/yikoyu/unconfig

---

## Prerequisites

[![node.js version support badge]][node.js]
[![supported semantic-release version badge]][semantic-release]

[node.js version support badge]: https://img.shields.io/node/v-lts/semantic-release?style=for-the-badge&logo=nodedotjs
[supported semantic-release version badge]: https://img.shields.io/github/package-json/dependency-version/yikoyu/unconfig/peer/semantic-release?filename=packages%2Fsemantic-release-config%2Fpackage.json&logo=semantic-release&style=for-the-badge

ℹ️ This configuration package require these tools to use locally on your
device(s):

1. ![node.js icon] Latest [Node.js] LTS _(Long-Term Support)_ version
2. One of Node.js package managers:
    - ![pnpm icon] [pnpm]
    - ![yarn icon] [yarn]
    - ![npm icon] [npm]
3. Latest ![semantic-release icon] [semantic-release] version

[node.js]: https://nodejs.org/en/
[node.js icon]: https://api.iconify.design/logos/nodejs-icon.svg
[pnpm]: https://pnpm.io/
[pnpm icon]: https://api.iconify.design/vscode-icons/file-type-light-pnpm.svg
[npm]: https://npmjs.com/
[npm icon]: https://api.iconify.design/logos/npm-icon.svg
[yarn]: https://yarnpkg.com/
[yarn icon]: https://api.iconify.design/logos/yarn.svg

---

## Basic usage

👣 Follow the steps below:

1. **Install it with the ![node.js icon] [Node.js] package manager of your
   choice** _(in our case, we use ![pnpm icon] [pnpm])_.

    ```sh
     pnpm install --save-dev semantic-release @yikoyu/semantic-release-config conventional-changelog-conventionalcommits
    ```

2. **If using [pnpm], please add configuration to the `.npmrc` file.**

    ```
    public-hoist-pattern[]=@semantic-release/*
    ```

3. **Create a ![semantic-release icon] [semantic-release configuration file] - `release.config.(js|cjs|.mjs)`**.

4. **Extend this module package configuration.**

    ```js
    import { yikoyu } from '@yikoyu/semantic-release-config'

    export default yikoyu()
    ```

📖 For the ![semantic-release icon] usage, please refer to its
documentation.

[semantic-release configuration file]: https://semantic-release.gitbook.io/semantic-release/usage/configuration

---

## Used configurations & plugins

[![Dependencies badge]][dependencies url]

⚙️ This configuration module for [semantic-release] loads configurations and plugins
options _conditionally_.

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@yikoyu/semantic-release-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@yikoyu%2Fsemantic-release-config

### Configurations

| Configurations                               | Version                                                     | Loading condition(s) |
| -------------------------------------------- | ----------------------------------------------------------- | -------------------- |
| [@semantic-release/changelog]                | ![@semantic-release/changelog version badge]                | -                    |
| [@semantic-release/commit-analyzer]          | ![@semantic-release/commit-analyzer version badge]          | -                    |
| [@semantic-release/git]                      | ![@semantic-release/git version badge]                      | -                    |
| [@semantic-release/github]                   | ![@semantic-release/github version badge]                   | -                    |
| [@semantic-release/npm]                      | ![@semantic-release/npm version badge]                      | -                    |
| [@semantic-release/release-notes-generator]  | ![@semantic-release/release-notes-generator version badge]  | -                    |
| [conventional-changelog-conventionalcommits] | ![conventional-changelog-conventionalcommits version badge] | commit preset        |

[@semantic-release/changelog]: https://github.com/semantic-release/changelog
[@semantic-release/changelog version badge]: https://img.shields.io/npm/v/@semantic-release/changelog?logo=npm&style=flat-square

[@semantic-release/commit-analyzer]: https://github.com/semantic-release/commit-analyzer
[@semantic-release/commit-analyzer version badge]: https://img.shields.io/npm/v/@semantic-release/commit-analyzer?logo=npm&style=flat-square

[@semantic-release/git]: https://github.com/semantic-release/git
[@semantic-release/git version badge]: https://img.shields.io/npm/v/@semantic-release/git?logo=npm&style=flat-square

[@semantic-release/github]: https://github.com/semantic-release/github
[@semantic-release/github version badge]: https://img.shields.io/npm/v/@semantic-release/github?logo=npm&style=flat-square

[@semantic-release/npm]: https://github.com/semantic-release/npm
[@semantic-release/npm version badge]: https://img.shields.io/npm/v/@semantic-release/npm?logo=npm&style=flat-square

[@semantic-release/release-notes-generator]: https://github.com/semantic-release/release-notes-generator
[@semantic-release/release-notes-generator version badge]: https://img.shields.io/npm/v/@semantic-release/release-notes-generator?logo=npm&style=flat-square

[conventional-changelog-conventionalcommits]: https://github.com/conventional-changelog/conventional-changelog
[conventional-changelog-conventionalcommits version badge]: https://img.shields.io/npm/v/conventional-changelog-conventionalcommits?logo=npm&style=flat-square
## License

[![license badge]][license]

⚖️ For more information, please refer to the [License section] at the root of
the [yikoyu/unconfig] monorepo.

[license badge]: https://img.shields.io/github/license/yikoyu/unconfig?style=for-the-badge
[license]: ../../LICENSE
[license section]: https://github.com/yikoyu/unconfig#License
