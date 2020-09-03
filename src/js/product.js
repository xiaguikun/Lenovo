import $ from "./library/jquery.js";
import { cookie } from "./library/cookies.js";

$(function() {
    let id = location.search.split('=')[1];
    // console.log(id);

    $.ajax({
        type: "get",
        url: "../../interface/getitem.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function(res) {
            let picture = JSON.parse(res.picture);
            // console.log(picture);
            // console.log(res);
            let item = `<div class="main-l">
            <div class="bigtu"></div>

            <div class="small">
                <span class="iconfont icon-jiantou" style="transform:rotate(180deg);display:inline-block;"></span>
                <div class="smalltu">
                    <img src="../${picture[5].src}" alt="" class="p${id}-1">
                    <img src="../${picture[6].src}" alt="" class="p${id}-2">
                    <img src="../${picture[7].src}" alt="" class="p${id}-3">
                    <img src="../${picture[8].src}" alt="" class="p${id}-4">
                    <img src="../${picture[9].src}" alt="" class="p${id}-5">
                </div>
                <span class="iconfont icon-jiantou"></span>
            </div>
            <article>
                <p>商品编号：82DN0000CD</p>
                <p>
                    <span class="iconfont icon-deng"></span> 分享有礼
                </p>
                <p>
                    <span class="iconfont icon-xin1"></span> 收藏
                </p>
            </article>
        </div>
        <div class="main-r">
                <h1>${res.title}</h1>
                <p class="p1">第十代英特尔酷睿i5-10210U/Windows 10 家庭中文版/13.3英寸/16GB/512G SSD/GeForce MX350 2G独显/亮银</p>
                <div class="div1">
                    <div class="jiage">
                        <p>商城价</p>
                        <p><span>￥</span>${res.price}</p>
                        <p>
                            <span>累计评价</span>
                            <br>
                            <span>23008</span>
                        </p>
                    </div>
                </div>
                <div class="zengzhi">
                    <p>增值业务</p>
                    <p>支持</p>
                    <p><img src="../images/xiangqing/yijiuhuanxin.png" alt=""></p>
                    <p>高价回收，急速到账换新机</p>
                </div>
                <div class="caozuo">
                    <p>操作系统</p>
                    <p>Windows 10 家庭中文版</p>
                </div>
                <div class="peizhi">
                    <article>
                        <p>配置</p>
                    </article>
                    <div>
                        <p>小新Pro 13s</p>
                        <p>Air 14 2020</p>
                        <p>小新 Pro 13</p>
                        <p>小新 Pro 13 2020</p>
                    </div>
                </div>
                <div class="xuanze peizhi">
                    <article>
                        <p>选择配置</p>
                    </article>
                    <div>
                        <p>【十代i5/16GB/512G SSD/集成显卡...</p>
                        <p>【十代i5/16GB/512G SSD/MX350独...</p>
                        <p>【十代i5/8GB/512G SSD/集成显卡】...</p>
                        <p>【十代i7/16GB/512G SSD/MX350独...</p>
                    </div>
                </div>
                <div class="fenqi">
                    <p>分期付款</p>
                    <div class="huabei">
                        <div class="radio">
                            <input type="radio" name="sel">
                            <input type="radio" name="sel">
                            <input type="radio" name="sel">
                        </div>
                        <ul>
                            <li>
                                <p>¥2216.16x3期</p>
                                <p>手续费: 约￥49.83/期</p>
                            </li>
                            <li>
                                <p>¥1131.91x6期</p>
                                <p>手续费: 约￥48.75/期</p>
                            </li>
                            <li>
                                <p>¥582.20x12期</p>
                                <p>手续费: 约￥40.62/期</p>
                            </li>
                        </ul>
                    </div>
                    <div class="baitiao">
                        <div class="radio">
                            <input type="radio" name="sel">
                            <input type="radio" name="sel">
                            <input type="radio" name="sel">
                        </div>
                        <ul>
                            <li>
                                <p>¥2216.16x3期</p>
                                <p>手续费: 约￥49.83/期</p>
                            </li>
                            <li>
                                <p>¥1131.91x6期</p>
                                <p>手续费: 约￥48.75/期</p>
                            </li>
                            <li>
                                <p>¥582.20x12期</p>
                                <p>手续费: 约￥40.62/期</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="goumai">
                    <p>购买数量</p>
                    <div>
                        <span class="iconfont icon-jianhao4" id="jian"></span>
                        <input type="text" value=1 id="number" min="1" max="99">
                        <span class="iconfont icon-jiahao1" id="jia"></span>
                    </div>
                </div>
                <div class="gouwuche">
                    <div class="liji"><a href="./register.html" style="text-decoration:none;color:white;">立即购买</a></div>
                    <div class="jiaru"><a href="./shopcar.html">加入购物车</a></div>
                </div>
                <div class="p">
                    <p>使用 <span>联想智选APP<img src="../images/xiangqing/er.png" alt=""></span> 下单，享受更多优惠</p>

                </div>
            </div>`

            $('#main #mainn').append(item);
            let i = id - 1;
            $('#main #mainn .main-l .bigtu').css('background', 'url(../images/shujuku/p' + id + '-1.jpg)');
            $('.main-l .small .smalltu img').on('mouseenter', function() {
                $('.main-l .bigtu').css('background', 'url(../images/shujuku/' + $(this).attr('class') + '.jpg)')
            });
            // console.log($('#jian'));
            $('#jian').on('click', function() {
                $('#number').val(function() {
                        let value = parseInt($(this).val()) - 1;
                        if (value < 1) {
                            value = 1;
                        }
                        return value;
                    })
                    // console.log($('#number').val());
            })
            $('#jia').on('click', function() {
                $('#number').val(function() {
                    return parseInt($(this).val()) + 1;
                })
            })
            $('.jiaru').on('click', function() {
                addItem(res.id, res.price, $('#number').val())
            })
        }
    });

    function addItem(id, price, num) {
        let shop = cookie.get('shop');
        let product = {
            id: id,
            price: price,
            num: num
        }
        if (shop) {
            shop = JSON.parse(shop);
            if (shop.some(elm => elm.id == id)) {
                shop.forEach(elm => {
                    elm.id == id ? elm.num = num : null;
                })
            } else {
                shop.push(product);
            }
        } else {
            shop = [];
            shop.push(product);
        }
        cookie.set('shop', JSON.stringify(shop), 1);
    }
})