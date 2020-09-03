import $ from "./library/jquery.js";
import "./library/jquery-md5.js";

$(function() {
    console.log($('.sub'))
    $('.sub').on('click', function() {
        let phone = $('.user').val();
        let password = $.md5($('.password').val());
        // console.log(password);
        $.ajax({
            type: "get",
            url: "../../interface/regin.php",
            data: {
                phone: phone,
                password: password
            },
            dataType: "json",
            success: function(res) {
                if (res) {
                    alert('登录成功，即将跳转到首页');
                    location.href = "./index.html";
                } else {
                    alert('用户名或者密码错误');
                }
            }
        });
    })
})