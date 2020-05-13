var usuario = {
    hola: function() {
        console.log(this)
    }
}

var cliente = {
    hola: () => {
        console.log(this)
    }
}