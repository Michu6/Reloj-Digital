$(document).ready(function() {
	// INTERVALO DE TIEMPO Q ACTUALIZARÁ EL TIEMPO
	setInterval(obtenerData, 1000);
	
	$('#openBtn').click(function(){
		$('#myModal').modal({show:true})
	});
	$(".check").click(eventoClick);
	// setInterval(obtenerDatos, 1000);
});

var data, hora;

// function obtenerDatos(){
// 	data = new Date();
// 	hora = data.getHours();
// 	var minutos = data.getMinutes();
// 	var segundos = data.getSeconds();
// 	var gmt = hora + 5 + parseInt(offset);
// 	var horaInt = gmt + ":" + data.getMinutes() + ":" + data.getSeconds(); 
// }
function eventoClick() {
	var isChecked = $(this).prop("checked");
	var offset = $(this).attr("data-pais");
	var valor = $(this).val();
	var inputText = $(this).closest('label').text();

	if (isChecked) {
		// agregar html
		data = new Date();
		hora = data.getHours();
		var minutos = data.getMinutes();
		var segundos = data.getSeconds();
		var gmt = hora + 5 + parseInt(offset);
		var horaInt = gmt + ":" + data.getMinutes() + ":" + data.getSeconds();	
		$("#huso").append("<div id='" + valor + "'>" + inputText + horaInt +"</div>");
		// setInterval(obtenerDatos, 1000);
	} else {
		$("#"+valor).remove();
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
}