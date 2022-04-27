---
title: hexo+butterfly从零开始学基础(搭建基础网站)
date: 2021-07-30 10:29:43
categories:
    - [node.js, hexo,git]
tags:
    - 搭建hexo博客
---
现在随着计算机的飞速发展，拥有一个属于自己的博客，是一件非常平常的事。使用hexo搭建一个属于自己的个人博客，是即快捷又美观的一种方式，也是非常受到人们的喜爱的。接下来我将带领大家一起搭建自己的博客。[Hexo官网](https://hexo.io/)，官网里有很多教程，插件，好看有趣的主题。hexo是是基于node.js的小型博客。



## 准备工作（搭建本地环境）
电脑（这是必须的嘛QAQ，没电脑怎么弄）
node.js  强大的JS环境[快捷电梯](https://nodejs.org/en/)下载稳定版
git      代码管理工具[快捷电梯](https://git-scm.com/)下载最新稳定版

下载之后一直默认点安装（默认安装C盘就行，以免以后出现各种问题，反正也才几M....你不会舍不得吧...）网上也有一些安装教程，都一样！
安装步骤除了保存地址自己该，其他全部默认
### 第一步：新建文件夹来存放hexo文件
这一步是为了给你的博客找一个合适的位置。新建的文件夹的命名是随意的。
创建好在资源管理器路径输入cmd可以直接进入到此目录
![创建文件夹](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/createfile.png)
![cmd进入此目录](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210730142244.png)
接着使用 npm 包管理器安装 hexo 
``` bash
$ npm install hexo-cli -g
```
可能会出现安装失败的情况,原因可能是中国网络限制访问外网的问题,与访问github相似;
解决办法,搭梯子......
安装好之后,cmd依旧在此文件夹目录(你可以尝试hexo -v)查看版本号
然后开始创建 默认的 博客目录,可能也会很久,毕竟源码也在github 
``` bash 例如 
$ hexo init 网站目录名字
$ hexo init mywangzhan
```
很多人回去换git npm管理器的镜像源  比如 taobao aliyun
生成之后的网站像这样
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210730143917.png)
``` bash 运行(hexo s 就是 hexo server)
$ hexo s
```
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210730150020.png)
访问网站 浏览器地址输入 localhost:4000 也可以127.0.0.1:4000
这样你就可以看到简陋的小网站啦！
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210730151003.png)
