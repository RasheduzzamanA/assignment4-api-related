
// rest countries starts

function connectCountries() {
    var searchCountry = document.getElementById("searchCountry").value;
    var url = `https://restcountries.com/v3.1/name/${searchCountry}`;

    fetch(url)
        .then(res => res.json())
        .then(data => display(data));
    document.getElementById("searchCountry").value = " ";
    document.getElementById("countryDetails").textContent = " ";
}

function display(data) {
    var showCountry = document.getElementById("showCountry");
    for (var i = 0; i < data.length; i++) {
        var country = data[i];
        var countryDiv = document.createElement("div");
        countryDiv.className = "country";
        countryDiv.innerHTML = `<h3>${country.name.common}</h3>
                                <p>${country.capital}</p>
                                <button type="button" class="btn btn-outline-warning" onclick="displayCountryDetails('${country.name.common}')">Show Details</button>`;
        showCountry.appendChild(countryDiv);
    }
}

function displayCountryDetails(name) {
    var url2 = `https://restcountries.com/v3.1/name/${name}`;

    fetch(url2)
        .then(res => res.json())
        .then(data => countryInfo(data[0]));
    document.getElementById("showCountry").textContent = " ";
}

function countryInfo(info) {
    var countryDetails = document.getElementById("countryDetails");
    countryDetails.className = "countryDetails"
    countryDetails.innerHTML = `<h5>Country Name: ${info.name.common}</h5>
                            <p>Capital: ${info.capital}</p>
                            <p>Population: ${info.population}</p>
                            <p>Region: ${info.region}</p>
                            <p>Sub-region: ${info.subregion}</p>
                            <img src="${info.flags.png}">`
}


// rest countries ends

// covid states starts

function connectState() {
    var searchState = document.getElementById("searchState").value;
    var url3 = `https://api.covidtracking.com/v1/states/${searchState}/info.json`;

    fetch(url3)
        .then(res => res.json())
        .then(data => displayCovidData(data));
}

function displayCovidData(data) {
    var covidDetails = document.getElementById("covidDetails");
    var details = document.createElement("div");
    details.className = "details";
    details.innerHTML = `<h3>${data.name}</h3>
                            <p>${data.notes}</p>`;
    covidDetails.appendChild(details);
}

//covid states ends