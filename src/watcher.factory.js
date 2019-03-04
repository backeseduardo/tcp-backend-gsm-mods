module.exports = deps =>
  (file, callbackFunction) => {
    const { watch, fs } = deps

    watch(file, (eventType, filename) => {
      if (filename.match('sendto.txt')) {
        fs.readFile(filename, {
          encoding: 'utf8',
          flag: 'r'
        }, callbackFunction)
      }
    })
  }