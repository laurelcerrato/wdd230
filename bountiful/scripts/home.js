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
const forecast = document.querySelector('.forecast');

const url = `http://api.openweathermap.org/data/2.5/weather?lat=32.71571&lon=-117.16472&units=imperial&appid=45de18d04b727c7223d9fb5e769cd624`;
const forecasturl = `http://api.openweathermap.org/data/2.5/forecast/hourly?lat=32.71571&lon=-117.16472&units=imperial&appid=45de18d04b727c7223d9fb5e769cd624`;

async function apiFetch(url) {
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

apiFetch(url);
// apiFetch(forecasturl);
// displayResults()
function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
    humidity.innerHTML = weatherData.main.humidity;
    }