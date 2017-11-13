/**
 * Created by Administrator on 2017/9/24.
 */

$(function () {
    //打字效果
    var typing = new Typing({
        source: document.getElementById('source'),
        output: document.getElementById('output'),
        delay:100
    });
    typing.start();
    //点击进入
    setTimeout(function () {
//            $(".modal").fadeOut('slow');
        $('.modal1').click(function () {
            $(this).fadeOut('fast');
        })
    },4000);
    //fullPage
    $('#dowebok').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        menu: '#menu',
        navigation:true,
        afterLoad: function (anchorLink,index) {
            if(index == 2){
                $('.names').fadeIn(500,function(){
                    $('.works').fadeIn(500,function(){
                        $('.line').animate({width: '70%'},500,function(){
                            $('.motto').fadeIn(500,function(){
                                $('.Well').fadeIn(500);
                            });
                        });
                    });
                });
            }
            if(index==3){
                $('.progressbar').each(function (index,elem) {
                    var arr=["#fcc748","#cdf0e9","#badf90","#f2b88b","#91e0f1","#14cdd6","#29de6b","#17c8a8","#fff228"]
                    var $aa1=$(this).children(".proggress");
                    var $aa=parseInt($(this).children(".proggress").text());
                    $aa1.css("background-color",arr[index]);
                    $aa1.animate({
                        width:$aa+"%"
                    },"slow")
                })
            }
        },
        onLeave: function(index , nextIndex, direction){
            if(index == 2){
                $('.names').fadeOut(500,function(){
                    $('.works').fadeOut(500,function(){
                        $('.line').animate({width: '0'},500,function(){
                            $('.motto').fadeOut(500,function(){
                                $('.Well').fadeOut(500);
                            });
                        });
                    });
                });
            }
            if(index==3){
                $('.progressbar').each(function (index,elem) {
                    var $aa1=$(this).children(".proggress");
                    $aa1.animate({
                        width:0
                    },"fast")
                })
            }
        }
    });
    var timer='';
    $(window).resize(function(){
        autoScrolling();
    });
    function autoScrolling(){
        var $ww = $(window).width();
        if($ww < 768){
            $.fn.fullpage.setAutoScrolling(false);
        }
    }
    autoScrolling();
    //如果是IE浏览器
    if (window.ActiveXObject || "ActiveXObject" in window){
        $(".shouye .ball").css("margin-top","15%");
        $('.shouye .word').css("padding-top","150px")
    }

});