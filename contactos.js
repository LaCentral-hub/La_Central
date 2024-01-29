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