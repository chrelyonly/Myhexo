// 自定义js
// 修改鼠标样式,还是有缺陷
$('body').css('cursor', 'url(/src/css/mose/moren.cur), move');
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