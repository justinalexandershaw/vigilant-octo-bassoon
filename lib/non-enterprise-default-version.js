const nonEnterpriseDefaultVersion = Object.values(require('./all-versions'))
  .find(version => version.nonEnterpriseDefault).version

module.exports = nonEnterpriseDefaultVersion
