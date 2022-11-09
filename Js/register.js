function kiemtra() {
    var loi = "";
    // kiểm tra mā sinh viên
    var masv= document.getElementById("masv");
    if(masv.value ==""){
        masv.className="loi";
        loi += "Mã sinh viên không được bỏ trống <br>";
    }
    else if(masv.value.length!=7){
        masv.className="loi";
        loi += "Mã sinh viên không đúng 7 ký tự <br>";
    }
    else masv.className="txt";
    // kiểm tra họ và tên
    var hoten= document.getElementById("hoten");
    if(hoten.value==""){
        hoten.className="loi";
        loi += "Họ và tên không được bỏ trống.<br>";
    }
    else if(hoten.value.length>30){
        hoten.className="loi";
        loi += "Họ tên quá dài.<br>";
    }
    else hoten.className="txt";

    //kiểm tra email
    var email= document.getElementById ("email");
    if(email.value==""){
        email.className="loi";
        loi += "Email không được bỏ trống.<br>";
    }
    else email.className="txt";
    //kiểm tra phái
    dem=0;
    var arr_phai= document.getElementsByName("phai");
    for(var i=0; i<arr_phai.length; i++){
        if(arr_phai[i].checked == true) dem++;
    }
    if(dem==0){
        document.getElementById("fs1").className="loi";
        loi += "Phải chọn giới tính.<br>";
    }
    else document.getElementById ("fs1").className="";
    //kiểm tra sở thích
    dem=0;
    var arr_sothich= document.getElementsByName("st");
    for(var i=0;i<arr_sothich.length;i++){
         if(arr_sothich[i].checked ==true) dem++;
    }
    if(dem==0){
         document.getElementById("fs2").className="loi";
         loi += "Phải chọn ít nhất 1 sở thích.<br>";
    }
    else document.getElementById("fs2").className="";
    // kiểm tra quốc tịch
    var qt = document.getElementById ("quoctich"); 
    if (qt.value==0){
         qt.className="loi";
         loi += "Phải chọn quốc tịch.<br>";
    }
    else qt.className="txt";
    // kiểm tra ghi chú
    var gc= document.getElementById('ghichu');
    if(gc.value.length>200){
         gc.className="loi";
         loi += "Ghi chú phải dưới 200 kí tự.<br>";
    } 
    else gc.className="txt";
    // trả về giá trị kiểm tra
    if(loi!=""){
      document.getElementById('baoloi').innerHTML=loi;
      setTimeout("document.getElementById ('baoloi').innerHTML=''",6000);
      return false;
    }
}