function obtenerTotalNeto(precioUnitario, cantidad) {
    var totalBruto = precioUnitario * cantidad;

    if(totalBruto >= 30) {
        return totalBruto * 0.7;
    }
    
    return totalBruto;
}

var precioUnitario = Number(prompt("Ingresa el precio por unidad"));
var cantidad = Number(prompt("Ingresa la cantidad"));

var totalNeto = obtenerTotalNeto(precioUnitario, cantidad)