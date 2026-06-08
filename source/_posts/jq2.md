---
title: jQuery学习之选择器
date: 2019-11-21 21:00:00
updated: 2020-01-03 20:00:00
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

# jQuery学习之选择器

#### 基本选择器

```javascript
//id选择器
$("#id")

//element选择器
$("img").$("p").$("div")

//class选择器
$(".class")

//通配符选择器
$("*")
```

#### 多项选择器

将每一个选择器匹配到的元素合并后一起返回。

可以指定任意多个宣自强，并将匹配到的元素合并到一个结果内。

`$("slector1, selector2, selectorN");`

#### 层级选择器

1.在给定的祖先元素下匹配所有后代元素

`$("zuxian houdai")`

2.子选择器, 只匹配下一层

`$("parent>child")`

3.next 选择器，匹配所有紧接在 prev 元素后的 next 元素

`$("prev+next")`

4.兄弟选择器,匹配 prev 后的所有 siblings 元素

`$("prev ~ siblings")`

#### 属性选择器

1.[attribute],属性名选择器，匹配所有含有 attribute 属性的元素

`$("[class]")`

2.[attribute=value]属性值选择器,匹配所有含有 attribute 属性且值为 value 的元素

`$("[class=value]")`

3.[attribute!=value]非值选择器,只要没有 attribute=value，都可以匹配到

`$("[class!=value]")`

4.[attribute^=value],匹配 attribute 属性的值以 value 开头的所有元素

`$("[class^=value]")`

5.[attribute$=value],匹配 attribute 属性的值以 value 结尾的所有元素

`$("[class$=value]")`

6.[attribute*=value]包含属性选择器,匹配 attribute 属性的值包含 value 的所有元素

`$("[class*=value]")`

7.[selector1][selector2][selector3]多属性选择器,匹配符合 select1，select2，select3 规则的所有元素

```javascript
$("[type][src][alt]")
$("[class][class*=lang][class&=y]")
```

#### 过滤器

在其他选择器基础上使用，缩小选择范围

##### child 系列

1.:first-child, 第一个

```javascript
$("selector:first-child")
$("details > p:first-child") //要求details下面的第一个子标签必须是p标签。
```

2.:last-child

```javascript
$("selector:last-child")
$("details > p:last-child") //要求details下面的最后一个子标签必须是p标签。
```

3.:nth-child(n | even | odd | formula)

```javascript
$("selector:nth-child(2)")
$("details > p:nth-child(2)") //details下面的第二个子标签是p标签才符合。
```

4.:nth-last-child(n | even | odd | formula)

```javascript
$("selector:nth-last-child(2)")
$("details > p:nth-last-child(2)") //details下面的倒数第二个子标签是p标签才符合。
```

5.:only-child

```javascript
$("selector:only-child")
$("details > p:only-child") //details下面只有一个子标签并且必须是p标签才能匹配。
```

##### type 系列

1.:first-of-type

```javascript
$("selector:first-of-type")
$("details > p:first-of-type") //找出details下面第一个p标签，不要求p在第一个位置
```

2.:last-of-type

```javascript
$("selector:last-of-type")
$("details > p:last-of-type") //找出details下面最后一个p标签，不要求p在固定位置
```

3.:nth-of-type(n | even | odd | formula)

```javascript
$("selector:nth-of-type(2)")
$("details > p:nth-of-type(2)") //找出details下面第二个p标签，没有则不返回
```

4.:nth-last-of-type(n | even | odd | formula)

```javascript
$("selector:nth-last-of-type(2)")
$("details > p:nth-last-of-type(2)") //找出details下面倒数第二个p标签，没有则不返回
```

5.:only-of-type

```javascript
$("selector:only-of-type")
$("details > p:only-of-type") //details下面只有一个子标签，若是p标签则返回。
```

##### 关于参数 n | even | odd | formula

1.n
匹配子元素序号。必须为整数，从 1 开始

2.even
匹配所有偶数元素

3.odd
匹配所有奇数元素

4.formula
特殊公式，(an+b)
例如：\$("details > p:nth-last-of-type(n+2)") //找从第三个开始的 p 元素

#### 表单相关

1.:input
全部选中

2.:text 类型选择
选中类型为 text 的，扩展：
:password/:radio/:checkbox/等等.....

3.:enable/:disable/:checked/:selected 状态选择
选中表单内状态类型为 enable/disable/checked/selected 的元素

#### 查找和过滤

##### 纵向查找

1.find(expr | object | element)
搜索所有与指定表达式匹配的元素

```javascript
$("parent").find(".child");
//在parent里面查找class为child的元素，找多层级
```

2.children([expr])
取得一个包含匹配的元素集合中每一个元素的所有子集 的元素集合

```javascript
$("parent").children(".child");
// 只找一层
```

3.parent([expr])
取得一个包含着所有匹配元素的唯一父元素的元素集合

```javascript
$("child").parent(".parent"); 
//唯一，往上找一层
```

4.parents -- 不建议使用

##### 横向查找

1.next([expr])/prev([expr])
取得一个包含匹配的元素集合中每一个元素紧邻的后面（前面）同辈元素的集合

```javascript
ele.next(); //ele的下一个元素
ele.prev(); //ele的上一个元素
```

2.eq(index | -index)
获取当前链式操作中第 N 个 Jq 对象

```javascript
$("li").eq(2)  //第二个元素
$("li").eq(-2) //倒数第二个元素
```

3.siblings([expr])
取得一个包含匹配的元素集合中每一个元素的所有唯一同辈元素的元素集合

```javascript
ele.siblings() 
//所有兄弟元素
```

##### 过滤

1.filter(expr | object | element | fn)
筛选出与指定表达式匹配的元素集合

```javascript
eles.filter("eles-child"); 
//找到eles内的eles-child元素
```

##### 参数

expr: 字符串值，包含供匹配当前元素集合的选择器表达式
object: 现有的 jQ 对象，以匹配当前元素
element: 一个用于匹配元素的 DOM 元素
fn: 一个函数用来作为测试元素的集合
