const net = require('net')
const log = require('./log')
const port = 3001

console.log('Starting TCP server')
const server = net.createServer(conn => {
  console.log('New connection')

  conn.on('data', data => {
    let text = data.toString('utf-8').replace(/(\r\n|\n|\r)/gm, '')

    log(text)
      .then(appendedText => {
        console.log(appendedText)
        conn.write(`ok\r\n`)
      })
      .catch(err => {
        console.error(err)
        conn.write(err)
      })
  })
  
  conn.on('end', () => {
    console.log('Connection closed')
  })
})

server.on('error', err => {
  throw err
})

server.listen(port, () => {
  console.log(`TCP server running on port ${port}`)
})