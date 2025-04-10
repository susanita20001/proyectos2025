
let reservaActual = {
    paquete: '',
    precio: 0,
    hotel: '',
    fechaLlegada: '',
    fechaSalida: '',
    huespedes: 1,
    habitacion: 'estandar',
    actividades: [],
    total: 0,
    metodoPago: {
        nombre: '',
        tarjeta: '',
        expiracion: '',
        cvv: ''
    }
};

function mostrarReserva(paquete, precio) {
    reservaActual = {
        paquete: paquete,
        precio: precio,
        hotel: '',
        fechaLlegada: '',
        fechaSalida: '',
        huespedes: 1,
        habitacion: 'estandar',
        actividades: [],
        total: precio,
        metodoPago: {
            nombre: '',
            tarjeta: '',
            expiracion: '',
            cvv: ''
        }
    };
    
    document.getElementById('titulo-reserva').textContent = paquete;
    document.getElementById('resumen-paquete').textContent = `Paquete: ${paquete}`;
    document.getElementById('resumen-precio').textContent = `Precio base: $${precio.toLocaleString('es-MX')} MXN`;
    document.getElementById('resumen-actividades').textContent = `Actividades: $0 MXN`;
    document.getElementById('resumen-total').textContent = `Total: $${precio.toLocaleString('es-MX')} MXN`;
    
    const hoy = new Date().toISOString().split('T')[0];
    document.getElementById('fecha-llegada').min = hoy;
    document.getElementById('fecha-salida').min = hoy;
    
    document.getElementById('modal-reserva').style.display = 'block';
}

function cerrarModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}
function mostrarPago() {
  
    const fechaLlegada = document.getElementById('fecha-llegada').value;
    const fechaSalida = document.getElementById('fecha-salida').value;
    
    if (!fechaLlegada || !fechaSalida) {
        alert('Por favor selecciona las fechas de tu estancia');
        return;
    }
    
    if (new Date(fechaSalida) <= new Date(fechaLlegada)) {
        alert('La fecha de salida debe ser posterior a la fecha de llegada');
        return;
    }
    
    reservaActual.fechaLlegada = fechaLlegada;
    reservaActual.fechaSalida = fechaSalida;
    reservaActual.huespedes = document.getElementById('huespedes').value;
    reservaActual.habitacion = document.getElementById('habitacion').value;
    reservaActual.hotel = document.getElementById('hotel-seleccionado').value;
    
    reservaActual.actividades = Array.from(document.getElementById('actividades-seleccionadas').selectedOptions)
        .map(opt => opt.text);
    
    let totalActividades = 0;
    Array.from(document.getElementById('actividades-seleccionadas').selectedOptions).forEach(opt => {
        const precio = parseFloat(opt.text.match(/\$([\d,]+)/)[1].replace(',', ''));
        totalActividades += precio;
    });
    
    reservaActual.total = reservaActual.precio + totalActividades;
    
    document.getElementById('modal-reserva').style.display = 'none';
    document.getElementById('modal-pago').style.display = 'block';
}

