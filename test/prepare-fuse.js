/* global module require */

const process = require('process')
if (process.env.TARGET === 'umd-dev') {
  module.exports = require('../_vendor/github.com/cshoredaniel/krisk-Fuse/dist/fuse') // eslint-disable-line no-unused-vars
} else if (process.env.TARGET === 'commonjs') {
  module.exports = require('../_vendor/github.com/cshoredaniel/krisk-Fuse/dist/fuse.common') // eslint-disable-line no-unused-vars
} else if (process.env.TARGET === 'esm-dev') {
  module.exports = require('../_vendor/github.com/cshoredaniel/krisk-Fuse/dist/fuse.esm') // eslint-disable-line no-unused-vars
} else {
  module.exports = require('../_vendor/github.com/cshoredaniel/krisk-Fuse/dist/fuse.min') // eslint-disable-line no-unused-vars
}
