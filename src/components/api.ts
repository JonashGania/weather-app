import DisplayDailyForecast from "./RenderDailyForecast";
import DisplayHourlyForecast from "./RenderHourlyForecast";
import DisplayWeatherData from "./RenderWeatherData";
import { displayNoResultsFound, applySkeletonLoader, removeSkeletonLoader } from "./utils";
import { WeatherData, DailyData, HourlyData } from "../interface/weatherData";

interface ReturnWeatherData{
  weatherData: WeatherData; 
  hourlyData: HourlyData[]; 
  dailyData: DailyData[]
}

async function fetchCityWeatherData(city: string): Promise< ReturnWeatherData | undefined> {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const result = await response.json();
    const currentDay = result.days[0];
    const dailyForecast = result.days;

    return {
      weatherData: result,
      hourlyData: currentDay.hours,
      dailyData: dailyForecast,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

async function searchCityWeatherData() {
  const noResultsMessage = <HTMLParagraphElement>document.querySelector(".no-results");
  const cityInputElement = <HTMLInputElement>document.getElementById("search-input-city")
  const cityInputValue = cityInputElement.value.trim();

  if (!cityInputValue) {
    displayNoResultsFound("Please enter a valid city name.");
    return;
  }

  applySkeletonLoader();

  try {
    const result = await fetchCityWeatherData(cityInputValue);

    if(result){
      const { weatherData, hourlyData, dailyData } = result
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      removeSkeletonLoader();
      DisplayWeatherData(weatherData);
      DisplayHourlyForecast(hourlyData);
      DisplayDailyForecast(dailyData);
      noResultsMessage.textContent = "";
    }

  } catch (error) {
    displayNoResultsFound(
      `No results found. Try putting the city's name or point of interest.`,
    );

    console.error(error);
  } finally {
    
    removeSkeletonLoader();
  }
}

export { fetchCityWeatherData, searchCityWeatherData };
