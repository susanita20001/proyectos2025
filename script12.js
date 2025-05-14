document.addEventListener('DOMContentLoaded', function () {
    // Cargar fecha automáticamente
    const fecha = new Date().toLocaleDateString();
    if (document.getElementById('fecha')) {
        document.getElementById('fecha').value = fecha;
    }

    // Calcular total de pizzas y complementos
    if (document.getElementById('calcular-total')) {
        document.getElementById('calcular-total').addEventListener('click', function () {
            const pizza1 = parseInt(document.getElementById('pizza1').value);
            const pizza2 = parseInt(document.getElementById('pizza2').value);
            const pizza3 = parseInt(document.getElementById('pizza3').value);

            const complementos = document.querySelectorAll('input[name="complementos"]:checked');
            let totalComplementos = 0;
            complementos.forEach(complemento => {
                totalComplementos += parseInt(complemento.value);
            });

            const total = pizza1 + pizza2 + pizza3 + totalComplementos;
            document.getElementById('total-pizzas').textContent = `Total de Pizzas: $${total}`;
        });
    }

    // Guardar datos y redirigir
    if (document.getElementById('pizzeria-form')) {
        document.getElementById('pizzeria-form').addEventListener('submit', function (event) {
            event.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const total = document.getElementById('total-pizzas').textContent.split('$')[1];
            const entrega = document.querySelector('input[name="entrega"]:checked').value;

            // Guardar detalles de las pizzas
            const pizza1 = document.getElementById('pizza1').options[document.getElementById('pizza1').selectedIndex].text;
            const pizza2 = document.getElementById('pizza2').options[document.getElementById('pizza2').selectedIndex].text;
            const pizza3 = document.getElementById('pizza3').options[document.getElementById('pizza3').selectedIndex].text;

            // Guardar complementos seleccionados
            const complementos = Array.from(document.querySelectorAll('input[name="complementos"]:checked')).map(c => c.nextSibling.textContent.trim());

            // Guardar en localStorage
            localStorage.setItem('nombre', nombre);
            localStorage.setItem('total', total);
            localStorage.setItem('pizza1', pizza1);
            localStorage.setItem('pizza2', pizza2);
            localStorage.setItem('pizza3', pizza3);
            localStorage.setItem('complementos', JSON.stringify(complementos));

            // Redirigir
            if (entrega === 'local') {
                window.location.href = 'entregalocal.html';
            } else {
                window.location.href = 'envio.html';
            }
        });
    }

    // Cargar datos en entrega local
    if (window.location.pathname.includes('entregalocal.html')) {
        const nombre = localStorage.getItem('nombre');
        const total = localStorage.getItem('total');
        const pizza1 = localStorage.getItem('pizza1');
        const pizza2 = localStorage.getItem('pizza2');
        const pizza3 = localStorage.getItem('pizza3');
        const complementos = JSON.parse(localStorage.getItem('complementos'));

        // Mostrar nombre y total
        document.getElementById('nombre-cliente').value = nombre;
        document.getElementById('total-pedido').value = `$${total}`;

        // Mostrar detalles del pedido
        const detalles = `Pizza 1: ${pizza1}\nPizza 2: ${pizza2}\nPizza 3: ${pizza3}\nComplementos: ${complementos.join(', ')}`;
        document.getElementById('detalles-pedido').value = detalles;

        // Redirigir según el método de pago seleccionado
        document.getElementById('entrega-local-form').addEventListener('submit', function (event) {
            event.preventDefault();
            const pago = document.querySelector('input[name="pago"]:checked').value;

            if (pago === 'tarjeta') {
                window.location.href = 'tarjeta.html';
            } else if (pago === 'efectivo') {
                window.location.href = 'efectivo.html';
            } else {
                alert('Por favor, selecciona un método de pago.');
            }
        });
    }

    // Cargar datos en envío
    if (window.location.pathname.includes('envio.html')) {
        const nombre = localStorage.getItem('nombre');
        document.getElementById('nombre-cliente').value = nombre;

        document.getElementById('envio-form').addEventListener('submit', function (event) {
            event.preventDefault();
            const pago = document.querySelector('input[name="pago"]:checked').value;

            if (pago === 'tarjeta') {
                window.location.href = 'tarjeta.html';
            } else if (pago === 'efectivo') {
                window.location.href = 'efectivo.html';
            } else {
                alert('Por favor, selecciona un método de pago.');
            }
        });
    }

    // Cargar total en tarjeta.html
    if (window.location.pathname.includes('tarjeta.html')) {
        const total = localStorage.getItem('total');
        document.getElementById('total-pagar').value = `$${total}`;

        document.getElementById('tarjeta-form').addEventListener('submit', function (event) {
            event.preventDefault();
            window.location.href = 'final.html';
        });
    }

    // Calcular cambio en efectivo.html
    if (window.location.pathname.includes('efectivo.html')) {
        const total = localStorage.getItem('total');
        document.getElementById('total-pagar').value = `$${total}`;

        document.getElementById('cantidad-recibida').addEventListener('input', function () {
            const cantidadRecibida = parseFloat(document.getElementById('cantidad-recibida').value);
            const totalPagar = parseFloat(total);
            const cambio = cantidadRecibida - totalPagar;
            document.getElementById('cambio').value = `$${cambio.toFixed(2)}`;
        });

        document.getElementById('efectivo-form').addEventListener('submit', function (event) {
            event.preventDefault();
            window.location.href = 'final.html';
        });
    }
});
// Agrega esto al final de tu script12.js

