/* Modified rom Fuse.js by Copyright 2020 Kiro Risk, Licensed under the Apache License 2.0 */
const path = require('path')
const replace = require('@rollup/plugin-replace')
const node = require('@rollup/plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const copy = require('rollup-plugin-copy')
const pckg = require('../package.json')

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

const resolve = (_path) => path.resolve(__dirname, '../', _path)

const builds = {
  // UMD full build
  'umd-dev': {
    entry: resolve('src/index.js'),
    dest: resolve(`dist/${FILENAME}.js`),
    format: 'umd',
    env: 'development'
  },
  // UMD production build
  'umd-prod': {
    entry: resolve('src/index.js'),
    dest: resolve(`dist/${FILENAME}.min.js`),
    format: 'umd',
    env: 'production'
  },
  // CommonJS full build
  'commonjs': {
    entry: resolve('src/index.js'),
    dest: resolve(`dist/${FILENAME}.common.js`),
    env: 'development',
    format: 'cjs'
  },
  // ES modules build (for bundlers)
  'esm-full': {
    entry: resolve('src/index.js'),
    dest: resolve(`dist/${FILENAME}.esm.js`),
    format: 'es',
    env: 'development',
    transpile: false
  },
  'esm-prod': {
    entry: resolve('src/index.js'),
    dest: resolve(`dist/${FILENAME}.esm.min.js`),
    format: 'es',
    env: 'production',
    transpile: false
  }
}

// built-in vars
const vars = {
  __VERSION__: VERSION
}

function genConfig(options) {
  const config = {
    input: options.entry,
    plugins: [node(), ...(options.plugins || [])],
    output: {
      banner,
      file: options.dest,
      format: options.format,
      name: 'fusebar'
    }
  }

  // build-specific env
  if (options.env) {
    vars['process.env.NODE_ENV'] = JSON.stringify(options.env)
  }

  config.plugins.push(replace(vars))

  if (options.transpile !== false) {
    config.plugins.push(babel())
  }

  return config
}

function mapValues(obj, fn) {
  const res = {}
  Object.keys(obj).forEach((key) => {
    res[key] = fn(obj[key], key)
  })
  return res
}

if (process.env.TARGET) {
  module.exports = genConfig(builds[process.env.TARGET])
} else {
  module.exports = mapValues(builds, genConfig)
}
