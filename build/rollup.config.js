import vue from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'

export default {
  input: './src/wrapper.js',

  output: {
    name: 'Tooltip',
    exports: 'named'
  },
  plugins: [vue(), babel({ babelHelpers: 'bundled' })]
}
