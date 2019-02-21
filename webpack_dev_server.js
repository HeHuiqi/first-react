var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
const path = require('path');
const host = '127.0.0.1';
const port = 5000;
new WebpackDevServer(webpack(config), {
    contentBase: config.output.path, //默认会以根文件夹提供本地服务器，这里指定文件夹
    hot: true,
    noInfo: false,
    historyApiFallback: true
}).listen(port, host, function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log(`Listening at http://${host}:${port}`);
});