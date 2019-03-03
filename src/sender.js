const fs = require('fs')
const path = require('path')
const senderFactory = require('./sender.factory')

module.exports = senderFactory({
  fs,
  path
})