const watch = require('node-watch')
const fs = require('fs')
const senderFactory = require('./watcher.factory')

module.exports = senderFactory({ watch, fs })