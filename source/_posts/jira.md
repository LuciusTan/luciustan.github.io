---
title: 基于Unraid Docker搭建Jira缺陷管理服务器
date: 2021-10-26 20:00:00
updated: 2021-10-26 22:00:00
tags:
  - 服务端
  - 缺陷控制
  - Docker
categories:
  - 教程
keywords: 'Unraid'
description:
top_img:
comments:
cover: https://z3.ax1x.com/2021/10/30/5xUJ1O.jpg
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

# 基于Unraid Docker搭建Jira缺陷管理服务器

> 转载说明：本文对以下教程有所借鉴，请点击链接查看 [虫子个人博客](https://wqblogs.com/2021/01/15/jira部署/)

### 一、准备工作

1. Unraid服务器一台

2. atlassian-agent.jar 文件，[点击跳转下载地址](https://gitee.com/pengzhile/atlassian-agent/releases)

3. jira系统的mysql驱动（针对mysql 8.0以上版本，5.7版本可不需要），[点击跳转下载地址](https://downloads.mysql.com/archives/c-j/), 选择以下选项：

![驱动下载](https://z3.ax1x.com/2021/10/30/5x0Bqg.jpg)

### 二、jira 镜像准备（以参考教程的8.14版本为例）

1. 进入Unraid系统终端，可用docker images指令查看拉取的镜像

`docker pull atlassian/jira-sofeware:8.14`

2. 在Unraid的appdata目录新建名为atlassian的文件夹

3. 将下载的atlassian-agent.jar文件和驱动文件复制进去

4. 打开记事本新建Dockerfile文件，输入以下内容，保存为文件名为Dockerfile，不带格式后缀(方便新手操作，此步也可在终端进行)
```bash
FROM atlassian/jira-software:8.14

COPY atlassian-agent.jar /opt/atlassian/jira/

RUN echo 'export CATALINA_OPTS="-javaagent:/opt/atlassian/jira/atlassian-agent.jar ${CATALINA_OPTS}"' >> /opt/atlassian/jira/bin/setenv.sh
```

![准备结果展示](https://z3.ax1x.com/2021/10/30/5xrToQ.png)

5. 打开Unraid终端，进入刚刚建好的atlassian目录，构建jira镜像

- 目录地址：/mnt/user/appdata/atlassian
`docker build -t myjira/jira-software:8.14 .`

- 完成后使用 docker images指令可看到名为myjira/jira-software，tag为8.14的docker镜像

### 三、MySql数据库准备和配置

1. Unraid的Apps里面搜索Mysql，选择官方镜像，安装到Unraid里

![数据库准备](https://z3.ax1x.com/2021/10/30/5xy9nf.jpg)

2. 进入终端, 进入数据库操作

`docker exec -it mysql /bin/bash`

3. 进入数据库目录，修改数据库配置文件 my.cnf

- 文件地址一般在 /etc/mysql

`vi /etc/mysql/my.cnf`

- 末尾加入以下内容

```bash
character_set_server = utf8mb4
innodb_default_row_format = DYNAMIC
innodb_log_file_size = 2G
sql_mode = NO_AUTO_VALUE_ON_ZERO

[mysql]
default-character-set = utf8mb4

[client]
default-character-set = utf8mb4
```
- 如图所示，完成后:wq保存退出
![数据库配置文件](https://z3.ax1x.com/2021/10/30/5xct0K.png)

4. Unraid Docker界面操作重启mysql

> 注意：如果无法使用vi命令, 在数据库文件夹下依次按照以下方法：

```bash
apt-get update

apt-get install vim
```

5. 创建jira系统用户与数据库

```bash
//进入数据库
docker exec -it mysql /bin/bash
//进入管理
mysql -u root -p
//输入密码
```

```bash
//依次执行
mysql> CREATE DATABASE jiradb CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
mysql> CREATE USER 'jira'@'%' IDENTIFIED BY 'jira';
mysql> GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,REFERENCES,ALTER,INDEX on jiradb.* TO 'jira'@'%';
mysql> flush privileges;
```

### 四、创建jira docker容器


1. 先在apps里面搜索jira-software的docker，点击安装会生成模板，按照如下所示修改模板

![创建jira容器](https://z3.ax1x.com/2021/10/30/5x2ToT.jpg)

2. 进入Unraid终端，给jira打数据库驱动

```bash
//1. 进入atlassian文件夹 
cd /mnt/user/appdata/atlassian
//2. 拷贝驱动文件
docker cp mysql-connector-java-8.0.26.jar jira:/opt/atlassian/jira/lib
//3. 重启jira容器
docker restart jira
```

### 五、jira web配置

#### （1）打开unraid服务器地址+设置的jira端口访问jira web页面

- 选择中文和自选设置

![选择语言](https://z3.ax1x.com/2021/10/30/5xW34O.png)

#### （2）配置数据库并测试连接

![数据库配置](https://z3.ax1x.com/2021/10/30/5xfUWF.png)

- 完成测试点击下一步，然后等待，提示说1分钟完成，实测等待时间巨长，请耐心等待

#### （3）获取授权

- 出现如下页面

![授权](https://z3.ax1x.com/2021/10/30/5xhemR.png)

1. 复制红框内你的服务器ID，如：AAAA-BBBB-CCCC-DDDD
2. 打开unraid终端，进入atlassian文件夹
3. 执行如下命令，如果提示无法运行java指令可参照此教程：[点击前往](/2021/10/26/unraid_java/)

```bash
//将123@abc.com 替换为你的邮箱
//将http://192.168.1.1:8080/替换为你的jira地址
//将AAAA-BBBB-CCCC-DDDD替换为你的ID
java -jar atlassian-agent.jar \
    -d -m 123@abc.com -n DEV -p jira \
    -o http://192.168.1.1:8080/ -s AAAA-BBBB-CCCC-DDDD
```

- 你会得到以下结果

```bash
====================================================
=======        Atlassian Crack Agent         =======
=======           https://zhile.io           =======
=======          QQ Group: 30347511          =======
====================================================

Your license code(Don't copy this line!!!):

fsdfdsQ0ODAoPeJyNkltvm0AQhd/5FUh93jXrCqweqekJIutKIFuwqOqwewqdnDi/vosqwei6WV
YmXRXPOfHqweqweqeQymUzl/mLibdgU5fna3fsjZnziACqrJsGkKayAKVhfWpgKQ4Q8lWWxfc8u
UsdjiCMrFUkDISdkHiMsJlzRRKBLlA2nSp8UJU8SAM7t+oF7vbksdfsfgvZSyAiprJxNSGVBCF
RA/NxJPQ7d5QLwb+zm/JYpXyngne+tlmmTJOo6cZXvYAq72DxpQh4S9wl3xarDetYWh3YPoem+eB
AL9ZHSlVhRqweMK7LN/+vyK3VIKDnRr70iGejW3cDTd28nb7L8ZzSXwUVXteRrgXlR7sPxqt8
FEoqfu6LmkbNGM+ZYFP/RkdT+eLuTf3Rg6vlbGwsQ2/Cp9A/mkVLeHW7uG5qOp2R4v60Le4HMt/D
pobgR1cjzvfgtgerCNInyeElS5jPPD4Ipm3r+5N2iL91WDngEtPKvP++/E86TgNxsWEBYNuGXTvrzs
fxqsSiFho8H/VZ8jrNBqYfxLGh4AXZI8MwYxZu/MDEraDAsAhRSj05h4SNNiYw3KTM1pV2N1P6zo
QIUHlNSQqah665emljsdffede=qweeq
```

4. 将生成的许可证复制到页面，完成

![完成](https://z3.ax1x.com/2021/10/30/5x462D.png)

### 本文仅供个人测试学习使用，请勿商用，如需使用请购买正版！！！

