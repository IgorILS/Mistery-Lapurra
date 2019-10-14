window.onload = function() {
	
	window.location.hash = "no-back-button";
	window.location.hash = "Again-no-back-button";

	window.onhashchange = function() {

		window.location.hash = "no-back-button";
	}
}