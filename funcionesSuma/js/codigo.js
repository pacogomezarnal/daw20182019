function sumaValores(a,b){
  return a+b;
}

var numero1=Number(prompt("Dame un numero"));
var numero2=Number(prompt("Dame otro numero"));

var resultado=sumaValores(numero1,numero2);

console.log(`El resultado de sumar ${numero1} y ${numero2} es ${resultado}`);
