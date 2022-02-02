---
title: '给博客添加gitalk评论系统,结合valine达成双评论系统'
date: 2021-08-19 14:02:39
categories:
    - [butteerfly主题., hexo,gitalk]
tags:
    - butterfly主题
    - valine
    - gitalk
---
## 添加一个gitalk评论系统
### 开启gitalk评论和valine评论共存
在主题配置里吧这两个评论系统开启(注意缩进空格)
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210819140424.png)
官方gitalk配置参数,跟着它一样配置就行了

[官方配置教程直达](https://github.com/gitalk/gitalk)
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210819140642.png)
### 接下来创建一个仓库,名字可以随便取, 我就取gitalk
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210819141250.png)
创建好之后,点击设置
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210819141536.png)
再点击Developer settings
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210819141611.png)
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210819142009.png)
参数第一个填仓库名称,之后几个填你的博客域名
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210819141831.png)
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210819141942.png)
打开后记住你的密钥 Client ID 和 Client Secret 很重要
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210819142122.png)
接下来打开主题配置文件找到gitalk配置
把之前获取 Client ID 和 Client Secret 分别填到 client_id 和 client_secret 里面。
repo 填一个仓库名就好了。

owner 填自己的 github 账号名。

admin 填 repo 仓库的拥有者，hexo 解析的时候会使用 admin/repo 去定位仓库的位置。
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210819142427.png)
完成之后 
```
hexo clean & hexo g & hexo s
```
效果(可能需要初始化,登录点击一下就可以了)
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210819142709.png)
#### 如果此文章对你有用的话,收藏一下,评论一下吧~