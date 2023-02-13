function recupererSomme() {
	// importer du stockage
	var passVariable = document.cookie
		.split("; ")
		.find((row) => row.startsWith("pass"))
		.substring(5);

	// PARSE
	var params = new URLSearchParams(passVariable);
	var firstB = params.get("first");
	var secondB = params.get("second");

	document.write(firstB);
	document.write(secondB);
}
