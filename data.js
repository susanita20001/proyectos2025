const estados = [
    {
        nombre: "Aguascalientes",
        descripcion: "Estado conocido por su Feria de San Marcos y su arquitectura colonial.",
        imagen: "https://via.placeholder.com/300x200?text=Aguascalientes",
        pueblos: ["Calvillo", "San José de Gracia", "Real de Asientos", "Pabellón de Arteaga"]
    },
    {
        nombre: "Baja California",
        descripcion: "Estado con hermosas playas y una vibrante vida nocturna en Tijuana.",
        imagen: "https://via.placeholder.com/300x200?text=Baja+California",
        pueblos: ["Ensenada", "Mexicali", "Tecate", "Rosarito"]
    },
    {
        nombre: "Baja California Sur",
        descripcion: "Paraíso de playas vírgenes y actividades acuáticas en Cabo San Lucas.",
        imagen: "https://via.placeholder.com/300x200?text=Baja+California+Sur",
        pueblos: ["La Paz", "Loreto", "Todos Santos", "Santa Rosalía"]
    },
    {
        nombre: "Campeche",
        descripcion: "Estado con impresionantes ruinas mayas y una ciudad amurallada.",
        imagen: "https://via.placeholder.com/300x200?text=Campeche",
        pueblos: ["Edzná", "Becal", "Palizada", "Seybaplaya"]
    },
    {
        nombre: "Chiapas",
        descripcion: "Tierra de selvas, cascadas y la majestuosa ciudad maya de Palenque.",
        imagen: "https://via.placeholder.com/300x200?text=Chiapas",
        pueblos: ["San Cristóbal de las Casas", "Comitán", "Chiapa de Corzo", "Tapachula"]
    },
    {
        nombre: "Chihuahua",
        descripcion: "Estado más grande de México con el espectacular Cañón del Cobre.",
        imagen: "https://via.placeholder.com/300x200?text=Chihuahua",
        pueblos: ["Creel", "Batopilas", "Casas Grandes", "Cuauhtémoc"]
    },
    {
        nombre: "Coahuila",
        descripcion: "Tierra de desiertos y vinos en la región norte de México.",
        imagen: "https://via.placeholder.com/300x200?text=Coahuila",
        pueblos: ["Parras de la Fuente", "Cuatro Ciénegas", "Arteaga", "Viesca"]
    },
    {
        nombre: "Colima",
        descripcion: "Pequeño estado con volcanes activos y playas tranquilas.",
        imagen: "https://via.placeholder.com/300x200?text=Colima",
        pueblos: ["Comala", "Suchitlán", "El Terrero", "Quesería"]
    },
    {
        nombre: "Durango",
        descripcion: "Escenario de películas del viejo oeste y paisajes desérticos.",
        imagen: "https://via.placeholder.com/300x200?text=Durango",
        pueblos: ["Nombre de Dios", "Mapimí", "Pueblo Nuevo", "Vicente Guerrero"]
    },
    {
        nombre: "Guanajuato",
        descripcion: "Estado colonial con ciudades patrimonio como San Miguel de Allende.",
        imagen: "https://via.placeholder.com/300x200?text=Guanajuato",
        pueblos: ["Dolores Hidalgo", "Mineral de Pozos", "Salvatierra", "Yuriria"]
    },
    {
        nombre: "Guerrero",
        descripcion: "Hogar de Acapulco y las playas paradisíacas de Ixtapa-Zihuatanejo.",
        imagen: "https://via.placeholder.com/300x200?text=Guerrero",
        pueblos: ["Taxco", "Chilpancingo", "Iguala", "Coyuca de Catalán"]
    },
    {
        nombre: "Hidalgo",
        descripcion: "Estado con impresionantes formaciones rocosas en Huasca de Ocampo.",
        imagen: "https://via.placeholder.com/300x200?text=Hidalgo",
        pueblos: ["Real del Monte", "Mineral del Chico", "Huichapan", "Zimapán"]
    },
    {
        nombre: "Jalisco",
        descripcion: "Cuna del mariachi, el tequila y la vibrante ciudad de Guadalajara.",
        imagen: "https://via.placeholder.com/300x200?text=Jalisco",
        pueblos: ["Tequila", "Tapalpa", "Mazamitla", "Lagos de Moreno"]
    },
    {
        nombre: "México",
        descripcion: "Estado que rodea la CDMX con pueblos mágicos y zonas arqueológicas.",
        imagen: "https://via.placeholder.com/300x200?text=Estado+de+México",
        pueblos: ["Valle de Bravo", "Tepotzotlán", "Malinalco", "El Oro"]
    },
    {
        nombre: "Michoacán",
        descripcion: "Famoso por sus mariposas monarca y la ciudad de Morelia, patrimonio cultural.",
        imagen: "https://via.placeholder.com/300x200?text=Michoacán",
        pueblos: ["Pátzcuaro", "Tlalpujahua", "Cuitzeo", "Santa Clara del Cobre"]
    },
    {
        nombre: "Morelos",
        descripcion: "Estado con aguas termales y la casa de Emiliano Zapata.",
        imagen: "https://via.placeholder.com/300x200?text=Morelos",
        pueblos: ["Tepoztlán", "Tlayacapan", "Xochitepec", "Jiutepec"]
    },
    {
        nombre: "Nayarit",
        descripcion: "Playas vírgenes y la isla de Mexcaltitán, cuna de la mexicanidad.",
        imagen: "https://via.placeholder.com/300x200?text=Nayarit",
        pueblos: ["Sayulita", "Compostela", "Jala", "Amatlán de Cañas"]
    },
    {
        nombre: "Nuevo León",
        descripcion: "Estado industrial con impresionantes paisajes montañosos.",
        imagen: "https://via.placeholder.com/300x200?text=Nuevo+León",
        pueblos: ["Santiago", "Linares", "Bustamante", "General Terán"]
    },
    {
        nombre: "Oaxaca",
        descripcion: "Rica cultura indígena, gastronomía y playas como Puerto Escondido.",
        imagen: "https://via.placeholder.com/300x200?text=Oaxaca",
        pueblos: ["Huautla de Jiménez", "Mitla", "Capulálpam de Méndez", "San Pablo Villa de Mitla"]
    },
    {
        nombre: "Puebla",
        descripcion: "Famosa por su arquitectura barroca y la gran pirámide de Cholula.",
        imagen: "https://via.placeholder.com/300x200?text=Puebla",
        pueblos: ["Chignahuapan", "Cuetzalan", "Zacatlán", "Xicotepec"]
    },
    {
        nombre: "Querétaro",
        descripcion: "Ciudad colonial donde se firmó la constitución mexicana.",
        imagen: "https://via.placeholder.com/300x200?text=Querétaro",
        pueblos: ["Bernal", "Jalpan de Serra", "Cadereyta", "Amealco"]
    },
    {
        nombre: "Quintana Roo",
        descripcion: "Hogar de Cancún, Playa del Carmen y las ruinas de Tulum.",
        imagen: "https://via.placeholder.com/300x200?text=Quintana+Roo",
        pueblos: ["Bacalar", "Isla Mujeres", "Holbox", "Mahahual"]
    },
    {
        nombre: "San Luis Potosí",
        descripcion: "Estado con la surrealista zona del Sótano de las Golondrinas.",
        imagen: "https://via.placeholder.com/300x200?text=San+Luis+Potosí",
        pueblos: ["Real de Catorce", "Xilitla", "Aquismón", "Ciudad Valles"]
    },
    {
        nombre: "Sinaloa",
        descripcion: "Conocido por su gastronomía marina y la ciudad colonial de Cosalá.",
        imagen: "https://via.placeholder.com/300x200?text=Sinaloa",
        pueblos: ["El Fuerte", "Mocorito", "Concordia", "Cosalá"]
    },
    {
        nombre: "Sonora",
        descripcion: "Desiertos espectaculares y la hermosa costa del Mar de Cortés.",
        imagen: "https://via.placeholder.com/300x200?text=Sonora",
        pueblos: ["Álamos", "Magdalena de Kino", "San Carlos", "Puerto Peñasco"]
    },
    {
        nombre: "Tabasco",
        descripcion: "Tierra del cacao y las impresionantes ruinas mayas de Comalcalco.",
        imagen: "https://via.placeholder.com/300x200?text=Tabasco",
        pueblos: ["Villahermosa", "Comalcalco", "Paraíso", "Cunduacán"]
    },
    {
        nombre: "Tamaulipas",
        descripcion: "Estado fronterizo con playas vírgenes y reservas naturales.",
        imagen: "https://via.placeholder.com/300x200?text=Tamaulipas",
        pueblos: ["Tampico", "Ciudad Mante", "Aldama", "Soto la Marina"]
    },
    {
        nombre: "Tlaxcala",
        descripcion: "El estado más pequeño con importantes zonas arqueológicas.",
        imagen: "https://via.placeholder.com/300x200?text=Tlaxcala",
        pueblos: ["Tlaxco", "Huamantla", "Calpulalpan", "Nanacamilpa"]
    },
    {
        nombre: "Veracruz",
        descripcion: "Puerto importante con influencia caribeña y ruinas de El Tajín.",
        imagen: "https://via.placeholder.com/300x200?text=Veracruz",
        pueblos: ["Xalapa", "Córdoba", "Orizaba", "Papantla"]
    },
    {
        nombre: "Yucatán",
        descripcion: "Hogar de Chichén Itzá y las espectaculares ciudades mayas.",
        imagen: "https://via.placeholder.com/300x200?text=Yucatán",
        pueblos: ["Valladolid", "Izamal", "Sisal", "Maní"]
    },
    {
        nombre: "Zacatecas",
        descripcion: "Ciudad colonial con minas de plata y arquitectura barroca.",
        imagen: "https://via.placeholder.com/300x200?text=Zacatecas",
        pueblos: ["Jerez", "Fresnillo", "Sombrerete", "Nochistlán"]
    }
];

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
        {
            origen: "Guadalajara",
            destino: "Puerto Vallarta",
            fecha: "2023-12-16",
            salida: "10:00",
            llegada: "10:45",
            duracion: "45m",
            precio: 1200,
            aerolinea: "Volaris"
        },
        {
            origen: "Monterrey",
            destino: "CDMX",
            fecha: "2023-12-17",
            salida: "18:00",
            llegada: "19:30",
            duracion: "1h 30m",
            precio: 1800,
            aerolinea: "Viva Aerobus"
        },
        {
            origen: "Cancún",
            destino: "Mérida",
            fecha: "2023-12-18",
            salida: "12:00",
            llegada: "12:45",
            duracion: "45m",
            precio: 900,
            aerolinea: "Interjet"
        },
        {
            origen: "Tijuana",
            destino: "Los Cabos",
            fecha: "2023-12-19",
            salida: "14:00",
            llegada: "15:00",
            duracion: "1h",
            precio: 1500,
            aerolinea: "Calafia Airlines"
        }
    ]
};

