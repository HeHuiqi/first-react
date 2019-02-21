/**
 * Created by mac on 16/7/14.
 */
var webpack = require('webpack');
var path = require('path');


module.exports = {
    mode: "development",
    //页面入口文件配置
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
    },
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, './dist'), // 输出的路径
        filename: 'bundle.js'
    },
    //配置这个可以直接使用在package.json文件中添加脚本命令
    //"start": "webpack-dev-server --config webpack/webpack.config.js"
    //然后使用 npm run start 即可开启服务一个8080端口的本地服务,页可以手动指定
    // devServer: {
    //     contentBase: path.join(__dirname, "./dist"), //网站的根目录为 根目录/dist，如果配置不对，会报Cannot GET /错误
    //     open: true,
    //     // port: 9000,
    //     // host: '127.0.0.1' //请在dos下，输入ipconfig可以找到当前电脑的ip
    // },
    module: {
        //加载器配置
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',

            },

            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/
            },

            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.png', '.js', '.json', '.scss']
    },
    //插件项
    plugins: [

    ],
};