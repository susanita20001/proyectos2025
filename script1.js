// Funciones comunes a todas las páginas
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar componentes comunes
    initMobileMenu();
    initScrollToTop();
    setActiveNavLink();
});

function initMobileMenu() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.main-header').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        document.querySelector('.main-nav').classList.toggle('active');
    });
}

function initScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.className = 'scroll-to-top';
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollButton);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    });
    
    scrollButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Función para cargar hoteles (ejemplo)
function loadHotels(destination = '') {
    const container = document.getElementById('hoteles-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Filtramos si hay destino seleccionado
    const filteredHotels = destination 
        ? hoteles.filter(hotel => hotel.ubicacion.includes(destination))
        : hoteles;
    
    if (filteredHotels.length === 0) {
        container.innerHTML = '<p class="no-results">No se encontraron hoteles para este destino.</p>';
        return;
    }
    
    filteredHotels.forEach(hotel => {
        const card = document.createElement('div');
        card.className = 'hotel-card';
        card.innerHTML = `
            <img src="${hotel.imagen}" alt="${hotel.nombre}">
            <div class="hotel-info">
                <h3>${hotel.nombre}</h3>
                <div class="hotel-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${hotel.ubicacion}</span>
                </div>
                <div class="hotel-rating">
                    ${'★'.repeat(hotel.calificacion)}${'☆'.repeat(5 - hotel.calificacion)}
                </div>
                <p class="hotel-price">$${hotel.precio} MXN/noche</p>
                <button class="book-button" onclick="startReservation('hotel', '${hotel.nombre}')">Reservar ahora</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Función para inicializar select de destinos
function initDestinationSelect() {
    const select = document.getElementById('destino-hotel');
    if (!select) return;
    
    // Obtenemos todos los destinos únicos de los hoteles
    const destinations = [...new Set(hoteles.map(hotel => hotel.ubicacion))];
    
    destinations.forEach(destino => {
        const option = document.createElement('option');
        option.value = destino;
        option.textContent = destino;
        select.appendChild(option);
    });
    
    // Event listener para búsqueda
    select.addEventListener('change', function() {
        loadHotels(this.value);
    });
}

// Inicialización específica para página de hoteles
if (document.querySelector('.hoteles-main')) {
    initDestinationSelect();
    loadHotels();
}