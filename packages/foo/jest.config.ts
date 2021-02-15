import type { Config } from '@jest/types';
import base from '../../jest.config';

const packageName = '@arvinxu/modules-foo';

const root = '<rootDir>/packages/foo';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
};

export default config;
