const watch = require('node-watch')
const fs = require('fs')
const path = require('path')
const watcherFactory = require('./watcher.factory')

const watcher = watcherFactory({ watch, fs, path })
const connections = [1]

watcher(`${path.dirname(__filename)}/../data/`, (err, data) => {
  connections.forEach(conn => console.log(`Send to ${conn}: ${data}`))
})