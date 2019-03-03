module.exports = deps =>
  connections => {
    const { fs, path } = deps

    fs.watch(`${path.dirname(__filename)}/../data/`, 'utf8', (eventType, filename) => {
      console.log(eventType, filename);
    
      if (filename === 'sendto.txt') {
        fs.readFile(`${path.dirname(__filename)}/../data/${filename}`, {
          encoding: 'utf8',
          flag: 'r'
        }, (err, data) => {
          if (err) {
            throw err
          }
          connections.forEach(conn => conn.write(data))
        })
      }
    })
  }