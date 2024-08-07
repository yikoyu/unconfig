import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts', './src/cli.ts'],
  format: ['cjs', 'esm'],
  shims: true,
  splitting: false,
  external: [
    'node:*',
    '@types/*',
    'eslint*',
    'eslint-flat-config-viewer',
    'eslint-plugin-react*',
    'stylelint',
  ],
})
