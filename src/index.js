const net = require('net')
const log = require('./log')
const sender = require('./sender')
const port = 3001
const connections = []

// initialize sender, it stays watching the file data/sendto.txt
sender(connections)

console.log('Starting TCP server')
const server = net.createServer(conn => {
  console.log('New connection')

  connections.push(conn)

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
    connections.splice(connections.indexOf(conn), 1)
    console.log('Connection closed')
  })
})

server.on('error', err => {
  throw err
})

server.listen(port, () => {
  console.log(`TCP server running on port ${port}`)
})