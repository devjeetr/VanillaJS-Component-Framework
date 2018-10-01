var config = require('./webpack.config');
var nodeExternals = require("webpack-node-externals");

config.target = 'node';
config.externals = [nodeExternals()]
module.exports = config;