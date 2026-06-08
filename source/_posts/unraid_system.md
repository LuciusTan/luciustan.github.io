---
title: Unraid系统使用问题记录
date: 2021-07-26 20:30:00
updated: 2021-07-26 22:30:00
tags:
  - 服务端
  - Unraid
categories:
  - 学习笔记
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

# Unraid系统使用问题记录

### 一、Plex如何配置集显直通，实现硬解（CPU需要带核显）

```bash
#在终端中配置开启核显及设置开机启动
#1. 开启方式
modprobe i915

ls /dev/dri
#显示 renderD128即为成功

#2. 配置默认启动，修改go文件
cd /boot/config
vi go

#将 modprobe i915添加到最后一行，保存退出
```


### 二、网卡直通

#### 1. 如有两个或多个网卡，先进入 工具 - 系统设备，查看编号，如[8082:12c6]

#### 2. 进入flash盘，修改Syslinux配置，在Urnaid OS 内第二行append后面添加 vfio-pci.ids=8082:12c6

#### 3. 如要使unraid开机不读取多个设备，编号之间用 ','隔开。


> 持续更新中。。。。。。