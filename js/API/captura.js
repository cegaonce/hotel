// Captura
function tomarfoto(){
// start image capture
navigator.device.capture.captureImage(function(mediafiles){
	var i, path, len;
	for (i=0 , len = mediaFiles.length; i < len; i += 1){
			path = mediaFiles[i].fullpath;
			}
			$('#regFoto').attr('foto', path).css('background-color', '#0aa000');
			
},function(error) {
	navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
}, {limit:2});
			
}

