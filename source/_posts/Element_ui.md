---
title: 学习Vue中element_ui
date: 2021-4-17 10:12:15
categories:
    - [Vue, element_ui]
tags:
    - Vue
    - element_ui
---

## 在vue中使用 element_ui 
### 使用npm安装
``` bash 
$ npm install element-plus --save
```
### 在Vue中的 main.js 添加 依赖
``` bash 
$ import ElementPlus from 'element-plus';
$ import 'element-plus/lib/theme-chalk/index.css';
```
### 在添加在全局变量
``` bash 
$ app.config.globalProperties.$ElementPlus= ElementPlus 
```
### 使用
``` bash 
$ this.$ElementPlus
```