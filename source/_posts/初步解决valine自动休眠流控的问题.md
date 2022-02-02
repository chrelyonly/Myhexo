---
title: 初步解决valine自动休眠流控的问题
date: 2021-08-11 10:10:21
categories:
    - [butteerfly主题., hexo,valine]
tags:
    - butterfly主题
    - valine
    - 流控
---
## 唤醒leancound自动休眠
### 1.使用官方定时器
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210810102152.png)
### 2.使用cron-job解决Valine-admin因流控原因自动唤醒失败的问题
注册cron-job帐号
注册地址：[直达](https://cron-job.org/en/signup/)

注册时的时区请选择Asia/Shanghai
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210810102411.png)
注册

添加一个计划任务
登陆之后依次点击Members,cronjobs,Create cronjob
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master/help/20210810102439.png)
First

Title, Address

Title可以随便填一个
Address填写你的云引擎环境变量的ADMIN_URL，也就是Leancloud的Web 主机域名。如果你用的我Valine添加博主标签及评论微信、QQ通知文章里的最新版的仓库，还需要在后面加上/start，当然也可以不加，加上会有唤醒日志。
Schedule

选择User-defined进行自定义设置
Days of month: 全选
Days of week: 全选
Months: 全选
Hours: 你需要在哪个时间段唤醒就选择什么
Minutes: 选择0,20,40
按住Ctrl可多选
Notifications

可以不用修改，也可以根据自己的需要修改
Common

勾选Save responses, 保存唤醒日志
点击Create cronjob

### 其他 使用网站监控软件 或者 一些定时器 不停地每隔一段时间访问一次 leancound自己的云引擎域名


至此~ 感谢,喜欢的话点个收藏吧~
