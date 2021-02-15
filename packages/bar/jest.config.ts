import type { Config } from '@jest/types';
import base from '../../jest.config';

const packageName = '@arvinxu/modules-bar';

const root = '<rootDir>/packages/bar';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
};

export default config;
