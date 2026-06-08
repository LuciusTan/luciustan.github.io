---
title: Koa学习记录
date: 2020-03-02 20:00:00
updated: 2020-03-03 10:00:00
tags: 
  - Koa
  - API开发
categories:
  - 学习笔记
keywords: '中间件, API开发, koa'
description:
top_img:
comments:
cover: https://z3.ax1x.com/2021/01/22/sI2TPJ.jpg
toc:
toc_number:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
---

# Koa学习记录

### Koa 介绍

[官网直达](https://koa.bootcss.com/)

#### 一、Koa 简介

Koa 是一个新的web 框架，致力于成为web应用和API 开发领域中的一个更小、更富有表现力、更壮的基石。

##### 1.功能

利用async 函数丢弃回调函数，并增强错误处理。Koa 没有任何预制的中间件，可快速的编写服务端应用程序。

##### 2.核心概念

(1) 应用
(2) 请求
(3) 上下文
(4) 响应

##### 3.特点

(1) 轻量/简洁

(2) async/await 支持
语法糖，本质上还是异步执行，看上去像是同步执行。
```javascript
router.get('/async', async (ctx) => {
  let result = await new Promise((resolve) => {
    setTimeout(function() {
      resolve('hello world 2s later!')
    },2000)
  })
  ctx.body = result
})
```


#### 二、Koa 使用

##### 1.安装

```npm install -S koa```
> 版本依赖：nodejs > v7.6.0

```javascript
const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = 'hello koa'
})

app.listen(3000)
```

```node index.js执行```

##### 2.koa中间件

koa的工作原理：

洋葱模型 
request：先进先出
response：先进后出

在中间件内使用 next(), 可跳到下一个中间件，等所有跳转完毕之后，再按先进后出的原则执行next()下面的内容。

##### 3.常用插件（重点）

(1) 路由
```npm install -S koa-router```

```javascript
//...
const Router = require('koa-router')
const router = new Router()

router.get('/', ctx => {
  console.log(ctx.request)
  ctx.body = 'hello koa rouder'
})

router.get('/api', ctx => {
  console.log(ctx.request)
  ctx.body = 'hello koa rouder in api path'
})


app.use(router.routers())
.use(router.allowedMethods())
//...
```

(2) 跨域处理
```npm install -S @koa/cors```

```javascript
//添加路由前缀
router.prefix('/api')

//跨域
app.use(cors())
```

(3) 压缩
```koa-compress```

(4) 静态资源
```koa-static```

```javascript
const statics = require('koa-static')
const path = require('path')
const router = require('routers/routers')

app.use(statics(path.join(__dirname, '../public')))
```

(5) 协议处理

```npm install -S koa-json koa-body```

```javascript
//...
const koaBody = require('koa-body')
const json = require('koa-json')

router.post('/post', async (ctx) => {
  let {body} = ctx.request
  console.log(body)
  console.log(ctx.request)
  ctx.body = {
    //扩展运算符
    ...body
  }
})

//...
app.use(kaoBody())
app.use(json({pretty:false, param:'pretty'}))
//localhost:3000/api?a=b&c=d&pretty
```

(6) 安全
1.鉴权方式
```koa-session koa-jwt```

2.通信头
安全头部信息
```koa-helmet```

```javascript
const helmet = require('koa-helmet')
app.use(helmet())
```

(7) 日志
```koa-logger```

##### 4.常用API
```app.use```

```app.listen```

```app.on```

#### 三、Koa 路由进阶配置

1. 按照功能模块进行区分
2. 路由压缩 koa-combine-routers
3. 静态资源 koa-static

#### 三、Koa 配置开发热加载ES6语法支持&webpack配置

**node监视服务**
```npm install -D nodemon```

```npm install -D webpack@4 webpack-cli@3```

```npm install -D clean-webpack-plugin webpack-node-externals @babel/core @babel/node @babel/preset-env babel-loader cross-env```

> windows 下@babel/node 与@babel/core 要全局安装，否则运行npx nodemon --exec babel-node src/index.js时会报错

> 需要创建.babelrc 文件

```javascript
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
```
webpack.config.js 配置文件如下：
```javascript
const path = require('path')
const nodeExcternals = require('webpack-node-externals')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const webpackconfig = {
  target: 'node',
  mode: 'development',
  entry: {
    server: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, './dist')
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname,'/node_modules')]
      }
    ]
  },
  externals: [nodeExcternals()],
  plugins: [
    new CleanWebpackPlugin()
  ],
  node: {
    console: true,
    global: true,
    process:true,
    Buffer:true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path:true
  }
}

module.exports = webpackconfig
```
package.jsson里面script添加以下后，可用 npm run start 运行

`"start": "npx nodemon --exec babel-node src/index.js"`

**node方式调试webpack**
`node --inspect-brk ./node-modules/.bin/webpack --inline --progress`

打开chrome
输入chrome://inspect/
点击 inspect

可添加到package.json里面

**优化webpack配置，npm构建脚本**

1. 更新依赖包过程：
```npm install -g npm-check-updates```

运行ncu 查看是否有安装包需要更新
运行ncu -u 更新
rm -rf node_modules/ 删除node_modules文件夹
使用npm i 安装依赖包

2. 使用koa-compose 整合中间件
```npm install -S koa-compose```

```javascript
//使用koa-compose打包中间件
const middleware = compose([
  helmet(),
  koaBody(),
  statics(path.join(__dirname, '../public')),
  cors(),
  jsonuntil({pretty:false,param:'pretty'})
])

// const router = require('./routers/routers')

// app.use(helmet())
// app.use(statics(path.join(__dirname, '../public')))

app.use(middleware)
```

3. webpack不同环境下配置文件
**Step1: webpack.config.base.js**
```javascript
const path = require('path')
const webpack = require('webpack')
const nodeExcternals = require('webpack-node-externals')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

const webpackconfig = {
  target: 'node',
  entry: {
    server: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname,'/node_modules')]
      }
    ]
  },
  externals: [nodeExcternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: (process.env.NODE_ENV === 'productiion' || process.env.NODE_ENV ==='prod')? "'production'": "'development'"
      }
    })
  ],
  node: {
    console: true,
    global: true,
    process:true,
    Buffer:true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path:true
  }
}

module.exports = webpackconfig
```

**Step2: webpack.config.dev.js**
```npm install -D webpack-merge```
```javascript
const webpackMerge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')

const webpackconfig = webpackMerge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  status: {children:false}
})

module.exports = webpackconfig
```

**Step3: webpack.config.prod.js**
```npm install terser-webpack-plugin --save-dev``` 

```javascript
const webpackMerge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')
const TerserWebpackPlugin = require('terse-webpack-plugin')
const { output } = require('./webpack.config.base')

const webpackconfig = webpackMerge(baseWebpackConfig, {
  mode: 'production',
  status: {children:false, warnings: false},
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
        warnings:false,
        compress:{
          warnings:false,
          drop_console:false,
          dead_code:true,
          drop_debugger: true,
        },
        output: {
        comments:false,
        beautify:false,
        },
        mangle:true,
      },
      parallel: true,
      sourcemap: false,
    })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks:3,
          enforce: true
        }
      }
    }
  }
})

module.exports = webpackconfig
```

**Step4: 调整package.json的脚本**
```npm install -D cross-env```

