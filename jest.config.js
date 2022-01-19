module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'scss'],
  moduleNameMapper: {
    '\\.(jpg|jpeg)$': '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/src/__mocks__/fileMock.js',
  },
};
