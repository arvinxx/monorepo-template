import path from 'path';
import type { Config } from '@jest/types';

const baseConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  testRegex: '(/tests/.*.(test|spec)).tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  moduleNameMapper: {
    '^foo/(.*)$': '<rootDir>/packages/foo/src/$1',
  },
  rootDir: path.resolve(__dirname, '.'),
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};

export default baseConfig;
