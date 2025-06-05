// Proceso de reserva - Navegación entre pasos
document.addEventListener('DOMContentLoaded', function() {
    // Datos del viaje seleccionado (se cargarán desde la URL)
    let bookingData = {
        destination: null,
        price: 0,
        description: "",
        rating: "",
        type: "", // 'viaje' o 'paquete'
        basePrice: 0,
        services: [],
        total: 0,
        bookingCode: generateBookingCode()
    };

    // Elementos del DOM
    const steps = document.querySelectorAll('.form-step');
    const stepButtons = document.querySelectorAll('.step');
    const nextButtons = document.querySelectorAll('.next-step');
    const prevButtons = document.querySelectorAll('.prev-step');
    const bookingForm = document.getElementById('booking-form');
    const downloadTicketBtn = document.getElementById('download-ticket');
    
    // Cargar datos del destino/paquete desde la URL
    loadBookingData();
    
    // Configurar fecha mínima para el campo de fecha de viaje (hoy + 3 días)
    const today = new Date();
    const minDate = new Date();
    minDate.setDate(today.getDate() + 3);
    document.getElementById('travel-date').min = formatDateForInput(minDate);

    // Mostrar paso específico
    function showStep(stepNumber) {
        // Ocultar todos los pasos
        steps.forEach(step => step.classList.remove('active'));
        
        // Mostrar el paso actual
        document.querySelector(`.form-step[data-step="${stepNumber}"]`).classList.add('active');
        
        // Actualizar la navegación de pasos
        stepButtons.forEach(button => {
            if (parseInt(button.dataset.step) <= stepNumber) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // Actualizar resumen si es el paso 3
        if (stepNumber === 3) {
            updateBookingSummary();
        }
    }
    
    // Event listeners para botones siguiente/anterior
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = this.closest('.form-step');
            const nextStepNum = parseInt(currentStep.dataset.step) + 1;
            
            // Validar el formulario antes de avanzar
            if (validateStep(currentStep.dataset.step)) {
                showStep(nextStepNum);
                
                // Mostrar confirmación en el paso 4
                if (nextStepNum === 4) {
                    generateConfirmation();
                }
            }
        });
    });
    
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = this.closest('.form-step');
            const prevStepNum = parseInt(currentStep.dataset.step) - 1;
            showStep(prevStepNum);
        });
    });
    
    // Validación de cada paso
    function validateStep(stepNumber) {
        let isValid = true;
        const currentStep = document.querySelector(`.form-step[data-step="${stepNumber}"]`);
        const requiredInputs = currentStep.querySelectorAll('input[required], select[required]');
        
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = '#ddd';
            }
        });
        
        // Validación adicional para el email
        if (stepNumber === '1') {
            const emailInput = document.getElementById('email');
            if (emailInput && !validateEmail(emailInput.value)) {
                emailInput.style.borderColor = 'red';
                isValid = false;
            }
            
            // Validar fecha de nacimiento (debe ser en el pasado)
            const dobInput = document.getElementById('dob');
            if (dobInput && new Date(dobInput.value) >= new Date()) {
                dobInput.style.borderColor = 'red';
                isValid = false;
                alert('La fecha de nacimiento debe ser en el pasado');
            }
        }
        
        // Validación adicional para el paso 2 (debe haber seleccionado un destino)
        if (stepNumber === '2' && !bookingData.destination) {
            alert('Por favor selecciona un destino o paquete desde la página correspondiente');
            isValid = false;
        }
        
        // Validación adicional para tarjeta de crédito
        if (stepNumber === '3' && document.getElementById('credit-card').checked) {
            const cardNumber = document.getElementById('card-number');
            const cardExpiry = document.getElementById('card-expiry');
            const cardCvv = document.getElementById('card-cvv');
            
            if (!validateCardNumber(cardNumber.value)) {
                cardNumber.style.borderColor = 'red';
                isValid = false;
            }
            
            if (!validateCardExpiry(cardExpiry.value)) {
                cardExpiry.style.borderColor = 'red';
                isValid = false;
            }
            
            if (!validateCVV(cardCvv.value)) {
                cardCvv.style.borderColor = 'red';
                isValid = false;
            }
        }
        
        if (!isValid) {
            alert('Por favor complete todos los campos requeridos correctamente.');
        }
        
        return isValid;
    }
    
    // Funciones de validación
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function validateCardNumber(number) {
        const re = /^\d{16}$/;
        return re.test(number.replace(/\s/g, ''));
    }
    
    function validateCardExpiry(expiry) {
        const re = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        if (!re.test(expiry)) return false;
        
        const [_, month, year] = expiry.match(re);
        const now = new Date();
        const currentYear = now.getFullYear() % 100;
        const currentMonth = now.getMonth() + 1;
        
        if (parseInt(year) < currentYear) return false;
        if (parseInt(year) === currentYear && parseInt(month) < currentMonth) return false;
        
        return true;
    }
    
    function validateCVV(cvv) {
        const re = /^\d{3,4}$/;
        return re.test(cvv);
    }
    
    // Cargar datos del destino/paquete desde la URL
    function loadBookingData() {
        const urlParams = new URLSearchParams(window.location.search);
        const destinationId = urlParams.get('destination') || urlParams.get('package');
        
        if (destinationId) {
            // En un proyecto real, esto sería una llamada a la API para obtener los detalles
            // Aquí usamos datos de prueba según el tipo de reserva (viaje o paquete)
            bookingData.type = urlParams.has('destination') ? 'viaje' : 'paquete';
            
            if (bookingData.type === 'viaje') {
                // Datos de prueba para viajes
                const mockDestinations = [
                    {
                        id: '1',
                        name: 'París, Francia',
                        description: 'La ciudad del amor, llena de historia, cultura y romance.',
                        price: 899,
                        rating: '★★★★★'
                    },
                    {
                        id: '2',
                        name: 'Tokio, Japón',
                        description: 'Una mezcla fascinante de tradición y modernidad.',
                        price: 1299,
                        rating: '★★★★☆'
                    },
                    {
                        id: '3',
                        name: 'Nueva York, USA',
                        description: 'La ciudad que nunca duerme, llena de energía y posibilidades.',
                        price: 1099,
                        rating: '★★★★★'
                    }
                ];
                
                const destination = mockDestinations.find(d => d.id === destinationId);
                if (destination) {
                    bookingData.destination = destination.name;
                    bookingData.description = destination.description;
                    bookingData.price = destination.price;
                    bookingData.rating = destination.rating;
                    bookingData.basePrice = destination.price;
                    
                    // Actualizar la UI
                    document.getElementById('booking-destination-name').textContent = destination.name;
                    document.getElementById('booking-destination-description').textContent = destination.description;
                    document.getElementById('booking-price').textContent = `€${destination.price}`;
                    document.getElementById('booking-rating').textContent = destination.rating;
                }
            } else {
                // Datos de prueba para paquetes
                const mockPackages = [
                    {
                        id: '1',
                        name: 'Todo Incluido en Caribe',
                        description: '7 noches en resort 5* con todo incluido + vuelos + traslados.',
                        price: 1299,
                        rating: '★★★★★'
                    },
                    {
                        id: '2',
                        name: 'Tour Europa Clásica',
                        description: '10 días visitando las capitales más emblemáticas de Europa.',
                        price: 1899,
                        rating: '★★★★★'
                    },
                    {
                        id: '3',
                        name: 'Aventura en Costa Rica',
                        description: 'Explora la naturaleza y aventura de Costa Rica en 9 días.',
                        price: 1599,
                        rating: '★★★★☆'
                    }
                ];
                
                const packageData = mockPackages.find(p => p.id === destinationId);
                if (packageData) {
                    bookingData.destination = packageData.name;
                    bookingData.description = packageData.description;
                    bookingData.price = packageData.price;
                    bookingData.rating = packageData.rating;
                    bookingData.basePrice = packageData.price;
                    
                    // Actualizar la UI
                    document.getElementById('booking-destination-name').textContent = packageData.name;
                    document.getElementById('booking-destination-description').textContent = packageData.description;
                    document.getElementById('booking-price').textContent = `€${packageData.price}`;
                    document.getElementById('booking-rating').textContent = packageData.rating;
                }
            }
        }
    }
    
    // Actualizar resumen de reserva
    function updateBookingSummary() {
        // Obtener datos del formulario
        const travelers = parseInt(document.getElementById('travelers').value);
        const travelDate = document.getElementById('travel-date').value;
        
        // Calcular servicios adicionales
        let servicesTotal = 0;
        const services = [];
        const serviceCheckboxes = document.querySelectorAll('input[name="services"]:checked');
        
        serviceCheckboxes.forEach(checkbox => {
            const price = parseFloat(checkbox.dataset.price);
            servicesTotal += price;
            services.push({
                name: checkbox.nextElementSibling.textContent.replace(/^\+€\d+\s/, ''),
                price: price
            });
        });
        
        // Calcular total
        const basePrice = bookingData.basePrice * travelers;
        const total = basePrice + servicesTotal;
        
        // Guardar datos para la confirmación
        bookingData.travelers = travelers;
        bookingData.travelDate = travelDate;
        bookingData.services = services;
        bookingData.servicesTotal = servicesTotal;
        bookingData.total = total;
        
        // Actualizar resumen
        document.getElementById('summary-destination').textContent = bookingData.destination;
        document.getElementById('summary-date').textContent = formatDate(travelDate);
        document.getElementById('summary-travelers').textContent = travelers;
        document.getElementById('summary-base-price').textContent = `€${basePrice.toFixed(2)}`;
        document.getElementById('summary-services').textContent = `€${servicesTotal.toFixed(2)}`;
        document.getElementById('summary-total').textContent = `€${total.toFixed(2)}`;
    }
    
    // Formatear fecha
    function formatDate(dateString) {
        if (!dateString) return 'Por definir';
        
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }
    
    // Formatear fecha para input date
    function formatDateForInput(date) {
        return date.toISOString().split('T')[0];
    }
    
    // Generar código de reserva aleatorio
    function generateBookingCode() {
        const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
        let code = 'EXPL';
        
        for (let i = 0; i < 6; i++) {
            code += Math.floor(Math.random() * 10);
        }
        
        return code;
    }
    
    // Generar confirmación
    function generateConfirmation() {
        document.getElementById('booking-code').textContent = bookingData.bookingCode;
        document.getElementById('confirmation-destination').textContent = bookingData.destination;
        document.getElementById('confirmation-date').textContent = formatDate(bookingData.travelDate);
        document.getElementById('confirmation-travelers').textContent = bookingData.travelers;
        document.getElementById('confirmation-total').textContent = `€${bookingData.total.toFixed(2)}`;
    }
    
    // Configurar métodos de pago
    function setupPaymentMethods() {
        const paymentOptions = document.querySelectorAll('input[name="payment"]');
        const creditCardForm = document.getElementById('credit-card-form');
        
        paymentOptions.forEach(option => {
            option.addEventListener('change', function() {
                if (this.value === 'credit-card') {
                    creditCardForm.style.display = 'block';
                } else {
                    creditCardForm.style.display = 'none';
                }
            });
        });
    }
    
    // Generar PDF del ticket
    function generateTicketPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Logo y encabezado
        doc.setFontSize(22);
        doc.setTextColor(40, 53, 147);
        doc.text('ExploraMundo', 105, 20, { align: 'center' });
        
        doc.setFontSize(12);
        doc.setTextColor(100, 100, 100);
        doc.text('Comprobante de Reserva', 105, 30, { align: 'center' });
        
        // Línea divisoria
        doc.setDrawColor(200, 200, 200);
        doc.line(20, 35, 190, 35);
        
        // Detalles de la reserva
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text('Detalles de la Reserva', 20, 45);
        
        doc.setFontSize(10);
        doc.text(`Código de Reserva: ${bookingData.bookingCode}`, 20, 55);
        doc.text(`Fecha de Emisión: ${formatDate(new Date())}`, 20, 60);
        
        // Línea divisoria
        doc.line(20, 65, 190, 65);
        
        // Información del cliente
        doc.setFontSize(12);
        doc.text('Información del Cliente', 20, 75);
        
        doc.setFontSize(10);
        doc.text(`Nombre: ${document.getElementById('first-name').value} ${document.getElementById('last-name').value}`, 20, 85);
        doc.text(`Email: ${document.getElementById('email').value}`, 20, 90);
        doc.text(`Teléfono: ${document.getElementById('phone').value}`, 20, 95);
        
        // Línea divisoria
        doc.line(20, 100, 190, 100);
        
        // Detalles del viaje
        doc.setFontSize(12);
        doc.text('Detalles del Viaje', 20, 110);
        
        doc.setFontSize(10);
        doc.text(`Destino: ${bookingData.destination}`, 20, 120);
        doc.text(`Tipo: ${bookingData.type === 'viaje' ? 'Viaje Individual' : 'Paquete Turístico'}`, 20, 125);
        doc.text(`Fecha: ${formatDate(bookingData.travelDate)}`, 20, 130);
        doc.text(`Viajeros: ${bookingData.travelers}`, 20, 135);
        
        // Servicios adicionales
        if (bookingData.services.length > 0) {
            doc.text('Servicios Adicionales:', 20, 145);
            
            let yPos = 150;
            bookingData.services.forEach(service => {
                doc.text(`- ${service.name}: €${service.price.toFixed(2)}`, 25, yPos);
                yPos += 5;
            });
        }
        
        // Total
        doc.setFontSize(12);
        doc.text(`Total: €${bookingData.total.toFixed(2)}`, 20, 170);
        
        // Pie de página
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text('Gracias por reservar con ExploraMundo. Para cualquier consulta, contacta con nuestro servicio al cliente.', 105, 280, { align: 'center' });
        
        // Guardar el PDF
        doc.save(`Ticket_${bookingData.bookingCode}.pdf`);
    }
    
    // Manejar envío del formulario
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar formulario
            if (validateStep('3')) {
                // En un proyecto real, aquí se enviarían los datos al servidor
                console.log('Reserva enviada:', {
                    personalData: {
                        firstName: document.getElementById('first-name').value,
                        lastName: document.getElementById('last-name').value,
                        email: document.getElementById('email').value,
                        phone: document.getElementById('phone').value,
                        dni: document.getElementById('dni').value,
                        dob: document.getElementById('dob').value
                    },
                    travelDetails: bookingData,
                    payment: {
                        method: document.querySelector('input[name="payment"]:checked').value,
                        cardNumber: document.getElementById('card-number')?.value,
                        cardName: document.getElementById('card-name')?.value,
                        cardExpiry: document.getElementById('card-expiry')?.value,
                        cardCvv: document.getElementById('card-cvv')?.value
                    }
                });
                
                // Mostrar paso de confirmación
                showStep(4);
            }
        });
    }
    
    // Descargar ticket en PDF
    if (downloadTicketBtn) {
        downloadTicketBtn.addEventListener('click', generateTicketPDF);
    }
    
    // Inicializar
    setupPaymentMethods();
    
    // Validar campos de tarjeta en tiempo real
    document.getElementById('card-number')?.addEventListener('input', function(e) {
        this.value = this.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
    });
    
    document.getElementById('card-expiry')?.addEventListener('input', function(e) {
        this.value = this.value.replace(/\D/g, '').replace(/(\d{2})(?=\d)/g, '$1/');
    });
});