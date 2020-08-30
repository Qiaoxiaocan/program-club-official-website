// 轮播图时间
$('.carousel').carousel({
    interval: 2500,
    pause: 'none'
})

$("#groupButton").click(function(){
    $("#groupImg").slideToggle();
})

$(function () {
    $(".dropdown").mouseover(function () {
        $(this).addClass("open");
    });

    $(".dropdown").mouseleave(function(){
        $(this).removeClass("open");
    })

})

