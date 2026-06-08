---
title: 前端小知识系列（三）
date: 2019-12-01 20:00:00
updated: 2020-04-12 22:00:00
tags:
  - 前端
  - 面试题
categories:
  - 工具书
keywords: '小知识'
description:
top_img:
comments:
cover: https://z3.ax1x.com/2021/01/22/sIWlfH.jpg
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

# 前端小知识系列（三）—— 例题

> 检查一下自己对前端基础知识的掌握吧~

### 1. var 和let const的区别

* var是ES5, let const 是ES6, var有变量提升
* var 和 let是变量，可修改，const是常量不可修改
* let const有块级作用域，var没有

* 变量提升：
```
console.log(a);
var a = 200; // undefined
//函数表达式vs函数声明
```

### 2. typeof返回哪些类型？

* 值类型，引用类型，function
* typeof null === 'object'


### 3. 列举强制类型转换和隐式类型转换

* 强制：parseInt parseFloat toString
* 隐式：if 逻辑运算 == +拼接字符


### 4. 手写深度比较，模拟lodash isEqual

```javascript
const obj1 = {a:100 , b: {x:123, y:321}}
const obj1 = {a:100 , b: {x:123, y:321}}
console.log(obj1 === obj2) //false

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}
function isEqual(obj1, obj2){
    if(!isObject(obj1) || !isObject(obj2)){
        return obj1 === obj2
    }
    if(obj1 === obj2){
        return true;
    }
    const obj1keys = Object.keys(obj1);
    const obj2keys = Object.keys(obj2);
    if(obj1keys.length !== obj2keys.length){
        return false;
    }
    for(let key in obj1){
        const res = isEqual(obj1[key], obj2[key])
        if(!res) {
            return false;
        }
    }
    return true
}
isEqual(obj1, obj2)

```

### 5. split()和join()区别

```javascript
'1-2-3'.split('-'); // [1,2,3]
[1,2,3].join('-'); // '1-2-3'
```

### 6. 数组的pop push unshift shift分别做什么，功能是什么，返回值是什么，是否对原数组造成影响

```javascript
const arr = [10,20,30,40]
const popRes = arr.pop()
console.log(popRes, arr) // 40 [10,20,30]

const pushRes = arr.push(50)
console.log(pushRes, arr) // 返回length 5 [10,20,30,40,50]

const unshiftRes= arr.unshift(5)
console.log(unshiftRes, arr) //返回length 5 [5,10,20,30,40]

const shiftRes= arr.unshift()
console.log(shiftRes, arr) //10 [20,30,40]
```

* 数组的API哪些是纯函数，1,不改变原数组，2,返回一个数组

```javascript
//concat 
const arr1 = arr.concat([50,60,70])
console.log(arr); // [10,20,30,40]
console.log(arr1) // [10,20,30,40,50,60,70]
//map
const arr2 = arr.map(num => num*10)
//filter
const arr3 = arr.filter(num => num>25)
//slice
const arr4 = arr.slice()
```

* 非纯函数 `push /pop /shift /unshift /forEach /some /every /reduce`

### 7. 数组slice和splice区别

* 功能区别： 参数和返回值：
* 纯函数：slice是纯函数 splice不是

```javascript
const arr = [10,20,30,40,50]
//slice
const arr1 = arr.slice(); //[10,20,30,40,50]
const arr2 = arr.slice(1, 4) //[20,30,40]
const arr2 = arr.slice(2) //[30,40,50]
const arr4 = arr.slice(-2) // [40,50]

//splice
const spliceRes1 = arr.aplice(1, 2, 'a', 'b', 'c') //[20,30] [10, 'a', 'b', 'c',40,50]
const spliceRes2 = arr.aplice(1, 2) //[20,30] [10,40,50]
const spliceRes3 = arr.aplice(1, 0, 'a', 'b', 'c') //[] [10,20,'a', 'b', 'c',30,40,50]
console.log(spliceRes, arr)
```

### 8. `[10, 20, 30].map(parseInt)`返回结果是什么


* 答案：`[10, NaN, NaN]`

* map的参数和返回值

* parseInt的参数和返回值

```javascript
//拆解
[10,20,30].map((num, index) => {
return parseInt(num, index)
})
parseInt(10, 0) // 10 parseInt(10, 10)
parseInt(20, 1) // NAN
parseInt(30, 2) // NAN

```

### 9. ajax请求get和post区别

