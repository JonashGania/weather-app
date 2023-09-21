const apiKey = 'c359d505fd1ccc37e00fc497f93bccb4';

async function fetchWeatherDataMetric(city){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`, {mode: 'cors'});
    
        if(!response.ok){
            throw new Error('Network response was not ok');
        }

        const weatherData = await response.json();
        console.log(weatherData);
        return weatherData;

    } catch(error){
        console.log('Error', error);
        throw error;
    }
}

export { fetchWeatherDataMetric }

