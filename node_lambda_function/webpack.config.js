var path = require('path');
//var night = require('./nightwatch.conf.js');
//console.log(night)
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  target: 'node',
  
};
