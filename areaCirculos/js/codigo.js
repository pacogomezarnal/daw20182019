//Inicializacion de variables
const PI=3.14;
var areaCirculo=0;
for (let radio = 3; radio <=30 ; radio=radio+2) {
  areaCirculo=PI*radio*radio;
  console.log(`El area de un circulo de radio ${radio} es ${areaCirculo}`);
}
