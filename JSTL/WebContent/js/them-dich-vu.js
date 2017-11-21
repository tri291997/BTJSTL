$(document).ready(function () {
    $("button#btn-xac-nhan-thong-tin-dich-vu").click(function (e) {
    	e.preventDefault();
    	var maDV = "<td>" + $("input#maDV").val() + "</td>";
        var tenDV = "<td>"+ $("input#tenDV").val() + "</td>";
        var phiDV = "<td>"+ $("input#phiDV").val() + "</td>";
        var tinhTrang = "<td>"+ $("select#tinhTrang").val() + "</td>";
        $("table#table-thong-tin-dich-vu").append("<tr>" + maDV + tenDV + phiDV + tinhTrang +"</tr>"); 
    });
});