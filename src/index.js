import { fetchWeatherDataMetric } from "./modules/apiFunctions";
import { displayWeatherDataMetric } from "./modules/dom";


const searchIcon = document.querySelector('.searchIcon');
const searchInput = document.getElementById('search-location');

async function initialLoad(){
    const currentCity = await fetchWeatherDataMetric('Tokyo');
    displayWeatherDataMetric(currentCity);
}

async function handleSearch(){
    const searchCity = searchInput.value.trim();
    const errorMessage = document.querySelector('.error-message');


    try{
        const weatherData = await fetchWeatherDataMetric(searchCity);
        displayWeatherDataMetric(weatherData);
        searchInput.value = '';
        errorMessage.textContent = '';

    } catch (error){
        errorMessage.textContent = `${error}. Check input location.`;
    }
}

searchIcon.addEventListener('click', handleSearch);

searchInput.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        event.preventDefault();
        handleSearch();
    }
})


initialLoad();