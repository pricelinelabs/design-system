module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!<rootDir>/src/**/*.stories.js',
  ],
  moduleDirectories: ['node_modules', 'test'],
  reporters: ['jest-standard-reporter'],
  setupFilesAfterEnv: ['./test/jest.setup.ts'],
  testMatch: ['<rootDir>/src/**/*.spec.js'],
}
