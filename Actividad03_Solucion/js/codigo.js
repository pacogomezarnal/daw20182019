//Preguntamos los 3 nombres con sus marcas
var nombreCorredor1=prompt("Dime el corredor 1");
var marcaCorredor1=Number(prompt("Dime la marca del corredor 1"));
var nombreCorredor2=prompt("Dime el corredor 2");
var marcaCorredor2=Number(prompt("Dime la marca del corredor 2"));
var nombreCorredor3=prompt("Dime el corredor 3");
var marcaCorredor3=Number(prompt("Dime la marca del corredor 3"));

//Realizamos la clasificacion
var primerClasificadoNombre="";
var primerClasificadoMarca=0;
var segundoClasificadoNombre="";
var segundoClasificadoMarca=0;
var terceroClasificadoNombre="";
var terceroClasificadoMarca=0;
var diferencia=0;

//La marca del corredor 1 es menor a la del 2
if(marcaCorredor1<marcaCorredor2){
  //La marca del corredor 1 es menor a la del 3
  //Ganador 1
  if(marcaCorredor1<marcaCorredor3){
    primerClasificadoMarca=marcaCorredor1;
    primerClasificadoNombre=nombreCorredor1;
    //Una vez conocido el primero, el segundo y tercer puesto es fácil
    if(marcaCorredor2<marcaCorredor3){
      segundoClasificadoMarca=marcaCorredor2;
      segundoClasificadoNombre=nombreCorredor2;
      terceroClasificadoMarca=marcaCorredor3;
      terceroClasificadoNombre=nombreCorredor3;
    }else{
      segundoClasificadoMarca=marcaCorredor3;
      segundoClasificadoNombre=nombreCorredor3;
      terceroClasificadoMarca=marcaCorredor2;
      terceroClasificadoNombre=nombreCorredor2;
    }
  }else{
    //La marca del corredor 3 es menor a la del 1
    //Ganador 3
    primerClasificadoMarca=marcaCorredor3;
    primerClasificadoNombre=nombreCorredor3;
    //Una vez conocido el primero, el segundo y tercer puesto es fácil
    if(marcaCorredor2<marcaCorredor1){
      segundoClasificadoMarca=marcaCorredor2;
      segundoClasificadoNombre=nombreCorredor2;
      terceroClasificadoMarca=marcaCorredor1;
      terceroClasificadoNombre=nombreCorredor1;
    }else{
      segundoClasificadoMarca=marcaCorredor1;
      segundoClasificadoNombre=nombreCorredor1;
      terceroClasificadoMarca=marcaCorredor2;
      terceroClasificadoNombre=nombreCorredor2;
    }
  }
}else{
  if(marcaCorredor2<marcaCorredor3){
    //La marca del corredor 2 es menor a la del 3
    //Ganador 2
    primerClasificadoMarca=marcaCorredor2;
    primerClasificadoNombre=nombreCorredor2;
    //Una vez conocido el primero, el segundo y tercer puesto es fácil
    if(marcaCorredor3<marcaCorredor1){
      segundoClasificadoMarca=marcaCorredor3;
      segundoClasificadoNombre=nombreCorredor3;
      terceroClasificadoMarca=marcaCorredor1;
      terceroClasificadoNombre=nombreCorredor1;
    }else{
      segundoClasificadoMarca=marcaCorredor1;
      segundoClasificadoNombre=nombreCorredor1;
      terceroClasificadoMarca=marcaCorredor3;
      terceroClasificadoNombre=nombreCorredor3;
    }
  }
}

//Calculamos la diferencia de tiempo
diferencia=terceroClasificadoMarca-primerClasificadoMarca;

console.log(`El primer clasificado es ${primerClasificadoNombre} su marca es ${primerClasificadoMarca}`);
console.log(`El segundo clasificado es ${segundoClasificadoNombre} su marca es ${segundoClasificadoMarca}`);
console.log(`El tercer clasificado es ${terceroClasificadoNombre} su marca es ${terceroClasificadoMarca}`);
console.log(`La diferencia de tiempo entre el primer y ultimo clasificado es ${diferencia}`);
