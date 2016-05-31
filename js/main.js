$(document).ready(function() {
	// var gmt=null;
	// INTERVALO DE TIEMPO Q ACTUALIZARÁ EL TIEMPO
	setInterval(obtenerData, 1000);
	$('#openBtn').click(function(){
		$('#myModal').modal({show:true})
	});
	//------input-modal
	// var texto1 = $('#ciudad2').attr('data-pais');
	// var texto = $('#ciudad1').attr('data-pais');
	$(".janet").click(eventoClick)

	// is(checked)
	// $('#ciudad1').click(function(){
	// 	$('#ciudad1').attr('checked','checked');
	// 	if($('#ciudad1').attr('checked')=="checked"){
	// 		$('#huso').append('<div>'+texto+'</div>');
	// 	}

	// });
	// 	$('#ciudad2').click(function(){
	// 	$('#ciudad2').attr('checked','checked');
	// 	if($('#ciudad2').attr('checked')=="checked"){
	// 		$('#huso').append('<div>'+texto1+'</div>');
	// 	}

	// });


});

var data, hora;

function eventoClick() {
	var isChecked = $(this).prop("checked");
	var offset = $(this).attr("data-pais");
	if (isChecked) {
		// agregar html
		var gmt = hora + 5 + parseInt(offset);
		var horaInt = gmt + ":" + data.getMinutes() + ":" + data.getSeconds(); 
		$("#huso").append("<div>" + horaInt + "</div>")
	} else {
		// quitar el html
		// $("#huso").remove();
	}
}

function obtenerData() {
	data = new Date();
	hora = data.getHours();
	var minutos = data.getMinutes();
	var segundos = data.getSeconds();
	$("#hora").text(hora + ":" + minutos + ":" + segundos);


	var nombreDias = ["Domingo","Lunes", "Martes","Miércoles","Jueves","Viernes","Sábado"];
	var nombreMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];
	var diaFecha = data.getDate();
	var dia = data.getDay();
	var mes = data.getMonth();
	$("#fecha").text(nombreDias[dia] + ", "+ diaFecha + " de " + nombreMeses[mes]);

	// var gmt = hora + 5;

}

	
