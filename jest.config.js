module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary']
}
