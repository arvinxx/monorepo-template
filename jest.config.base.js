const {
  default: umiConfig,
} = require('@umijs/test/lib/createDefaultConfig/createDefaultConfig');

const defaultConfig = umiConfig(process.cwd(), {});

module.exports = {
  ...defaultConfig,
  moduleNameMapper: {
    '@arvinxu/foo': '<rootDir>/packages/foo/src',
    '@arvinxu/bar': '<rootDir>/packages/bar/src',
  },
};
