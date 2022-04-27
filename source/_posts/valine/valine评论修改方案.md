---
title: valine评论修改方案
date: 2022-2-20 14:17:06
categories:
    - [butteerfly主题, hexo,valine]
tags:
    - butterfly主题
    - valine
---

本文章记录valine评论,自定义修改的方法

## 记录
## 修改 valine.js,如果没有就保存一份到本地然后修改
引入本地valine
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master//img/202202201440167.png)
## valine修改添加 小标签(仅valine.js 1.4.16版本)
### 开启昵称输入qq自动识别
### 由于新版主题为很多功能进行了,无用参数剔除,可以去看主题4.0版本的更新介绍
### 修改valine.pug文件
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master//img/202202201431105.png)
新增 (enableQQ: #{theme.valine.enableQQ},) 为qq头像识别
```
    masterS: '#{theme.valine.masterS}',
    friendS: '#{theme.valine.friendS}',
    enableQQ: #{theme.valine.enableQQ},
```
修改主题配置文件
同样新增
```
enableQQ: true
masterS: 
friendS: 
```
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master//img/202202201433575.png)

#### 修改valine.js
搜索
```
pageSize:10,recordIP:!0
```
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master//img/202202201443429.png)
添加
```
masterS:"",
friendS:[],
```
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master//img/202202201444988.png)

搜索,如果用其他方法能定位到也可以
```
{var o=(0,S.default)('<div class="vcard" id="'+t.id+'"></div>'),i=t.get("ua"),a="";i&&!/ja/.test(e.cfg.lang)&&(i=S.default.detect(i),a=i.os?'<span class="vsys">'
```
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master//img/202202201451971.png)
修改为
```
	let temptel;
	let friendS = e.cfg.friendS
	let masterS = e.cfg.masterS
	friendS = friendS.split(",")
	if(t.get("mail") == masterS){
		temptel = "<span class='vsys masters' id='masters'>是我呀❤(●'◡'●)"
	}else{
		for (let indexS = 0; indexS < friendS.length; indexS++) {
			if(t.get("mail") == friendS[indexS]){
				temptel = "<span class='vsys friends' id='friends'>朋友们忄"
				break
			}else{
				temptel = "<span class='vsys stranger' id='stranger'>陌生人QAQ"
			}
			
		}
	}
	var o=(0,S.default)('<div class="vcard" id="'+t.id+'"></div>'),i=t.get("ua"),a="";i&&!/ja/.test(e.cfg.lang)&&(i=S.default.detect(i),a=i.os?
temptel
+
'</span><span class="vsys">'
```
需添加自定义css达到颜色区分
```
/* 修改valine评论标签颜色 */
/* 主人 */
#masters{
  background-color: #ffa51e;
  color: #ffffff;
}
/* 朋友 */
#friends{
  background-color: #65C6FF;
  color: #ffffff;
}
/* 陌生人 */
#stranger{
  background-color: #bebab3;
  color: #ffffff;
}
```
最后保存即可
## 新增qq提醒功能(目前qqserver酱被tx制裁,可能没用)
### qq提醒
本期来给valine对接qq,微信提醒,在线修改
#### 回到之前搭建valine-admin评论管理
#### 首先 fork 一下你所部署的仓库
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/img/202111141238837.png)

#### 在这里看
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/img/202111141238618.png)

#### 之后你就会在自己的github上找到所对应的仓库
然后把 leancloud 的仓库地址换成自己的
#### 再打开这个文件编辑, 添加 axios请求工具
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/img/202111141239087.png) 
 #### 在 if(error){} 后加上
 ![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/img/202111141253461.png)


 ```
	        console.log('准备提醒')
        try{
          if (process.env.QMSG_KEY != null) {
                      console.log('开始QQ提醒')
                      axios({
                          method: 'post',
                          url: `https://qmsg.zendee.cn/send/${process.env.QMSG_KEY}`,
                          data: 'msg='+ '博客有新消息啦!          ❤' + NICK + '❤偷偷评论了你,快去看看吧',
                          headers: {
                              'Content-type': 'application/x-www-form-urlencoded'
                          }
                      })
                      .then(function (response) {
                          if (response.status === 200 && response.data.errmsg === 'success') {
                              console.log('已QQ提醒站长')
                          } else {
                              console.warn('qq提醒失败:', response.data)
                          }
                      })
                      .catch(function (error) {
                          console.error('提醒失败:', error.message)
                       })
                  }
        }catch(e){
          console.log(e)
          //TODO handle the exception
        }
 ```

 ![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/img/202111141254788.png)

 #### 然后保存 提交更改

#### 之后在
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/img/202111141257036.png)
新增一个 QMSG_KEY 变量  值为 你的 密钥

#### 获取qq通知密钥
#### 注册一个账号  通过后台就可以获取到所对应的密钥
https://qmsg.zendee.cn/
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/img/202111141258361.png)


##### 最后在部署一下
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/img/202111141300796.png)


你也可以直接使用我的github仓库
## 修改qq信息获取接口
### (butterfly主题4.0以上,即valine.js 1.4.16)
仿照旧文档搜索
```
url:"//valine.api.ioliu.cn/getqqinfo",method:"POST",body:{qq:e}}).then(function(e){e.json().then(function(e){
```
替换为
```
url:"https://api.usuuu.com/qq/"+e,method:"GET",body:{qq:e}}).then(function(e){
console.log("QQ信息获取中...",e)
e.json().then(function(e){
	var inqqfo;
	(e.errmsg,console.log("获取失败:"+e)) || (inqqfo = {"pic": e.data.avatar,"nick": e.data.name,"qq": e.data.qq},
	console.log("QQ信息获取OK"),
	console.log(e,inqqfo));
	e=inqqfo;
```
即可
### (butterfly主题4.0以下,即valine.js 1.4.4)
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

