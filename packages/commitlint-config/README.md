# @yikoyu/commitlint-config

![package version badge]

➡️ **Extendable ![commitlint icon] [commitlint] configuration**, part of the
[yikoyu/unconfig] project.

[package version badge]: https://img.shields.io/npm/v/@yikoyu/commitlint-config/latest?style=for-the-badge&logo=npm
[commitlint]: https://commitlint.js.org/
[commitlint icon]: https://api.iconify.design/catppuccin/commitlint.svg
[yikoyu/unconfig]: https://github.com/yikoyu/unconfig

---

## Prerequisites

[![node.js version support badge]][node.js]
[![supported commitlint version badge]][commitlint]

[node.js version support badge]: https://img.shields.io/node/v-lts/@commitlint/cli?style=for-the-badge&logo=nodedotjs
[supported commitlint version badge]: https://img.shields.io/github/package-json/dependency-version/yikoyu/unconfig/@commitlint/cli?filename=packages%2Fcommitlint-config%2Fpackage.json&logo=commitlint&style=for-the-badge

ℹ️ This configuration package require these tools to use locally on your
device(s):

1. ![node.js icon] Latest [Node.js] LTS _(Long-Term Support)_ version
2. One of Node.js package managers:
    - ![pnpm icon] [pnpm]
    - ![yarn icon] [yarn]
    - ![npm icon] [npm]
3. Latest ![commitlint icon] [commitlint] version

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
     pnpm install --save-dev @yikoyu/commitlint-config cz-git czg
    ```

2. **If using [pnpm], please add configuration to the `.npmrc` file.**

    ```
    public-hoist-pattern[]=@commitlint/*
    ```

3. **Create a ![commitlint icon] [commitlint configuration file] - `commitlint.config.(js|cjs|.mjs)`**.

4. **Extend this module package configuration.**

    ```js
    import { yikoyu } from '@yikoyu/commitlint-config'

    export default yikoyu()
    ```

5. **Git commit**

    ```sh
    pnpm czg
    ```

📖 For the ![commitlint icon] [commitlint CLI] usage, please refer to its
documentation.

[commitlint configuration file]: https://commitlint.js.org/reference/configuration.html
[commitlint cli]: https://commitlint.js.org/reference/cli.html

---

## Used configurations & plugins

[![Dependencies badge]][dependencies url]

⚙️ This configuration module for [commitlint] loads configurations and plugins
options _conditionally_.

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@yikoyu/commitlint-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@yikoyu%2Fcommitlint-config

### Configurations

| Configurations                    | Version                                          | Loading condition(s) |
| -------------------------------- | ------------------------------------------------ | -------------------- |
| [@commitlint/cli]                | ![@commitlint/cli version badge]                 | -                    |
| [@commitlint/config-conventional] | ![@commitlint/config-conventional version badge]  | -                    |

[@commitlint/cli]: https://github.com/conventional-changelog/commitlint
[@commitlint/cli version badge]: https://img.shields.io/npm/v/@commitlint/cli?logo=npm&style=flat-square

[@commitlint/config-conventional]: https://github.com/conventional-changelog/commitlint
[@commitlint/config-conventional version badge]: https://img.shields.io/npm/v/@commitlint/config-conventional?logo=npm&style=flat-square

## License

[![license badge]][license]

⚖️ For more information, please refer to the [License section] at the root of
the [yikoyu/unconfig] monorepo.

[license badge]: https://img.shields.io/github/license/yikoyu/unconfig?style=for-the-badge
[license]: ../../LICENSE
[license section]: https://github.com/yikoyu/unconfig#License
