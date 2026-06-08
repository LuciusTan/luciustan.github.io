---
title: NoSQL的设计与集成 - MongoDB/Redis
date: 2020-06-01 20:00:00
updated: 2020-06-02 22:00:00
tags:
  - 数据库
  - NoSQL
  - MongoDB
  - Redis
categories:
  - 学习笔记
keywords: '数据库'
description:
top_img:
comments:
cover: https://z3.ax1x.com/2021/06/09/2shyz8.jpg
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

# NoSQL的设计与集成 - MongoDB/Redis

> NoSQL的意义 - 易扩展，高性能，高可用，较容易映射复杂数据(key-value) - 无事务特性要求(ACID特性)

## 一、数据库相关概念
* 关系型数据库，是指采用了关系模型来组织数据的数据库
* NoSQL是对不同于传统的关系数据库的数据库管理系统的统称

## 二、NoSQL设计
* 常见场景及设计方法（内嵌，父/子引用，反范式）
* 双向关联的场景及设计原则
### 1.什么是内嵌
> 内嵌是指存在关联关系的文档，放在同一文档中，以数组的形式存放。  
* 减少了关联查询
* 适合于单类需要描述的属性
* 不经常变化的属性（扩展，嵌套关联）
### 2.什么是父引用
> 父引用是指存在一对多的情况中，放在同一文档中，以数组的形式存放  
### 3.什么是子引用
> 子引用是指存在一对非常多的情况中，由于数据库文档存放限制，这个时候进行反向引用  
### 4.什么是反范式
> 范式是指按既定的用法，范式就是一种公认的模型或模式。  
* 是否有提升性能区间
* 数据量的变化是否非常庞大
* 先考虑读写比，才考虑反范式
### 5.设计原则
* 优先考虑内嵌，如果单独访问，则不适合
* 数组不应该无限制增长
* 考虑读写比，考虑反范式，考虑应用场景

