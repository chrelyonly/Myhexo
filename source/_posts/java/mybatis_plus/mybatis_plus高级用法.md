---
title: mybatis_plus的QueryWrapper高级用法
date: 2022-3-24 20:00:32
categories:
    - [java]
tags:
    - mybatis_plus
    - QueryWrapper高级用法
---
## 一些好用的工具 和 方法,技巧
### 先看图片
先写好多表查询的sql 条件直接${qw.customsqlsegment}接口传入qw即可动态多表查询
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master//img/202203251957291.png)
正常使用 QueryWrapper拼接sql,拼接sql时注意重命名的表名
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master//img/202203251954451.png)

![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master//img/202203251956048.png)

![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master//img/202203251957473.png)