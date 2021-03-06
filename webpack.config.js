const path = require('path');
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

const umd = {
  output: {
    filename: 'index.js',
    library: 'WalletConnect',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist/umd')
  },
  node: {
    Buffer: true
  }
}

const esm = {
  output: {
    filename: 'index.js',
    library: 'WalletConnect',
    libraryTarget: 'var',
    path: path.resolve(__dirname, 'dist/esm')
  },
  plugins: [
    new EsmWebpackPlugin()
  ],
  node: {
    Buffer: true
  }
}

module.exports = [umd, esm]
