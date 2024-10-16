export default {
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',  // Maps CSS modules to simple strings for testing
  },
  preset: 'ts-jest',           // Use ts-jest for TypeScript support in Jest
  testEnvironment: 'jsdom',     // Simulates a browser environment for DOM-based tests
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],  // Use setupTests for jest-dom setup
  cache: false,
}
