var jugadores=[];
var jugadoresCanastas2=[];
var jugadoresCanastas3=[];
var maximoAnotador=-1;
var maximaAnotacion=0;
function pedirJugador(){
  let nombreJugador=prompt("Nombre de un jugador");
  if(nombreJugador=="SALIR") return false;
  jugadores.push(nombreJugador);
  let canastas2=Number(prompt(`Canastas de 2 del Jugador ${nombreJugador}`));
  jugadoresCanastas2.push(canastas2);
  let canastas3=Number(prompt(`Canastas de 3 del Jugador ${nombreJugador}`));
  jugadoresCanastas3.push(canastas3);
  return true;
}
function calcularMax(i){
  let maximaAnotacionTemp=jugadoresCanastas2[i]*2+jugadoresCanastas3[i]*3;
  if(maximaAnotacionTemp>maximaAnotacion){
    maximaAnotacion=maximaAnotacionTemp;
    maximoAnotador=i;
  }
}

//Pedir jugadores
while (pedirJugador());

//Calcular maximo anotador
for (var i = 0; i < jugadores.length; i++) {
  calcularMax(i);
}
