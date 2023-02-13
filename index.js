function faireSomme() {
	// variable
	var first = "FOO";
	var second = ["Hello", "World"];

	// stockage cookie
	var params = new URLSearchParams();
	params.append("first", first);
	params.append("second", JSON.stringify(second));

	document.cookie = "pass=" + params.toString();

	// redirection
	location.href = "index2.html";
}
