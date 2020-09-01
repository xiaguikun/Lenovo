import $ from "./library/jquery.js";

$(function() {
    console.log($('.main-l .small .smalltu img'));
    $('.main-l .small .smalltu img').on('mouseenter', function() {
        $('.main-l .bigtu').css('background', 'url(../images/xiangqing/' + $(this).attr('class') + '.jpg)')
    })
})