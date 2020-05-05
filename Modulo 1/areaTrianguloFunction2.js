function areaTriangulo(b, a) {
    return (b*a)/2;
}

let base = Number(prompt("Ingrese la base del triangulo."));
let altura = Number(prompt("Ingrese la altura del triangulo."));

let resultado = areaTriangulo(base, altura)

alert("El area del triangulo es " + resultado);
