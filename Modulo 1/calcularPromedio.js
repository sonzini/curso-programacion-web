var notasDeJuan = [5,3,9,4];

function calcularPromedio(notas) {
    var suma = 0;
    var cantidad = notas.length;

    for(var i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }

    return suma/cantidad;
}

function estaAprobado(promedio) {
    return promedio>=4;
}

function estaPromocionado(promedio) {
    return promedio>=8;
}

