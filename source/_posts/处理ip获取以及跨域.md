---
title: springboot获取访问者ip以及跨域处理
date: 2021-4-29 10:12:15
categories:
    - [Vue, Axios,springboot]
tags:
    - Vue
    - Axios
    - springboot
---

## 在springboot中使用 跨域 以及 来访者ip获取 
### 使用 @CrossOrigin 注解允许后台跨域
``` bash 在类上注解这个类
$ @CrossOrigin 
$ public class text()
```
### 获取ip地址  方法里传入HttpServletRequest request  然后调用request
``` bash 
$ public void text(HttpServletRequest request)
$  System.out.println("来访者ip可能是:"+request.getRemoteAddr())
```
### 可能前端处理过代理设置 会获取到127.0.0.1或者主机ip 而不是访问者ip
``` bash 
$ String ip = request.getHeader("x-forwarded-for");
$   if(ip ==null || ip.length() ==0 || "unknown".equalsIgnoreCase(ip)) {
$     ip = request.getHeader("Proxy-Client-IP");
$    }
$   if(ip ==null || ip.length() ==0 || "unknown".equalsIgnoreCase(ip)) {
$      ip = request.getHeader("WL-Proxy-Client-IP");
$    }
$   if(ip ==null || ip.length() ==0 || "unknown".equalsIgnoreCase(ip)) {
$     ip = request.getRemoteAddr();
$    }
$     System.out.println("真实的ip可能是:"+ip);
```
### 一个控制实现多个service
```  bath
$  new对象 传值 调用service
```
### vue前端处理跨域
##### 在vue.config.js中添加此代码(此代码会在请求地址时候增加一个前缀api),请求地址就可以了直接写 get("/")
```  bath
$  module.exports = {
$    lintOnSave: false,
$    devServer: {
$        overlay: {
$            warning: false,
$            errors: false
$        },
$       proxy: {
$            '/api': {
$                // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
$                target: 'http://127.0.0.1:1234/',
$                // 允许跨域
$                changeOrigin: true,
$                ws: true,
$                pathRewrite: {
$                    '^/api': ''
$                }
$            }
$        }
$    },
$ } 
```