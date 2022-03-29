// 自定义js
// 修改鼠标样式,还是有缺陷
$("a").hover(function(){
    $("a").css("cursor",'url(/src/css/mose/mubiao.cur), move');
},function(){
    $("a").css("cursor",'url(/src/css/mose/moren.cur), move');
});
$("span").hover(function(){
    $("span").css("cursor",'url(/src/css/mose/mubiao.cur), move');
},function(){
    $("span").css("cursor",'url(/src/css/mose/moren.cur), move');
});
$("canvas").hover(function(){
    $("canvas").css("cursor",'url(/src/css/mose/mubiao.cur), move');
},function(){
    $("canvas").css("cursor",'url(/src/css/mose/moren.cur), move');
});
// 通过css修改样式无效 ,现通过 js进行修改
// 添加主题 光明 暗黑配色
var swithBtn = document.getElementById("swith-button").getElementsByClassName("site-page")[0]
swithBtn.onclick=function(){
    // let temp = document.getElementsByTagName("html")
    // console.log(123)
    if($("html").attr("data-theme") == "light"){
        $("html").attr("data-theme","dark")
    }else{
        $("html").attr("data-theme","light")
    }
    // $("html").attr("data-theme")
    // console.log(temp)
    // console.log(temp2)
}
