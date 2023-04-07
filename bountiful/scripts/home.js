//nav js
const hamburger = document.getElementById("toggle-button");
const navMenu = document.getElementById("navi-list");
hamburger.addEventListener("click", () => {
    // hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})
//date js
const datefield = document.querySelector(".date");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
datefield.innerHTML = `<b>${fulldateUK}</b>`;

//last modified js
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();
document.getElementById("date").textContent = document.lastModified
//weather


const currentTemp = document.querySelector('.temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.weather-description');
const humidity = document.querySelector('.humidity');

const url = `http://api.openweathermap.org/data/2.5/weather?lat=32.71571&lon=-117.16472&units=imperial&appid=45de18d04b727c7223d9fb5e769cd624`;

async function apiFetch() {
    try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayResults(data);

    } else {
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}

const drinksamount = document.querySelector(".drinks");
apiFetch();
function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
    humidity.innerHTML = weatherData.main.humidity;
    }
    //forecast
    const forecast = document.querySelector('.forecast');
    const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?lat=32.71571&lon=-117.16472&units=imperial&appid=45de18d04b727c7223d9fb5e769cd624`;
    async function apifetch() {
        try {
        const response = await fetch(forecasturl);
        if (response.ok) {
            const data = await response.json();
            displayresults(data);
    
        } else {
            throw Error(await response.text());
        }
        } catch (error) {
            console.log(error);
        }
    }
    apifetch();
function displayresults(weatherData) {
    console.log(weatherData.list)
    forecast.innerHTML = `<p>${new Date((weatherData.list[1].dt)*1000).toDateString()} - Temperature: ${weatherData.list[1].main.temp} °F</p>
                            <p>${new Date((weatherData.list[9].dt)*1000).toDateString()} - Temperature: ${weatherData.list[9].main.temp} °F</p>
                            <p>${new Date((weatherData.list[17].dt)*1000).toDateString()} - Temperature: ${weatherData.list[17].main.temp} °F</p>
                            `;
    }
    // amount of drinks = 
    const drinks = document.querySelector(".drinks");
    const amount = Number(window.localStorage.getItem("amount"));

    drinks.innerHTML = amount;