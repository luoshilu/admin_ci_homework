# admin_ci

该作业基于 vue 2.6 版本进行开发，涉及的主要工具有：

**相关技术**：
- vue-cli3.0
- eslint
- jest
- webpack
- scss

**开发环境**：

- windows10
- node
- vscode

## 安装依赖

客户端：
> yarn install

mock server: 
> cd mock-server && yarn install

## 启动

### 开发环境

客户端：
> npm run serve

mock server: 
> cd mock-server && npm start

### 单元测试

> npm run test

### 生产构建

> npm run build

## 完成度以及需完善的地方

基本功能已全部完成，其他需要改进的地方有：

1. 不同设备屏幕的适配问题
由于使用像素单位限制了主内容区的宽度，若显示器屏幕过小，会导致不能在首屏内完整展现

2. 兼容性问题
项目中使用了一些低版本以及 IE 浏览器不支持的css属性。

3. 未对所有的模块进行单元测试
目前只针对一个 components 进行了单元测试。


