import {
  checkWeatherIcon,
  capitalizeFirstLetters,
  convertMilesToKm,
} from "./utils";

const DisplayWeatherData = (weatherData) => {
  const city = document.querySelector(".city");
  const temperature = document.querySelector(".temperature");
  const weatherCondition = document.querySelector(".weather-type");
  const feelslike = document.querySelector(".feels-like");
  const humidity = document.querySelector(".humidity");
  const windspeed = document.querySelector(".windspeed");
  const weatherNowIcon = document.querySelector(".weather-now-condition-icon");
  const hourlyNowTemp = document.querySelector(".hourly-now-temp");
  const nowIcon = checkWeatherIcon(weatherData.currentConditions.icon);
  weatherNowIcon.innerHTML = "";

  city.classList.remove("skeleton");
  temperature.classList.remove("skeleton");
  weatherCondition.classList.remove("skeleton");

  city.textContent = capitalizeFirstLetters(weatherData.address);
  temperature.textContent = `${weatherData.currentConditions.temp} °F`;
  weatherCondition.textContent = weatherData.currentConditions.conditions;
  feelslike.textContent = `${weatherData.currentConditions.feelslike} °F`;
  humidity.textContent = `${weatherData.currentConditions.humidity}%`;
  windspeed.textContent = `${convertMilesToKm(weatherData.currentConditions.windspeed)}km/h`;
  hourlyNowTemp.textContent = `${weatherData.currentConditions.temp} °F`;

  weatherNowIcon.appendChild(nowIcon);
};

export default DisplayWeatherData;
