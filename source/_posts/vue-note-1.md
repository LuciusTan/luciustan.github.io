---
title: Vue基础知识梳理
date: 2020-03-08 20:00:00
updated: 2020-08-05 22:00:00
tags: 
  - 前端
  - 框架
  - VUE
categories:
  - 学习笔记
keywords: '前端框架, vue, javascript'
description:
top_img:
comments:
cover: https://z3.ax1x.com/2021/01/22/sIWj4e.jpg
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


# Vue基础知识梳理

[官网直达](https://cn.vuejs.org/)

[项目直达](https://github.com/LuciusTan/vue-project)

### vue-cli入门

#### 一、安装

MAC系统：
```sudo npm install -g @vue/cli```
```sudo npm install -g @vue/cli-service-globle```

#### 二、初始化项目

```vue create xxx```

```bash
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 3.x (Preview)
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Standard
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
```

- 将以上设置存为 es6-sass-lint_standard

- 建立其他项目时，vue create xxx preset, 可以选择es6-sass-lint_standard

- cat ~/.vuerc 可以打开预设的es6-sass-lint_standard 文件

```vue ui```
- 图形操作创建项目

```npm run server```
- 运行项目

- 如何配置vue工程项目中的webpack? 在根目录新建vue.config.js

```vue inspect > output.js```
- 将webpack配置输出到output.js文件

#### 三、调试

1.VSCODE

Debugger for Chrome 安装此插件

```javascript
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [

        {
            "type": "chrome",
            "request": "launch",
            "name": "vue debugger in chrome",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}/src",
            "breakOnLoad": false,
            "sourceMapPathOverrides": {
                "webpack:///src/*": "${webRoot}/*",
                "webpack:///./*": "${webRoot}/*"
            }
        }
    ]
}
```
2.CHROME 插件