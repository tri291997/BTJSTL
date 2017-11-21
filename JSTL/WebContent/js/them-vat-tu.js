$(document).ready(function () {
    $("button#btn-xac-nhan-thong-tin-vat-tu").click(function (e) {
    	e.preventDefault();
    	var maVatTu = "<td>" + $("input#maVatTu").val() + "</td>";
        var tenVatTu = "<td>"+ $("input#tenVatTu").val() + "</td>";
        var giaTri = "<td>"+ $("input#giaTri").val() + "</td>";
        var tinhTrang = "<td>"+ $("select#tinhTrang").val() + "</td>";
        $("table#table-thong-tin-vat-tu").append("<tr>" + maVatTu + tenVatTu + giaTri + tinhTrang +"</tr>"); 
    });
});