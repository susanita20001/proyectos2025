const hoteles = [
    {
        nombre: "Grand Fiesta Americana Coral Beach",
        ubicacion: "Cancún, Quintana Roo",
        descripcion: "Lujoso resort todo incluido frente al mar con spa de clase mundial y múltiples restaurantes gourmet.",
        precio: 4500,
        estrellas: 5,
        imagen: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        nombre: "Hotel Mar de Cortez",
        ubicacion: "La Paz, Baja California Sur",
        descripcion: "Encantador hotel frente al mar con ambiente rústico y excelente servicio personalizado.",
        precio: 2800,
        estrellas: 4,
        imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        nombre: "Las Brisas Acapulco",
        ubicacion: "Acapulco, Guerrero",
        descripcion: "Iconico hotel con vistas espectaculares a la bahía de Acapulco y albercas infinitas.",
        precio: 3200,
        estrellas: 4,
        imagen: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        nombre: "Hotel Escondido",
        ubicacion: "Puerto Escondido, Oaxaca",
        descripcion: "Refugio boutique con diseño minimalista y ambiente relajado frente al Pacífico.",
        precio: 3800,
        estrellas: 4,
        imagen: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        nombre: "Hotel Mousai",
        ubicacion: "Puerto Vallarta, Jalisco",
        descripcion: "Exclusivo hotel para adultos con terraza privada y jacuzzi en cada habitación.",
        precio: 5200,
        estrellas: 5,
        imagen: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        nombre: "Four Seasons Resort Punta Mita",
        ubicacion: "Punta Mita, Nayarit",
        descripcion: "Lujoso complejo con campo de golf, spa y playas privadas en un entorno paradisíaco.",
        precio: 6800,
        estrellas: 5,
        imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        nombre: "Estancia Los Cabos",
        ubicacion: "Los Cabos, Baja California Sur",
        descripcion: "Hotel boutique con arquitectura contemporánea y servicio personalizado.",
        precio: 4200,
        estrellas: 4,
        imagen: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        nombre: "Secrets Maroma Beach",
        ubicacion: "Riviera Maya, Quintana Roo",
        descripcion: "Resort todo incluido para adultos con una de las mejores playas del Caribe.",
        precio: 5500,
        estrellas: 5,
        imagen: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        nombre: "Hotel San Cristóbal",
        ubicacion: "Tulum, Quintana Roo",
        descripcion: "Hotel boutique con diseño bohemio y ambiente relajado frente al mar Caribe.",
        precio: 3600,
        estrellas: 4,
        imagen: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        nombre: "Mahekal Beach Resort",
        ubicacion: "Playa del Carmen, Quintana Roo",
        descripcion: "Encantador resort con palapas frente al mar y ambiente auténticamente mexicano.",
        precio: 3900,
        estrellas: 4,
        imagen: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        nombre: "Hotel El Ganzo",
        ubicacion: "San José del Cabo, Baja California Sur",
        descripcion: "Hotel boutique con estudio de grabación, rooftop pool y ambiente artístico.",
        precio: 4100,
        estrellas: 4,
        imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        nombre: "One&Only Palmilla",
        ubicacion: "Los Cabos, Baja California Sur",
        descripcion: "Uno de los resorts más exclusivos de México con servicio impecable y playa privada.",
        precio: 8500,
        estrellas: 5,
        imagen: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];
function cargarHoteles() {
    const container = document.getElementById('hoteles-container');
    container.innerHTML = '';
    
    hoteles.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.className = 'hotel-card';
        
        const estrellas = '★'.repeat(hotel.estrellas);
        
        hotelCard.innerHTML = `
            <div class="hotel-img">
                <img src="${hotel.imagen}" alt="${hotel.nombre}">
            </div>
            <div class="hotel-info">
                <h3>${hotel.nombre}</h3>
                <div class="hotel-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${hotel.ubicacion}</span>
                </div>
                <div class="hotel-stars">${estrellas}</div>
                <p class="hotel-description">${hotel.descripcion}</p>
                <div class="hotel-price">Desde $${hotel.precio.toLocaleString('es-MX')} MXN/noche</div>
                <button class="btn" onclick="mostrarReserva('${hotel.nombre}', ${hotel.precio})">Reservar ahora</button>
            </div>
        `;
        
        container.appendChild(hotelCard);
    });
}

// Función para filtrar hoteles por estado
function filtrarHoteles() {
    const estado = document.getElementById('filtro-estado').value;
    const container = document.getElementById('hoteles-container');
    container.innerHTML = '';
    
    if (estado === 'todos') {
        cargarHoteles();
        return;
    }
    
    const hotelesFiltrados = hoteles.filter(hotel => hotel.ubicacion.includes(estado));
    
    if (hotelesFiltrados.length === 0) {
        container.innerHTML = '<p class="no-result">No hay hoteles disponibles en este estado.</p>';
        return;
    }
    
    hotelesFiltrados.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.className = 'hotel-card';
        
        const estrellas = '★'.repeat(hotel.estrellas);
        
        hotelCard.innerHTML = `
            <div class="hotel-img">
                <img src="${hotel.imagen}" alt="${hotel.nombre}">
            </div>
            <div class="hotel-info">
                <h3>${hotel.nombre}</h3>
                <div class="hotel-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${hotel.ubicacion}</span>
                </div>
                <div class="hotel-stars">${estrellas}</div>
                <p class="hotel-description">${hotel.descripcion}</p>
                <div class="hotel-price">Desde $${hotel.precio.toLocaleString('es-MX')} MXN/noche</div>
                <button class="btn" onclick="mostrarReserva('${hotel.nombre}', ${hotel.precio})">Reservar ahora</button>
            </div>
        `;
        
        container.appendChild(hotelCard);
    });
}