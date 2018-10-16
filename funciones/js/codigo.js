function notaFinal(nota1,nota2,nota3){
  let notaFinal=0; //Inicializando una variable
  notaFinal=(nota1+nota2+nota3)/3;
  return notaFinal;
}
//Usando la funcion
var calificacion=0;
calificacion=notaFinal(8,9,10);
console.log(calificacion);
