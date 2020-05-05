
function obtenerTotalNeto(pu, c) {

    function aplicarDescuento(monto, descuento) {
        return monto - (monto * (descuento / 100));
    }
    
    let totalBruto = pu * c;

    if (totalBruto >= 30) {
        return aplicarDescuento(totalBruto, 30);
    } 
    
    return totalBruto;
}

let precioUnitario = Number(prompt("Ingresa el precio por unidad"));
let cantidad = Number(prompt("Ingresa la cantidad"));

let totalNeto = obtenerTotalNeto(precioUnitario, cantidad);

alert("El total a cobrar es: " + totalNeto);
