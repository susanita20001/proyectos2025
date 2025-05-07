// Datos para los destinos (10 estados de México)
const estados = [
    {
        nombre: "Ciudad de México",
        descripcion: "La capital del país, llena de historia, cultura y vida nocturna vibrante.",
        hoteles: [
            { nombre: "Gran Hotel Ciudad de México", precio: "$1,500/noche" },
            { nombre: "Hotel Histórico Central", precio: "$1,200/noche" }
        ]
    },
    {
        nombre: "Quintana Roo",
        descripcion: "Hogar de Cancún, Playa del Carmen y Tulum, con playas paradisíacas.",
        hoteles: [
            { nombre: "Resort Paradisus Cancún", precio: "$2,500/noche" },
            { nombre: "Hotel Boutique Tulum", precio: "$1,800/noche" }
        ]
    },
    // Agregar los otros 8 estados aquí...
];

// Datos para vuelos
const vuelos = [
    {
        origen: "Ciudad de México",
        destino: "Cancún",
        fecha: "15/06/2025",
        hora: "08:30 AM",
        precio: "$2,400"
    },
    // Más vuelos...
];

// Datos para autos
const autos = [
    {
        modelo: "Nissan Versa",
        tipo: "Económico",
        precio: "$800/día",
        paquete: "Incluye seguro básico y kilometraje ilimitado"
    },
    // Más autos...
];

// Función para cargar datos en la página de destinos
function cargarDestinos() {
    if (document.getElementById('destinos-container')) {
        const container = document.getElementById('destinos-container');
        estados.forEach(estado => {
            const div = document.createElement('div');
            div.className = 'feature';
            div.innerHTML = `
                <i class="fas fa-map-marker-alt"></i>
                <h3>${estado.nombre}</h3>
                <p>${estado.descripcion}</p>
                <div class="hoteles">
                    <h4>Hoteles disponibles:</h4>
                    <ul>
                        ${estado.hoteles.map(hotel => `<li>${hotel.nombre} - ${hotel.precio}</li>`).join('')}
                    </ul>
                </div>
            `;
            container.appendChild(div);
        });
    }
}

// Función para cargar vuelos
function cargarVuelos() {
    if (document.getElementById('vuelos-container')) {
        const container = document.getElementById('vuelos-container');
        vuelos.forEach(vuelo => {
            const div = document.createElement('div');
            div.className = 'feature';
            div.innerHTML = `
                <i class="fas fa-plane"></i>
                <h3>${vuelo.origen} → ${vuelo.destino}</h3>
                <p>Fecha: ${vuelo.fecha}</p>
                <p>Hora: ${vuelo.hora}</p>
                <p>Precio: ${vuelo.precio}</p>
            `;
            container.appendChild(div);
        });
    }
}

// Cargar datos cuando la página esté lista
document.addEventListener('DOMContentLoaded', function() {
    cargarDestinos();
    cargarVuelos();
    // Otras funciones de carga...
});