---
title: 如何使用图形验证码
date: 2020-05-04 20:00:00
updated: 2020-05-04 22:00:00
permalink: 2020/05/07/image_verification_code/
tags: 
  - 前端
  - Form表单
categories:
  - 学习笔记
keywords: 'Form表单'
description:
top_img:
comments:
cover: https://z3.ax1x.com/2021/06/08/2sG5X4.jpg
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


# 如何在form表单中使用图形验证码

### 一、svg-capcha

```bash
npm install --save svg-capcha
```

```javascript
var svgcapcha = require('svg-capcha');

var c = svgcapcha.create();
// {data: '<svg.../svg>', text: 'abcd'}
````

详细请查看 WIKI: 
[NPM](https://www.npmjs.com/package/svg-captcha)
[GitHub](https://github.com/produck/svg-captcha/blob/HEAD/README_CN.md)
