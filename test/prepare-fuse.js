/* global module require */

const process = require('process')
if (process.env.MODE === 'dev') {
  module.exports = require('../_vendor/github.com/cshoredaniel/krisk-Fuse/dist/fuse.dev') // eslint-disable-line no-unused-vars
} else {
  module.exports = require('../_vendor/github.com/cshoredaniel/krisk-Fuse/dist/fuse') // eslint-disable-line no-unused-vars
}

