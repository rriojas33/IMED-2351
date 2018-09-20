
// JavaScript Document


var myElement = document.getElementById("second");

console.log (myElement.childNodes.length);



var myTag =document.getElementsByTagName("li");
console.log("number of primary colors:" +myTag.length);

var newItem = document.createElement("li");
var newText = document.createTextNode("Secondary colors are the combonation of Primary colors.");

myElement.appendChild(newItem);
newItem.appendChild(newText);

var myColors = ["green","orange","purple"];

alert ("Yellow and Blue make "+ myColors[0]);
alert ("Yellow and Red make "+ myColors[1]);
alert ("Red and Blue make "+ myColors[2]);







