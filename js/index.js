const tituloH1 = document.getElementById('titulo');
tituloH1.innerHTML = "Viajes y Prestamos";
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
        { id: 1, nombre: 'tulum', precio: 505360 , img: "https://images.unsplash.com/photo-1666051637751-19d52e003355?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
        { id: 2, nombre: 'mar del plata', precio: 100036 , img: "https://images.unsplash.com/photo-1561815907-c39c3c1c7f49?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
        { id: 3, nombre: 'rio de janeiro', precio: 20500 , img: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
];

let carrito = [];

productos.forEach((produ) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${produ.img}">
        <h3>${produ.nombre}</h3>
        <p class="price">$${produ.precio} </p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerHTML = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: produ.id,
            img: produ.img,
            nombre: produ.nombre,
            precio: produ.precio,
        });
        
    });
});

verCarrito.addEventListener("click", () => {
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
    `;
    
    modalContainer.append(carritoContent);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalbuying = document.createElement("div");
    totalbuying.className = "total-content";
    totalbuying.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalbuying);
});