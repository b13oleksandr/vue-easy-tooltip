import vue from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
// import resolve from '@rollup/plugin-node-resolve'

export default {
  input: './src/wrapper.js',

  output: {
    name: 'Tooltip',
    exports: 'named'
  },
  plugins: [
    vue(),
    // resolve(),
    babel({
      exclude: 'node_modules/**',
      presets: [
        [
          '@babel/env',
          {
            modules: false,
            targets: {
              browsers: '> 1%, IE 11, not op_mini all, not dead',
              node: 8
            },
            useBuiltIns: 'usage'
          }
        ]
      ]
    })
  ]
}
