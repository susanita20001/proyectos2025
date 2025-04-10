
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});
function mostrarActividades(tipo) {
    document.getElementById('actividades-dia').style.display = 'none';
    document.getElementById('actividades-noche').style.display = 'none';
    document.getElementById(`actividades-${tipo}`).style.display = 'grid';
    
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
}

document.getElementById('contacto-form').addEventListener('submit', function(e) {
    alert('Tu mensaje ha sido enviado. Nos pondremos en contacto contigo pronto.');
});

document.addEventListener('DOMContentLoaded', function() {
    cargarHoteles();
    llenarOpcionesHoteles();
    
    const actividadesSelect = document.getElementById('actividades-seleccionadas');
    if (actividadesSelect) {
        actividadesSelect.multiple = true;
        actividadesSelect.size = 6; // Mostrar 6 opciones a la vez
    }
});

document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por suscribirte a nuestro newsletter!');
    this.reset();
});

window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.querySelector('.copyright p').innerHTML = `&copy; ${new Date().getFullYear()} Mar Hoteles. Todos los derechos reservados.`;
document.addEventListener('DOMContentLoaded', function() {
    cargarHoteles();
    llenarOpcionesHoteles();
});
function llenarOpcionesHoteles() {
    const select = document.getElementById('hotel-seleccionado');
    hoteles.forEach(hotel => {
        const option = document.createElement('option');
        option.value = hotel.nombre;
        option.textContent = `${hotel.nombre} - ${hotel.ubicacion}`;
        select.appendChild(option);
    });
}
function actualizarResumen() {
    const paquete = document.getElementById('titulo-reserva').textContent;
    const precioBase = parseFloat(document.getElementById('resumen-precio').textContent.replace('Precio base: $', '').replace(' MXN', '').replace(',', ''));
    const huespedes = document.getElementById('huespedes').value;
    const habitacion = document.getElementById('habitacion').value;
    const hotel = document.getElementById('hotel-seleccionado').value;
    const actividades = Array.from(document.getElementById('actividades-seleccionadas').selectedOptions).map(opt => opt.text);
    
    let costoActividades = 0;
    Array.from(document.getElementById('actividades-seleccionadas').selectedOptions).forEach(opt => {
        const precio = parseFloat(opt.text.match(/\$([\d,]+)/)[1].replace(',', ''));
        costoActividades += precio;
    });
    
    const total = precioBase + costoActividades;
    
    document.getElementById('resumen-paquete').textContent = `Paquete: ${paquete}`;
    document.getElementById('resumen-actividades').textContent = `Actividades: $${costoActividades.toLocaleString('es-MX')} MXN`;
    document.getElementById('resumen-total').textContent = `Total: $${total.toLocaleString('es-MX')} MXN`;
}

document.getElementById('huespedes').addEventListener('change', actualizarResumen);
document.getElementById('habitacion').addEventListener('change', actualizarResumen);
document.getElementById('hotel-seleccionado').addEventListener('change', actualizarResumen);
document.getElementById('actividades-seleccionadas').addEventListener('change', actualizarResumen);