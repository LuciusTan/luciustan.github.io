---
title: 前端小知识系列（二）
date: 2019-11-27 20:00:00
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

# 前端小知识系列（二）
### 一、变量类型和计算
##### 1. typeof能判断哪些类型
识别所有值类型，识别函数，只能判断是否是引用类型

数值类型：undefined, string，number，Boolean，Symbol('s')

引用类型：object，数组，null，function

##### 2. 何时使用===，==
除了 ==null之外，其他一律用===

##### 3. 值类型和引用类型区别
##### 4.手写深拷贝
```javascript
const obj1 = {age:20,name:'xxx'};
const obj2 = obj1;
obj2.name = 'aaa';
console.log(obj1.name); //aaa

//深拷贝：
function deepClone(obj = {}){
	if(typeof obj != 'object' || obj == null){
		//obj是null，或者不是对象和数组，直接返回
		return obj;
	}
//初始化返回结果
	let result;
	if(obj instanceof Array) {
		result = []
	}else {
		result = {}
}

	for (let key in obj) {
		//保证key不是原型的属性
		if(obj.hasOwnProperty(key)) {
			//递归调用
				result[key] = deepClone(obj[key])
		}
	}
		return result;
}

```

### 二、原型和原型链-重点

##### 1. 如何判断一个变量是不是数组？

`a instanceof Array`

##### 2. 手写简易jQuery，考虑插件和扩展性
```javascript
class jQuery {
    constructor(selector){
        const result = document.querySelectorAll(selector);
        const length = result.length;
        for(let i = 0;i<length;i++){
            this[i] = result[i]
        }
        this.length = length
    }
    get(index){
        return this[index]
    }
    each(fn) {
        for(let i = 0; i<this.length;i++){
            const elem = this[i];
            fn(elem)
        }
    }
    on(type, fn){
        return this.each(elem => {
            elem.addEventListener(type, fn, false)
        })
    }
}
//扩展性插件
jQuery.prototype.dialog = function(){}
//“造轮子”
class myjQuery extends jQuery {
    constructor(selector){
        super(selector)
    }
//扩展自己的方法
    addClass(className) {

    },
    style(data){}
}
```

##### 3. class的原型本质，怎么理解？
原型与原型链

属性和方法的执行规则

知识点：

* class创建类
```javascript
class Student {
    constructor(name, number) {
        this.name = name;
        this.number = number
    }
    sayHi() {
        console.log(
            `姓名${this.name} ,学号${this.number}`
        )
    }
}

const xiaoming = new Student("小明",100)
console.log(xiaoming.name);
console.log(xiaoming.number);
xiaoming.sayHi();
```

* 继承extends/super
```javascript
//父类
class People {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
}
//子类1
class Student extends People {
    constructor(name, number) {
        super(name);
        this.number = number;
    }
}
//子类2
class Teacher extends People {
    constructor(name, major) {
        super(name);
        this.major = major;
    }
}
//实例1
const xiaoming = new Student("小明",100)
console.log(xiaoming.name);
console.log(xiaoming.number);
xiaoming.eat();
//实例2
const wang = new Teacher("王老师","语文")
console.log(wang.name);
console.log(wang.major);
wang.eat();

//true instanceof 类型判断
xiaoming instanceof Student
xiaoming instanceof People
xiaoming instanceof Object
    [] instanceof Array
    [] instanceof Object
{}instanceof Object

typeof Student //function
typeof People //function

```

* 隐式原型和显式原型
  * 隐式原型 每个实例都有隐式原型
	
  `xiaoming.__prototype__`
  * //显式原型 每个class都有显式原型，实例的隐式原型指向对应class的显式原型
