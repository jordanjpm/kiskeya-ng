const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
  },
  devServer: {
    contentBase: path.join(__dirname, ''),
    port: 4200
  },
  plugins: [
  ],
  output: {
  }
};
