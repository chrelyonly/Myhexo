
    //TODO
    console.log("获取valine最新的评论信息")
    // 获取valine侧边栏
    var valinedom = document.getElementById("valineMessages")
    // 毫秒时间戳
    var timestamp = Date.now()
    // 进行加签计算  带权限
    var sign = md5(timestamp + masterKey) + "," + timestamp + ",master"
    // 进行加签计算  不带权限
    // var sign = md5(timestamp+appKey)
    $.ajax({
        url:"https://" + url + "/1.1/classes/Comment",
        type:"GET",
        data:{
            "order":"-updatedAt",
            "limit":3
        },
        beforeSend:function(e){
            e.setRequestHeader("x-lc-id",appid)
            e.setRequestHeader("x-lc-sign",sign)
        },
        success:function (data) {
            let datalist = data.results
            console.log(datalist)
            // 评论者
            let name = data.results[0].nick
            // 评论者ip
            let ip = data.results[0].ip
            // 评论时间
            let updatedAt = data.results[0].updatedAt
            // 评论id
            let objectId = data.results[0].objectId
            // 评论者邮箱
            let mail = data.results[0].mail
            // 评论者浏览器标识
            let ua = data.results[0].ua
            // 评论者博客连接
            let link = data.results[0].link
            // 评论内容
            let comment = data.results[0].comment
            // 所在页面评论地址
            let url = data.results[0].url
            // 评论者QQ头像
            let QQAvatar = data.results[0].QQAvatar
            // 是否像我发送通知
            let isNotified = data.results[0].isNotified
        //    temp.getElementsByClassName("item-content")[0].innerHTML = userip
            // 定义html渲染代码
            var str = "";
            for (let index = 0; index < datalist.length; index++) {
                if (datalist[index].QQAvatar == "" || datalist[index].QQAvatar == null) {
                    // 新增如果品论没有获取到头像则随机一个
                    datalist[index].QQAvatar = "https://api.btstu.cn/sjtx/api.php"
                }
                str+= "<div style='float: left;width: 50px;margin-right: 10px;'><img style='width: 100%;height: 100%;border-radius: 50%;' src='" + datalist[index].QQAvatar + "' alt='' srcset=''></div>"
                str+= "<div style='font-size: 12px;'>" + datalist[index].nick + "</div>"
                str+= "<div style='font-size: 10px;opacity: 0.5;'>" + datalist[index].createdAt + "</div>"
                str+= "<div style='font-size: 10px;padding: 10px;margin-top: 30px;border-radius: 5px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);' >" + datalist[index].comment + "</div>"
                str+= "<br>"
            }
            valinedom.getElementsByClassName("item-content")[0].innerHTML = str
        },
        error:function (e) {
         console.log("请求错误");
         console.log(e)
        }
    });