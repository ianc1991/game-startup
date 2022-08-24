/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/'],
};