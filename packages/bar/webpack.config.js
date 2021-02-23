const path = require('path');
const config = require('../../webpack.config');

module.exports = {
  ...config,
  entry: {
    bar: './src/index.tsx',
    'bar.min': './src/index.tsx',
  },
  output: {
    ...config.output,
    library: 'Bar',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@arvinxu/foo': path.resolve(__dirname, '../foo'),
    },
  },
};
