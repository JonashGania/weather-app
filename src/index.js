import "./styles/style.css";
import { fetchCityWeatherData } from "./components/api";
import { EventHandlers } from "./components/eventHandlers";
import { applySkeletonLoader } from "./components/utils";
import DisplayWeatherData from "./components/RenderWeatherData";
import DisplayHourlyForecast from "./components/RenderHourlyForecast";
import DisplayDailyForecast from "./components/RenderDailyForecast";

async function InitialLoad() {
  applySkeletonLoader();

  const { weatherData, hourlyData, dailyData } =
    await fetchCityWeatherData("Tokyo");

  DisplayWeatherData(weatherData);
  DisplayHourlyForecast(hourlyData);
  DisplayDailyForecast(dailyData);
  EventHandlers();
}

InitialLoad();
