import {
  checkWeatherIcon,
  capitalizeFirstLetters,
  convertMilesToKm,
} from "./utils";
import { WeatherData } from "../interface/weatherData";

const DisplayWeatherData = (weatherData: WeatherData) => {
  const city = <HTMLHeadingElement>document.querySelector(".city");
  const temperature = <HTMLHeadingElement>document.querySelector(".temperature");
  const weatherCondition = <HTMLHeadingElement>document.querySelector(".weather-type");
  const feelslike = <HTMLSpanElement>document.querySelector(".feels-like");
  const humidity = <HTMLSpanElement>document.querySelector(".humidity");
  const windspeed = <HTMLSpanElement>document.querySelector(".windspeed");
  const weatherNowIcon = <HTMLDivElement>document.querySelector(".weather-now-condition-icon");
  const hourlyNowTemp = <HTMLSpanElement>document.querySelector(".hourly-now-temp");
  const nowIcon = checkWeatherIcon(weatherData.currentConditions.icon);
  weatherNowIcon.innerHTML = "";

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
