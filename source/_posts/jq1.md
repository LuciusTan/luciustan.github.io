---
title: jQuery学习之事件梳理
date: 2019-11-20 20:00:00
updated: 2020-03-02 20:00:00
tags: 
  - 前端
  - 框架
  - jQuery
categories:
  - 学习笔记
keywords: '前端, 框架, jQuery'
description:
top_img:
comments:
cover: https://z3.ax1x.com/2021/01/22/sI27G9.jpg
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


# jQuery学习之事件梳理

#### 事件类型

1. 鼠标时间
2. 键盘事件
3. 其他事件
4. 事件参数
5. 事件绑定与取消

#### 鼠标事件

> mousedown -> mouseup = click/dblclick

> mouseenter -> mouseover -> mouseleave ->mouseout

> mousemove

> scroll

#### 键盘事件

> keydown/keyup

> keypress

#### 其他事件

> ready(fn) 当DOM加载完毕可以查询及操纵时绑定一个要执行的函数

> resize([data], fn) 当调整浏览器窗口大小时，触发
$(window).resize

> focus/bulr 获取焦点/失去焦点

> change 当元素值！值！发生改变时（例如input text，是输入完毕失去焦点后发生改变，不是输入过程中就发生改变），发生change事件

> select([[data], fn]) 输入文本后，选中文本，会触发此事件，需要能够选中的元素，才能使用，只针对输入框

> submit([[data], fn]) 当提交表单时，会发生submit事件 提交表单/阻止表单提交/提交表单时做一些需要做的事情

```javascript
$("form").submit(function(){
  //...
  return false; //阻止提交
})
```

```javascript
$("form").submit(function(){
  if(){
    //...... //例如：表单验证
  }else{
    return false; //阻止提交
  }
})
```

#### 事件参数

event

#### 事件绑定与取消

> 1.绑定： on

```javascript
$(".ele").on("click",function(){})
//无法用于js生成的dom元素上


$(document).on('click','.ele',function(){})
//可用作JS生成的DOM元素上
```

```javascript
//多个元素生成多个动作,例如：mouseenter在ele上，keydown在document上

$('.ele').add(document).on({
  mouseenter:function(event){
    event.stopPropagetion();//阻止冒泡
    ...
  },
  keydown: function(){
    .....
  }
})

```

> 2.取消： off

```javascript
//先：
$(document).on("mouseover",'.ele',function(){})

//后：
$(document).off("mouseover",'.ele',function(){})
```

> 3.one 更好的方法，绑定一次后，然后取消绑定

 `$(document).one("click",'.ele',function(){})`