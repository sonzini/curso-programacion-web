var A = Number(prompt("Inserte el primer numero"));
var B = Number(prompt("Inserte el segundo numero"));
var C = Number(prompt("Inserte el tercer numero"));

var resultado;

if(A>B && A>C){
    resultado = A;
} else {
    if(B>C) {
        resultado = B;
    } else {
        resultado = C;
    }
}

alert("El numero mas alto es: " + resultado);

