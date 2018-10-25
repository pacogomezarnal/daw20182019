//PRIMER EJEMPLO
function suma(a,b){
  let total=a+b;
  return total;
}
//SEGUNDO EJEMPLO
function numerosPares(inicio,final){
  let contador=0;
  if((inicio%2)!=0){
    contador=inicio+1;
  }else{
    contador=inicio;
  }
  for (let i = contador; i <= final; i=i+2) {
    console.log(i);
  }
}

//USANDO LAS FUNCIONES
var num1=Number(prompt("Dame el primer numero"));
var num2=Number(prompt("Dame el primer numero"));
console.log(suma(num1,num2));
console.log(suma(3,-4));

var contadorInicio=Number(prompt("Dame el primer numero de la cuenta"));
var contadorFinal=Number(prompt("Dame el final de la cuenta"));
numerosPares(contadorInicio,contadorFinal);
