//swiper
import { mySwiper } from "./library/swiper.js";
//jQuery
import $ from "./library/jquery.js";
//lazyload
import "./library/jquery.lazyload.js";


console.log(1);
$("img.lazy").lazyload({
    placeholder: "../images/lazy.jpg", //用图片提前占位
    // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
    effect: "fadeIn", // 载入使用何种效果
    // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
    // threshold: 200, // 提前开始加载
    // threshold,值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉
    // event: 'click',  // 事件触发时才加载
    // event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载,后两个值未测试…
    // container: $("#container"),  // 对某容器中的图片实现效果
    // container,值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片
    // failurelimit : 10 // 图片排序混乱时
    // failurelimit,值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题.
});

(function() {
    $.ajax({
        type: "get",
        url: "../../interface/getproduct.php",
        // data: "data",
        dataType: "json",
        success: function(res) {
            console.log(res);
            let temp = '';
            res.forEach((elm, i) => {
                // let picture = JSON.parse(elm.picture);
                // let picture = JSON.parse(elm.picture);
                temp += `<li>
                            <a href="./product.html?id=${elm.id}">
                                <img class="lazy" src="..${elm.picture}.jpg" alt="">
                                <p>${elm.title}</p>
                                <p>第十代英特尔酷睿i5-</p>
                                <p>￥ ${elm.price}</p>
                            </a>
                        </li>`;
            });
            $('#l-bijiben .product .p-c ').append(temp);
        }
    });
})()