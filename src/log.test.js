
describe('log.test.js', () => {
  
  it('log', () => {
    const dayjs = require('dayjs')
    const fakeLogFile = 'fakelog.txt'
    const fakeAppend = (file, text) => Promise.resolve(text)
    const fakeText = (Math.random()*10).toString()

    const logFactory = require('./log.factory')
    const log = logFactory({
      logFile: fakeLogFile,
      append: fakeAppend,
      dayjs: dayjs
    })

    return log(fakeText).then(res => expect(res).toBe(fakeText))
  })
})