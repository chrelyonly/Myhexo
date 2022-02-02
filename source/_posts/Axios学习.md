---
title: 学习Axios
date: 2021-4-18 10:12:15
categories:
    - [Vue, Axios]
tags:
    - Vue
    - Axios
---

## 在vue中使用 Axios 这是一个 发送请求工具
### 使用npm安装
``` bash 
$ npm isntall axios --save
```
### 在Vue中的 main.js 添加 依赖
``` bash 
$ import Axios from 'axios'
```
### 在添加在全局变量
``` bash 
$ app.config.globalProperties.Axios= Axios //全局配置axios
```
### 使用
``` bash 
$ 					let data = new FormData();
$					data.append("user", this.userphone);
$					data.append("password", this.password);
$					data.append("step", this.Steps);
$					// data.append("", $this.userpasswrod);
$					//   提交请求
$					this.$Axios({
$					type: 'get',
$				
$					url: this.url,
$					headers:{"Content-Type":"text/plain;charset=UTF-8"},
$					data:data,
$					success: function(res){
$						console.log(res);
$					},
$					error: function(res){
$						console.log(res);
$					}
$					})
```