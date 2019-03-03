const fs = require('fs')
const util = require('util')
const path = require('path')
const dayjs = require('dayjs')

const logFile = path.dirname(__filename)+'/../data/log.txt'
const append = util.promisify(fs.appendFile)

module.exports = require('./log.factory')({
  logFile,
  append,
  dayjs
})