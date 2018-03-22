/* eslint-env jest */
const yarnGlobalPackagesCli = require('../')

test('main', () => {
  expect(typeof yarnGlobalPackagesCli).toBe('function')
})
