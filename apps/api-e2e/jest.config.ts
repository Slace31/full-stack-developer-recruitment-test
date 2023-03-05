/* eslint-disable */
export default {
  // displayName: 'api-e2e',
  // preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  // testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  // moduleFileExtensions: ['ts', 'js', 'html'],
  // coverageDirectory: '../../coverage/api-e2e',
  displayName: 'api-e2e',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  // transform: {
  //   '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  // },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/api-e2e',
  globalSetup: '<rootDir>/src/support/global-setup.ts',
  globalTeardown: '<rootDir>/src/support/global-teardown.ts',
  setupFiles: ['<rootDir>/src/support/test-setup.ts'],
  moduleNameMapper: {
    '^axios$': require.resolve('axios'),
  },
};