function procesarPago() {
    const nombre = document.getElementById('card-name').value;
    const tarjeta = document.getElementById('card-number').value;
    const expiracion = document.getElementById('card-expiry').value;
    const cvv = document.getElementById('card-cvv').value;
    
    if (!nombre || !tarjeta || !expiracion || !cvv) {
        alert('Por favor completa todos los campos de la tarjeta');
        return;
    }
    
    if (tarjeta.length !== 16 || !/^\d+$/.test(tarjeta)) {
        alert('El número de tarjeta debe tener exactamente 16 dígitos');
        return;
    }
    
    if (!/^\d{3,4}$/.test(cvv)) {
        alert('El CVV debe tener 3 o 4 dígitos');
        return;
    }
    reservaActual.metodoPago = {
        nombre: nombre,
        tarjeta: tarjeta,
        expiracion: expiracion,
        cvv: cvv
    };
    const numeroReserva = 'MAR-' + Math.floor(100000 + Math.random() * 900000);
    
    document.getElementById('modal-pago').style.display = 'none';
    
    document.getElementById('ticket-numero').textContent = numeroReserva;
    document.getElementById('ticket-paquete').textContent = reservaActual.paquete;
    document.getElementById('ticket-hotel').textContent = reservaActual.hotel;
    document.getElementById('ticket-huespedes').textContent = reservaActual.huespedes;
    document.getElementById('ticket-habitacion').textContent = reservaActual.habitacion.charAt(0).toUpperCase() + reservaActual.habitacion.slice(1);
    document.getElementById('ticket-checkin').textContent = new Date(reservaActual.fechaLlegada).toLocaleDateString('es-MX');
    document.getElementById('ticket-checkout').textContent = new Date(reservaActual.fechaSalida).toLocaleDateString('es-MX');
    document.getElementById('ticket-actividades').textContent = reservaActual.actividades.join(', ') || 'Ninguna';
    document.getElementById('ticket-tarjeta').textContent = reservaActual.metodoPago.tarjeta.slice(-4);
    document.getElementById('ticket-total').textContent = `$${reservaActual.total.toLocaleString('es-MX')} MXN`;
    
    document.getElementById('modal-ticket').style.display = 'block';
}

function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setFontSize(22);
    doc.setTextColor(0, 102, 204);
    doc.text('Mar Hoteles', 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text('Tu escape perfecto en las playas de México', 105, 26, { align: 'center' });

    doc.setDrawColor(0, 102, 204);
    doc.setLineWidth(0.5);
    doc.line(20, 30, 190, 30);
    
    doc.setFontSize(18);
    doc.setTextColor(0);
    doc.text('¡Reserva confirmada!', 105, 40, { align: 'center' });
 
    doc.setFontSize(12);
    doc.text(`Reservación #${document.getElementById('ticket-numero').textContent}`, 105, 48, { align: 'center' });
 
    doc.setFontSize(14);
    doc.text('Detalles de la reserva:', 20, 60);
    
    doc.setFontSize(12);
    doc.text(`Paquete: ${reservaActual.paquete}`, 20, 70);
    doc.text(`Hotel: ${reservaActual.hotel}`, 20, 76);
    doc.text(`Huéspedes: ${reservaActual.huespedes}`, 20, 82);
    doc.text(`Habitación: ${reservaActual.habitacion.charAt(0).toUpperCase() + reservaActual.habitacion.slice(1)}`, 20, 88);
    doc.text(`Check-in: ${new Date(reservaActual.fechaLlegada).toLocaleDateString('es-MX')}`, 20, 94);
    doc.text(`Check-out: ${new Date(reservaActual.fechaSalida).toLocaleDateString('es-MX')}`, 20, 100);
    
    if (reservaActual.actividades.length > 0) {
        doc.text('Actividades seleccionadas:', 20, 106);
        let y = 112;
        reservaActual.actividades.forEach(actividad => {
            doc.text(`- ${actividad}`, 25, y);
            y += 6;
        });
    }
    
    doc.setFontSize(14);
    doc.text('Información de pago:', 20, y + 10);
    
    doc.setFontSize(12);
    doc.text(`Método de pago: Tarjeta terminada en ${reservaActual.metodoPago.tarjeta.slice(-4)}`, 20, y + 18);
    doc.text(`Total pagado: $${reservaActual.total.toLocaleString('es-MX')} MXN`, 20, y + 24);
   
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('¡Gracias por su reserva! En breve recibirá un correo con los detalles.', 105, 280, { align: 'center' });
    doc.text('© 2025 Mar Hoteles. Todos los derechos reservados.', 105, 285, { align: 'center' });
    
    doc.save(`reserva_${document.getElementById('ticket-numero').textContent}.pdf`);

    setTimeout(() => {
        cerrarModal();
    }, 1000);
}