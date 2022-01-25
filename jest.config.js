/* eslint-disable @typescript-eslint/no-var-requires */
const { defaults } = require('jest-config');

module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  errorOnDeprecated: true,
  moduleDirectories: [...defaults.moduleDirectories, 'src'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'scss'],
  moduleNameMapper: {
    '\\.(jpg|jpeg)$': '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
  testEnvironment: 'jsdom',
  verbose: false,
};
