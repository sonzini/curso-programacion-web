// Aplicar descuento del 30% si el precio bruto es 
// mayor o igual que 30

var precioUnitario = Number(prompt("Ingresa el precio por unidad"));
var cantidad = Number(prompt("Ingresa la cantidad"));
var totalBruto = precioUnitario * cantidad;
var totalNeto;

if(totalBruto >= 30) {
    totalNeto = totalBruto * 0.7;
} else {
    totalNeto = totalBruto;
}

alert("El total a cobrar es: " + totalNeto);