function notaFinal(nota1,nota2,nota3){
  let notaFinal=0; //Inicializando una variable
  notaFinal=(nota1+nota2+nota3)/3;
  return notaFinal;
}

function calculoBeneficio(compra,venta){
  return venta-compra;
}

//Usando la funcion
var calificacion=0;
calificacion=notaFinal(8,9,10);
console.log(calificacion);

//Usando la funcion the revenge
var n1=Number(prompt("Dame nota 1"));
var n2=Number(prompt("Dame nota 2"));
var n3=Number(prompt("Dame nota 3"));
calificacion=notaFinal(n1,n2,n3);
console.log(calificacion);
