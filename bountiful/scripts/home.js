//weather
const currentTemp = document.querySelector('.temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.weather-description');
const humidity = document.querySelector('.humidity');

const url = `http://api.openweathermap.org/data/2.5/weather?lat=32.71571&lon=-117.16472&units=imperial&appid=45de18d04b727c7223d9fb5e769cd624`;

async function apiFetch() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayResults(data);
}
}
//drinks amount
const drinksamount = document.querySelector(".drinks");
drinksamount.innerHTML = Number(window.localStorage.getItem("amount"));

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
    const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?lat=33.1580931&lon=-117.350594&units=imperial&appid=45de18d04b727c7223d9fb5e769cd624`;
    async function apifetch() {
        const response = await fetch(forecasturl);
        if (response.ok) {
            const data = await response.json();
            displayresults(data);
        }
    }
    apifetch();
function displayresults(weatherData) {
    forecast.innerHTML = `<p>${new Date((weatherData.list[1].dt)*1000).toDateString()} - Temperature: ${weatherData.list[1].main.temp} °F</p>
                            <p>${new Date((weatherData.list[9].dt)*1000).toDateString()} - Temperature: ${weatherData.list[9].main.temp} °F</p>
                            <p>${new Date((weatherData.list[17].dt)*1000).toDateString()} - Temperature: ${weatherData.list[17].main.temp} °F</p>
                            `;
    }
//lazy
let imagesToLoad = document.querySelectorAll("[data-src]");
const loadImage = (img) => {
    const src = img.getAttribute("data-src");
    img.src = src;
    img.onload = () => {
    img.removeAttribute("data-src");
    };
}
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};
const imgObserver = new IntersectionObserver((entries,imgObserver) => {
    entries.forEach(entry =>{
        if (!entry.isIntersecting){
            return;
        }else{
            loadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);
imagesToLoad.forEach(image => {
    imgObserver.observe(image);
});


