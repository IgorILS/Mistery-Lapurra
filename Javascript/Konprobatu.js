//esto es una funcion que es llamado con el boton 

var getData = function(){
	var Erantzuna = document.getElementById("Erantzuna").value;
	console.log(Erantzuna+" ");

//si en el nombre pones un dos en la consola sales "bien sale 2" y si no metes yn dos sale "mal muy mal"
	//si la condicion es correcta te manda a google
	if (Erantzuna == 3 ) {
	console.log("bien sale 2")

	location.href = "Pasiloa.html";

window.alert("Zorionak iratzargailua desaktibatzea lortu duzu! Kontuz eduki lapurraerkin.");

	} 



else
	 {
	 	console.log("mal muy mal")
	 	location.href = "Amaiera_Iratxargailua.html";
	 }
}	
// Todo esto sale en la consola que sale al pulsar F12
