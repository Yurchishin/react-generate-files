const {appendFileSync, mkdirSync, existsSync} = require('fs')
const {normalize, join} = require('path')
const {warningLog, errorLog, successLog} = require('../utils/log')
const {generateFile} = require('./files')

module.exports.generate = (name, config) => {
  try {
    const dirName = normalize(join(config.path, config.dirname.replace('$NAME$', name)))

    if (!existsSync(dirName)) {
      mkdirSync(dirName, {recursive: true})
      successLog(`Directory '${dirName}' created.`)

      config.files.forEach(fileConfig => generateFile(dirName, name, fileConfig))
    } else {
      warningLog('Already created.')
    }
  } catch (error) {
    errorLog(error.message)
  }
}
