const apiKey = 'c359d505fd1ccc37e00fc497f93bccb4';

async function realTimeApi(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=manila&appid=${apiKey}`, {mode: 'cors'});
    const tempData = await response.json();
    const temperature = tempData.main.temp;
    const feelsLike = tempData.main.feels_like;
    const humi = tempData.main.humidity;
    const windSpeed = tempData.wind.speed;
    const city = tempData.name;
    console.log(tempData);
    console.log(`Temperature: ${temperature} °C`);
    console.log(`Feels like: ${feelsLike} °C`);
    console.log(`Humidity: ${humi}%`);
    console.log(`Wind Speed:  ${windSpeed}km/h`);
    console.log(`City: ${city}`);
}


realTimeApi();
