alert("Consulta tu prestamo ahora");

// Datos del solicitante
let ingreseSuNombre = prompt("Ingrese su Nombre ");
let ingreseSuApellido = prompt("Ingrese su Apellido");
const VACIO = "";

if(ingreseSuNombre != VACIO && ingreseSuApellido != VACIO) {
    alert(" bienvenido " + ingreseSuNombre + " " + ingreseSuApellido)
} else {
    alert("Falta ingresar Informacio!")
    
}

//Edad del solicitante
let edadIngresada = prompt("Ingrese su Edad: ");
if(edadIngresada >= 18){
    
} else if (edadIngresada > 0 && edadIngresada < 18){
    alert("El solicitande debe ser mayor de 18 años de edad")
} else if(edadIngresada <= 0){
    alert("La edad ingresada debe ser mayor a 0")
} else {
    alert("La Edad Ingresada es Incorrecta ! Ingrese Solo Numeros")
}

//Opciones de cuotas
let cantidadCuotas = prompt("Elija cantidad de cuotas : 3 Cuotas (10%) \n 6 cuotas (30%) \n 9 Cuotas (50%) \n 12 Cuotas (100%)");
let montoPrestamo = 1000;
let total;

if (cantidadCuotas == 3){
    total = montoPrestamo/10+montoPrestamo/3
    alert("la cuotas es " + total)
}else if(cantidadCuotas == 6){
    total = montoPrestamo/10+montoPrestamo/6
    alert("la cuotas es " + total)
}else if(cantidadCuotas == 9){
    total = montoPrestamo/10+montoPrestamo/9
    alert("la cuotas es " + total)
}else if(cantidadCuotas == 12){
    total = montoPrestamo/10+montoPrestamo/12
    alert("la cuotas es " + total)
}else{
    alert("Opcion Incorrecta!")
}

