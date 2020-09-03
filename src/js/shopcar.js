import $ from "./library/jquery.js";
import { cookie } from "./library/cookies.js";

(function() {
    let shop = cookie.get('shop');
    if (shop) {
        shop = JSON.parse(shop);
        let idList = shop.map(elm => elm.id).join();

        $.ajax({
            type: "get",
            url: "../../interface/getshopcar.php",
            data: {
                idList: idList
            },
            dataType: "json",
            success: function(res) {
                console.log(res);
                let item = '';
                let addprice = 0;
                res.forEach((elm, i) => {
                    let picture = JSON.parse(elm.picture);
                    let arr = shop.filter(val => val.id == elm.id);
                    addprice += (parseInt(elm.price) * parseInt(arr[0].num));
                    item += `
                    <div class="xr-product">
                    <input type="checkbox" checked="checked" class="check " data-sty="sty" style="width:0;height:0;">
                        <div class="product">
                        <input type="checkbox" checked="checked" class="check " data-sty="sty">
                        <img src="../${picture[5].src}" alt="">
                        <div class="pro-text">
                            <p>${elm.title}</p>
                            <p><img src="../images/oo-icon.jpg" alt="">&nbsp;&nbsp;购买联想服务</p>
                        </div>
                    </div>
                    <div class="config"></div>
                    <div class="price">
                        <input type="text" style="outline:none;border:none;" value=${elm.price}.00>
                    </div>
                    <div class="num">
                        <div class="add-minus">
                            <span class="iconfont icon-jianhao4" id="minus${elm.id}"></span>
                            <input type="text" value=${arr[0].num} disabled>
                            <span class="iconfont icon-jiahao1 " id="add${elm.id}"></span>
                        </div>
                    </div>
                    <div class="yuan">
                        <input type="text" style="outline:none;border:none;"  value=${parseInt(elm.price) * parseInt(arr[0].num)}.00>
                    </div>
                    <div class="active">
                        <p>删除</p>
                        <p>移入收藏夹</p>
                    </div>
                </div>
                `

                })
                item += `<div class="carfooter">
                <div class="quanxuan">
                    <input type="checkbox" checked="checked" class="alls2">&nbsp;&nbsp; 全选
                </div>
                <div class="zongjia">商品总价：&nbsp;&nbsp;<span>${(addprice).toFixed(2)}</span></div>
        </div>`
                $('.xuanran').append(item);

                // 添加事件加减数量
                $('.add-minus').on('click', function(ev) {
                    // console.log($(ev.target));
                    if ($(ev.target).hasClass('icon-jianhao4')) {
                        let value = parseInt($(ev.target).next().val());
                        value = value - 1;
                        if (value < 1) {
                            value = 1;
                        }
                        $(ev.target).next().val(value);
                    };
                    if ($(ev.target).hasClass('icon-jiahao1')) {
                        let value = parseInt($(ev.target).prev().val());
                        value = value + 1;
                        if (value < 1) {
                            value = 1;
                        }
                        $(ev.target).prev().val(value);
                    }
                    //添加cookie

                    //加减数量后价格
                    let addvalue = 0;
                    // console.log($(this).parent().next().children());
                    addvalue = parseInt($(this).children().eq(1).val()) * parseInt($(this).parent().prev().children().val());
                    $(this).parent().next().children().val((addvalue).toFixed(2));

                    //加减后的总价格
                    let obj = $('.yuan>input');
                    let addaddvalue = 0;
                    for (let i = 0; i < obj.length; i++) {
                        // console.log(obj[i]);
                        addaddvalue += ((parseInt($(obj[i]).val())));
                    }

                    console.log($('.zongjia span'));
                    $('.zongjia span').html((addaddvalue).toFixed(2));
                });
                //选框
                $('.xr-product').on('click', function(ev) {
                    console.log(!!($(ev.target).attr('checked')));

                    if ($(ev.target).hasClass('check')) {
                        if (!!($(ev.target).attr('data-sty'))) {
                            $(this).find('.check').removeAttr('data-sty');
                            $(this).find('.check').prop('checked', false);
                            let itemval = parseInt($(this).find('.yuan input').val());
                            let itemvalu = parseInt($('.zongjia span').html());
                            let val = itemvalu - itemval;
                            $('.zongjia span').html((val).toFixed(2));
                        } else if (!($(ev.target).attr('data-sty'))) {
                            $(this).find('.check').attr('data-sty', 'sty');
                            $(this).find('.check').prop('checked', true);
                            let itemval = parseInt($(this).find('.yuan input').val());
                            let itemvalu = parseInt($('.zongjia span').html());
                            let val = itemvalu + itemval;
                            $('.zongjia span').html((val).toFixed(2));
                        }

                    }
                });
                //全选
                // $('.alls1').on('click', function() {
                //     console.log(!!($('.xr-product').find('.check').attr('data-sty')));
                //     if ($('.xr-product').find('.check').attr('data-sty')) {
                //         $('.xr-product').find('.check').removeAttr('data-sty');
                //         $('.xr-product').find('.check').each(function(i, elm) {
                //             // $(elm).removeAttr('checked')
                //             $(elm).prop('checked', false)
                //         });
                //         $('.zongjia span').html(0);
                //         $('.alls2').prop('checked', false);
                //     } else {
                //         $('.xr-product').find('.check').attr('data-sty', 'sty');
                //         $('.xr-product').find('.check').each(function(i, elm) {
                //             // $(elm).attr('checked', 'checked')
                //             $(elm).prop('checked', true)
                //         });
                //         $('.zongjia span').html(0);
                //         let obj = $('.yuan>input');
                //         let addaddvalue = 0;
                //         for (let i = 0; i < obj.length; i++) {
                //             addaddvalue += ((parseInt($(obj[i]).val())));
                //         }
                //         $('.zongjia span').html((addaddvalue).toFixed(2));
                //         $('.alls2').prop('checked', true);

                //     }
                // })
                console.log($('.xr-product').find('.check'));
                $('.alls2').on('click', function() {
                    if (!!($('.xr-product').find('.check').attr('data-sty'))) {
                        $('.xr-product').find('.check').removeAttr('data-sty');
                        $('.xr-product').find('.check').each(function(i, elm) {
                            // $(elm).removeAttr('checked')
                            $(elm).prop('checked', false)
                        });
                        $('.zongjia span').html(0);
                        // $('.alls1').prop('checked', false);
                    } else {
                        $('.xr-product').find('.check').attr('data-sty', 'sty');
                        $('.xr-product').find('.check').each(function(i, elm) {
                            // $(elm).attr('checked', 'checked')
                            $(elm).prop('checked', true)
                        });
                        $('.zongjia span').html(0);
                        let obj = $('.yuan>input');
                        let addaddvalue = 0;
                        for (let i = 0; i < obj.length; i++) {
                            addaddvalue += ((parseInt($(obj[i]).val())));
                        }
                        $('.zongjia span').html((addaddvalue).toFixed(2));
                        // $('.alls1').prop('checked', true);

                    }
                })





            }
        });
    }
})()