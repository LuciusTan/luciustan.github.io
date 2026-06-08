---
title: 给Unraid配置JDK环境
date: 2021-10-26 20:30:00
updated: 2021-10-26 22:30:00
tags:
  - 服务端
  - Unraid
categories:
  - 教程
keywords: 'Unraid'
description:
top_img:
comments:
cover: https://z3.ax1x.com/2021/10/30/5xIvCV.png
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

# 给Unraid配置JDK环境

### 1. 下载tar.gz的压缩包，以本文所选版本为例，[点击直达官网](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

![下载JDK](https://z3.ax1x.com/2021/10/30/5xoarQ.jpg)

### 2. 创建目录

在 appdata下新建java文件夹，将下载好的文件copy到该文件夹下

### 3. 将压缩文件解压到制定文件下

- 进入Unraid终端，进入/usr/local/ 查看是否存在java文件夹，若没有，则创建。
`mkdir java`
- 进入appdata下的java文件夹，运行以下指令解压
`tar -vzxf jdk-8u311-linux-x64.tar.gz -C /usr/local/java/`

### 添加环境变量，编辑配置文件

1. 编辑配置文件

```bash
vi /etc/profile

//在文件最下方添加
export JAVA_HOME=/usr/local/java/jdk1.8.0_161
export CLASSPATH=$CLASSPATH:$JAVA_HOME/lib/
export PATH=$PATH:$JAVA_HOME/bin
```

- :wq 保存退出

2. 重新加载配置文件

`source /etc/profile`

### 测试

```bash
//出现版本号即为成功
java -version
```

