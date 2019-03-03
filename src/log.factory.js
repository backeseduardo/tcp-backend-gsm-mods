module.exports = deps => 
  text =>
    new Promise((resolve, reject) => {
      const {append, logFile, dayjs} = deps
      
      append(logFile, `[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] ${text}\r\n`)
        .then(() => {
          resolve(text)
        })
        .catch(err => {
          reject(err)
        })
    })