module.exports = {
    // Specifies the test environment
    testEnvironment: 'jsdom',
  
    // Specifies the patterns Jest uses to detect test files
    testMatch: [
      '**/__tests__/**/*.js?(x)',
      '**/?(*.)+(spec|test).js?(x)',
    ],
  
    // Setup files to run before each test
    setupFiles: ['./jest.setup.js'],
  
    // Coverage configuration
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.js'],
  };
  