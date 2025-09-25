import type { Config } from 'stylelint'

/**
 * Construct an stylelint config items.
 *
 * @param {Config} [userConfig] - User-provided configuration to override or extend the default configuration.
 * @returns {Config} - Merged configuration object.
 */
export function yikoyu(userConfig: Config = {}): Config {
  const config: Config = {
    extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
    overrides: [
      {
        files: ['**/*.(css|html|vue)'],
        customSyntax: 'postcss-html',
      },
      {
        files: ['*.less', '**/*.less'],
        customSyntax: 'postcss-less',
        extends: [
          'stylelint-config-standard',
          'stylelint-config-recommended-vue',
          'stylelint-config-recess-order',
        ],
      },
      {
        files: ['*.scss', '**/*.scss'],
        customSyntax: 'postcss-scss',
        extends: [
          'stylelint-config-standard',
          'stylelint-config-standard-scss',
          'stylelint-config-recommended-vue/scss',
          'stylelint-config-recess-order',
        ],
        rules: {
          'scss/percent-placeholder-pattern': null,
          'scss/no-global-function-names': null,
        },
      },
    ],
    rules: {
      'selector-not-notation': null,
      'import-notation': null,
      'function-no-unknown': [true, { ignoreFunctions: ['v-bind', 'env'] }],
      'selector-class-pattern': null,
      'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: ['global', 'deep', 'export', 'root'],
        },
      ],
      'selector-pseudo-element-no-unknown': [
        true,
        {
          ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted', '::v-deep', '::v-global'],
        },
      ],
      'at-rule-no-unknown': [
        true,
        {
          ignoreAtRules: [
            'tailwind',
            'apply',
            'variants',
            'responsive',
            'screen',
            'function',
            'if',
            'else',
            'each',
            'include',
            'mixin',
            'use',
            'extend',
            'return',
          ],
        },
      ],
      'no-empty-source': null,
      'named-grid-areas-no-invalid': null,
      'no-descending-specificity': null,
      'font-family-no-missing-generic-family-keyword': null,
      'rule-empty-line-before': [
        'always',
        {
          ignore: ['after-comment', 'first-nested'],
        },
      ],
      'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
      'selector-type-no-unknown': [true, {
        ignoreTypes: [
          'page',
          'view',
          'text',
          'image',
          'scroll-view',
          'button',
        ],
      }],
    },
    ignoreFiles: [
      'node_modules/*',
      'dist/*',
      '**/node_modules/*',
      '**/*.js',
      '**/*.jsx',
      '**/*.tsx',
      '**/*.ts',
      '**/*.d.ts',
      '**/*.json',
      '**/*.md',
    ],
  }

  return Object.assign<Config, Config>(config, userConfig)
}

export default yikoyu
