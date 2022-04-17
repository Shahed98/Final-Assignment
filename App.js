
function findcountry() {
    var country = document.getElementById('country-search').value;
    var url = 'https://api.covid19api.com/country/' + country
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => CountryAPI(data))

}


function CountryAPI(data) {
    console.log(data.Countries)
    var DifDiv = document.getElementById("Search-result");


    for (var i = 0; i < data.length; i++) {

        var CountryDiv = document.createElement('div2');
        CountryDiv.innerHTML = `<p>Country:<b> ${data[i].Country}</b></p>
                        <p>Active: ${data[i].Active}</p>
                        <p>Total confirmed Cases:${data[i].Confirmed} </p>
                        <p> Total Deaths: ${data[i].Deaths} </p> 
                        <br> 
                        <button onclick="restcountries()" id= btn-country class='btn-style'>more details ... </button>
                         `;

    }
    CountryDiv.classList.add('newstyle')
    DifDiv.appendChild(CountryDiv)

}


function connectAPI() {
    fetch("https://api.covid19api.com/summary")
        .then(res => res.json())
        .then(data => loadAPI(data))
}

connectAPI();

function loadAPI(data) {
    console.log(data.Countries.length)
    var outerDiv = document.getElementById("info-container");


    for (var a = 0; a < data.Countries.length; a++) {

        var newDiv = document.createElement('div');
        newDiv.innerHTML = `<p>Country:<b> ${data.Countries[a].Country}</b></p>
                            <p>New Confirmed Cases: ${data.Countries[a].NewConfirmed}</p>
                            <p>Total confirmed Cases:${data.Countries[a].TotalConfirmed} </p>
                            <p> Total Deaths: ${data.Countries[a].TotalDeaths}
                            <br> <br> 
                            <button onclick="restcountries()" id= btn-country class='btn-style'>more details ... </button>
                             `;


        newDiv.classList.add('inner-style');
        outerDiv.appendChild(newDiv);
    }
}

function restcountries() {
    var rest = document.getElementById("Rest-countries").value;
    var url2 = "https://restcountries.com/v3.1/all"
    console.log(url2)

    fetch(url2)
        .then(res => res.json())
        .then(data => Final(data))
}

function Final(data) {
    console.log(data[0]);
    
    var finalDiv = document.getElementById("Rest-countries")
    for (var a = 0; a < data.length; a++) {

        var LastDiv = document.createElement('div4');
        LastDiv.innerHTML = `<h3>${data[a].name.common}   </h3>
                        <img src='${data[a].flags.png}' >
                        <p>Population:<b> ${data[a].population}</b></p>
                        <p>Capital: ${data[a].capital}</p>
                        <p>Region:${data[a].region} </p>
                         `;

        LastDiv.classList.add("Final-style");
        finalDiv.appendChild(LastDiv);
    }

}