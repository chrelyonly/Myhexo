---
title: valine对接qq提醒
date: 2021-11-15 13:15:46
categories:
    - [butteerfly主题., hexo,valine]
tags:
    - butterfly主题
    - valine
    - qq
    - 微信
---
<!-- ## 已废弃!!!!!!!!!!!!!!!!!!!!!!!!!!(有时间在搞) -->
本期来给valine对接qq,微信提醒,在线修改
## 回到之前搭建valine-admin评论管理
### 首先 fork 一下你所部署的仓库
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/img/202111141238837.png)

### 在这里看
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/img/202111141238618.png)

### 之后你就会在自己的github上找到所对应的仓库
然后把 leancloud 的仓库地址换成自己的
### 再打开这个文件编辑, 添加 axios请求工具
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/img/202111141239087.png) 
 ### 在 if(error){} 后加上
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

 ### 然后保存 提交更改

### 之后在
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/img/202111141257036.png)
新增一个 QMSG_KEY 变量  值为 你的 密钥

## 获取qq通知密钥
### 注册一个账号  通过后台就可以获取到所对应的密钥
https://qmsg.zendee.cn/
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/img/202111141258361.png)


## 最后在部署一下
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/img/202111141300796.png)


你也可以直接使用我的github仓库