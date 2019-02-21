# webpack Error: Cannot find module '@babel/preset-env' 类似错误解决

在使用Webpack打包可能会遇到下面的错误
webapck版本^4.29.5
```
Error: Cannot find module '@babel/preset-env'
Cannot find module '@babel/core' (While processing preset...)

```
一般情况下，我们的babel相关库安装配置如下
package.json文件devDependencies配置
```
    "babel": "^6.23.0",
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
```
.babelrc配置文件
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
因为bable的升级要统一改成如下配置即可
```
    "babel": "^6.23.0",
    "@babel/cli": "^6.26.0",
    "@babel/core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "@babel/preset-env": "^7.3.1",
    "@babel/preset-es2015": "^6.24.1",
    "@babel/preset-react": "^7.0.0",
    "@babel/preset-stage-0": "^6.24.1",
```
升级后.babelrc配置文件
```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-es2015",
    "@babel/preset-react",
    "@babel/preset-stage-0"
  ]
}
```
该完成后执行重新安装
```
npm install

```