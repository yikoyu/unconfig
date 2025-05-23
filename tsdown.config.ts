import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  shims: true,
  outputOptions: {
    exports: 'named',
  },
})
