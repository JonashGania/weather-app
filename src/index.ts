import "./styles/style.css";
import { fetchCityWeatherData } from "./components/api";
import { EventHandlers } from "./components/eventHandlers";
import { applySkeletonLoader, removeSkeletonLoader } from "./components/utils";
import DisplayWeatherData from "./components/RenderWeatherData";
import DisplayHourlyForecast from "./components/RenderHourlyForecast";
import DisplayDailyForecast from "./components/RenderDailyForecast";

async function InitialLoad(): Promise<void> {
  applySkeletonLoader();

  const result = await fetchCityWeatherData("Tokyo");
  
  if(result){
    const { weatherData, hourlyData, dailyData } = result

    removeSkeletonLoader();
    DisplayWeatherData(weatherData);
    DisplayHourlyForecast(hourlyData);
    DisplayDailyForecast(dailyData);
    EventHandlers();
  }
}

window.onload = InitialLoad;
