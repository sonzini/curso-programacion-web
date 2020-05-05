// Crear funcion que retorne los clientes morosos (un array con los nombres de cada moroso)

// Datos:

var clientes = [
    {
        nombre: 'juan',
        saldo: 10
    },
    {
        nombre: 'pepe',
        saldo: 0
    },
    {
        nombre: 'jose',
        saldo: -15
    },
    {
        nombre: 'martina',
        saldo: -1
    },
    {
        nombre: 'maria',
        saldo: 20
    }
]

function clientesMorosos(clientes) {
    let morosos = [];

    for (let i = 0; i < clientes.length; i++) {
        let cliente = clientes[i];
        if(cliente.saldo < 0) {
            morosos.push(cliente);
        }
    }

    let nombres = [];

    for (let j = 0; j < morosos.length; j++) {
        let moroso = morosos[j];

        nombres.push(moroso.nombre);
        
    }

    return nombres;
}

let clientesMorosos2 = clientes  => clientes.filter(c => c.saldo < 0).map(c => c.nombre)
