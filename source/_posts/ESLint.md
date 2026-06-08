---
title: 代码质量管理 - ESLint
date: 2020-6-5 14:31:32
updated: 2020-6-6 13:45:34
tags:
  - 前端
  - 缺陷控制
categories:
  - 学习笔记
keywords: 'ESLint, 代码质量'
description:
top_img:
comments:
cover: https://z3.ax1x.com/2021/12/02/oYJeaD.png
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

# 代码质量管理 - ESLint

> [官网直达](https://eslint.bootcss.com/docs/user-guide/getting-started)

## 安装

可以使用npm安装ESlint：

`npm install eslint --save-dev`

紧接着设置配置文件

`./node_modules/.bin/eslint --init`

之后，可以在任何文件或目录运行ESLint

`./node_modules/.bin/eslint yourfile.js`

也可以在全局而不是本地安装ESLint (使用 `npm install eslint --global`)

## 初始化

`npm install -D eslint`

生成.eslintrc.js文件（注意优先级）

`npx eslint --init`

配置文件基本概念：env、extends、globals、rules等

## 规则及配置方法

> [配置直达](https://eslint.bootcss.com/docs/user-guide/configuring)

- 规则分三种等级：off(0)关闭、warn(1)警告、error(2)强制
- 在ESlint配置文件中配置rules，对应不同类型的规则
- 在行内书写规则，需要写在`/* eslint ...*/`

## 配合IDE进行使用

### VSCODE

商店搜索ESLint插件

项目安装 VS 全局安装

VSCODE设置Autofix自动修复

使用Sync插件同步Gist快速配置

gist: 3defb19cd4f9b9d4f12d85dd74117de8

### WebStorm

已经集成插件

webstorm不建议关闭eslint

Webstorm使用全文修复  
