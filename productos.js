var productos = [
    { imagen: 'producto1.jpg', nombre: 'Conjunto de Mono', precio: '$4200' },
    { imagen: 'producto2.jpg', nombre: 'Licras Finas', precio: '$900' },
    { imagen: 'producto3.jpg', nombre: 'Licras Estampadas', precio: '$1400' },
    { imagen: 'producto4.jpg', nombre: 'Licras de Bolsillo', precio: '$1700' },
    { imagen: 'producto5.jpg', nombre: 'Chancletas Playeras', precio: '$1800' },
    { imagen: 'producto6.jpg', nombre: 'Sandalias', precio: '$3500' },
    { imagen: 'producto7.jpg', nombre: 'Bolsasa rubi', precio: '$230' },
    { imagen: 'producto8.jpg', nombre: 'Sobrecama de fleco', precio: '$2300' },
    { imagen: 'producto9.jpg', nombre: 'Enguatada de Dama', precio: '$2300' },
];

function cargarProductos() {
    var contenedorProductos = document.getElementById('productos');

    productos.forEach(function (producto) {
        var divProducto = document.createElement('div');
        divProducto.classList.add('producto');

        var imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        var nombreProducto = document.createElement('h3');
        nombreProducto.textContent = producto.nombre;

        var precioProducto = document.createElement('p');
        precioProducto.textContent = 'Precio: ' + producto.precio;

        var botonPedir = document.createElement('button');
        botonPedir.textContent = 'Pedir';
        botonPedir.addEventListener('click', function () {
            var mensaje = 'Hola, me interesa este producto: ' + producto.nombre + '\n\n[Adjunta la imagen del producto aquí]';
            var url = 'https://wa.me/+5358920317?text=' + encodeURIComponent(mensaje);
            window.location.href = url;
        });

        divProducto.appendChild(imagen);
        divProducto.appendChild(nombreProducto);
        divProducto.appendChild(precioProducto);
        divProducto.appendChild(botonPedir);

        contenedorProductos.appendChild(divProducto);
    });
}

window.addEventListener('load', cargarProductos);