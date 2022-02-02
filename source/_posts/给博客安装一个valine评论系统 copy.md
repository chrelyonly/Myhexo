---
title: 给博客新增一个valine评论系统
date: 2021-08-10 09:36:18
categories:
    - [butteerfly主题., hexo,valine]
tags:
    - butterfly主题
    - valine
---


Valine Admin 是 Valine 评论系统的扩展和增强，主要实现评论邮件通知、评论管理、垃圾评论过滤等功能。支持完全自定义的邮件通知模板。基于Akismet API实现准确的垃圾评论过滤。此外，使用云函数等技术解决了免费版云引擎休眠问题，支持云引擎自动唤醒，漏发邮件自动补发。兼容云淡风轻及Deserts维护的多版本Valine。
## butterfly主题安装valine
### butterfly主题已经自带了valine.js,用户只需要配置一下信息就可以了
### 主题配置开启valine评论,如果有多个评论可以像我这样,但是最多两个!
在主题配置里300行左右配置use 为 valine

![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210810094242.png)

### valine配置
最后的valine大概是这样的;
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210810094623.png)

接下来怎么获取这些参数~
### 可以参考valine-admin官方教程
[valine官方配置](https://github.com/DesertsP/Valine-Admin)

### 登录/注册一个leancound用来储存评论(可能需要挂代理)
请先登录或注册 LeanCloud, 进入控制台后点击左下角创建应用：
[直达](https://console.leancloud.cn/)
然后你就可以从这里看你的appid 和appkey  把他填入到 butterfly主题配置的valine配置去
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210810100229.png)
你需要在设置你配置一些你的参数,可以参考官方的配置,部分配置可以模仿官方的填入进去
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210810101410.png)
可以看我的~
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210810101749.png)
使用官方仓库 https://github.com/DesertsP/Valine-Admin.git
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210810101826.png)
最后还需要在
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210810100403.png)
这里配置你的域名白名单
最后在重新清除构建运行就能在本地看到你的评论了(如果提示301等错误检查域名白名单配置了没有,本地应该是没问题的本地也提示301那就把127.0.0.1配置到安全域名)
如果此文章对你有用的话,点个收藏吧~~~爱你哟~
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210810100840.png)


