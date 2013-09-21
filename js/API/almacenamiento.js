//almacenamiento
	function altaUsuario(){
	window.localstorage.setitem('usuario', $ ('#regNom').val());	

	}

	function usuarioExiste(){
	if(window.localstorage.getItem('Usuario')!= undefined)
	return true;
	else
	return false;
	}
	
	function accesoBD(){
		var db = window.openDatabase("hotel", "1,0", "Hotel BD", 2000000);
		return db;
	}
		
	function guardarReserva(th, pr, ha, di){
		accesoBD().transaction(function(tx){tx.executeSql('Create table if no exists reservas (id unique, th, pr, ha, di)');
		tx.executeSql('INSERT INTO reservas (th,pr,ha,di) VALUES ("'+th+'","'+pr+'","'+ha+'","'+di+'")');
		}, function(err){
			alert('Error: ' + err.code);
		}, function(){
			navigator.notification.alert});
					
	}
	
	