//INICIALIZACION
var poblaciones=[];
//Pedir 3 poblaciones
for (let i = 0; i < 3; i++) {
  let poblacion=prompt("Dame una poblacion de Valencia");
  poblaciones.push(poblacion);
}
//Sacar por pantalla las tres poblaciones
for (let i = 0; i < poblaciones.length; i++) {
  console.log("La poblacion "+i+" es "+poblaciones[i]);
}
