const {appendFileSync} = require('fs')
const {errorLog, successLog} = require('../utils/log')

module.exports.generateFile = (dirName, name, fileConfig) => {
  try {
    const fileName = `${dirName}/${fileConfig.name.replace('$NAME$', name)}.tsx`
    appendFileSync(fileName, fileConfig.content.replace('$NAME$', name))
    successLog(`'${fileName}' created.`)
  } catch (error) {
    errorLog(error.message)
  }
}
