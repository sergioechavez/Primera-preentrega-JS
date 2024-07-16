const tituloH1 = document.getElementById('titulo');
tituloH1.innerHTML = "Viajes y Prestamos";
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || []; //get item//

const getProdutos = async () => {
    const response = await fetch("data.json");
    const data = await response.json();

data.forEach((produ) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${produ.img}">
        <h3>${produ.nombre}</h3>
        <p class="price">$${produ.precio} </p>
        <p>cantidad: ${produ.cantidad}</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerHTML = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProdu) => repeatProdu.id === produ.id); 
        if (repeat){
            carrito.map((prod) => {
                if (prod.id === produ.id) {
                    prod.cantidad++;
                }
            });
        } else {
                    carrito.push({
            id: produ.id,
            img: produ.img,
            nombre: produ.nombre,
            precio: produ.precio,
            cantidad: produ.cantidad,
        });
        
        }
        carritoCounter();
        saveLocal();
    });
});
// Carrito//
    const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
    const modalbutton = document.createElement("h2");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
    
    modalbutton.addEventListener("click" , () =>{
        modalContainer.style.display = "none"
    });
    modalHeader.append(modalbutton);
    
    carrito.forEach((produ) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
        <img src="${produ.img}">
        <h3>${produ.nombre}</h3>
        <p>${produ.precio} $</p>
        <span class="restar"> - </span>
        <p>Cantidad: ${produ.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${produ.cantidad * produ.precio}</p>
        <span class="delete-product"> ❌ </span>
    `;
    
    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar")
    restar.addEventListener("click", () => {
        if(produ.cantidad !== 1) {
        produ.cantidad--;
        }
        saveLocal();
        pintarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar")
    sumar.addEventListener("click", () => {
        if(produ.cantidad !== 1) {
        produ.cantidad++;
        }
        saveLocal();
        pintarCarrito();
    });

    let eliminar = carritoContent.querySelector(".delete-product");

    eliminar.addEventListener("click", () => {
        eliminarProductos(produ.id);    
    });

});

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalbuying = document.createElement("div");
    totalbuying.className = "total-content";
    totalbuying.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalbuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProductos = (id) => {
    const foundId = carrito.find((Element) => Element.id === id);
    
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritolength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritolength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};


};

getProdutos();


//local storage set item//
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

carritoCounter();

