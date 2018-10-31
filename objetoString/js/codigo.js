console.log("Ejemplo string");

var frase=prompt("Dame una frase wey");
var fraseReves="";


for (let i = frase.length-1; i >= 0; i--) {
  fraseReves=fraseReves+frase.charAt(i);
}

console.log(fraseReves);
