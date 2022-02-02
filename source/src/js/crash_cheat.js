/* <!--崩溃欺骗-->  */
// 2021年11月18日11:42:59 修改不使用jq
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
        let href =  document.querySelector("link[rel*='icon']")
        href.href=htmlTitlelogo;
        // console.log(href)
        //  $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = htmlTitle;
         clearTimeout(titleTime);
     }
     else {
         let href =  document.querySelector("link[rel*='icon']")
         href.href=htmlTitlelogo2;
        //  console.log(href)
        //  $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = htmlTitle2;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, titleLogoTime);
     }
 });
 