//DEfinicion con arrays
var pseudorestaurantes=["mcdonalds","burguerking","tgb"];
var pseudesayunos=Array("colacao","nesquik","cacaoHacendado");
var edadAlumnos=[18,17,38,10];
//DEfinicion sin arrays
var pseudorestaurantes1="mcdonalds";
var pseudorestaurantes2="burguerking";
var pseudorestaurantes3="tgb";
//Muestro por pantalla
console.log(edadAlumnos);
//RETO 1
var diasSemana=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
var numsSemana=Array(1,2,3,4,5,6,7);
console.log(diasSemana);
//EJEMPLO DE ALMACENAJE MIXTO
var mixto=["lunes",1,"martes",2,"miercoles",3,true];
console.log(mixto);
//MOSTRAR SOLO EL FIN DE SEMANA
var diaDomingo=diasSemana[diasSemana.length-1];
console.log(diaDomingo);
console.log(diasSemana[diasSemana.length-2]);
//ARRAY DINAMICO
var posicionTablaValenciaLiga=[];
posicionTablaValenciaLiga.push(3);
posicionTablaValenciaLiga.push(12);
console.log(posicionTablaValenciaLiga.length);
posicionTablaValenciaLiga.push(7);
posicionTablaValenciaLiga.push(9);
console.log(posicionTablaValenciaLiga.length);
console.log(posicionTablaValenciaLiga)
