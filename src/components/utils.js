import { parse, format } from "date-fns";
import cloudy from "../assets/icons/cloudy.svg";
import clearDay from "../assets/icons/clear-day.svg";
import clearNight from "../assets/icons/clear-night.svg";
import partlyCloudyDay from "../assets/icons/partly-cloudy-day.svg";
import partlyCloudyNight from "../assets/icons/partly-cloudy-night.svg";
import rainy from "../assets/icons/rainy.svg";
import rainStorm from "../assets/icons/rain-storm.svg";
import fog from "../assets/icons/fog.svg";
import overcast from "../assets/icons/overcast.svg";
import wind from "../assets/icons/wind.svg";

const formatTime = (timeValue) => {
  const parsedTime = timeValue
    ? parse(timeValue, "HH:mm:ss", new Date())
    : null;
  const formattedTime = parsedTime ? format(parsedTime, "hh:mm a") : null;

  return formattedTime;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}/${day}`;
};

const checkWeatherIcon = (icon) => {
  const weatherIcon = document.createElement("img");
  const conditionIcon = icon.toLowerCase();

  switch (conditionIcon) {
    case "cloudy":
      weatherIcon.src = overcast;
      break;
    case "clear-day":
      weatherIcon.src = clearDay;
      break;
    case "clear-night":
      weatherIcon.src = clearNight;
      break;
    case "partly-cloudy-day":
      weatherIcon.src = partlyCloudyDay;
      break;
    case "partly-cloudy-night":
      weatherIcon.src = partlyCloudyNight;
      break;
    case "rain":
      weatherIcon.src = rainy;
      break;
    case "fog":
      weatherIcon.src = fog;
      break;
    case "wind":
      weatherIcon.src = wind;
      break;
    default:
      break;
  }

  return weatherIcon;
};

const changeDateToDay = (dateString) => {
  const date = new Date(dateString);

  const day = format(date, "EEEE");
  const shortenedDay = format(date, "EEE");
  return { day, shortenedDay };
};

const capitalizeFirstLetters = (string) => {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const applySkeletonLoader = () => {
  const city = document.querySelector(".city");
  const temperature = document.querySelector(".temperature");
  const weatherCondition = document.querySelector(".weather-type");
  const nowSpan = document.querySelector(".now-span");
  const dailyTitleContainer = document.querySelector(".daily-title-container");
  const hourlyForecastContent = document.querySelector(
    ".hourly-forecast-content"
  );
  const hourlyTitleContainer = document.querySelector(
    ".hourly-title-container"
  );
  const dailyForecastContent = document.querySelector(
    ".daily-forecast-content"
  );
  const dailyForecastHeading = document.querySelector(
    ".daily-forecast-heading"
  );

  city.classList.add("skeleton");
  temperature.classList.add("skeleton");
  weatherCondition.classList.add("skeleton");
  hourlyForecastContent.classList.add("skeleton");
  dailyForecastContent.classList.add("skeleton");
  nowSpan.classList.add("hidden");
  dailyTitleContainer.classList.add("hidden");
  dailyForecastHeading.classList.add("hidden");
  hourlyTitleContainer.classList.add("hidden");
};

const convertMilesToKm = (miles) => {
  return (miles * 1.609344).toFixed(1);
};

const celciusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const fahrenheitToCelcius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const updateTemperature = (isCelcius) => {
  const allTempElements = document.querySelectorAll(
    ".temperature, .feels-like, .hourly-temp, .high-temp, .low-temp, .hourly-now-temp"
  );

  allTempElements.forEach((tempElements) => {
    let currentTemp = parseFloat(tempElements.textContent);
    let updatedTemp;

    if (isCelcius) {
      updatedTemp = fahrenheitToCelcius(currentTemp).toFixed(1);
      tempElements.textContent = `${updatedTemp} °C`;
    } else {
      updatedTemp = celciusToFahrenheit(currentTemp).toFixed(1);
      tempElements.textContent = `${updatedTemp} °F`;
    }
  });
};

const displayNoResultsFound = (message) => {
  const noResultsSpan = document.querySelector(".no-results");
  noResultsSpan.textContent = message;
};

export {
  formatTime,
  checkWeatherIcon,
  changeDateToDay,
  formatDate,
  capitalizeFirstLetters,
  applySkeletonLoader,
  convertMilesToKm,
  updateTemperature,
  displayNoResultsFound,
};
