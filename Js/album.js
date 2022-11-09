/*hầu như các function mình đã note hết, nên có hàm gì không hiểu hãy google và note thêm nhá các bro*/

/*hầu như các function mình đã note hết, nên có hàm gì không hiểu hãy google và note thêm nhá các bro*/

/*hầu như các function mình đã note hết, nên có hàm gì không hiểu hãy google và note thêm nhá các bro*/
/*hầu như các function mình đã note hết, nên có hàm gì không hiểu hãy google và note thêm nhá các bro*/
/*hầu như các function mình đã note hết, nên có hàm gì không hiểu hãy google và note thêm nhá các bro*/
/*hầu như các function mình đã note hết, nên có hàm gì không hiểu hãy google và note thêm nhá các bro*/
/*hầu như các function mình đã note hết, nên có hàm gì không hiểu hãy google và note thêm nhá các bro*/
/*hầu như các function mình đã note hết, nên có hàm gì không hiểu hãy google và note thêm nhá các bro*/

var arr_hinh = [
        "img/1.jpg",
        "img/2.jpg",
        "img/3.jpg",
        "img/4.jpg",
        "img/5.jpg",
        "img/6.jpg",
        "img/7.jpg",
        "img/8.jpg",
    ]
    // tạo mảng hình
let index = 0

function next() {
    /* function để next(tới) hình ảnh */
    index++;
    /* tăng dần giá trị */
    if (index >= arr_hinh.length) index = 0;
    /* đặt điều kiện nếu index lớn hơn arr_hinh thì index sẽ thành 0,
     ở đây arr_hinh đang có giá trị là 8, nếu index lớn hơn thì index = 0;... */
    var hinh = document.getElementById("hinh");
    /* get giá trị id của html(file: album.html dòng 17) */
    hinh.src = arr_hinh[index];
    /* đổ giá trị về file album (file: album.html dòng 17)*/
    document.getElementById("dem").innerHTML = index + 1 + "/" + arr_hinh.length;
    /* đổ giá trị về file album (file: album.html dòng 18)*/
}

function prev() {
    /* function để prev(lùi) hình ảnh */
    index--;
    /* giảm dần giá trị */
    if (index < 0) index = arr_hinh.length - 1;

    document.getElementById("hinh").src = arr_hinh[index];
    /* đổ giá trị về file album (file: album.html dòng 17)*/
    document.getElementById("dem").innerHTML = index + 1 + "/" + arr_hinh.length;
    /* đổ giá trị về file album (file: album.html dòng 17)*/
}
