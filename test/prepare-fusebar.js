/* global module require */

const process = require('process')

if (process.env.TARGET === 'umd-dev') {
  module.exports = require('../dist/fusebar.dev.js')
} else if (process.env.TARGET == 'commonjs') {
  module.exports = require('../dist/fusebar.common.js')
} else if (process.env.TARGET === 'esm-dev') {
  module.exports = require('../dist/fusebar.esm.js')
} else {
  module.exports = require('../dist/fusebar.js')
}

