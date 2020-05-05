// Arbol de navidad

// son 5 lineas.. con espacios y asteriscos


function crearEspacios(numero) {
    var resultado = "";
    
    for (let i = 0; i < numero; i++) {
        resultado = resultado + ' ';
    }

    return resultado;
}

var espacios = 4;
var asteriscos = '*';

for (let i = 0; i < 5; i++) {
    if(i) {
        asteriscos += '**';
    }
    
    console.log(crearEspacios(espacios) + asteriscos);
    espacios--;
}
