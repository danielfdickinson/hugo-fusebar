/* global module require */

const process = require('process')

if (process.env.MODE === 'dev') {
  module.exports = require('../dist/fusebar.dev')
} else {
  module.exports = require('../dist/fusebar')
}


