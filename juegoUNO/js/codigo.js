//Inicializacion
var mazo=[];
var coloresMazo=[];
var colores=["azul","rojo","amarillo","verde"]

//Funcion que inicia el mazo de cartas
function iniciaMazo(){
  for(var k = 0; k < 2; k++){
    for (var j = 0; j < 4; j++) {
      for (let i = 0; i <= 9; i++) {
        mazo.push(i);
        coloresMazo.push(colores[j]);
      }
    }
  }
  console.log(mazo);
  console.log(coloresMazo);
}

iniciaMazo();
