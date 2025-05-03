// Datos de hoteles
const hoteles = [
    {
        nombre: "Grand Fiesta Americana Coral Beach",
        ubicacion: "Cancún, Quintana Roo",
        calificacion: 5,
        precio: 3500,
        descripcion: "Lujoso resort todo incluido frente al mar Caribe con spa de clase mundial.",
        imagen: "assets/images/hoteles/fiesta-americana.jpg",
        servicios: ["Alberca", "Spa", "Restaurante", "Bar", "Gimnasio"],
        disponibilidad: true
    },
    // Más hoteles...
];

// Datos de vuelos
const vuelos = {
    origenes: ["CDMX", "Guadalajara", "Monterrey", "Cancún", "Tijuana", "Mérida", "Oaxaca", "Puerto Vallarta"],
    destinos: ["CDMX", "Guadalajara", "Monterrey", "Cancún", "Tijuana", "Mérida", "Oaxaca", "Puerto Vallarta", "Los Cabos", "Huatulco"],
    vuelos: [
        {
            origen: "CDMX",
            destino: "Cancún",
            fecha: "2023-12-15",
            salida: "07:00",
            llegada: "09:30",
            duracion: "2h 30m",
            precio: 2500,
            aerolinea: "Aeroméxico"
        },
        // Más vuelos...
    ]
};

// Datos de autos
const autos = {
    ubicaciones: ["CDMX Aeropuerto", "Guadalajara Aeropuerto", "Cancún Aeropuerto", "Monterrey Aeropuerto", "Tijuana Aeropuerto", "Mérida Centro"],
    autos: [
        {
            marca: "Nissan",
            modelo: "Versa",
            tipo: "Compacto",
            capacidad: 5,
            precio: 800,
            imagen: "assets/images/autos/nissan-versa.jpg",
            ubicacion: "CDMX Aeropuerto"
        },
        // Más autos...
    ]
};

// Datos de tours
const tours = [
    {
        nombre: "Tour Chichen Itzá",
        ubicacion: "Yucatán",
        duracion: "12 horas",
        descripcion: "Visita a una de las 7 maravillas del mundo moderno con guía certificado.",
        precio: 1200,
        imagen: "assets/images/tours/chichen-itza.jpg"
    },
    // Más tours...
];

// Datos de actividades
const actividades = [
    {
        nombre: "Tour de Tequila",
        ubicacion: "Tequila, Jalisco",
        descripcion: "Recorrido por las principales destilerías de tequila con degustación incluida.",
        precio: 600,
        imagen: "assets/images/actividades/tequila-tour.jpg"
    },
    // Más actividades...
];

// Datos de playas
const playas = [
    {
        nombre: "Playa del Amor",
        ubicacion: "Cabo San Lucas, Baja California Sur",
        descripcion: "Famosa playa escondida entre formaciones rocosas solo accesible por mar.",
        actividades: ["Snorkel", "Paseo en barco", "Fotografía"],
        imagen: "assets/images/playas/playa-amor.jpg"
    },
    // Más playas...
];

// Datos de seguros
const seguros = [
    {
        tipo: "básico",
        cobertura: "1,000,000 MXN",
        beneficios: ["Asistencia médica", "Pérdida de equipaje"],
        precio: 250
    },
    // Más seguros...
];