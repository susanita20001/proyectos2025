let reservaciones = [];

function addReservation(type, item, date, people, paymentInfo) {
    const reservation = {
        id: Date.now(),
        type,
        item,
        date,
        people,
        paymentInfo,
        status: 'confirmed',
        createdAt: new Date().toISOString()
    };
    
    reservaciones.push(reservation);
    return reservation;
}

function getReservationById(id) {
    return reservaciones.find(r => r.id === id);
}

function cancelReservation(id) {
    const index = reservaciones.findIndex(r => r.id === id);
    if (index !== -1) {
        reservaciones[index].status = 'cancelled';
        return true;
    }
    return false;
}

function getUserReservations() {
    return [...reservaciones];
}

function generateReservationPDF(reservation) {
    const pdfData = {
        title: `Comprobante de Reservación - MexiViajes`,
        reservationId: reservation.id,
        date: reservation.date,
        details: `${reservation.type}: ${reservation.item}`,
        people: reservation.people,
        paymentMethod: `Tarjeta terminada en ${reservation.paymentInfo.last4}`,
        total: calculateTotal(reservation),
        contactEmail: 'sht23413070030463@cecyteh.edu.mx'
    };
    
    console.log('Generando PDF:', pdfData);
    return pdfData;
}

function calculateTotal(reservation) {
    let basePrice = 0;
    
    switch(reservation.type) {
        case 'hotel':
            const hotel = hoteles.find(h => h.nombre === reservation.item);
            basePrice = hotel ? hotel.precio * reservation.people : 0;
            break;
        case 'vuelo':
            const flightInfo = reservation.item.split('-');
            const flight = vuelos.vuelos.find(f => 
                f.origen === flightInfo[0] && 
                f.destino === flightInfo[1] && 
                f.fecha === flightInfo[2]
            );
            basePrice = flight ? flight.precio * reservation.people : 0;
            break;
        case 'auto':
            const carInfo = reservation.item.split('-');
            const car = autos.autos.find(c => 
                c.marca === carInfo[0] && 
                c.modelo === carInfo[1]
            );
            basePrice = car ? car.precio : 0;
            break;
        case 'tour':
            const tour = tours.find(t => t.nombre === reservation.item);
            basePrice = tour ? tour.precio * reservation.people : 0;
            break;
        case 'actividad':
            const activity = actividades.find(a => a.nombre === reservation.item);
            basePrice = activity ? activity.precio * reservation.people : 0;
            break;
    }
    
    return basePrice;
}