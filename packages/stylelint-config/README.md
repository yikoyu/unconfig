# @yikoyu/stylelint-config

![package version badge]

➡️ **Extendable ![stylelint icon] [Stylelint] configuration**, part of the
[yikoyu/unconfig] project.

[package version badge]: https://img.shields.io/npm/v/@yikoyu/stylelint-config/latest?style=for-the-badge&logo=npm
[stylelint]: https://stylelint.io/
[stylelint icon]: https://api.iconify.design/logos/stylelint.svg
[yikoyu/unconfig]: https://github.com/yikoyu/unconfig

---

## Prerequisites

[![node.js version support badge]][node.js]
[![supported stylelint version badge]][stylelint]

[node.js version support badge]: https://img.shields.io/node/v-lts/@yikoyu/stylelint-config?style=for-the-badge&logo=nodedotjs
[supported stylelint version badge]: https://img.shields.io/github/package-json/dependency-version/yikoyu/unconfig/peer/stylelint?filename=packages%2Fstylelint-config%2Fpackage.json&logo=stylelint&style=for-the-badge

ℹ️ This configuration package require these tools to use locally on your
device(s):

1. ![node.js icon] Latest [Node.js] LTS _(Long-Term Support)_ version
1. One of Node.js package managers:
    - ![pnpm icon] [pnpm]
    - ![yarn icon] [yarn]
    - ![npm icon] [npm]
1. Latest ![stylelint icon] [Stylelint] version

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
     pnpm install --save-dev stylelint @yikoyu/stylelint-config
    ```

2. **If using [pnpm], please add configuration to the `.npmrc` file.**

    ```
    public-hoist-pattern[]=*stylelint*
    public-hoist-pattern[]=postcss*
    ```

3. **Create a ![stylelint icon] [stylelint configuration file] - `stylelint.config.(js|cjs|.mjs)`**.

4. **Extend this module package configuration.**

    ```js
    import { yikoyu } from '@yikoyu/stylelint-config'

    export default yikoyu()
    ```

📖 For the ![stylelint icon] [Stylelint CLI] usage, please refer to its
documentation.

[stylelint configuration file]: https://stylelint.io/user-guide/configure
[stylelint cli]: https://stylelint.io/user-guide/usage/cli

---

## Used configurations & plugins

[![Dependencies badge]][dependencies url]

⚙️ This configuration module for [Stylelint] loads configurations and plugins
options _conditionally_.

[dependencies badge]: https://img.shields.io/librariesio/release/npm/@yikoyu/stylelint-config?style=for-the-badge
[dependencies url]: https://libraries.io/npm/@yikoyu%2Fstylelint-config

### Configurations

| Configurations                      | Version                                           | Loading condition(s)        |
| ----------------------------------- | ------------------------------------------------- | --------------------------- |
| [stylelint-config-recess-order]     | ![stylelint-config-recess-order version badge]    | `order` as dependency    |
| [stylelint-config-recommended-vue]  | ![stylelint-config-recommended-vue version badge] | `vue` as dependency |
| [stylelint-config-standard]         | ![stylelint-config-standard version badge]        | **NO** `sass` as dependency |
| [stylelint-config-standard-scss]    | ![stylelint-config-standard-scss version badge]   | `sass` as dependency        |

[stylelint-config-recess-order]: https://github.com/stormwarning/stylelint-config-recess-order
[stylelint-config-recess-order version badge]: https://img.shields.io/npm/v/stylelint-config-recess-order?logo=npm&style=flat-square

[stylelint-config-recommended-vue]: https://github.com/ota-meshi/stylelint-config-recommended-vue
[stylelint-config-recommended-vue version badge]: https://img.shields.io/npm/v/stylelint-config-recommended-vue?logo=npm&style=flat-square

[stylelint-config-standard]: https://github.com/stylelint/stylelint-config-standard
[stylelint-config-standard version badge]: https://img.shields.io/npm/v/stylelint-config-standard?logo=npm&style=flat-square

[stylelint-config-standard-scss]: https://github.com/stylelint-scss/stylelint-config-standard-scss
[stylelint-config-standard-scss version badge]: https://img.shields.io/npm/v/stylelint-config-standard-scss?logo=npm&style=flat-square

## License

[![license badge]][license]

⚖️ For more information, please refer to the [License section] at the root of
the [yikoyu/unconfig] monorepo.

[license badge]: https://img.shields.io/github/license/yikoyu/unconfig?style=for-the-badge
[license]: https://github.com/yikoyu/unconfig/blob/main/LICENSE.md
[license section]: https://github.com/yikoyu/unconfig#License

---

## Resources

-   [Awesome Stylelint]

[awesome stylelint]: https://github.com/stylelint/awesome-stylelint
