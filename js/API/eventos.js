// Eventos
$(document).ready(function(){
	document.addEventListener("deviceready", function(){
		window.location.href="#registro";
	$('#regEnv').tab(function(){
		var nom = $('#regNom').val();	
		var mail = $('#regMail').val();
		var tel = $('#regTel').val();
		var foto = $('#regFoto').attr('foto');
		
		if(nom !=  '' && mail != '' && tel != '' && foto != '' && foto != undefined ){
		}
		
		else{
		navigator.notification.alert ("Todos los campos son requeridos", null, 'Registro', 'Aceptar');
}
// se manda un mensaje alert(nom + '\n' + mail + '\n' +  tel);
});
$('#regFoto').tap(function(){
	tomarFoto();
	});
	
	//Crear Reservas
	$('#nr1 ul[data-role=listview] li').tap(function(){
		var btn = $(this);
		if(btn.index()!=0){
			$('nr1').attr('th',btn.index());
			btn.css('background', 'green');	
		}
	
	});
		$('#resSig').tap(function(){
			if ($('#nr1').attr('th')!=undefined)
			window.location.href="#nr2";
		});
		$('#resEnv').tap(function(){
			var th=$('#nr1').attr('th');
			var pr=$('#resPer').val();
			var ha=$('#resHab').val();
			var di=$('#resDia').val();
			
			if(estaConectado())
			var a; // subir los datos
			
			else
			guardarReserva(th, pr, ha, di);	//guardar localmente
			
			
		});
	

}, false);

});
