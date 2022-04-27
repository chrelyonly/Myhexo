---
title: java技巧
date: 2022-1-25 16:09:53
categories:
    - [java]
tags:
    - java开发工具
---
## 一些好用的工具 和 方法,技巧
### java中 String 转 JSON 或 对象
json需要阿里巴巴依赖
```
JSONObject json = JSONObject.parseObject(JSON字符串));
JSON.toJavaObject(json(如果为jsonArr那么返回的将会是一个List), Map.class(传入实体或map需要转换的类型,返回对应的类型数据));
```