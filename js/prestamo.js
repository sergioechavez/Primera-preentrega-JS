document.getElementById('solicitudForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpiar cualquier mensaje anterior

    // Datos del solicitante
    const nombre = document.getElementById('nombre').value;
    if (nombre === "") {
        resultadoDiv.innerHTML += "<p>Por favor ingrese su Nombre y Apellido</p>";
        return;
    } else {
        resultadoDiv.innerHTML += "<p>Hola " + nombre + "</p>";
    }

    // Edad del solicitante
    const edad = parseInt(document.getElementById('edad').value, 10);
    if (isNaN(edad) || edad <= 0) {
        resultadoDiv.innerHTML += "<p>La edad ingresada debe ser mayor a 0</p>";
        return;
    } else if (edad < 18) {
        resultadoDiv.innerHTML += "<p>El solicitante debe ser mayor de 18 años de edad</p>";
        return;
    } else {
        resultadoDiv.innerHTML += "<p>Tienes aprobado $100000</p>";
    }

    // Opciones de cuotas
    const cantidadCuotas = parseInt(document.getElementById('cuotas').value, 10);
    const montoPrestamo = 100000;
    let total;

    if (cantidadCuotas === 3) {
        total = montoPrestamo / 10 + montoPrestamo / 3;
    } else if (cantidadCuotas === 6) {
        total = montoPrestamo / 10 + montoPrestamo / 6;
    } else if (cantidadCuotas === 9) {
        total = montoPrestamo / 10 + montoPrestamo / 9;
    } else if (cantidadCuotas === 12) {
        total = montoPrestamo / 10 + montoPrestamo / 12;
    } else {
        resultadoDiv.innerHTML += "<p>Opción Incorrecta!</p>";
        return;
    }

    resultadoDiv.innerHTML += "<p>La cuota es $" + total + "</p>";

const HOY = new Date();
});