const autos = {
    ubicaciones: ["CDMX Aeropuerto", "Guadalajara Aeropuerto", "Cancún Aeropuerto", "Monterrey Aeropuerto", "Tijuana Aeropuerto", "Mérida Centro"],
    autos: [
        {
            marca: "Nissan",
            modelo: "Versa",
            tipo: "Compacto",
            capacidad: 5,
            precio: 800,
            imagen: "https://via.placeholder.com/200x150?text=Nissan+Versa",
            ubicacion: "CDMX Aeropuerto"
        },
        {
            marca: "Chevrolet",
            modelo: "Aveo",
            tipo: "Compacto",
            capacidad: 5,
            precio: 750,
            imagen: "https://via.placeholder.com/200x150?text=Chevrolet+Aveo",
            ubicacion: "Guadalajara Aeropuerto"
        },
        {
            marca: "Volkswagen",
            modelo: "Vento",
            tipo: "Sedán",
            capacidad: 5,
            precio: 900,
            imagen: "https://via.placeholder.com/200x150?text=Volkswagen+Vento",
            ubicacion: "Cancún Aeropuerto"
        },
        {
            marca: "Kia",
            modelo: "Rio",
            tipo: "Compacto",
            capacidad: 5,
            precio: 780,
            imagen: "https://via.placeholder.com/200x150?text=Kia+Rio",
            ubicacion: "Monterrey Aeropuerto"
        },
        {
            marca: "Toyota",
            modelo: "Corolla",
            tipo: "Sedán",
            capacidad: 5,
            precio: 1100,
            imagen: "https://via.placeholder.com/200x150?text=Toyota+Corolla",
            ubicacion: "Tijuana Aeropuerto"
        },
        {
            marca: "Ford",
            modelo: "Mustang",
            tipo: "Deportivo",
            capacidad: 4,
            precio: 2500,
            imagen: "https://via.placeholder.com/200x150?text=Ford+Mustang",
            ubicacion: "Cancún Aeropuerto"
        }
    ]
};

