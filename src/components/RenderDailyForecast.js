import {
  changeDateToDay,
  formatDate,
  checkWeatherIcon,
  convertMilesToKm,
} from "./utils";

const DisplayDailyForecast = (dailyData) => {
  const dailyForecastContent = document.querySelector(
    ".daily-forecast-content",
  );
  const dailyTitleContainer = document.querySelector(".daily-title-container");
  const dailyForecastHeading = document.querySelector(
    ".daily-forecast-heading",
  );
  const dailyForecastWrapper = document.querySelector(
    ".daily-forecast-wrapper",
  );

  dailyForecastContent.classList.remove("skeleton");
  dailyTitleContainer.classList.remove("hidden");
  dailyForecastHeading.classList.remove("hidden");
  dailyForecastWrapper.innerHTML = "";

  dailyData.slice(1).forEach((days) => {
    const rowContainer = document.createElement("li");
    rowContainer.classList.add("row");

    const condition = days.icon.charAt(0).toUpperCase() + days.icon.slice(1);
    const { day, shortenedDay } = changeDateToDay(days.datetime);
    const formattedDate = formatDate(days.datetime);
    const weatherIcon = checkWeatherIcon(days.icon);
    const windspeed = convertMilesToKm(days.windspeed);

    rowContainer.innerHTML = `
        <div class="column-1 day-container">
            <h2 class="daily-day">${day}</h2>
            <h2 class="daily-day-shorten">${shortenedDay}</h2>
            <h3 class="daily-date">${formattedDate}</h3>
        </div>
        <div class="daily-weather-container">
            <span class="daily-weather-condition">${condition}</span>
        </div>
        <div class="column-3 daily-windspeed-container">
            <span class="daily-windspeed">${windspeed}km/h</span>
        </div>
        <div class="column-4 daily-humidity-container">
            <span class="daily-humidity">${days.humidity}%</span>
        </div>
        <div class="column-5 daily-temp-container">
            <h2 class="high-temp">${days.tempmax}°F</h2>
            <span class="low-temp"> ${days.tempmin}°F</span>
        </div>
    `;

    const dailyWeatherContainer = rowContainer.querySelector(
      ".daily-weather-container",
    );
    dailyWeatherContainer.insertBefore(
      weatherIcon,
      dailyWeatherContainer.firstChild,
    );

    dailyForecastWrapper.appendChild(rowContainer);
  });
};

export default DisplayDailyForecast;
