---
title: Git常用命令及操作流程
date: 2020-03-04 20:00:00
updated: 2020-03-04 22:00:00
tags: 
  - Git
  - Github
categories:
  - 工具书
keywords: 'github, 仓库, git命令'
description:
top_img:
comments:
cover: https://z3.ax1x.com/2021/01/22/sI5E4O.jpg
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


# Git常用语句

### 1.init

- 初始化本地文件夹

```git init```

### 2.remote

- 初始化本地文件夹后，将该文件夹推到git

```git remote add origin git@github.comxxxx.git```

### 3.取消git

- 取消该文件夹与git的连接

```find . -name ".git" | xargs rm -Rf```

### 4.config

- 设置用户名

```git config --global user.name '用户名'```

- 设置邮箱

```git config --global user.email '邮箱'```

### 5.clone

- 克隆在线仓库至本地

```git clone 'GitHub仓库链接'```

### 6.add

- 添加文件 (直接后接文件或者用'.'表示所有update,或者使用git add --all)

```git add .```

### 7.commit

- 确定更改(description描述)

```git commit -m 'description'```

### 8.push

- 提交更改 origin 后面接分支名

```git push origin master```

### 9.pull

- 拉取更改

```git pull origin master```

### 10.branch

- 查看当前分支

```git branch```

### 11.diff

- 查看修改的内容,对比原文

```git diff```

### 12.checkout

- 创建一个dev分支 -b => branch

```git checkout -b dev```

- 切换至master分支

```git checkout master```

### 13.merge

- 合并dev中的update

```git merge dev```

### 14.ssh方法clone git项目

- 用ssh方法clone 仓库(mac)

```
ssh-keygen
pbcopy < ~/.ssh/id_rsa.pub
git设置里面添加复制的内容
git clone 仓库的git
```

### 15.tage与realease

- 创建tag并提交 release

```
git tag -a v0.0.1 -m 'description'
git push origin v0.0.1
```

### 16.拓展:

#### 将本地vue项目上传到git

1.创建一个本地vue项目

    
2.建立本地仓库、添加文件

2-1 输入命令 git init 初始化仓库
2-2 设置.gitignore文件
2-3 输入命令 git add . 将文件添加到仓库
2-4 输入命令 git commit -m '注释' 将文件提交到仓库
    
3.建立github仓库

在Gitbub上创建，输入Repository Name、description
 
4.关联github仓库

4-1 复制仓库地址 http://......git
4-2 将本地仓库与github仓库关联，输入指令 git remote add origin http://......git
4-3 按需输入github账户密码

5.上传本地项目

输入指令 git push -u origin master

6.github刷新查看



    


