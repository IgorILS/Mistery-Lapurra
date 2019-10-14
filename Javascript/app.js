//esto es una funcion que es llamado con el boton 

var getData = function(){
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	console.log(name+" "+age);

//si en el nombre pones un dos en la consola sales "bien sale 2" y si no metes yn dos sale "mal muy mal"
	//si la condicion es correcta te manda a google
	if (name == 2 ) {
	console.log("bien sale 2")

	location.href = "https://www.google.com";

	} 



else
	 {
	 	console.log("mal muy mal")
	 	
	 }
}	
// Todo esto sale en la consola que sale al pulsar F12

