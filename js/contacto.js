alert("Ingrese los contactos donde nos comuniquemos")

/*function Contacto(nombre, apellido, edad, telefono){
    this.nombre = prompt("Ingrese su nombre");
    this.apellido = prompt("Ingrese su apellido");
    this.telefono = prompt("Ingrese su numero de telefono");
}
console.log(Contacto)
const contacto = {};

contacto.nombre = prompt("Introduce el nombre del contacto:");
contacto.telefono = prompt("Introduce el teléfono del contacto:");

console.log(contacto);

alert("Muchas gracias en instante nos comunicaremos con vos!")

/*function Contacto(nombre, apellido, telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
}

const nombre = prompt("Ingrese su nombre:");
const apellido = prompt("Ingrese su apellido:");
const telefono = prompt("Ingrese su numero de telefono:");

const contacto = new Contacto("nombre", apellido, telefono);
console.log(Contacto);*/

class Contacto {
    constructor(nombre, apellido, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }
}
const contactos = [];
const cantidad = prompt("¿Ingrese el numero contactos deseas agregar?");

for (let i = 0; i < cantidad; i++) {
    const nombre = prompt(`Agregue el nombre del contacto ${i + 1}:`);
    const apellido = prompt(`Agregue el apellido del contacto ${i + 1}:`);
    const telefono = prompt(`Agregue el telefono del contacto ${i + 1}:`);
    const contacto = new Contacto(nombre, apellido, telefono);
    contactos.push(contacto);
}
console.log(contactos);

const primerTelefonoEncontrado = contactos.find(contacto => contacto.telefono);
console.log("Primer teléfono encontrado:", primerTelefonoEncontrado.telefono);

const telefonosEncontrado = contactos.filter(contacto => contacto.telefono);
console.log(telefonosEncontrado);

alert("En el transcurso del dia nos comunicaremos! Muchas gracias!");

const cuerpo = document.body;
const cabecera = document.getElementById('header');
const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const links = ["Index", "prestamo", "Contacto"];

const ORIGEN = document.createElement('a');

cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

for ( const link of links){

    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`
    ul.appendChild(li);
}