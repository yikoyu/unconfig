import type { Config } from 'stylelint'

/** Vue 文件中预处理器语言 / Preprocessor language for Vue files */
export type VueStyle = 'scss' | 'less' | 'css'

/** yikoyu 配置选项 / yikoyu config options */
export interface YikoyuStylelintConfig extends Config {
  /** Vue 文件中预处理器语言，默认 'css' / Preprocessor language for Vue files, default 'css' */
  vueStyle?: VueStyle
  /** 启用 UnoCSS 兼容（允许 @apply、@screen、@unocss 等），默认 false / Enable UnoCSS compatibility, default false */
  unocss?: boolean
  /** 启用 Tailwind CSS 兼容（允许 @apply、@tailwind、@source 等），默认 false / Enable Tailwind CSS compatibility, default false */
  tailwind?: boolean
  /** 启用 UniApp 小程序适配（允许 rpx 单位和小程序标签），默认 false / Enable UniApp mini-program support, default false */
  uniapp?: boolean
}

/** Tailwind CSS v4 @rule 白名单 / Tailwind CSS v4 @rule allowlist */
const tailwindAtRules = [
  'tailwind',
  'layer',
  'config',
  'apply',
  'variants',
  'responsive',
  'screen',
  'theme',
  'source',
  'custom-variant',
  'plugin',
  'reference',
]

/** UnoCSS @rule 白名单 / UnoCSS @rule allowlist */
const unocssAtRules = [
  'unocss',
  'apply',
  'screen',
  'variants',
  'responsive',
]

/** SCSS 规则微调 (配合 @antfu 风格) / SCSS rule tweaks (compatible with @antfu style) */
const scssRules = {
  'scss/percent-placeholder-pattern': null,
  'scss/no-global-function-names': null,
  'scss/load-partial-extension': null,
  'scss/double-slash-comment-empty-line-before': null,
  'scss/double-slash-comment-whitespace-inside': null,
} as const

/**
 * Construct an stylelint config items.
 *
 * @param {YikoyuStylelintConfig} [userConfig] - User-provided configuration to override or extend the default configuration.
 * @returns {Config} - Merged configuration object.
 */
export function yikoyu(userConfig: YikoyuStylelintConfig = {}): Config {
  const {
    vueStyle = 'css',
    unocss = false,
    tailwind = false,
    uniapp = false,
    ...rest
  } = userConfig

  // 合并 @rule 白名单
  const ignoreAtRules = [
    ...(tailwind ? tailwindAtRules : []),
    ...(unocss ? unocssAtRules : []),
  ]

  // SCSS 规则（含 @rule 白名单，同时禁用基础 at-rule-no-unknown）
  const scssRulesWithAtRule = {
    ...scssRules,
    'at-rule-no-unknown': null,
    ...(ignoreAtRules.length > 0
      ? { 'scss/at-rule-no-unknown': [true, { ignoreAtRules }] }
      : {}),
  }

  // 根据 vueStyle 动态构建 Vue override 的 extends
  const vueExtends: string[] = [
    'stylelint-config-recommended-vue',
  ]
  if (vueStyle === 'scss') {
    vueExtends.push(
      'stylelint-config-standard-scss',
      'stylelint-config-recommended-vue/scss',
    )
  }
  else if (vueStyle === 'less') {
    vueExtends.push(
      'stylelint-config-standard-less',
    )
  }

  const config: Config = {
    extends: [
      'stylelint-config-standard',
      'stylelint-config-recess-order',
    ],
    overrides: [
      // --- Vue 文件 (含 CSS/SCSS/Less 多 style 块) ---
      {
        files: ['*.vue', '**/*.vue'],
        customSyntax: 'postcss-html',
        extends: vueExtends,
        rules: {
          ...(vueStyle === 'scss' ? scssRulesWithAtRule : {}),
          ...(vueStyle === 'less' && ignoreAtRules.length > 0
            ? { 'at-rule-no-unknown': [true, { ignoreAtRules }] }
            : {}),
        },
      },
      // --- 独立 SCSS 文件 ---
      {
        files: ['*.scss', '**/*.scss'],
        customSyntax: 'postcss-scss',
        extends: [
          'stylelint-config-standard-scss',
        ],
        rules: scssRulesWithAtRule,
      },
      // --- 独立 Less 文件 ---
      {
        files: ['*.less', '**/*.less'],
        customSyntax: 'postcss-less',
        extends: [
          'stylelint-config-standard-less',
        ],
        rules: {
          'at-rule-no-unknown': ignoreAtRules.length > 0
            ? [true, { ignoreAtRules }]
            : null,
        },
      },
      // --- HTML 文件 (内嵌 <style>) ---
      {
        files: ['*.html', '**/*.html'],
        customSyntax: 'postcss-html',
      },
    ],
    rules: {
      // --- @rule 白名单 (UnoCSS / Tailwind) ---
      ...(ignoreAtRules.length > 0
        ? { 'at-rule-no-unknown': [true, { ignoreAtRules }] }
        : {}),

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
      'unit-no-unknown': uniapp
        ? [true, { ignoreUnits: ['rpx'] }]
        : true,
      // 允许小程序特有标签
      'selector-type-no-unknown': uniapp
        ? [true, {
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
              'editor',
              'live-pusher',
              'map',
              'movable-view',
              'cover-view',
              'rich-text',
              'icon',
              'progress',
              'video',
              'camera',
            ],
          }]
        : true,

      // --- CSS 函数兼容 ---
      'function-no-unknown': [true, {
        ignoreFunctions: ['v-bind', 'env', 'constant'],
      }],

      // --- Vue3 深度选择器适配 ---
      'selector-pseudo-element-no-unknown': [true, {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted', '::v-deep', '::v-global'],
      }],
      'selector-pseudo-class-no-unknown': [true, {
        ignorePseudoClasses: ['global', 'deep', 'export', 'root'],
      }],

      // --- 声明值校验优化 ---
      'declaration-property-value-no-unknown': [true, {
        ignoreProperties: {
          '/.+/': [
            /v-bind\(.+\)/,
            ...(uniapp ? [/(\d+(\.\d+)?rpx)/] : []),
          ],
        },
      }],
    },
    ignoreFiles: [
      '**/node_modules/**',
      '**/dist/**',
      '**/*.js',
      '**/*.jsx',
      '**/*.tsx',
      '**/*.ts',
      '**/*.d.ts',
      '**/*.json',
      '**/*.md',
    ],
  }

  return Object.assign<Config, Config>(config, rest)
}

export default yikoyu
