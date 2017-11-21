$(document).ready(function(){
	$("#btn-thong-ke").click(function(e){
		e.preventDefault();
		
		var phiDV = $("input#phiDV").val().toLowerCase();
		var tinhTrang = $("select#tinhTrang").val().toLowerCase();
	    $("#table-thong-tin-dich-vu tr").each(function() {
	    	if(phiDV == "")
	    		$(this).toggle($(this).text().toLowerCase().indexOf(tinhTrang) > -1);
	    	else
	    		$(this).toggle(($(this).text().toLowerCase().indexOf(phiDV) > -1) 
	    		  && ($(this).text().toLowerCase().indexOf(tinhTrang) > -1));

	    });
	});
});