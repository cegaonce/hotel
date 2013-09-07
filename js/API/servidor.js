// Servidor
function enviarDatos(nom, mail, tel, foto){
	$.ajax({
		type: "POST",
 		url: "http://www.igitsoft.com/pgtest.php",
		data: "nom=" + nom + "&mail="+mail+ "&tel="+tel
}).done(function( msg ) {
	if(msg==1){
		
	}else{
		navigator.notification.alert("No se han enviado los datos correctament" ,null, "Error en Servidor", "De acuerdo");
		
	}
});
}
