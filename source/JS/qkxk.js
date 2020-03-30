
var topbtn = $("#topbtn");
// 想要一键向上的按钮元素
var lastScroll = 0;
topbtn.css("display", "none");
$("#fullbtn").css("display", "none");

if ($(window).width() > 1024) {
    $("#fullbtn").css("display", "");
    window.onscroll = function () {
        // onscroll貌似为html5的属性
        var top = $(window).scrollTop();
        // 初始均为0

        if (top > 0) {
            //topbtn.css("display", "");
            topbtn.fadeIn()
        }
        if (top == 0) {
            // 若为起始状态， 则不显示向上图标
            //topbtn.css("display", "none");
            topbtn.fadeOut()
        }
    };
}


$("#topbtn").click(function () {
    window.location.href = "#top"
})

function toggleFullScreen() {
    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

if (window.console) {
    console.log(
        ' ██████╗ ██████╗  ██████╗ ██████╗ \n██╔════╝██╔═══██╗██╔═══██╗██╔══██╗\n██║     ██║   ██║██║   ██║██████╔╝\n██║     ██║   ██║██║   ██║██╔═══╝ \n╚██████╗╚██████╔╝╚██████╔╝██║     \n ╚═════╝ ╚═════╝  ╚═════╝ ╚═╝     '
    );
    console.log('想和我们共同打造鄞高导航平台吗？\n想让自己的成就在同学面前展现吗？想让同学看得你的光芒吗？\n加入我们，在这里不仅是快乐，投入你的时间和热情，滴滴汗水终会汇聚成不平凡的成果。\n期待你的加盟。');
    console.log("%c联系人邮箱地址:1677568218@qq.com",
        "color:blue;font-weight:bold;");
    console.log("请在邮件中注明%c来自:console", "color:red;font-weight:bold;");
}
$(".menu--vertical__item").click(function () {
  event.preventDefault();
   let $this= $(this).text().trim().replace(/\s/g,"")
    if ($this == "首页") {
        window.location.href = "/"
    }
    if ($this == "发展") {
        window.location.href = "/develop.html"
    }
    if ($this == "个性") {
        mdui.dialog({
            title: '提示',
            cssClass:'mdui-theme-accent-blue',
            content: '感谢访问本导航，由于精力不足，暂无开发此板块。\n如有需要，可以点击下方支持。你的支持是我更新的动力!',
            buttons: [
              {
                text: '取消'
              },
              {
                text: '支持',
                onClick: function(inst){
                  $.get("/support" );
                  mdui.alert('感谢你的支持，我已经收到了你的支持，我会努力更新\n不辜负你的期望！');
                }
              }
            ]
          });
    }
    if ($this == "学习") {
        mdui.dialog({
            title: '提示',
            cssClass:'mdui-theme-accent-blue',
            content: '感谢访问本导航，由于精力不足，暂无开发此板块。\n如有需要，可以点击下方支持。你的支持是我更新的动力!',
            buttons: [
              {
                text: '取消'
              },
              {
                text: '支持',
                onClick: function(inst){
                  $.get("/support" );
                  mdui.alert('感谢你的支持，我已经收到了你的支持，我会努力更新\n不辜负你的期望！');
                }
              }
            ]
          });
    }
})
$(".menu--horizontal__content__item").click(function () {
  event.preventDefault();
    let $this= $(this).text().trim().replace(/\s/g,"")
     if ($this == "首页") {
         window.location.href = "/"
     }
     if ($this == "发展") {
         window.location.href = "/develop.html"
     }
     if ($this == "个性") {
         mdui.dialog({
             title: '提示',
             cssClass:'mdui-theme-accent-blue',
             content: '感谢访问本导航，由于精力不足，暂无开发此板块。\n如有需要，可以点击下方支持。你的支持是我更新的动力!',
             buttons: [
               {
                 text: '取消'
               },
               {
                 text: '支持',
                 onClick: function(inst){
                  $.get("/support" );
                  mdui.alert('感谢你的支持，我已经收到了你的支持，我会努力更新\n不辜负你的期望！');
                 }
               }
             ]
           });
     }
     if ($this == "学习") {
         mdui.dialog({
             title: '提示',
             cssClass:'mdui-theme-accent-blue',
             content: '感谢访问本导航，由于精力不足，暂无开发此板块。\n如有需要，可以点击下方支持。你的支持是我更新的动力!',
             buttons: [
               {
                 text: '取消'
               },
               {
                 text: '支持',
                 onClick: function(inst){
                  $.get("/support" );
                  mdui.alert('感谢你的支持，我已经收到了你的支持，我会努力更新\n不辜负你的期望！');
                 }
               }
             ]
           });
     }
 })
 $(".footer__container__page__item").click(function () {
  event.preventDefault();
    let $this= $(this).text().trim().replace(/\s/g,"");
     if ($this == "关于") {
         window.location.href = "/about.html"
     };
     if ($this == "开发日志") {
         window.location.href = "http://49.234.205.220/2020/03/19/ygdh/"
     };

 })