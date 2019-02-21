# React+Webpack开发环境

## 项目准备
项目需要NodeJs环境支持请自行安装，安装完成后开始下面的步骤

```
#创建项目
cd $HOME/Desktop
mkdir first-react
cd first-react
npm init
#在根目录下创建webpack.config.js和.babelrc
touch webpack.config.js .babelrc

```
## 安装相应的依赖包
根据一下package.json文件的内容自行安装项目依赖和开发依赖

```
#安装示例 
#--save-表示保存安装清单到package.json文件文件中的"dependencies":{}配置选项
#--save-dev 保存安装清单到package.json文件的"devDependencies":{}配置选项
#-g表示全局安装，请自行选择
npm install --save react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server

```
## package.json文件内容
```

{
  "name": "first-react",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.config.js",
    "dev": "node webpack_dev_server.js",
    "start": "webpack-dev-server --config webpack.config.js"
  },
  "author": "hhq",
  "license": "ISC",
  "dependencies": {
    "react": "^16.8.2",
    "react-dom": "^16.8.2"
  },
  "devDependencies": {
    "babel": "^6.23.0",
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "clean-webpack-plugin": "^1.0.1",
    "css-loader": "^2.1.0",
    "extract-text-webpack-plugin": "^3.0.2",
    "html-webpack-plugin": "^3.2.0",
    "jsx-loader": "^0.13.2",
    "style-loader": "^0.23.1",
    "webpack": "^4.29.5",
    "webpack-cli": "^3.2.3",
    "webpack-dev-server": "^3.1.14"
  }
}

```
## .babelrc文件的配置如下

```
{
  "presets": [
    "env",
    "es2015",
    "react",
    "stage-0"
  ]
}
```

## webpack.config.js的配置和内容实例

```
#webpack.config.js文件内容
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

```
## 打包和预览
* 打包编译
```
webpack --config webpack.config.js

```
* 开启服务预览，以下二选一,也可以在package.json文件进行配置如上
```
#1默认开启8080端口服务
webpack-dev-server --config webpack.config.js

#2开启自己写的服务
node webpack_dev_server.js

```

## 示例Demo
[first-react](https://github.com/HeHuiqi/first-react.git)