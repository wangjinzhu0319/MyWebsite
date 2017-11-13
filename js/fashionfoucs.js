var curIndex = 0;
var time = 800;
var slideTime = 5000;
var adTxt = $("#banner_img>li>div>.ad_txt");
var adImg = $("#banner_img>li>div>.ad_img");
var int = setInterval("autoSlide()", slideTime);
$("#banner_ctr>ul>li").click(function () {
    $(this).addClass("active1").siblings("li").removeClass("active1");
    show($(this).index("#banner_ctr>ul>li"));
    window.clearInterval(int);
    int = setInterval("autoSlide()", slideTime);
});
function autoSlide() {
    curIndex + 1 >= $("#banner_img>li").size() ? curIndex = -1 : false;
    show(curIndex + 1);
}
function show(index) {
    $.easing.def = "easeOutQuad";
    $("#banner_ctr>ul>li").eq(curIndex).removeClass("active1");
    $("#banner_ctr>ul>li").eq(index).addClass("active1");
    $("#banner_img>li").eq(curIndex).stop(true).fadeOut(time);
    adTxt.eq(curIndex).stop(true).animate({ top: "340px" }, time);
    adImg.eq(curIndex).stop(true).animate({ right: "120px" }, time);
    setTimeout(function () {
        $("#banner_img>li").eq(index).stop(true).fadeIn(time);
        adTxt.eq(index).children("p").css({ paddingTop: "50px", paddingBottom: "50px" }).stop(true).animate({ paddingTop: "0", paddingBottom: "0" }, time);
        adTxt.eq(index).css({ top: "-170px", opacity: "0" }).stop(true).animate({ top: "0", opacity: "1" }, time);
        adImg.eq(index).css({ right: "-50px", opacity: "0" }).stop(true).animate({ right: "10px", opacity: "1" }, time);
    }, 200);
    curIndex = index;
}