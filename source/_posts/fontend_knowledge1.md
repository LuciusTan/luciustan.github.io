---
title: 前端小知识系列（一）
date: 2019-11-26 20:00:00
updated: 2020-05-27 22:00:00
tags:
  - 前端
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

# 前端小知识系列（一）
### 一、运行环境
> 运行环境即浏览器，下载网页代码，渲染出页面，期间会执行若干JS
#### (一) 网页加载过程

##### 1. window.onload和DOMContentLoaded区别

windows.onload 资源全部加载完才能执行，包括图片

DOMContentLoaded DOM渲染完成即可，图片可能尚未下载

##### 2. 从输入url到渲染出页面的整个过程

* DNS解析：域名 -> ip地址
* 浏览器根据ip地址向服务器发起http请求
* 服务器处理http请求，并返回给浏览器
* 根据HTML代码生成DOM树
* 根据css代码生成CSSOM
* 将DOM树和CSSOM整合形成Render Tree
* 根据Render Tree渲染页面
* 遇到`<script>`则暂停渲染，优先加载并执行js代码，完成再继续
* 直至把Render Tree渲染完成

#### (二) 性能优化
多使用内存，缓存或其他方法，减少CPU计算量，减少网络加载耗时

1.让加载更快
* 减少资源体积，压缩代码
* 减少访问次数：合并代码，ssr服务器端渲染，缓存
* 使用更快的网络：CDN

1.让渲染更快
* CSS放在head，js放在body最下面
* 尽早开始执行JS,用DOMContentLoaded触发
* 懒加载
* 对DOM查询进行缓存
* 频繁DOM操作，合并到一起插入到DOM结构
* 节流throttle 防抖debounce

3.手写防抖debounce

监听一个输入框，文字变化后触发change事件

直接用keyup事件，则会频繁触发change事件

防抖：用户输入结束或者暂停时，才会触发change事件

```javascript
const input1 = document.getElementById('input1');
let timer = null;
input1.addEventListener('keyup', function(){
	if(timer) {
		clearTimeout(timer)
	}
	timer = setTimeout(() => {
		//模拟change事件
		console.log(input1.value)
		timer = null
	}, 500)
})
```

```javascript
//进阶：
const input1 = document.getElementById('input1');
function debounce(){
	let timer = null;
	return function(){
		if(timer){
			clearTimeout(timer)
		}
		timer = setTimeout(() => {
			fn.apply(this.arguments);
			timer = null;
		},delay)
	}
}

input1.addEventListener("keyup", debounce(function(){
	console.log(input1.value)
}),500)
```

4.手写节流throttle

拖拽一个元素时，要随时拿到该元素被拖放的位置

直接用drag事件，则会频繁触发，很容易导致卡顿

节流：无论拖拽速度多快，都会每隔100ms触发一次

```javascript
const div1 = document.getElementById('div1');
let timer = null;
div1.addEventListener('drag', function(e){
	if(timer) {
		return
	}
	timer = setTimeout(() => {
		console.log(e.offsetX,e.offsetY)
		timer = null
	}, 100)
})
```
```javascript
//进阶：
const div1 = document.getElementById('div1');
function throttle(fn, delay = 100){
	let timer = null;
	return function(){
		if(timer){
			return
		}
		timer = setTimeout(() => {
			fn.apply(this.arguments);
			timer = null;
		},delay)
	}	
}

div1.addEventListener("drag", throttle(function(){
	console.log(e.offsetX,e.offsetY)
}),100)
```

#### (三) 前端安全
* XSS跨站请求攻击
* XSS预防
	* 替换特殊字符，`<script>`变为`&lt;script&gt;`
* XSRF跨站请求伪造
	* 使用post接口
	* 增加验证，例如密码，短信验证码，指纹等