const actividades = [
    {
        nombre: "Tour de Tequila",
        ubicacion: "Tequila, Jalisco",
        descripcion: "Recorrido por las principales destilerías de tequila con degustación incluida.",
        precio: 600,
        imagen: "https://via.placeholder.com/300x200?text=Tour+de+Tequila"
    },
    {
        nombre: "Paseo en Globo",
        ubicacion: "Teotihuacán, Estado de México",
        descripcion: "Vuelo en globo aerostático sobre las pirámides de Teotihuacán al amanecer.",
        precio: 2500,
        imagen: "https://via.placeholder.com/300x200?text=Paseo+en+Globo"
    },
    {
        nombre: "Snorkel en Cenote",
        ubicacion: "Valladolid, Yucatán",
        descripcion: "Exploración de cenotes con equipo de snorkel y guía especializado.",
        precio: 400,
        imagen: "https://via.placeholder.com/300x200?text=Snorkel+en+Cenote"
    },
    {
        nombre: "Senderismo Nevado",
        ubicacion: "Nevado de Toluca, Estado de México",
        descripcion: "Excursión de senderismo por el cráter del Nevado de Toluca.",
        precio: 350,
        imagen: "https://via.placeholder.com/300x200?text=Senderismo+Nevado"
    },
    {
        nombre: "Tour Gastronómico",
        ubicacion: "Oaxaca, Oaxaca",
        descripcion: "Recorrido por mercados tradicionales y talleres de cocina oaxaqueña.",
        precio: 700,
        imagen: "https://via.placeholder.com/300x200?text=Tour+Gastronómico"
    },
    {
        nombre: "Avistamiento Ballenas",
        ubicacion: "Los Cabos, Baja California Sur",
        descripcion: "Paseo en barco para avistamiento de ballenas en temporada.",
        precio: 800,
        imagen: "https://via.placeholder.com/300x200?text=Avistamiento+Ballenas"
    }
];

