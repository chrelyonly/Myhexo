---
title: avue食用技巧
date: 2022-3-25 20:00:27
categories:
    - [Vue, Axios,springboot]
tags:
    - Vue
    - Axios
    - springboot
    - avue
---

## 最近开发中遇到了[avue](https://avuejs.com/)前端框架
发现与我们平常的vue写法大有不同,封装过多的函数用法,前所未有的格式,一系列的食用技巧.
### 子表单(单列多数据)食用
```
{
  label: '子表单',
  prop: 'dynamic',
  type: 'dynamic',
  span: 24,
  children: {
    align: 'center',
    headerAlign: 'center',
    rowAdd: (done) => {
      this.$message.success('新增回调');
      done({
        input: '默认值'
      });
    },
    rowDel: (row, done) => {
      this.$message.success('删除回调' + JSON.stringify(row));
      done();
    },
    column: [{
      // width: 800,
      span: 24,
      label: '题目选项',
      prop: "input",
      // formslot: true,
    }]
  }
```
### 动态列
可以通过给 列的List添加其他需要的字段
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master//img/202203252005096.png)
### 调用内部的增删改查方法
添加
```
this.$refs.crud.rowAdd()
```
删除
```
$refs.crud.rowDel(row,index)
```

### 自定义rule表达
定义一个方法 定义表达式验证
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master//img/202203291550239.png)
在方法里判断
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master//img/202203291551554.png)

### 去掉标题 冒号
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master//img/202204040901535.png)

### 使用elmeent确认框 需注意 .then方法是同级的,可能会出现先清除了数据才调用.then的方法
![](https://cdn.jsdelivr.net/gh/chrelyonly/cdn-speed@master//img/202204062018036.png)