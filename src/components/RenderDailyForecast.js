import { changeDateToDay, formatDate, checkWeatherIcon } from "./utils";

const DisplayDailyForecast = (dailyData) => {
  const dailyForecastWrapper = document.querySelector(
    ".daily-forecast-wrapper"
  );

  dailyData.slice(1).forEach((days) => {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row");

    const condition = days.icon.charAt(0).toUpperCase() + days.icon.slice(1);
    const highTemperature = Math.trunc(days.tempmax);
    const lowTemperature = Math.trunc(days.tempmin);
    const day = changeDateToDay(days.datetime);
    const formattedDate = formatDate(days.datetime);
    const weatherIcon = checkWeatherIcon(days.icon);

    rowContainer.innerHTML = `
        <div class="column-1 day-container">
            <h2 class="daily-day">${day}</h2>
            <h3 class="daily-date">${formattedDate}</h3>
        </div>
        <div class="daily-weather-container">
            <span class="daily-weather-condition">${condition}</span>
        </div>
        <div class="column-3 daily-windspeed-container">
            <span class="daily-windspeed">${days.windspeed}mph</span>
        </div>
        <div class="column-4 daily-humidity-container">
            <span class="daily-humidity">${days.humidity}%</span>
        </div>
        <div class="column-5 daily-temp-container">
            <h2 class="high-temp">${highTemperature}°F<span class="low-temp"> ${lowTemperature}°F</span></h2>
        </div>
    `;

    const dailyWeatherContainer = rowContainer.querySelector(
      ".daily-weather-container"
    );
    dailyWeatherContainer.insertBefore(
      weatherIcon,
      dailyWeatherContainer.firstChild
    );

    dailyForecastWrapper.appendChild(rowContainer);
  });
};

export default DisplayDailyForecast;
