import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'

export default {
  input: 'src/wrapper.js',
  output: [
    {
      file: 'dist/vue-easy-tooltip.umd.js',
      format: 'umd',
      name: 'vue-easy-tooltip.umd.js'
    },
    { file: 'dist/vue-easy-tooltip.esm.js', format: 'esm' },
    { file: 'dist/vue-easy-tooltip.min.js', format: 'iife' }
  ],
  plugins: [
    getBabelOutputPlugin({
      presets: ['@babel/preset-env'],
      allowAllFormats: true
    }),
    commonjs(),
    vue({
      compileTemplate: true
    }),
    babel()
  ]
}
