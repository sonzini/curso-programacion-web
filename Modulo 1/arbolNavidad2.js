function crearArbolito() {
    let estrellas = "*";
    let espacios = 4;

    function creadorDeEspacios(cantidad) {
        resultado = "";

        for (let i = 0; i < cantidad; i++) {
            // resultado = resultado + " ";
            resultado += " ";
        }

        return resultado;
    }

    for (let i = 0; i < 5; i++) {
        console.log(creadorDeEspacios(espacios) + estrellas);
        estrellas += "**";
        espacios--
    }
}
