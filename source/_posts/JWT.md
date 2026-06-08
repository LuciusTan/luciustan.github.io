---
title: JWT登录鉴权
date: 2020-6-3 14:30:00
updated: 2020-6-4 19:02:00
tags:
  - 前端
  - 服务端
categories:
  - 学习笔记
keywords: 'JWT, 登录鉴权'
description:
top_img:
comments:
cover: https://z3.ax1x.com/2021/11/22/oSJHG4.jpg
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

# JWT登录鉴权

> 地址直达：[点击进入](https://jwt.io/)

### 一、JWT特点
1. 防CSRF(主要是伪造请求，带上cookie)
2. 适合移动应用
3. 无状态，编码数据

### 二、工作原理

1. 客户端 - (POST请求/login) - 服务端
2. 服务端 - (验证通过，返回Token) - 客户端
3. 客户端 - (Header带Token请求) - 服务端
4. 服务端 - (验证通过，返回data) - 客户端

> 没有绝对的安全
 
1. 加密通信信道：使用HTTPS
2. 通信数据加密：密文+加密关键数据
3. 服务端存储Secret, 动态Secret
4. 设置短期的Token有效，设置刷新Token
5. 通信安全策略：授权中间层、尝试次数、过期策略...