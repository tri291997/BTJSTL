$(document).ready(function () {    
    //Sự kiện add header, menu-left và footer vào page
    $.get('header.html', function (res) {
        $('#header').html(res);
    });
    $.get('menu.html', function (res) {
        $('#menu').html(res); 
        
        //Sự kiện khi click vào các sub-menu
        $("li#submenu2").click(function () {
            $("ul#sub-menu1").toggle();
        });
        $("li#submenu3").click(function () {
            $("ul#sub-menu2").toggle();
        });
        $("li#submenu4").click(function () {
            $("ul#sub-menu3").toggle();
        });
        $("li#submenu5").click(function () {
            $("ul#sub-menu4").toggle();
        });
        $("li#submenu6").click(function () {
            $("ul#sub-menu5").toggle();
        });
        $("li#submenu7").click(function () {
            $("ul#sub-menu6").toggle();
        });
        $("li#submenu8").click(function () {
            $("ul#sub-menu7").toggle();

        });

        //Sự kiện active menu
        var path = document.location.pathname;
        var namepage = '';
        var namefile = '';
        if (path.lastIndexOf('nhan-vien.jsp') >= 0) {
            namepage = 'TRANG CỦA BẠN';
            namefile = 'nhan-vien.jsp';
            $("li#submenu1").css("background-color", "#0d875c");
            $("li#submenu1 a:first").attr("style", "color: white !important");
        }
        if (path.lastIndexOf('tra-cuu-khach-dat.jsp') >= 0) {
            namepage = 'TRA CỨU > TRA CỨU KHÁCH ĐẶT';
            namefile = 'tra-cuu-khach-dat.jsp';
            $("li#submenu2").css("background-color", "#0d875c");
            $("li#submenu2 a:first").attr("style", "color: white !important");
        }
        if (path.lastIndexOf('them-phong.jsp') >= 0) {
            namepage = 'QUẢN LÝ PHÒNG > THÊM PHÒNG	';
            namefile = 'them-phong.jsp';
            $("li#submenu5").css("background-color", "#0d875c");
            $("li#submenu5 a:first").attr("style", "color: white !important");
        }
        
        if (path.lastIndexOf('chinh-sua-thong-tin-phong.jsp') >= 0) {
            namepage = 'QUẢN LÝ PHÒNG > CHỈNH SỬA THÔNG TIN PHÒNG	';
            namefile = 'chinh-sua-thong-tin-phong.jsp';
            $("li#submenu5").css("background-color", "#0d875c");
            $("li#submenu5 a:first").attr("style", "color: white !important");
        }
        
        if (path.lastIndexOf('xoa-phong.jsp') >= 0) {
            namepage = 'QUẢN LÝ PHÒNG > XÓA PHÒNG	';
            namefile = 'xoa-phong.jsp';
            $("li#submenu5").css("background-color", "#0d875c");
            $("li#submenu5 a:first").attr("style", "color: white !important");
        }
        
        if (path.lastIndexOf('thong-ke-phong.jsp') >= 0) {
            namepage = 'QUẢN LÝ PHÒNG > THỐNG KÊ PHÒNG	';
            namefile = 'thong-ke-phong.jsp';
            $("li#submenu5").css("background-color", "#0d875c");
            $("li#submenu5 a:first").attr("style", "color: white !important");
        }
        
        if (path.lastIndexOf('them-dich-vu.jsp') >= 0) {
            namepage = 'QUẢN LÝ DỊCH VỤ > THÊM DỊCH VỤ	';
            namefile = 'them-dich-vu.jsp';
            $("li#submenu6").css("background-color", "#0d875c");
            $("li#submenu6 a:first").attr("style", "color: white !important");
        }
        
        if (path.lastIndexOf('xoa-dich-vu.jsp') >= 0) {
            namepage = 'QUẢN LÝ DỊCH VỤ > XÓA DỊCH VỤ	';
            namefile = 'xoa-dich-vu.jsp';
            $("li#submenu6").css("background-color", "#0d875c");
            $("li#submenu6 a:first").attr("style", "color: white !important");
        }
        
        if (path.lastIndexOf('chinh-sua-dich-vu.jsp') >= 0) {
            namepage = 'QUẢN LÝ DỊCH VỤ > CHỈNH SỬA DỊCH VỤ	';
            namefile = 'chinh-sua-dich-vu.jsp';
            $("li#submenu6").css("background-color", "#0d875c");
            $("li#submenu6 a:first").attr("style", "color: white !important");
        }
        
        if (path.lastIndexOf('thong-ke-dich-vu.jsp') >= 0) {
            namepage = 'QUẢN LÝ DỊCH VỤ > THỐNG KÊ DỊCH VỤ	';
            namefile = 'thong-ke-dich-vu.jsp';
            $("li#submenu6").css("background-color", "#0d875c");
            $("li#submenu6 a:first").attr("style", "color: white !important");
        }
        
        if (path.lastIndexOf('them-vat-tu.jsp') >= 0) {
            namepage = 'QUẢN LÝ VẬT TƯ > THÊM VẬT TƯ	';
            namefile = 'them-vat-tu.jsp';
            $("li#submenu7").css("background-color", "#0d875c");
            $("li#submenu7 a:first").attr("style", "color: white !important");
        }
        
        if (path.lastIndexOf('chinh-sua-vat-tu.jsp') >= 0) {
            namepage = 'QUẢN LÝ VẬT TƯ > CHỈNH SỬA VẬT TƯ	';
            namefile = 'chinh-sua-vat-tu.jsp';
            $("li#submenu7").css("background-color", "#0d875c");
            $("li#submenu7 a:first").attr("style", "color: white !important");
        }
        
        if (path.lastIndexOf('xoa-vat-tu.jsp') >= 0) {
            namepage = 'QUẢN LÝ VẬT TƯ > XÓA VẬT TƯ	';
            namefile = 'xoa-vat-tu.jsp';
            $("li#submenu7").css("background-color", "#0d875c");
            $("li#submenu7 a:first").attr("style", "color: white !important");
        }
        
        if (path.lastIndexOf('thong-ke-vat-tu.jsp') >= 0) {
            namepage = 'QUẢN LÝ VẬT TƯ > THỐNG KÊ VẬT TƯ	';
            namefile = 'thong-ke-vat-tu.jsp';
            $("li#submenu7").css("background-color", "#0d875c");
            $("li#submenu7 a:first").attr("style", "color: white !important");
        }
        
        if (path.lastIndexOf('them-den-bu-vat-tu.jsp') >= 0) {
            namepage = 'ĐỀN BÙ VẬT TƯ > THÊM ĐỀN BÙ VẬT TƯ	';
            namefile = 'them-den-bu-vat-tu.jsp';
            $("li#submenu8").css("background-color", "#0d875c");
            $("li#submenu8 a:first").attr("style", "color: white !important");
        }
        
        if (path.lastIndexOf('xoa-den-bu-vat-tu.jsp') >= 0) {
            namepage = 'ĐỀN BÙ VẬT TƯ > XÓA ĐỀN BÙ VẬT TƯ	';
            namefile = 'xoa-den-bu-vat-tu.jsp';
            $("li#submenu8").css("background-color", "#0d875c");
            $("li#submenu8 a:first").attr("style", "color: white !important");
        }
        
        if (path.lastIndexOf('thong-ke-den-bu-vat-tu.jsp') >= 0) {
            namepage = 'ĐỀN BÙ VẬT TƯ > THỐNG KÊ ĐỀN BÙ VẬT TƯ	';
            namefile = 'thong-ke-den-bu-vat-tu.jsp';
            $("li#submenu8").css("background-color", "#0d875c");
            $("li#submenu8 a:first").attr("style", "color: white !important");
        }
        
        if (path.lastIndexOf('chinh-sua-den-bu-vat-tu.jsp') >= 0) {
            namepage = 'ĐỀN BÙ VẬT TƯ > CHỈNH SỬA ĐỀN BÙ VẬT TƯ	';
            namefile = 'chinh-sua-den-bu-vat-tu.jsp';
            $("li#submenu8").css("background-color", "#0d875c");
            $("li#submenu8 a:first").attr("style", "color: white !important");
        }
        
        if (path.lastIndexOf('lap-hoa-don.jsp') >= 0) {
            namepage = 'LẬP HÓA ĐƠN	';
            namefile = 'lap-hoa-don.jsp';
            $("li#submenu9").css("background-color", "#0d875c");
            $("li#submenu9 a:first").attr("style", "color: white !important");
        }

        $('#page-trich-dan').attr("href", namefile);
        $('#page-trich-dan').text(namepage);
    });
});