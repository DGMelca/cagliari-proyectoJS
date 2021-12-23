/////////////// FUNCIONES 


// Carrito de compras

let precioItem = parseInt(prompt("Agregá el precio de tu producto:"));
let cantidad = parseInt(prompt("¿Cuántas unidades querés comprar?:"));

let carrito = precioItem * cantidad;
alert("Tu producto fue agregado con éxito");

console.log(carrito);


//Aplicar descuentos

let precioPromo = 0;
let voucher = prompt ("Ingresá tu voucher de descuento");

function descuentoPromo (carrito, voucher) {
    precioPromo = carrito - voucher;
}
descuentoPromo(carrito,voucher);
alert(`Felicidades! Aplicaste tu voucher, el producto te queda a $ ${precioPromo}.`);



// Medio de pagos 

let pago = prompt ("¿Con qué tarjeta pagás? Elegí: 1=Efectivo 2=Tarjeta de crédito");

if (pago === "1"){
    alert("Podés abonar cuando retiras tu pedido"); 
}else if(pago === "2"){
    alert("Podés avanzar con tu pago");

    let financiacion = 0;
let cuotas = prompt ("Ingresá la cantidad de cuotas que desea:");


function calcularCuotas (precioPromo, cuotas) {
        return precioPromo / cuotas;
    }

financiacion = calcularCuotas(precioPromo,cuotas);
    if (cuotas <=12){
        console.log(`Tu producto queda financiado en ${cuotas} cuotas de $ ${financiacion}.`);
    }else console.log("Disculpá, la cantidad de coutas es superior al permitido.");


}else{
    alert("La opción ingresada no es válida");
}







