//formVerify
import { formVerify } from "./library/register.js";
import $ from "./library/jquery.js";
import "./library/jquery-md5.js";

$(function() {
    formVerify();
    $('#phone').on('input', function() {
        let phone = $('#phone').val();
        let password = $.md5($('#password').val());
        $.ajax({
            type: "get",
            url: "../../interface/reg.php",
            data: {
                phone: phone,
                password: password
            },
            dataType: "json",
            success: function(res) {
                let item = res.msg;
                item += $('.phone').text();
                // console.log($('.phone em'));
                $('.phone').text(item);
            }
        });
    });
    // console.log($('.sub'))
    $('.sub').on('click', function() {
        let phone = $('#phone').val();
        let password = $.md5($('#password').val());

        $.ajax({
            type: "get",
            url: "../../interface/write.php",
            data: {
                phone: phone,
                password: password
            },
            dataType: "json",
            success: function(res) {
                if (res) {
                    alert('注册成功请登录使用');
                    location.href = "./regin.html";
                    // $(location).attr('href', './regin.html')
                }
            }
        });
    })
})