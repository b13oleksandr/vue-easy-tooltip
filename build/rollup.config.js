import commonjs from '@rollup/plugin-commonjs' // Конвертирование CommonJS модулей в ES6
import vue from 'rollup-plugin-vue' // Обработка однофайловых компонентов .vue
// import buble from '@rollup/plugin-buble' // Транспиляция/добавление полифилов для умеренной поддержки браузеров
import babel from '@rollup/plugin-babel'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'

export default {
  input: '../src/wrapper.js', // Путь до относительного package.json
  output: [
    { file: '../dist/bundle.umd.js', format: 'umd', name: 'bundle.umd.js' },
    { file: '../dist/bundle.esm.js', format: 'esm' },
    { file: '../dist/bundle.min.js', format: 'iife' }
  ],
  plugins: [
    getBabelOutputPlugin({
      presets: ['@babel/preset-env'],
      allowAllFormats: true
    }),
    commonjs(),
    vue({
      css: true, // Динамически внедряем CSS в тег <style>
      compileTemplate: true // Явное преобразование шаблона в рендер-функцию
    }),
    babel() // Транспиляция в ES5
  ]
}
