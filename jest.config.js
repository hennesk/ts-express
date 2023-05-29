/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Stop running tests after `n` failures
  // bail: 0,

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // Automatically reset mock state before every test
  resetMocks: true,
  // Automatically restore mock state and implementation before every test
  restoreMocks: true,

  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/main.ts",
  ],
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "babel",
  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ["text", "text-summary"],
  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },

  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: undefined,
  // A path to a module which exports an async function that is triggered once after all test suites
  // globalTeardown: undefined,
  // A set of global variables that need to be available in all test environments
  // globals: {},

  // The number of seconds after which a test is considered as slow and reported as such in the results.
  slowTestThreshold: 3,
  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',
  // The test environment that will be used for testing
  testEnvironment: 'node',
};
