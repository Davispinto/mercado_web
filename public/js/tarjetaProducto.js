const agregarCompra = document.querySelectorAll(".agregarCompra");
const articulo = document.querySelector(".articulo");

    // inserta en el carrito de compras
const carritoDeCompras = (art) => {
    const { name } = art.target.dataset;
    const carritoModal = document.createElement("div");
    const articuloEncarrito = document.querySelectorAll(".cart-items")[0];
    const nombreArtCarrito = articuloEncarrito.querySelectorAll(".card-title");

    // no agarre mas de un mismo art
    for (let i = 0; i < nombreArtCarrito.length; i++) {
        if (nombreArtCarrito[i].innerText === name) {
            return;
        }
    }
    const contenidoCarrito = `<p><h5 class="card-title fs-5 mx-1">${name}</h5></p> <img src="../assets/img/${name}.png" class="card-img-top w-40 img-fluid"></img>`;
    carritoModal.innerHTML = contenidoCarrito;
    articuloEncarrito.append(carritoModal);
};

agregarCompra.forEach(button => button.addEventListener("click", carritoDeCompras));