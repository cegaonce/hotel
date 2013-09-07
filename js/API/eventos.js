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

}, false);

});
