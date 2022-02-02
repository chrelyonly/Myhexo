---
title: 修改valine qq信息接口
date: 2021-8-3 14:19:08
categories:
    - [Vue, Axios,springboot]
tags:
    - qq
    - valine
---

### 修改valine获取的qq信息
先看原来的 

![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210802142148.png)

发现只有 qq邮箱头像获取了
看看请求头连接

![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210802142318.png)

请求连接  post请求 https://valine.api.ioliu.cn/getqqinfo 参数是  qq=QQ号&t=时间   时间是他自己会加

![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210802142421.png)

再看他的响应 发现我们的  nick 昵称为空了  看一下头像地址pic

![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210802142538.png)
发现头像是对的

![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210802142713.png)

估计是官方的接口出了点问题,无法显示 qq 昵称  
打开官方js看一下 通过 butterflt主题下的,valine.js 复制到浏览器打开

![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210802143027.png)

看不懂直接搜索 刚才的请求地址 valine.api.ioliu.cn/getqqinfo  找到了
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210802143109.png)

将这个js全部复制下来 新建个txt文件放到里面   随便给个名字   myvaline.js   不要忘记把后缀改成.js 然后放到 网站根目录下source下,新建个文件夹放着:例如   我放到  source/src/js/下    

![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210802144250.png)

将它换成新的qq信息接口就可以了,新的接口要注意他的返回参数是否与官方的一致,不一致的话自己顶一个变量接受一下
打开我们复制下来的js更换里面的代码
这里给出简单的更换方法:
ctrl+f找到  
``` bash 
type:"POST",url:"//valine.api.ioliu.cn/getqqinfo",data:{qq:e},success:function(e){
```
全部替换为
``` bash 
type:"GET",url:"//api.usuuu.com/qq/"+e,data:{},success:function(e){var inqqfo = {"pic": e.data.avatar,"nick": e.data.name,"qq": e.data.qq};console.log("QQ信息获取......",e,inqqfo);e=inqqfo;
```
最后不要忘记了更换主题配置文件里的js引入哦~  路径就是source下的文件夹到文件

![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210802144537.png)

然后重新 hexo clean g s  评论系统输入qq号就可以看到qq信昵称了,
这里放上我修改好的js 直接更换引入连接就可以了.
``` bash 
valine: https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/myvaline_beta1.0.js
```
至此!本网站完结!
如果对你有用的话点个收藏吧~(●'◡'●)