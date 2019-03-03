const log = require('./log')

log('ali está')
  .then(_ => console.log('ok'))
  .catch(err => console.error(err))