* get一般用于查询，post一般用于提交
* get参数拼接在url上，post放在请求体内
* post易于防止XSRF

### 10. 函数call和apply的区别

```
fn.call(this.p1,p2,p3)
fn.apply(this.arguments)
```


### 11. 事件代理（委托）是什么

* 联系事件冒泡

### 12. 闭包是什么，有什么特性，有什么负面影响

* 作用域和自由变量
* 应用场景：函数作为参数被传入，作为返回值被返回
* 自由变量的查找，在定义的地方查找，不在执行的地方查找
* 影响：变量会常驻内存，得不到释放。闭包不要乱用。

### 13. 如何阻止事件冒泡和默认行为

```
event.preventDefault();
e.stopPropagation(); 
```

#### 14. 查找，添加，删除，移动DOM节点的方法

```javascript
ele.getElementById()...........TagName, ClassName, querySelectorAll
setAttribute/getAttribute
ele.appendChild
ele.removeChild
//移动：先获取再插入
```

### 15. 如何减少DOM操作
* 缓存DOM查询结果，多次查询时可以一次查询赋值到list里
* 多次DOM操作，插入多个元素，可以合并到某个新建变量里，然后一次插入

### 16. 解释jsonp原理，为何他不是真正的ajax
* jsonp是通过script标签实现，ajax是通过XMLHttpRequest实现
* 浏览器的同源策略（后端、服务端没有同源策略，一般称为转发）和跨域
* 哪些html标签能绕过跨域。script img

### 17. document load和ready的区别

* load: 页面全部资源加载完执行
* document load: DOM渲染完成即可执行，此时图片视频可能还未加载完

### 18. ==和===的不同
* ==会尝试类型转换
* === 严格相等
* 只有 == null 用==


### 19. 函数声明和函数表达式的区别
* 函数声明：function fn(){...}
* 函数表达式：const fn = function(){...}
* 函数声明会再执行代码前预加载，函数表达式不会
* 结合变量提升

### 20. new Object() 和 Object.create()的区别
* {}等同于 new Object(), 原型Object.prototype
* Object.create(null)没有原型
* Object.create({...})可指定原型

### 21. 关于this的场景题
* 函数中使用
* 箭头函数中使用
* class中使用
* 作为对象方法被调用
* call、apply、bind中调用

![](https://z3.ax1x.com/2021/06/11/2f1WHU.png)

### 22. 关于作用域和自由变量场景题-1

![](https://z3.ax1x.com/2021/06/11/2f38VU.png)

### 22. 判断字符串以字母开头，后面字母数组下划线，长度6-30

`const reg = /^[a-zA-Z]\w{5,29}$/`

### 23. 关于作用域和自由变量的场景题-2

![](https://z3.ax1x.com/2021/06/11/2f8VL6.png)

### 24. 手写字符串trim方法，保证浏览器兼容性

![](https://z3.ax1x.com/2021/06/11/2f8aFg.png)

### 25. 如何获取多个数字中的最大值

![](https://z3.ax1x.com/2021/06/11/2f8cwT.png)

### 26. 如何用js实现继承
* class 继承
* prototype继承

### 27. 如何捕获js程序异常

![](https://z3.ax1x.com/2021/06/11/2fGKBV.png)

### 28. 什么是json
* json是一种数据格式，本质是一段字符串
* json格式和js对象结构一致，对js语言更友好
* `windows.JSON`是一个全局对象 `JSON.stringify JSON.parse`

### 29. 获取当前页面url参数

![](https://z3.ax1x.com/2021/06/11/2fG4US.png)

### 30. 将url参数解析为js对象

![](https://z3.ax1x.com/2021/06/11/2fGLD0.png)

### 31. 手写数组flatern，考虑多层级

![](https://z3.ax1x.com/2021/06/11/2fJ929.png)


### 32. 数组去重

![](https://z3.ax1x.com/2021/06/11/2fJGa8.png)


### 33. 手写深拷贝

![](https://z3.ax1x.com/2021/06/11/2fJ4qx.png)


### 34. 介绍一下RAF requestAnimationFrame

![](https://z3.ax1x.com/2021/06/11/2fJjsI.png)


### 35. 前端性能如何优化，一般从哪些方面考虑

* 多使用内存、缓存，减少计算、减少网路请求
* 方向：加载页面，页面渲染，页面操作流畅度


> 持续更新.......






