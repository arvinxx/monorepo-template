const base = require('../../jest.config.base');

const packageName = '@arvinxu/foo';

const root = '<rootDir>/packages/foo';

module.exports = {
  ...base,
  rootDir: '../..',
  roots: [root],
  name: packageName,
  displayName: packageName,
};
