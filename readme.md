# vue-ssr-demo

## 项目目录

````c
├── build
├── public
├── server
│   └── client
│       ├── css
│       └── js
└── src
    ├── assets
    ├── components
    └── routes
````

## 技术栈

webpack-vue-vue-router

## 使用：

1. npm run build 打包生成客户端代码,默认目录/server/client
2. npm run server 打包生成服务端代码,默认目录/server/server.bundle.js
3. 目前使用方式仍比较原始，需要将将/server/client/index.html中的`<div id="app"></div>`替换成 /server/index.js中生成的`html内容`
4. npm start 开启项目，将看到项目效果，默认端口号9999

## 目前demo仍比较简陋

1. 项目工程化不够彻底
2. demo不包含ajax数据的获取
