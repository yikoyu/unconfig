import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  shims: true,
  dts: true,
  outputOptions: {
    exports: 'named',
  },
})
