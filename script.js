window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('scroll-header', window.scrollY > 0);
});

var currentLocation = location.pathname;
var navLinks = document.querySelectorAll('nav ul li a');

function setActiveNavLink() {
    navLinks.forEach(function (link) {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
}

setActiveNavLink();

navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

var productos = [
    { imagen: 'producto1.jpg', nombre: 'Producto 1' },
    { imagen: 'producto2.jpg', nombre: 'Producto 2' },
    // Agrega más productos aquí
];

function cargarProductos() {
    var contenedorProductos = document.getElementById('productos');

    productos.forEach(function (producto) {
        var divProducto = document.createElement('div');
        divProducto.classList.add('producto');

        var imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        var nombreProducto = document.createElement('p');
        nombreProducto.textContent = producto.nombre;

        divProducto.appendChild(imagen);
        divProducto.appendChild(nombreProducto);

        contenedorProductos.appendChild(divProducto);
    });
}

window.addEventListener('load', cargarProductos);

function agregarEventosProductos() {
    var productos = document.getElementsByClassName('producto');

    Array.from(productos).forEach(function (producto) {
        producto.addEventListener('click', function () {
            console.log('Producto seleccionado: ', this.querySelector('p').textContent);
        });
    });
}

window.addEventListener('load', agregarEventosProductos);

var formContacto = document.getElementById('form-contacto');

formContacto.addEventListener('submit', function (event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, complete todos los campos del formulario.');
        return;
    }

    // Realizar el envío del formulario aquí

    // formContacto.reset();
});

var enlacesRedesSociales = document.querySelectorAll('.social-media a');

enlacesRedesSociales.forEach(function (enlace) {
    enlace.addEventListener('click', function (event) {
        event.preventDefault();
        var url = this.getAttribute('href');
        window.open(url, '_blank');
    });
});