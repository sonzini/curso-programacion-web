var numero1 = Number(prompt("número 1"));
var numero2 = Number(prompt("número 2"));
var numero3 = Number(prompt("número 3"));

var resultado;

if (numero1 == numero2 && numero1 == numero3) {
    resultado = "Los 3 numeros son iguales: " + numero1;
} else {
    if (numero1 == numero2) {
        if (numero1 > numero3) {
            resultado = "Los numeros 1 y 2 son mayores: " + numero1;
        } else {
            resultado = "El numero 3 es el mayor: " + numero3;
        }
    } else {
        if (numero2 == numero3) {
            if (numero2 > numero1) {
                resultado = "Los numeros 2 y 3 son mayores: " + numero2;
            } else {
                resultado = "El numero 1 es el mayor: " + numero1;
            }
        } else {
            if (numero1 == numero3) {
                if (numero1 > numero2) {
                    resultado = "Los numeros 1 y 3 son mayores: " + numero1;
                } else {
                    resultado = "El numero 2 es el mayor: " + numero2;
                }
            } else {
                if (numero1 > numero2 && numero1 > numero3) {
                    resultado = "El numero 1 es el mayor: " + numero1;
                } else {
                    if (numero2 > numero3) {
                        resultado = "El numero 2 es el mayor: " + numero2;

                    } else {
                        resultado = "El numero 3 es el mayor: " + numero3;
                    }
                }
            }
        }
    }
}

alert(resultado);
