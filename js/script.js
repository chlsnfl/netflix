$(function(){
    $('.gnb li').hover(function(){
        $(this).find('.lnb').stop().slideToggle();
    });
});