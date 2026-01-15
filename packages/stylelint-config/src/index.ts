import type { Config } from 'stylelint'

/**
 * Construct an stylelint config items.
 *
 * @param {Config} [userConfig] - User-provided configuration to override or extend the default configuration.
 * @returns {Config} - Merged configuration object.
 */
export function yikoyu(userConfig: Config = {}): Config {
  const config: Config = {
    extends: [
      'stylelint-config-standard',
      'stylelint-config-recess-order',
    ],
    overrides: [
      {
        files: ['**/*.(css|html|vue)'],
        customSyntax: 'postcss-html',
        extends: [
          'stylelint-config-recommended-vue',
          'stylelint-config-standard-scss',
          'stylelint-config-recommended-vue/scss',
        ],
      },
      {
        files: ['*.less', '**/*.less'],
        customSyntax: 'postcss-less',
      },
      {
        files: ['*.scss', '**/*.scss'],
        customSyntax: 'postcss-scss',
        extends: [
          'stylelint-config-standard-scss',
          'stylelint-config-recommended-vue/scss',
        ],
      },
    ],
    rules: {
      // --- 基础规则优化 ---
      // 为 :not() 伪类选择器指定简单或复杂的表示法
      'selector-not-notation': null,
      // 指定类选择器的模式
      'selector-class-pattern': null,
      // 禁止无效的命名网格区域
      'named-grid-areas-no-invalid': null,
      // 禁止字体系列中缺少通用系列关键字
      'font-family-no-missing-generic-family-keyword': null,
      // 要求或禁止规则前有空行
      'rule-empty-line-before': [
        'always',
        {
          ignore: ['after-comment', 'first-nested'],
        },
      ],
      // 禁止空代码
      'no-empty-source': null,
      // 禁止在覆盖高特异性选择器之后出现低特异性选择器
      'no-descending-specificity': null,
      // 禁止空注释
      'comment-no-empty': true,
      // 要求或禁止注释前有空行
      'comment-empty-line-before': null,
      // 指定十六进制颜色的短或长表示法
      'color-hex-length': null,
      // 为 @import 规则指定字符串或 URL 表示法
      'import-notation': 'string',

      // --- UniApp & 小程序适配 ---
      // 允许 rpx 单位
      'unit-no-unknown': [true, {
        ignoreUnits: ['rpx'],
      }],
      // 允许小程序特有标签
      'selector-type-no-unknown': [true, {
        ignoreTypes: [
          'page',
          'view',
          'text',
          'image',
          'scroll-view',
          'swiper',
          'swiper-item',
          'navigator',
          'button',
          'radio',
          'checkbox',
          'label',
          'form',
          'picker',
          'picker-view',
        ],
      }],

      // --- UnoCSS&tailwindcss 兼容 (关键) ---
      'scss/at-rule-no-unknown': [true, {
        ignoreAtRules: [
          'tailwind', // tailwindcss
          'layer', // tailwindcss
          'config', // tailwindcss
          'apply',
          'variants',
          'responsive',
          'screen',
          'unocss',
          'theme',
        ],
      }],
      'function-no-unknown': [true, {
        ignoreFunctions: ['theme', 'v-bind', 'env', 'constant'],
      }],

      // --- Vue3 深度选择器适配 ---
      'selector-pseudo-element-no-unknown': [true, {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted', '::v-deep', '::v-global'],
      }],
      'selector-pseudo-class-no-unknown': [true, {
        ignorePseudoClasses: ['global', 'deep', 'export', 'root'],
      }],

      // --- 声明值校验优化 (针对 v-bind 和 rpx) ---
      'declaration-property-value-no-unknown': [true, {
        ignoreProperties: {
          '/.+/': [
            /v-bind\(.+\)/,
            /(\d+(\.\d+)?rpx)/,
          ],
        },
      }],

      // --- SCSS 规则微调 (配合 @antfu 风格) ---
      // 为 -placeholders 指定一个模式（%）
      'scss/percent-placeholder-pattern': null,
      // 禁止使用全局函数名，因为这些全局函数现已被归入 Sass 内置模块中
      'scss/no-global-function-names': null,
      // 要求或禁止在 @import、@use、@forward 以及 meta.load-css 命令中书写文件扩展名
      'scss/load-partial-extension': null,
      // 要求或禁止在双斜杠注释（//）前保留空行
      'scss/double-slash-comment-empty-line-before': null,
      // 要求或禁止在双斜杠注释（//）的双斜杠后保留空白字符
      'scss/double-slash-comment-whitespace-inside': null,
      // 允许不写下划线和后缀
      'scss/at-import-partial-extension': null,
      // 禁用标准 CSS 中不支持 SCSS 函数的报错
      'at-rule-no-deprecated': null,
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
