const path = require('path');
const config = require('../../webpack.config');

module.exports = {
  ...config,
  entry: {
    foo: './src/index.tsx',
    'foo.min': './src/index.tsx',
  },
  output: {
    ...config.output,
    library: 'Foo',
    path: path.resolve(__dirname, 'dist'),
  },
};
