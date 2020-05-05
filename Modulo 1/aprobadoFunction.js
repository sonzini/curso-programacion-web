function obtenerPromedio(notas) {
    let sumatoria = 0;
    let cantidad = notas.length;

    for (let i = 0; i < notas.length; i++) {
        sumatoria = sumatoria + notas[i];
    }

    return sumatoria/cantidad;
}

function estaAprobado(promedio) {
    // if(promedio>= 6) {
    //     return true;
    // }
    // return false;

    return promedio>=4
}

function estaAprobadoToString(resultado) {
    if(resultado) {
        return "Esta aprobado";
    }

    return "No esta probado";
}

// let estaAprobado = promedio => promedio>=4

let notasDeJuan = [];

notasDeJuan.push(Number(prompt("Ingrese una nota.")));
notasDeJuan.push(Number(prompt("Ingrese una nota.")));
notasDeJuan.push(Number(prompt("Ingrese una nota.")));
notasDeJuan.push(Number(prompt("Ingrese una nota.")));
notasDeJuan.push(Number(prompt("Ingrese una nota.")));
notasDeJuan.push(Number(prompt("Ingrese una nota.")));

let promedio = obtenerPromedio(notasDeJuan);
let aprobado = estaAprobado(promedio);
let texto = estaAprobadoToString(aprobado);

// let resultado = estaAprobadoToString(estaAprobado(obtenerPromedio(notasDeJuan)))

alert(texto);