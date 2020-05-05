function calcularPromedio(notas) {
  var suma = 0;
  var cantidad = notas.length;

  for (var i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
  }

  return suma / cantidad;
}

function estaAprobado(promedio) {
  return promedio >= 4;
}

function mostrarResultadoEnTexto(notas) {
  var promedio = calcularPromedio(notas);

  if (estaAprobado(promedio)) {
    return console.log("Esta aprobado con un promedio de: " + promedio);
  }
  console.log("No aprobo. Sorry bro.");
}

var cantidadDeNotas = Number(prompt("Ingresa la cantidad de notas"));
var notas = [];

for (var i = 0; i < cantidadDeNotas; i++) {
  var nota = Number(prompt("Ingresa la nota"));
  notas.push(nota);
}

mostrarResultadoEnTexto(notas);
