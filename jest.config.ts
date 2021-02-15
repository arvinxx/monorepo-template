import type { Config } from '@jest/types';
import baseConfig from './jest.config.base';

const config: Config.InitialOptions = {
  ...baseConfig,
  projects: ['<rootDir>/packages/*/jest.config.js'],
  moduleDirectories: ['node_modules'],
  collectCoverageFrom: ['<rootDir>/packages/*/src/**/*.ts'],
  coverageDirectory: '<rootDir>/coverage/',
};

export default config;
