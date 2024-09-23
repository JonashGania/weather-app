import { checkWeatherIcon, formatTime } from "./utils";

const DisplayHourlyForecast = (hourlyData) => {
  const hourlyForecastWrapper = document.querySelector(
    ".hourly-forecast-wrapper"
  );

  hourlyData.forEach((hour) => {
    const hourForecast = document.createElement("li");
    const hourTime = document.createElement("span");
    const hourlyTemp = document.createElement("span");
    const weatherIcon = checkWeatherIcon(hour.icon);
    const formattedTime = formatTime(hour.datetime);

    hourForecast.classList.add("hour-forecast");
    hourTime.classList.add("hour-time");
    hourlyTemp.classList.add("hourly-temp");

    hourTime.textContent = formattedTime;
    hourlyTemp.textContent = `${hour.temp} °F`;

    hourForecast.appendChild(hourTime);
    hourForecast.appendChild(weatherIcon);
    hourForecast.appendChild(hourlyTemp);
    hourlyForecastWrapper.appendChild(hourForecast);
  });
};

export default DisplayHourlyForecast;
