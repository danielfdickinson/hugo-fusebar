import pckg from './package.json'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import path from 'path'

const FILENAME = 'fusebar'
const VERSION = process.env.VERSION || pckg.version
const AUTHOR = pckg.author
const HOMEPAGE = pckg.homepage
const DESCRIPTION = pckg.description

const banner = `/**
 * fusebar.js v${VERSION} - ${DESCRIPTION} (${HOMEPAGE})
 *
 * Copyright (c) ${new Date().getFullYear()} ${AUTHOR.name} (${AUTHOR.url})
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */\n`

const terserPlugins = [
  terser({
    output: {
      comments: false,
      preamble: banner
    }
  })
]

const outDir = path.resolve(__dirname, './dist')

export default [{
  input: {  
    'fusebar': path.resolve(__dirname, './src/index.js')
  },
  plugins: [
    commonjs(),
    babel()
  ],
  output: [
    {
      dir: outDir,
      format: 'umd',
      name: FILENAME,
      entryFileNames: '[name].js',
      banner: banner,
      sourcemap: true
    },
    {
      dir: outDir,
      format: 'umd',
      name: FILENAME,
      entryFileNames: '[name].min.js',
      plugins: terserPlugins,
      sourcemap: 'hidden',
    },
    {
      dir: outDir,
      format: 'umd',
      name: FILENAME,
      entryFileNames: '[name].dev.js',
      banner: banner,
      sourcemap: 'inline',
    },
    {
      dir: outDir,
      format: 'es',
      name: FILENAME,
      entryFileNames: '[name].esm.js',
      banner: banner,
      sourcemap: true
    },
    {
      dir: outDir,
      format: 'cjs',
      name: FILENAME,
      entryFileNames: '[name].common.js',
      banner: banner,
      sourcemap: true
    },
    {
      dir: outDir,
      format: 'es',
      name: FILENAME,
      entryFileNames: '[name].esm.min.js',
      plugins: terserPlugins,
      sourcemap: 'hidden'
    }
  ]
}];
