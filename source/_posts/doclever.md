---
title: 利用Docker搭建DOClever接口测试环境
date: 2020-5-15 14:30:00
updated: 2020-5-15 14:57:00
tags:
  - Docker
  - API开发
  - Mock数据
categories:
  - 教程
keywords: 'DOClever'
description:
top_img:
comments:
cover: https://z3.ax1x.com/2021/11/19/I7JMZt.png
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

# 搭建DOClever接口测试环境

> github地址直达：[点击进入](https://github.com/sx1989827/DOClever)

#### 一、利用 docker-compose 安装

1. 建立本地文件

```bash
cd /home/
mkdir doclever
vi docker-compose.yml
```
```bash
//docker-compose文件，修改路径及端口号, 本地路径以/srv/doclever为例
version: "2"
services:
  DOClever:
    image: lw96/doclever
    restart: always
    container_name: "DOClever"
    ports:
    - 10000:10000
    volumes:
    ## /srv/doclever/
    - /本地路径/file:/root/DOClever/data/file
    - /本地路径/img:/root/DOClever/data/img
    - /本地路径/tmp:/root/DOClever/data/tmp
    environment:
    - DB_HOST=mongodb://mongo:27017/DOClever
    - PORT=10000
    links:
    - mongo:mongo

  mongo:
    image: mongo:latest
    restart: always
    container_name: "mongodb"
    volumes:
    ## /srv/doclever/db:/data/db
    - /my/own/datadir:/data/db
```

2. 运行docker

```bash
docker-compose up -d
```

3. 关于docker-compose的配置和使用，[点击前往](https://docs.docker.com/compose/)

4. 放行端口

```bash
查看防火墙
firewall-cmd --state
查看端口
firewall-cmd --list-all
放行端口
firewall-cmd --add-port=xxxx/tcp --zone=public --permanent
重新加载
firewall-cmd --reload
```

#### 二、关于DOClever的使用

1. 管理后台初始账号密码：DOClever

2. 新建账号

3. 新建项目/管理分组/运行

#### 三、使用MOCK

1. 设置 - Mock - 下载net.js 

![使用方法](https://z3.ax1x.com/2021/11/19/I7Ufje.png)

#### 四、案例

##### Mock一个数据结构的接口

###### 任务要求：

1. 接口为GET请求。

2. 传递两个参数num与Page。传递参数num，num=3即返回data数据为3个，num为10，则返回10个。page传一个整数。

3. 数据结构与上图中一致。

4. 接口路径，即Api为“/lists”

5. 不限于接口测试类的工具，但是需要使用到Mock数据

###### 数据结构：
```javascript
{
  "status": 0,
  "data": [
    {
      "tid": "1",
      "title": "12154545",
      "catalog": "index",
      "fav": 20,
      "created": "1436864169",
      "isEnd": "0",
      "answer": "10",
      "user": {
        "avatar": "用户头像",
        "name": "用户昵称",
        "isVip": "1",
        "level": "4"
      }
    }
  ],
  "msg": "返回Mock数据"
}
```
###### 结果展示

![结果展示](https://z3.ax1x.com/2021/11/19/I7d0oR.gif)

###### 代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="http://mockjs.com/dist/mock.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
<body>
    <h1>这里是返回结果</h1>
    <div>
        页码：<input type="text" id="page">
        数量：<input type="text" id="number">
        <button type="button" id="btn">提交</button>
    </div>
    <pre id="result"></pre>
    <script type="text/javascript">

      const getParams = (url, key) => {
        //构造一个含有目标参数的正则表达式对象
        let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        //匹配目标参数
        let link = new URL(url)
        let r = link.search.substr(1).match(reg);
        //返回参数值
        if (r != null) {
          return decodeURI(r[2]);
        }
        return null;
      }

      $('#btn').click(function () {
        let page = $('#page').val() ? $('#page').val() : Math.floor(Math.random() * 10 + 1)
        let number = $('#number').val() ? $('#number').val() : Math.floor(Math.random() * 10 + 1)
        $.ajax({
          url: `http://localhost:36742/api/getlist?page=${page}&number=${number}`,
          type: 'get',
          dataType: 'json',
        }).done(function(data, status, xhr) {
          $('#result').html(JSON.stringify(data, null, 2))
        });
      })

      Mock.mock(RegExp('http://localhost:36742/api/getlist' + '.*'), 'get', function(options) {
        let page = getParams(options.url, 'page')
        let number = getParams(options.url, 'number')
        const random = Mock.Random
        return Mock.mock({
          'status': 0,
          'msg': '数据获取成功',
          [`data|${number}`]: [
            {
              'tid|+1': 1,
              'title': '@ctitle',
              'catalog': 'index',
              'created': '@datetime',
              'fav': '@integer(1000, 9999)',
              'isEnd': '@integer(0,1)',
              'answer': '@intrger',
              'user': {
                'avatar': random.image('48x48','@color'),
                'name': '@cname',
                'isVip': '@integer(0,1)',
                'level': '@integer(0,5)'
              }
            }
          ]
        });
      });
    </script>
</body>
</html>
```