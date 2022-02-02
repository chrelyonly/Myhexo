---
title: 学习vue-resource
date: 2021-5-21 10:12:15
categories:
    - [Vue, Axios,vue-resource]
tags:
    - Vue
    - Axios
    - vue-resource
---

## 在vue中使用 vue-resource 这是一个 发送请求工具并且能解决axios的跨域问题
### 使用npm安装
``` bash 
$ npm install vue-resource --save-dev
```
### 在Vue中的 main.js 添加 依赖
``` bash 
$ import VueResource from 'vue-resource'
```
### 在添加在全局变量
``` bash 
$ app.config.globalProperties.Axios= Axios //全局配置axios
```
### 使用
``` bash 
$ Vue.use(VueResource)
```
### 方法
``` bash 
				this.$http({
					url: '/xsrcxx/payType/list',
					method: 'get',
					params: {
					}
				}).then((response) => {
				    // 响应成功回调
				}, (response) => {
				    // 响应错误回调
				});
```