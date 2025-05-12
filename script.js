document.addEventListener('DOMContentLoaded', function() {
    // Manejar clics en botones de reserva
    const reservarButtons = document.querySelectorAll('.btn-reservar, .btn-contratar');
    reservarButtons.forEach(button => {
        button.addEventListener('click', function() {
            const servicio = this.closest('.hotel, .tour, .actividad, .seguro, .playa').querySelector('h3').textContent;
            alert(`Has seleccionado reservar: ${servicio}\nSerás redirigido al proceso de pago.`);
            // Aquí iría la lógica para redirigir al proceso de reserva/pago
        });
    });

    // Manejar el formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            this.reset();
        });
    }

    // Simular búsqueda en filtros
    const buscarButtons = document.querySelectorAll('.btn-buscar');
    buscarButtons.forEach(button => {
        button.addEventListener('click', function() {
            const seccion = this.closest('section').querySelector('h2').textContent;
            alert(`Buscando opciones en ${seccion}...`);
            // Aquí iría la lógica para filtrar resultados
        });
    });

    // Actualizar año en el footer
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = yearSpan.textContent.replace('2025', currentYear);
    }
});

// Funcionalidad para el carrusel de imágenes (si se implementa)
function initCarousels() {
    // Implementación de carruseles si se necesitan
}

// Funcionalidad para el menú móvil (si se implementa)
function initMobileMenu() {
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-button';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    const header = document.querySelector('header');
    if (header) {
        header.prepend(menuButton);
        
        menuButton.addEventListener('click', function() {
            const nav = document.querySelector('.main-nav');
            nav.classList.toggle('show');
        });
    }
}

// Inicializar funciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initCarousels();
    initMobileMenu();
});
