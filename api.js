// API Integration for Travel Agency
document.addEventListener('DOMContentLoaded', function() {
    // Mock API URLs (in a real project, these would be real endpoints)
    const DESTINATIONS_API = 'https://api.example.com/destinations';
    const TESTIMONIALS_API = 'https://api.example.com/testimonials';
    
    // Fetch featured destinations
    fetchDestinations();
    
    // Fetch testimonials
    fetchTestimonials();
    
    function fetchDestinations() {
        // In a real project, this would be a fetch() call to your API
        // For demo purposes, we'll use mock data
        const mockDestinations = [
            {
                id: 1,
                name: 'París, Francia',
                description: 'La ciudad del amor, llena de historia, cultura y romance.',
                image: 'images/paris.jpg',
                price: '10,000',
                rating: '★★★★★'
            },
            {
                id: 2,
                name: 'Tokio, Japón',
                description: 'Una mezcla fascinante de tradición y modernidad.',
                image: 'images/tokyo.jpg',
                price: '12,500',
                rating: '★★★★☆'
            },
            {
                id: 3,
                name: 'Nueva York, USA',
                description: 'La ciudad que nunca duerme, llena de energía y posibilidades.',
                image: 'images/nyc.jpg',
                price: '14,000',
                rating: '★★★★★'
            },
            {
                id: 4,
                name: 'Santorini, Grecia',
                description: 'Islas paradisíacas con impresionantes vistas al mar Egeo.',
                image: 'images/santorini.jpg',
                price: '10,000',
                rating: '★★★★☆'
            }
        ];
        
        displayDestinations(mockDestinations);
        
        // Real API call would look like this:
        /*
        fetch(DESTINATIONS_API)
            .then(response => response.json())
            .then(data => displayDestinations(data))
            .catch(error => console.error('Error fetching destinations:', error));
        */
    }
    
    function displayDestinations(destinations) {
        const container = document.getElementById('featured-destinations');
        
        if (!container) return;
        
        container.innerHTML = '';
        
        destinations.forEach(destination => {
            const card = document.createElement('div');
            card.className = 'destination-card';
            card.innerHTML = `
                <div class="destination-img">
                    <img src="${destination.image}" alt="${destination.name}">
                </div>
                <div class="destination-info">
                    <h3>${destination.name}</h3>
                    <p>${destination.description}</p>
                    <div class="destination-meta">
                        <span class="price">Desde ${destination.price}</span>
                        <span class="rating">${destination.rating}</span>
                    </div>
                </div>
            `;
            
            // Add click event to view details (would link to a details page in a real app)
            card.addEventListener('click', () => {
                window.location.href = `destinos.html?id=${destination.id}`;
            });
            
            container.appendChild(card);
        });
    }
    
    function fetchTestimonials() {
        // Mock data - in a real app this would come from your API
        const mockTestimonials = [
            {
                id: 1,
                content: 'La mejor agencia de viajes con la que he trabajado. Todo fue perfecto desde el principio hasta el final.',
                author: 'María González',
                role: 'Viajera frecuente',
                image: 'images/testimonial1.jpg'
            },
            {
                id: 2,
                content: 'Increíble experiencia en nuestro viaje a Japón. La atención al detalle fue impresionante.',
                author: 'Carlos Martínez',
                role: 'Primer viaje internacional',
                image: 'images/testimonial2.jpg'
            },
            {
                id: 3,
                content: 'Recomiendo ExploraMundo a todos mis amigos. Hicieron que planificar nuestras vacaciones fuera muy fácil.',
                author: 'Ana López',
                role: 'Viaje en familia',
                image: 'images/testimonial3.jpg'
            }
        ];
        
        displayTestimonials(mockTestimonials);
        
        // Real API call would look like this:
        /*
        fetch(TESTIMONIALS_API)
            .then(response => response.json())
            .then(data => displayTestimonials(data))
            .catch(error => console.error('Error fetching testimonials:', error));
        */
    }
    
    function displayTestimonials(testimonials) {
        const container = document.getElementById('testimonials-slider');
        
        if (!container) return;
        
        // Clear existing content
        container.innerHTML = '';
        
        // Create testimonial slides
        testimonials.forEach((testimonial, index) => {
            const slide = document.createElement('div');
            slide.className = `testimonial ${index === 0 ? 'active' : ''}`;
            slide.innerHTML = `
                <img src="${testimonial.image}" alt="${testimonial.author}">
                <p class="testimonial-content">"${testimonial.content}"</p>
                <h4 class="testimonial-author">${testimonial.author}</h4>
                <p class="testimonial-role">${testimonial.role}</p>
            `;
            container.appendChild(slide);
        });
        
        // Create slider dots
        const controls = document.createElement('div');
        controls.className = 'slider-controls';
        
        testimonials.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
            dot.dataset.index = index;
            controls.appendChild(dot);
        });
        
        container.appendChild(controls);
    }
    
    // Search form handling
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const destination = document.getElementById('destination').value;
            const date = document.getElementById('date').value;
            const travelers = document.getElementById('travelers').value;
            
            // In a real app, this would redirect to search results or make an API call
            console.log('Search submitted:', { destination, date, travelers });
            alert(`Buscando viajes a ${destination} para ${travelers} personas en ${date}`);
            
            // Example of redirecting to search results
            // window.location.href = `destinos.html?destination=${encodeURIComponent(destination)}&date=${date}&travelers=${travelers}`;
        });
    }
});