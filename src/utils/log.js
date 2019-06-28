module.exports.errorLog = (message) => console.error(`\nRGT::Error::${message}\n`)
module.exports.warningLog = (message) => console.log(`\nRGT::Warning::${message}\n`)
module.exports.successLog = (message) => console.log(`RGT::Success::${message}`)
module.exports.log = (message) => console.log(`RGT::${message}`)
