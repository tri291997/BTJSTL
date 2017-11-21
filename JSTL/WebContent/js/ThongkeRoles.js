$(document).ready(function(){
	$("#btn-thong-ke").click(function(e){	
		$.ajax({
			type: 'POST',
			data : {},
			url: 'DsRoles',
			success : function(ketqua){
				$("#table-thong-tin-phong").html(ketqua);			
			}
		});
	});
});