// Función para generar el PDF del ticket
function generatePDF() {
    // Obtener los datos del localStorage
    const nombre = localStorage.getItem('nombre');
    const total = localStorage.getItem('total');
    const pizza1 = localStorage.getItem('pizza1');
    const pizza2 = localStorage.getItem('pizza2');
    const pizza3 = localStorage.getItem('pizza3');
    const complementos = JSON.parse(localStorage.getItem('complementos'));
    const fecha = new Date().toLocaleDateString();
    
    // Crear instancia de jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Configuración del documento
    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.text('Pizzería - Ticket de Compra', 105, 15, null, null, 'center');
    
    // Línea divisoria
    doc.setDrawColor(200);
    doc.line(20, 20, 190, 20);
    
    // Información del cliente
    doc.setFontSize(12);
    doc.text(`Cliente: ${nombre}`, 20, 30);
    doc.text(`Fecha: ${fecha}`, 20, 40);
    doc.text(`N° de Pedido: ${Math.floor(Math.random() * 10000)}`, 20, 50);
    
    // Detalles del pedido
    doc.setFontSize(14);
    doc.text('Detalles del Pedido:', 20, 65);
    
    // Tabla de productos
    let yPos = 75;
    doc.setFontSize(12);
    
    // Pizzas
    doc.text(`- ${pizza1}`, 20, yPos);
    yPos += 10;
    doc.text(`- ${pizza2}`, 20, yPos);
    yPos += 10;
    doc.text(`- ${pizza3}`, 20, yPos);
    yPos += 10;
    
    // Complementos
    if (complementos.length > 0) {
        doc.text('Complementos:', 20, yPos);
        yPos += 10;
        complementos.forEach(comp => {
            doc.text(`- ${comp}`, 25, yPos);
            yPos += 10;
        });
    }
    
    // Total
    doc.setFontSize(14);
    doc.text(`Total: $${total}`, 20, yPos + 10);
    
    // Método de pago (recuperar del localStorage si está disponible)
    const metodoPago = localStorage.getItem('metodoPago') || 'No especificado';
    doc.text(`Método de pago: ${metodoPago}`, 20, yPos + 20);
    
    // Información de contacto
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('¡Gracias por su compra!', 105, yPos + 30, null, null, 'center');
    doc.text('Contacto: sht23413070030463@cecyteh.edu.mx - Tel:779-134-1560', 105, yPos + 35, null, null, 'center');
    
    // Guardar el PDF
    doc.save(`ticket_pizzeria_${nombre.replace(' ', '_')}.pdf`);
}

// Agregar esta línea para que la función sea accesible desde el HTML
window.generatePDF = generatePDF;

// Modificar los listeners de los formularios de pago para guardar el método de pago
document.addEventListener('DOMContentLoaded', function () {
    // ... (tu código existente)
    
    // En entrega-local-form y envio-form, cuando se selecciona el método de pago
    if (document.getElementById('entrega-local-form')) {
        document.getElementById('entrega-local-form').addEventListener('submit', function (event) {
            event.preventDefault();
            const pago = document.querySelector('input[name="pago"]:checked').value;
            localStorage.setItem('metodoPago', pago === 'tarjeta' ? 'Tarjeta' : 'Efectivo');
            
            if (pago === 'tarjeta') {
                window.location.href = 'tarjeta.html';
            } else if (pago === 'efectivo') {
                window.location.href = 'efectivo.html';
            }
        });
    }
    
    if (document.getElementById('envio-form')) {
        document.getElementById('envio-form').addEventListener('submit', function (event) {
            event.preventDefault();
            const pago = document.querySelector('input[name="pago"]:checked').value;
            localStorage.setItem('metodoPago', pago === 'tarjeta' ? 'Tarjeta' : 'Efectivo');
            
            if (pago === 'tarjeta') {
                window.location.href = 'tarjeta.html';
            } else if (pago === 'efectivo') {
                window.location.href = 'efectivo.html';
            }
        });
    }
    
    // En final.html, generar el PDF automáticamente
    if (window.location.pathname.includes('final.html')) {
        // Esperar un momento para que se carguen las librerías
        setTimeout(generatePDF, 500);
    }
});