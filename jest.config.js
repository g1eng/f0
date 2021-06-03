const {defaults} = require('jest-config')
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ["lcov"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts']
};
