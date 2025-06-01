document.addEventListener("DOMContentLoaded", () => {
    const countryContainer = document.getElementById("country-list");

    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => {
            const selectedCountries = data.slice(0, 6); // Solo mostramos 6 países
            selectedCountries.forEach(country => {
                const card = document.createElement("div");
                card.className = "card country";

                card.innerHTML = `
                    <img src="${country.flags.svg}" alt="Bandera de ${country.name.common}">
                    <div class="card-body">
                        <h3>${country.name.common}</h3>
                        <p>Región: ${country.region}</p>
                        <p>Capital: ${country.capital ? country.capital[0] : "N/A"}</p>
                    </div>
                `;
                countryContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error al cargar los países:", error);
            countryContainer.innerHTML = "<p>No se pudieron cargar los países.</p>";
        });
});