```javascript
  Student.prototype
  xiaoming.__prototype__ === Student.prototype //true
```
* 原型链
  
  ![原型链](https://z3.ax1x.com/2021/06/10/2g5654.png)

### 三、作用域与闭包

#### 1. this的不同应用场景，如何取值
#### 2. 手写bind函数
```javascript
Function.prototype.bind1 = function(){
    const args = Array.prototype.slice.call(arguments)；
const t = args.shift();
    const self = this
    return function(){
        return self.apply(t, args)
    }
}
```

#### 3. 实际开发中闭包的应用场景，举例说明
```javascript
//隐藏数据，做一个简单的cache工具
function createCache(){
    const data = {} //闭包中的数据，被隐藏，不被外界访问
    return {
        set: function (key, val) {
            data[key] = val;
        },
        get: function(key){
            return data[key];
        }
    }
}

const c = createCache();
c.set("a", 100)
```
#### 4. 创建10个a标签，点击的时候弹出来对应序号
```javascript
let i,a
for(i=0;i<10;i++){
  a = document.createEvement('a');
  a.innerHTML = i + '<br>';
  a.addEventListener('click', function(){
    e.preventDefault()
    alert(i)
  })
  document.body.appendChild(a)
}
```

知识点：

* 作用域和自由变量
  * 全局作用域，函数作用域，块级作用域
* 闭包
  * 作用域应用的特殊情况，有两种表现： 1.函数作为参数被传递 2.函数作为返回值被返回
  * 闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方！！
* this
  * 作为普通函数
  * 使用call apply bind
  * 作为对象方法被调用
  * 在class方法中调用
  * 箭头函数
  * this取什么值是在函数执行的时候决定的，不是定义的时候决定的

### 四、异步和单线程

#### 1. 同步和异步的区别是什么？
#### 2. 手写用Promise加载一张图片
```javascript
const url = 'index.html';
function loadImg(src) {
    return new Promise(
        (resolve, reject) => {
            const img = document.createElement("img");
            img.onload = () => {
                resolve(img)
            }
            img.onerror = () => {
                reject(new Error(`图片加载失败 ${src}`))
            }
            img.src = src;
        }
    )
}
//使用
loadImg(url).then(img => {
    console.log(img.width)
    return img
}).then(img => {
    console.log(img.height)
}).catch(ex => console.error(ex))
```
#### 3. 前端使用异步的场景有哪些？

知识点：
* 单线程和异步
  * js是单线程语言，只能同时做一件事。
  * js和DOM渲染共用同一个线程，因为js可修改DOM结构
  * 遇到等待不能卡住所以需要异步，通过callback函数形式
  * 异步不会阻塞代码执行，同步会阻塞代码执行
* 应用场景
  * 网络请求，AJAX
  * 定时任务，如setTimeout
* callback hell 和 Promise

### 五、js异步-进阶
#### 1. event-loop
请描述event loop（事件循环/事件轮循）的机制，可画图

js是单线程运行的，异步要基于回调来实现，event loop就是异步回调的实现原理

同步代码一行一行放在call stack里面执行。遇到异步，先‘记录’下，等待时机。时机到了，放到callback queue。如call stack为空，event loop开始工作，轮询查找callback queue，如有，则移动到call Stack里面执行，然后继续轮询查找

![事件循环机制](https://z3.ax1x.com/2021/06/10/2gTlK1.png)

* DOM事件和event loop
```html
<button id='btn1'>提交</button>
<script>
console.log('hi');
$('btn1').click(function(e){
  console.log('button clicked!')
})
console.log('bye')
</script>
```
将click放到web api里面存储，时机到了放入callback queue

DOM事件和异步都是基于event loop实现的，但是DOM事件不是异步

#### 2. async/await
async/await 是同步语法，彻底消灭回调函数，和Promise并不互斥

执行await必须用async包裹起来

#### 3. async/await和Promise的关系
* 执行async函数，返回的是Promise对象
* await相当于Promise的then
* try...catch可捕获异常，代替了Promise的catch

#### 4. 微任务/宏任务
* 什么是宏任务和微任务
  * 宏任务：setTimeout, setInterval, Ajax, DOM事件
  * 微任务：Promise async/await
  * 微任务执行比宏任务早

* event loop和DOM渲染
  * Call Stack空闲状态，尝试DOM渲染，触发event loop
  * Call Stack空闲状态，执行当前的微任务，尝试DOM渲染，触发event loop

* 宏任务和微任务有什么区别
  * 宏任务是DOM渲染后触发，如setTimeout
  * 微任务是DOM渲染前触发，如Promise

![微任务与宏任务](https://z3.ax1x.com/2021/06/10/2g7te0.png)

从event loop解释，为何微任务执行更早

执行Promise等微任务的时候，等待时机放在micro task queue里面，与宏任务是分开的。

微任务是ES6语法规定的，宏任务是浏览器规定的。


#### 5. Promise进阶
* Promise有哪三种状态 - pending/resolved/rejected

* 状态的表现和变化
  * pending -----> resolved 或者pending------->rejected
  * pending状态不会触发then和catch, resolved状态会触发后续的then, rejected状态触发后续的catch

* then和catch对状态的影响
  * then 正常返回resolved，里面有报错则返回rejected
  * catch 正常返回resolved, 里面有报错则返回rejected

![Promise题目](https://z3.ax1x.com/2021/06/10/2gHkkT.png)

#### 6. 异步的本质
async/await 只是一个语法糖，本质上还是异步执行

例题：

![异步题目1](https://z3.ax1x.com/2021/06/10/2gHJ9e.png)

![异步题目2](https://z3.ax1x.com/2021/06/10/2gH734.png)


#### 7. for...of
* for...in(以及forEach for)是常规的同步遍历
* for...of常用于异步的遍历

![forof](https://z3.ax1x.com/2021/06/10/2gbY5T.png)

### 六、从JS基础知识到JS WEB API
* JS基础知识
  * 变量的类型和计算 - 原型和原型链-作用域和闭包
  
* JS WEB API
  * DOM - BOM - 事件 - ajax - 存储

* vue和React框架应用广泛，封装了DOM操作

* DOM操作
  * DOM属于哪种数据结构？DOM树
  * DOM操作常用的API？节点操作，结构操作，attribute和property
  * attr和property的区别？
  * 一次性插入多个DOM节点，考虑性能？

知识点：
#### (一)DOM操作
##### 1. DOM本质
是一棵树，树形结构
##### 2.DOM节点操作
 * 获取DOM节点
```
ID, CLASSNAME, TAGNAME
querySelectorAll()
```

* DOM节点的property
  * 对DOM对象的js属性做修改，不会体现到html结构中
```
 p.style.width
 p.style.className
 p.nodeName
 p.nodeType
```  

* DOM节点的attribute 
  * 修改html属性，能作用到节点上去，会改变html结构


```javascript
 p.setAttribute('a',"b");
 p.getAttribute("a");
 //<p a="b"></p>
 //property和attribute都会引起DOM的重新渲染
```

##### 3. DOM结构操作

```javascript
 document.createElement //-----创建节点
 document.appendChild //----插入节点
 //对现有节点使用appendChild可以移动节点
 p.parentNode //---- 获取父元素
 p.childNodes //---- 获取子元素
 //获取特定
 Array.prototype.slice.call(div.childNodes).filter(child => {
 if(child.nodeType = 1) {
 return true;
 }
 return false;
 })
 p.removeChild(xxx) //--- 删除子元素
```

##### 4. DOM性能
  * 避免频繁的DOM操作，对DOM查询做缓存，将频繁的操作改为一次性操作

#### (二)BOM操作
* 如何识别浏览器类型
* 分析拆解url各个部分
* navigator/screen/location/history

#### (三)事件
编写一个通用的事件监听函数

描述事件冒泡的流程

无限下拉的图片列表，如何监听每个图片的点击

##### 1. 事件绑定/事件冒泡/事件代理:
事件绑定：
![事件绑定](https://z3.ax1x.com/2021/06/10/2gLP0I.png)

事件冒泡：
* 基于DOM树形结构，根据触发节点往上冒泡，应用场景：代理
* 阻止事件冒泡：e.stopPropagation()
  
事件代理：
* 结果比较复杂，数量比较太多，无法挨个绑定，所以把事件绑定到父元素上。
* 代码简洁，减少浏览器内存占用，不要滥用！

![事件代理](https://z3.ax1x.com/2021/06/10/2gLY3F.png)

### (四)AJAX

### (五)存储