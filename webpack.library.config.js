const config = require('./webpack.config');

config.entry = './src/js/Component/index.js';
config.output = {
  library: 'component-lib',
  filename: 'component-lib.js',
  libraryTarget: 'commonjs2',
  
};

module.exports = config;
