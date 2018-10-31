console.log("Ejemplo sobre Math");
var numeroAleatorio=Math.random();
console.log(numeroAleatorio);

//Funcion copiada de documentacion
function devuelveNumAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}

var minimo=Number(prompt("Dame un numero"));
while(isNaN(minimo)){
  minimo=Number(prompt("Dame un numero"));
}

var numeroAleatorioDecimal=devuelveNumAleatorio(minimo,100);
var numeroAleatorioEntero=Math.round(numeroAleatorioDecimal);
console.log(numeroAleatorioEntero);
