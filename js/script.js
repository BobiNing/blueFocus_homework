var n = 1;
var timer2;
function imageMov(elem, pos, time) {
    var n = time / 30;
    var x = elem.offsetLeft - elem.parentNode.offsetLeft;
    var evey_distance = (pos - x) / n;

    function carousel() {
        x += evey_distance;
        elem.style.left = x + "px";
        if (x != pos)
            timer2 = setTimeout(carousel, 30);
    }
    timer2 = setTimeout(carousel, 30);
}
function imageCarousel() {
    var image = document.getElementById("image");
    var l = document.getElementById("showImage").offsetWidth;
    var mark = document.getElementById("mark").children;

    for (var i = 0; i < mark.length; i++) {
        mark[i].style.width = "10px";
    }
    if (n == image.children.length) {
        n = 0;
    }
    imageMov(image, n * l * -1, 3000);
    mark[n].style.width = "20px";
    n++;

    timer1 = setTimeout(imageCarousel, 4000);
}
var timer1 = setTimeout(imageCarousel, 1000);

//    鼠标点击切换到对应图片
var mark = document.getElementById("mark");
mark.onclick = function (e) {
    var e_src = e.srcElement;
    if (e_src != mark) {
        clearTimeout(timer1);
        clearTimeout(timer2);
        var image_li = mark.getElementsByTagName("li");
        for (var i = 0; i < image_li.length; i++) {
            if (e_src == image_li[i]) {
                n = i;
                imageCarousel();
                break;
            }
        }
    }
}


//选项卡切换
var tab = document.getElementById("tab");
tab.onclick = function (e) {
    var l = 0;
    var e_src = e.srcElement;
    var tab_li = tab.getElementsByTagName("li");
    for (var k in tab_li) {
        if (tab_li[k] == e_src) {
            l = 1;
        }
    }
    if (l == 1) {
        for (var i = 0; i < tab_li.length; i++) {
            if (tab_li[i] == e_src) {
                tab_li[i].style.borderBottom = "5px solid #d13031";
                tab_li[i].style.color = "#d13031";
                tab_li[i].children[0].style.display = "block"
            } else {
                tab_li[i].style.color = "#000";
                tab_li[i].style.borderBottom = "5px";
                tab_li[i].children[0].style.display = "none"
            }
        }
    }
}
