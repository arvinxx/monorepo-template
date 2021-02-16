const base = require('../../.babelrc');

module.exports = {
  ...base,
  plugins: [
    ...base.plugins,
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@arvinxu/modules-foo': './src',
        },
      },
    ],
  ],
};
