/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  setupFiles: [],
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '__testUtils__'
  ],
  clearMocks: true,
  restoreMocks: true,
  testMatch: [
    '**/*.spec.(js|ts)'
  ],
  roots: [
    '<rootDir>/src'
  ]
};