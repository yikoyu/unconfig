# Configs

[![pnpm workspace badge]][pnpm workspace]
[![changesets badge]][changesets]
[![turborepo badge]][turborepo]

➡️ This project is a [monorepo] made with [pnpm workspace] and powered by
[changesets], [turborepo].

[monorepo]: https://en.wikipedia.org/wiki/Monorepo

[pnpm workspace]: https://pnpm.io/workspaces
[pnpm workspace badge]: https://img.shields.io/badge/-pnpm%20workspace-informational?style=for-the-badge&logo=pnpm

[changesets]: https://github.com/changesets/changesets
[changesets badge]: https://img.shields.io/badge/-changesets-gray?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAABYUlEQVQoU02RvUoDQRDHZ3b3TiwsjI0xWFjb+gIKoqIIKUSCCjY+ho3voO9gF7wq+AaBVOJXY4JaCH5FMSbeJTf+Z3OeWVhmv37zn/kvCwYR6dTBmA1mXsj2Pmyed+6N4dkgdBJYQ4Eh5gzU+1EYN6xJaDFqi3NGAQ6cHYIOJECD+36mJikWMVJ0cbISvfns+tgFVkJrCUkoWho3PivgC4T5eEAcY9sbEPX6xOvRMxQYChYJGAmwHrO12vLEqgcz2LYTSgCxgl3McvQkoQJQc1CtlwtWu/szY9QHuvuS9Af1dlDqVvWRh4YwXVamtaV85Ip6cvspolCckkCRt88eJIRJXtEYut75h3Pw6kMEpghM4QTxG3G32hLfn/bmezR0szfjmRxsvEvaTQBl5qwV2Zc2ddJM1ckQ7jrnpLlf8ucerL/KIUo7UlMAtjaKPDfaz+Rx8wV/V9D/C1JTaR2UTn8B1OeSRP02JSkAAAAASUVORK5CYII=

[turborepo]: https://github.com/vercel/turborepo
[turborepo badge]: https://img.shields.io/badge/-turborepo-gray?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAklJREFUOE91kU9oE1EQxuftbpqkmBRJKRYVih6iIEEELcYoBUF6EQ8lPWihtoInNVYQAhZKLRQiikgvRQ968KDtIRUKKpVWq6IHRaonUVs0BitRBJtkk+xmn9+sG9lG/eC382dnZt/OE1TThFS3fNK7LVKOSKKdkoSuSnWYFLNfNa2pynr/tfc94uefescRbMOpXCBoemarJMjUxLhHpacVw/pqyCbFp5Y6qVo+plliK2z/i6GWu/VD7Hjfue8bSUp74L8UG/4S7xjKLsWSH9e63/+voR1FEVAED0GWm+ITssF8+W6aSJ5Np8ILnFP44dI6+PPgObgKboIlMALEZLeorDH0uUA5n6r1uAewPwX2grcgCS4BAwyCM4ACpdaxgF6KJk8/a+PYrQMIcAG0DNz/2eXkv8Fq3JA8OjM92Hevj333CXZwAroPfjg+mzTgXYRAGyeCRuGGt2LYe7EnOuKjslZtGXEj8DjvdLsgvxLS1N/7d59gBu/4FzpBh9PAVecBD3gD7K82mYWuRrPoZd894DXiMaf4ASzfBC9zAJTBCUBzBy82Byt61FeWsxzXi7+YABnAp6mCJ2B3rXB+z8iFR7HR27XYvQPOcdMVh2bYEsjXij/vHw3lCnqrYjXwFa9WJpJolxsG/PV5jiVJJbPt1MnFSGL5w6bjTe4ae5W5cH+gSuotTVjbNUnXNaE8lsLKauRbMcxS3FCp1yRVCq/S27Iw/uqvAbVEcXNPVJHyMDa7iyzLUIRy2RDikCQr7V807gia5J2s0i8UIcDwgEVTwgAAAABJRU5ErkJggg==

## Project goal

🎯 The objective is to keep used **tool(s) configuration(s), which can be shared
and extendable** between the projects as an isolated, maintainable package,
added as a dependency. Thus, to save time configuring, installing, upgrading
plugins dependencies, etc.

---

## Packages

![workflow CI-CD badge]
![node.js version support badge]
[![Dependencies badge]][dependencies url]

[workflow ci-cd badge]: https://img.shields.io/github/actions/workflow/status/yikoyu/unconfig/release.yml?label=CI%20%26%20CD&logo=github&style=for-the-badge&branch=master
[node.js version support badge]: https://img.shields.io/node/v-lts/@yikoyu/stylelint-config?style=for-the-badge&logo=nodedotjs
[dependencies badge]: https://img.shields.io/librariesio/github/yikoyu/unconfig?style=for-the-badge
[dependencies url]: https://libraries.io/github/yikoyu/unconfig "Dependencies status"

📦 The following packages are available under the [packages/](./packages)
directory. Each of them has its own instructions _(in the `README.md` files)_
on how to use them.

**ℹ️ All of them are [scoped] - they are prefixed with `@yikoyu/`.**
They are accessible for public use and downloadable from the [npmjs.com
registry].

[scoped]: https://docs.npmjs.com/cli/v6/using-npm/scope
[npmjs.com registry]: https://npmjs.com/org/yikoyu

| Name                                                         | Version                                                              |
| ------------------------------------------------------------ | -------------------------------------------------------------------- |
| [![commitlint-config badge]][commitlint-config]              | [![commitlint-config version badge]][commitlint-config npm page]       |
| [![semantic-release-config badge]][semantic-release-config]  | [![semantic-release-config version badge]][semantic-release-config npm page]|
| [![stylelint-config badge]][stylelint-config]                | [![stylelint-config version badge]][stylelint-config npm page]       |

[commitlint-config]: ./packages/commitlint-config/README.md
[commitlint-config badge]: https://img.shields.io/badge/commitlint-config-informational?style=flat-square&logo=commitlint
[commitlint-config version badge]: https://img.shields.io/npm/v/@yikoyu/commitlint-config/latest?style=flat-square&logo=npm
[commitlint-config npm page]: https://www.npmjs.com/package/@yikoyu/commitlint-config

[semantic-release-config]: ./packages/semantic-release-config/README.md
[semantic-release-config badge]: https://img.shields.io/badge/semantic--release-config-informational?style=flat-square&logo=semantic-release
[semantic-release-config version badge]: https://img.shields.io/npm/v/@yikoyu/semantic-release-config/latest?style=flat-square&logo=npm
[semantic-release-config npm page]: https://www.npmjs.com/package/@yikoyu/semantic-release-config

[stylelint-config]: ./packages/stylelint-config/README.md
[stylelint-config badge]: https://img.shields.io/badge/stylelint-config-informational?style=flat-square&logo=stylelint
[stylelint-config version badge]: https://img.shields.io/npm/v/@yikoyu/stylelint-config/latest?style=flat-square&logo=npm
[stylelint-config npm page]: https://www.npmjs.com/package/@yikoyu/stylelint-config

## 📄 License

[MIT](./LICENSE)
