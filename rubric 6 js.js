// JavaScript Document
		
		var hobs="Art, Photography, Nature, Crafts and Animals";	 	

		
var username = prompt("Enter your name: ", "");
    if (confirm("Welcome " + username)) {
       document.write("<h1>Hello, " + username + "!</h1>");
    } else {
       document.write("<h1>Hello!</h1>");
    }
    var multiplier = prompt("Enter a multiplier: ");
    for (var number = 1; number <= 100; number++) {
	document.writeln(+ number * multiplier);}

