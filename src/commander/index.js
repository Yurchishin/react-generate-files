const {resolve, dirname} = require('path')
const {readFileSync} = require('fs')
const {generate} = require('../generators/directory')
const {errorLog} = require('../utils/log')

module.exports.commanderGenerator = async (type, name) => {
  try {
    const configFilePath = resolve(process.cwd(), 'rgfconfig.json')

    const jsonConfig = await readFileSync(configFilePath, 'utf8')

    const config = JSON.parse(jsonConfig)[type]

    if (config && (config.path || config.path === "")) generate(name, config)
  } catch (error) {
    errorLog(error.message)
  }
}
