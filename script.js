document.addEventListener("DOMContentLoaded", () => {
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById("countryTableBody");
            data.data.forEach(country => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${country.name}</td><td>${country.capital}</td>`;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error("Erreur lors du chargement des données", error));
});
