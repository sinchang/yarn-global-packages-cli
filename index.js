const yarnGlobalPackages = require('yarn-global-packages')
const columnify = require('columnify')

module.exports = () => {
  const packages = yarnGlobalPackages()
  return columnify(packages)
}
