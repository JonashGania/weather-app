import { checkWeatherIcon, formatTime } from "./utils";
import { HourlyData } from "../interface/weatherData";

const DisplayHourlyForecast = (hourlyData: HourlyData[]) => {
  const hourlyForecastWrapper = <HTMLElement>document.querySelector(
    ".hourly-forecast-wrapper",
  );

  hourlyForecastWrapper.innerHTML = "";

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
