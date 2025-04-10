document.addEventListener('DOMContentLoaded', function () {
    const { jsPDF } = window.jspdf;

    // Configuración inicial (fecha)
    const fecha = new Date().toLocaleDateString();
    if (document.getElementById('fecha')) {
        document.getElementById('fecha').value = fecha;
    }

    // Cálculo del total en index.html
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

    // Formulario principal
    if (document.getElementById('pizzeria-form')) {
        document.getElementById('pizzeria-form').addEventListener('submit', function (event) {
            event.preventDefault();
            
            // Obtener datos del formulario
            const nombre = document.getElementById('nombre').value;
            const total = document.getElementById('total-pizzas').textContent.split('$')[1];
            const entrega = document.querySelector('input[name="entrega"]:checked').value;

            // Obtener detalles de las pizzas
            const pizza1 = document.getElementById('pizza1').options[document.getElementById('pizza1').selectedIndex].text;
            const pizza2 = document.getElementById('pizza2').options[document.getElementById('pizza2').selectedIndex].text;
            const pizza3 = document.getElementById('pizza3').options[document.getElementById('pizza3').selectedIndex].text;

            // Obtener complementos
            const complementos = Array.from(document.querySelectorAll('input[name="complementos"]:checked'))
                .map(c => c.nextSibling.textContent.trim());

            // Guardar en localStorage
            localStorage.setItem('nombre', nombre);
            localStorage.setItem('total', total);
            localStorage.setItem('pizza1', pizza1);
            localStorage.setItem('pizza2', pizza2);
            localStorage.setItem('pizza3', pizza3);
            localStorage.setItem('complementos', JSON.stringify(complementos));
            localStorage.setItem('fecha', fecha);
            localStorage.setItem('entrega', entrega);

            // Redireccionar
            if (entrega === 'local') {
                window.location.href = 'entregalocal.html';
            } else {
                window.location.href = 'envio.html';
            }
        });
    }

    // Página de entrega local
    if (window.location.pathname.includes('entregalocal.html')) {
        // Recuperar datos del pedido
        const nombre = localStorage.getItem('nombre');
        const total = localStorage.getItem('total');
        const pizza1 = localStorage.getItem('pizza1');
        const pizza2 = localStorage.getItem('pizza2');
        const pizza3 = localStorage.getItem('pizza3');
        const complementos = JSON.parse(localStorage.getItem('complementos'));

        // Mostrar datos en el formulario
        document.getElementById('nombre-cliente').value = nombre;
        document.getElementById('total-pedido').value = `$${total}`;

        // Crear texto con detalles del pedido
        const detalles = `Pizza 1: ${pizza1}\nPizza 2: ${pizza2}\nPizza 3: ${pizza3}\nComplementos: ${complementos.join(', ')}`;
        document.getElementById('detalles-pedido').value = detalles;

        // Manejar envío del formulario
        document.getElementById('entrega-local-form').addEventListener('submit', function (event) {
            event.preventDefault();
            const pago = document.querySelector('input[name="pago"]:checked').value;

            if (pago === 'tarjeta') {
                window.location.href = 'tarjeta.html';
            } else {
                window.location.href = 'efectivo.html';
            }
        });
    }

    // Función para generar PDF (se usa en efectivo.html y tarjeta.html)
    window.generatePDF = function() {
        const doc = new jsPDF();
        
        // Configuración del documento
        doc.setFontSize(18);
        doc.text('Ticket de Compra - Pizzería', 105, 15, { align: 'center' });
        
        // Datos del cliente
        doc.setFontSize(12);
        doc.text(`Cliente: ${localStorage.getItem('nombre')}`, 14, 25);
        doc.text(`Fecha: ${localStorage.getItem('fecha')}`, 14, 35);
        
        // Detalles del pedido
        doc.setFontSize(14);
        doc.text('Detalles del pedido:', 14, 50);
        
        // Tabla de productos
        const pedido = [
            { item: localStorage.getItem('pizza1'), precio: localStorage.getItem('pizza1').split('$')[1] },
            { item: localStorage.getItem('pizza2'), precio: localStorage.getItem('pizza2').split('$')[1] },
            { item: localStorage.getItem('pizza3'), precio: localStorage.getItem('pizza3').split('$')[1] }
        ];
        
        JSON.parse(localStorage.getItem('complementos')).forEach(comp => {
            const precio = comp.match(/\$(\d+)/)[1];
            pedido.push({ item: comp, precio });
        });
        
        doc.autoTable({
            startY: 60,
            head: [['Producto', 'Precio']],
            body: pedido.map(item => [item.item, `$${item.precio}`]),
            theme: 'grid'
        });
        
        // Total
        const finalY = doc.lastAutoTable.finalY + 10;
        doc.text(`Total: $${localStorage.getItem('total')}`, 14, finalY);
        
        // Guardar PDF
        doc.save(`ticket_pizzeria_${localStorage.getItem('nombre')}.pdf`);
    };
});