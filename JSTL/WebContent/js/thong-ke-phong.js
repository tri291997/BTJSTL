$(document).ready(function(){
	$("#btn-thong-ke").click(function(e){
		var loaiPhong = $("#loaiPhong").val();
		var tinhTrang = $("#tinhTrang").val();
		
		$.ajax({
			type: 'POST',
			data: { loaiPhong: loaiPhong,
					tinhTrang: tinhTrang},
			url: 'ThongKePhong',
			success : function(ketqua){
				$("#table-thong-tin-phong").html(ketqua);
				var rows = $("#table-thong-tin-phong tr").length;
				$("#soPhong").text(rows);
			}
		});
	});
});