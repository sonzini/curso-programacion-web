var base = Number(prompt("Ingrese la base del triangulo."));
var altura = Number(prompt("Ingrese la altura del triangulo."));

function areaTriangulo(b, a) {
    var resultado = (b*a)/2;

    return resultado;
}

var respuesta = areaTriangulo(base, altura)

alert("El area del triangulo es " + respuesta);