## 三、MongoDB简介&安装
点击前往：[官方网站](https://www.mongodb.com/)

### (一) 通过docker安装

hub.docker.com/_/mongo

#### 1.创建docker-compose.yml文件

路径：__home_mongotest/docker-compose.yml_

```bash
version: "3.1"
services: 

    mongo:
        image: mongo
        restart: always
        environment: 
            MONGO_INITDB_ROOT_USERNAME: root
            MONGO_INITDB_ROOT_PASSWORD: example
        ports: 
            - 27017:27017
        volumes: 
            - /home/mongotest:/data/db
```

`docker-compose up -d`

#### 2.设置防火墙放行端口
`firewall-cmd --zone=public --add-port=27017/tcp --permanent`

#### 3.查看正在运行的mongo服务

找到运行的mongo服务的名称，如mongodb

`docker ps | grep mongo`

#### 4.进入MongoDB操作
`docker exec -it mongodb mongo`

#### 5.常用操作命令

查看role, 选择role, 创建role, 登录, 添加数据，查询数据，更新数据，删除数据 - 详情请查看官方文档

```bash
show dbs
use admin
db.createUser({user:’test’,pwd:’123456’,roles:[{role:’dbOwner’,db:’testdb’}]})
db.auth(‘test’,’123456’)
db.users.insertOne({name:’xiaoming’, age: 33})
db.users.find({})
db.users.updateOne({name:’xiaoming’},{$set:{email:’xiaoming@gmail.com’}})
db.users.deleteOne({name:’xiaoming’})
```

### (二) MongoDB的GUI工具

点击前往：[Robo 3T](https://robomongo.org/)

### (三) MongoDB的备份与恢复

#### 1.备份

备份到tmp目录下的test文件夹中

`docker exec -it mongodb mongodump -h localhost -u root -p example -o /tmp/test`

将镜像中的数据拷贝到数组机

`docker cp a56323b9846e:/tmp/test /tmp/test`


#### 2.恢复

`docker exec -it mongodbtest_mongo_1 mongorestore -h localhost -u root -p example --dir /tmp/test`

### (四) Mongoose使用简介

#### 1. nodejs环境简单使用方法

`npm install -S mongoose`

```javascript
//app.js
const mongoose = require('mongoose')
mongoose.connect('mongodb://test:123456@[your ip address]:27017/testdb', {useNewUrlParser: true,useUnifiedTopology: true})

const User = mongoose.model('users',{ name: String, age: Number, email: String})

const  xiaogang = new User({
    name: 'xiaogang',
    age: 20,
    email: 'xiaogang@qq.com'
})

xiaogang.save().then(() => {
    console.log('save ok')
})
```

`node app.js`

## 四、Redis认知与必备CLI命令

### (一) Redis简介&安装

1. Redis简介

BSD协议，高性能key-value数据库

支持数据持久化，多数据结构list, set, zset, hash等的存储，支持数据备份，支持事务，数据的原子性（要么不做/全做）

> 应用场景 - 缓存（读取性能优异）/ 计数&消息系统（高并发、发布/订阅阻塞队列功能）/ 分布式会话session&分布式锁（秒杀）

* Redis vs mongo
    * 存储方式不一样：key-value vs document
    * 使用方式&可靠性不一样 MongoDB SQL & ACID支持
    * 应用场景不一样 高性能缓存&海量数据分析

2. Redis的安装 - 推荐docker

* docker-compose.yml - 推荐

```bash
version: '3'
services:
    redis-test:
        image: 'redis'
        restart: always
        container_name: 'redis-test'
        ports:
            - 15001:6379
        volumes:
            - /home/redistest:/data
        command: ["redis-server", "--requirepass", "123456"]
```

* 使用docker run命令

` docker run -itd --restart=always --name redis-test1 -p 15002:6379 -v /home/redistest1:/data redis redis-server --requirepass 123456 `

* 检查运行状态

`docker logs -f redis-test`

### (二) Redis命令行

1. 使用Redis

* Redis-cli

    * [Redis 命令参考](https://doc.redisfans.com)

    * 登录方式1 - 会提示明文密码不安全，测试用
    `docker exec -it redis-test redis-cli -h 127.0.0.1 -a 123456`

    * 登录方式2：进入Redis交互终端

    ```bash
    docker exec -it redis-test /bin/bash
    redis-cli
    # UTH命令，输入密码进行登录，也可以使用CONFIG SET 命令修改密码
    auth 123456
    ```
    * quit命令退出Redis交互，再输入exit退出镜像

    * SELECT命令，切换至制定的数据库，数据库索引号index用数字值指定，以0作为起始索引值。
    ```bash
    select 0
    set name no1
    get name 
    select 1
    ```

    * INCR/DECR 操作递增递减

    * keys pattern

    ```bash
    # 匹配test开头的所有
    keys test*
    ```

    * exists key - 检查给定的key是否存在，可接多个键值

    * del 删除键值

    * expire rename setbit setex 等

    * Hash HSET/HGET/HMSET/HMGET/HDEL/HGETALL
    ```bash
    hset xiaoming name xiaoming
    hset xiaoming email xiaoming@qq.com
    hget xiaoming name
    hget xiaoming email
    hmget xiaoming1 name age
    ```

    * List 
    ```bash
    LPOP -> shift ->从队首移出1个元素
    LPUSH -> unshift -> 从队首插入1个元素
    RPUSH -> push -> 从队尾插入1个元素
    RPOP -> pop -> 从阶段性移出1个元素
    LPUSHX
    RPUSHX
    ```

    * 发布和订阅
    ```bash
    SUBSCRIBE channel[channel ...]
    PUBLISH channel message
    ```
    
    * server相关命令
    ```bash
    client list
    client kill 127.0.0.1:1234
    slowlog
    flushdb
    flushall - 慎用
    ```

    * 备份和恢复
    ```bash
    //备份
    save 
    bgsave

    //恢复
    CONFIG get dir
    quit 
    docker exec -it redis-test /bin/bash
    ls //有一个dump.rdb文件，将该文件挪至data目录下，再重启，即可恢复数据
    ```


### (三) Redis GUI工具

AnotherRedisDesktopManager - 自用推荐

### (四) Redis Nodej集成

[github地址](https://www.github.com/NodeRedis/node_redis)
[NPM地址](https://npmjs.com/package/redis)

```javascript
//基本设置
var redis = require("redis")
    client = redis.createClient();

client.on('error', (err)=> {
    console.log("error" + err)
})

client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies){
    console.log(replies.length + "replies:");
    replies.forEach(function(reply, i){
        console.log("   " + i + ": " + reply)
    });
    client.quit();
})
```

```javascript
//增加数据
const setValue = (key, value) => {
    if (typeof value === 'undefined' || typeof value === null || typeof value === '') {
        return
    }
    if (typeof value === 'string') {
        client.set(key, value)
    } else if (typeof value === 'object') {
        Object.keys(value).forEach((item) => {
            client.hset(key, item, value[item], redis.print)
        })
    }
}
// V8 Promisify method use util, must node > 8
const { promisify } = require('util')
const getAsync = promisify(client.get).bind(client)
```

```javascript
//查找方法
const getValue = (key) => {
    return getAsync(key)
}


const getHValue = (key) => {
    return promisify(client.hgetall).bind(client)(key)
}
``` 

#### BlueBird Promises

`npm install bluebird -S`

```javascript
import { promisifyAll } from 'bluebird'

const client = promisifyAll(redis.createClient(options))

//添加监听
client.on('error', (err) => {
    console.log('Redis Client Error:' + err)
})
```

```javascript
//查找方法，无需引用util，直接使用
const getValue = (key) => {
    return client.getAsync(key)
}

const getHValue = (key) => {
    return client.hgetallAsync(key)
}
```

```javascript
//删除方法
const delValue = (key) => {
    client.del(key, (err, res) => {
        if (res === 1) {
            console.log('delete successfully')
        } else {
            console.log('delete failed'+ err)
        }
    })
}
```