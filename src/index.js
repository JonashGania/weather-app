import "./styles/style.css";
import { fetchCityWeatherData } from "./components/api";
import DisplayWeatherData from "./components/RenderWeatherData";
import DisplayHourlyForecast from "./components/RenderHourlyForecast";
import DisplayDailyForecast from "./components/RenderDailyForecast";

async function InitialLoad() {
  const { weatherData, hourlyData, dailyData } =
    await fetchCityWeatherData("Manila");

  DisplayWeatherData(weatherData);
  DisplayHourlyForecast(hourlyData);
  DisplayDailyForecast(dailyData);
  console.log(weatherData);
  console.log(hourlyData);
}

InitialLoad();
