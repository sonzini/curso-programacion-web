let numero1 = Number(prompt("Ingrese en numero 1: "));
let numero2 = Number(prompt("Ingrese en numero 2: "));
let numero3 = Number(prompt("Ingrese en numero 3: "));

let resultado;

if (numero1 == numero2 && numero1 == numero3) {
    resultado = "Los 3 numeros son iguales";
} else {
    if (numero2 == numero3) {
        if (numero2 > numero1) {
            resultado = "El numero 2 y 3 son mayores: " + numero2;
        } else {
            resultado = "El numero 1 es mayor: " + numero1;
        }
    } else {
        if (numero1 == numero3) {
            if (numero1 > numero2) {
                resultado = "El numero 1 y 3 son mayores: " + numero1;
            } else {
                resultado = "El numero 2 es mayor: " + numero1;
            }
        } else {
            if (numero1 == numero2) {
                if (numero1 > numero3) {
                    resultado = "El numero 1 y 2 son mayores: " + numero1;
                } else {
                    resultado = "El numero 3 es mayor: " + numero3;
                }
            } else {
                if (numero1 > numero2 && numero1 > numero3) {
                    resultado = "El numero 1 es mayor: " + numero1;
                } else {
                    if (numero2 > numero3) {
                        resultado = "El numero 2 es mayor: " + numero2;
                    } else {
                        resultado = "El numero 3 es mayor: " + numero3;
                    }
                }
            }
        }
    }
}