import { fetchWeatherData } from "./modules/apiFunctions";
import { displayWeatherData } from "./modules/dom";


const searchIcon = document.querySelector('.searchIcon');
const searchInput = document.getElementById('search-location');

async function initialLoad(){
    const currentCity = await fetchWeatherData('Tokyo');
    displayWeatherData(currentCity);
}

async function handleSearch(){
    const searchCity = searchInput.value.trim();

    try{
        const weatherData = await fetchWeatherData(searchCity);
        displayWeatherData(weatherData);
        searchInput.value = '';

    } catch (error){
        console.error('Failed to fetch weather data:', error);
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