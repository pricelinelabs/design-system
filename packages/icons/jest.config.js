module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '<rootDir>/plugins/**/*.js',
    '!**/*.stories.js',
  ],
  "moduleNameMapper": {
    "^styled-components$": "<rootDir>/node_modules/styled-components"
  },
  moduleDirectories: ['node_modules', 'test'],
  reporters: ['jest-standard-reporter'],
  setupFilesAfterEnv: ['./test/jest.setup.js'],
}