const playas = [
    {
        nombre: "Playa del Amor",
        ubicacion: "Cabo San Lucas, Baja California Sur",
        descripcion: "Famosa playa escondida entre formaciones rocosas solo accesible por mar.",
        actividades: ["Snorkel", "Paseo en barco", "Fotografía"],
        imagen: "https://via.placeholder.com/300x200?text=Playa+del+Amor"
    },
    {
        nombre: "Playa Norte",
        ubicacion: "Isla Mujeres, Quintana Roo",
        descripcion: "Aguas cristalinas y arena blanca perfectas para relajarse.",
        actividades: ["Nadar", "Kayak", "Relajarse"],
        imagen: "https://via.placeholder.com/300x200?text=Playa+Norte"
    },
    {
        nombre: "Playa Balandra",
        ubicacion: "La Paz, Baja California Sur",
        descripcion: "Conocida por su formación rocosa en forma de hongo y aguas poco profundas.",
        actividades: ["Paddleboard", "Snorkel", "Picnic"],
        imagen: "https://via.placeholder.com/300x200?text=Playa+Balandra"
    },
    {
        nombre: "Playa Maruata",
        ubicacion: "Michoacán",
        descripcion: "Playas vírgenes frecuentadas por tortugas marinas para desovar.",
        actividades: ["Avistamiento tortugas", "Acampar", "Surf"],
        imagen: "https://via.placeholder.com/300x200?text=Playa+Maruata"
    },
    {
        nombre: "Playa Zipolite",
        ubicacion: "Oaxaca",
        descripcion: "Una de las pocas playas nudistas de México con fuerte oleaje.",
        actividades: ["Surf", "Yoga", "Relajarse"],
        imagen: "https://via.placeholder.com/300x200?text=Playa+Zipolite"
    },
    {
        nombre: "Playa Chen Río",
        ubicacion: "Cozumel, Quintana Roo",
        descripcion: "Piscinas naturales formadas por rocas en el mar Caribe.",
        actividades: ["Snorkel", "Nadar", "Explorar"],
        imagen: "https://via.placeholder.com/300x200?text=Playa+Chen+Río"
    }
];

const tours = [
    {
        nombre: "Tour Chichen Itzá",
        ubicacion: "Yucatán",
        duracion: "12 horas",
        descripcion: "Visita a una de las 7 maravillas del mundo moderno con guía certificado.",
        precio: 1200,
        imagen: "https://via.placeholder.com/300x200?text=Tour+Chichen+Itzá"
    },
    {
        nombre: "Tour Pueblos Mágicos",
        ubicacion: "Querétaro",
        duracion: "8 horas",
        descripcion: "Recorrido por los pueblos mágicos de Bernal y Tequisquiapan.",
        precio: 800,
        imagen: "https://via.placeholder.com/300x200?text=Tour+Pueblos+Mágicos"
    },
    {
        nombre: "Tour de la Revolución",
        ubicacion: "CDMX",
        duracion: "5 horas",
        descripcion: "Recorrido histórico por los lugares emblemáticos de la Revolución Mexicana.",
        precio: 500,
        imagen: "https://via.placeholder.com/300x200?text=Tour+Revolución"
    },
    {
        nombre: "Tour de las Leyendas",
        ubicacion: "Guanajuato",
        duracion: "3 horas",
        descripcion: "Paseo nocturno por las calles de Guanajuato contando sus leyendas más famosas.",
        precio: 300,
        imagen: "https://via.placeholder.com/300x200?text=Tour+Leyendas"
    },
    {
        nombre: "Tour del Vino",
        ubicacion: "Baja California",
        duracion: "6 horas",
        descripcion: "Visita a viñedos del Valle de Guadalupe con degustación de vinos.",
        precio: 900,
        imagen: "https://via.placeholder.com/300x200?text=Tour+del+Vino"
    },
    {
        nombre: "Tour de las Mariposas",
        ubicacion: "Michoacán",
        duracion: "8 horas",
        descripcion: "Visita al santuario de la mariposa monarca en temporada de migración.",
        precio: 700,
        imagen: "https://via.placeholder.com/300x200?text=Tour+Mariposas"
    }
];