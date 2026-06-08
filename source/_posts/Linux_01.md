---
title: Linux常用操作指令
date: 2020-1-28 20:30:00
updated: 2020-1-28 20:30:00
tags:
  - Linux
categories:
  - 工具书
keywords: 'CentOS'
description:
top_img:
comments:
cover: https://z3.ax1x.com/2021/11/19/I7wA0J.png
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

# Linux常用操作指令

- 开启远程控制

```ssh -p 端口号 用户名@地址```

### 一、文档型(touch, cat, echo, rm, vi, cd)

```bash
mkdir xxx #创建xxx文件夹
touch xxx.txt #创建xxx的txt文件

echo ‘vvv’ >> xxx.txt #添加
echo ‘vvv’ > xxx.txt #替换

rm test.txt   #删除文件
rm -r testdir/ #删除目录

rm -rf 强制删除
```

### 二、硬件型: 磁盘/进程/服务/网络

```bash
docker ps #查找docker正在执行的进程

kill -9 id #杀死某一进程

service sshd status #查找正在运行的服务状态

service sshd restart #重启服务

systemctl status firewalld.service #查看防火墙状态
firewall-cmd --state #查看防火墙状态
firewall-cmd --list-all #查看端口
firewall-cmd --add-port=xxxx/tcp --zone=publish --permanent #永久放行xxxx端口
firewall-cmd --reload #重启防火墙
```

### 三、功能型: 压缩/解压, 下载, 远程

```bash
yum -y install wget #安装wget命令

wget https://mirrors.bfsu.edu.cn/apache/tomcat/jakartaee-migration/v1.0.0/binaries/jakartaee-migration-1.0.0-bin.tar.gz #下载

tar zxvf xxx.tar.gz #解压文件xxx.tar.gz z代表.gz结尾的压缩文件x代表解压缩v代表显示所有解压过程f使用名字 
tar zcvf xxx1.tar.gz xxx #压缩文件夹xxx命名为xxx1 z代表.gz结尾的压缩文件c代表压缩v代表显示所有解压过程f使用名字 
```

### 四、通用型

```bash
查看linux内核
[root@device ~]# lsb_release -a
[root@device ~]# uname -a

查看盘符使用情况
[root@device ~]# df -Th

根目录
[root@device ~]# cd /
查看文件夹 d目录r读w写x执行
[root@device /]# ls -la

l rwx用户权限 rwx组权限 rwx其他用户权限

home download等文件
etc 软件配置文件
sys 系统目录
usr 系统可执行文件
var 日志文件，www目录

内存、进程
[root@device /]# top

```