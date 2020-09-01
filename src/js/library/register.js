import $ from "./jquery.js";

function formVerify() {
    console.log(2);
    let reg = {
        "phone": /^1[3-9]\d{9}$/,
        "password": /^[A-z]\w{5,15}$/
    }
    $("#phone").on('input', function() {
        if (reg.phone.test($(this).val())) {
            $('.phone').html('通过验证');
            $('.phone').css({ 'color': 'green', 'font-size': '12px' });
            $(this).attr('data-pass', true);
        } else {
            // console.log(3);
            $('.phone').html('请输入正确手机号');
            $('.phone').css({ 'color': 'red', 'font-size': '12px' });
            $(this).attr('data-pass', false);
        }
        check();
    });
    $('#password').on('input', function() {
        if (reg.password.test($(this).val())) {
            $('.password').html('通过验证');
            $('.password').css({ 'color': 'green', 'font-size': '12px' });
            $(this).attr('data-pass', true);
        } else {
            $('.password').html('密码格式错误');
            $('.password').css({ 'color': 'red', 'font-size': '12px' });
            $(this).attr('data-pass', false);

        }
        check();
    });
    $('#checkpass').on('input', function() {
        if ($(this).val() == $('#password').val()) {
            $('.checkpasstwo').html('通过验证');
            $('.checkpasstwo').css({ 'color': 'green', 'font-size': '12px' });
            $(this).attr('data-pass', true);
        } else {
            $('.checkpasstwo').html('两次密码输入不一致');
            $('.checkpasstwo').css({ 'color': 'red', 'font-size': '12px' });
            $(this).attr('data-pass', false);

        }
        check();
    });

    function check() {
        if ($('[data-pass=true]').length == 3) {
            $('.sub').removeAttr('disabled', 'disabled');
            $('.sub').css('opacity', '1.0');
        } else {
            $('.sub').attr('disabled', 'disabled');
            $('.sub').css('opacity', '0.6');

        }
    }
    window.formVerify = formVerify;
};
export { formVerify };


















$(function() {
    let reg = {
        "username": /^[A-z]\w{5,15}$/,
        "password": /^.{6,16}$/,
        "email": /^\w{6,16}@[A-z0-9_-]{2,}\.[A-z]{2,7}\.?[A-z]*$/,
        "phone": /^1[3-9]\d{9}$/
    };


    $('#myform>input:not([type="button"])').each(function(index, elm) {
        $(elm).on('input', function() {
            if ($(elm).attr('id') == 'checkpass') return;
            if (reg[$(elm).attr('id')].test($(elm).val())) {
                $('span[class="' + $(elm).attr('id') + '"]').html('通过验证');
                $(this).attr('data-pass', true);
            } else {
                $('span[class="' + $(elm).attr('id') + '"]').html('未通过验证');
                $(this).attr('data-pass', false);
            }
            check();
        });
    });

    $('#checkpass').on('input', function() {
        if ($(this).val() === $('#password').val()) {
            $('.checkpass').html('通过验证');
            $(this).attr('data-pass', true);
        } else {
            $('.checkpass').html('两次输入的密码不同,请确认');
            $(this).attr('data-pass', false);
        }
        check();
    });

    function check() {
        if ($('[data-pass=true]').length == 5) {
            $('#btn').removeAttr('disabled');
        } else {
            $('#btn').attr('disabled', 'disabled');
        }
    }

});