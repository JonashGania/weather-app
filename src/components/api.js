import DisplayDailyForecast from "./RenderDailyForecast";
import DisplayHourlyForecast from "./RenderHourlyForecast";
import DisplayWeatherData from "./RenderWeatherData";
import { displayNoResultsFound } from "./utils";

async function fetchCityWeatherData(city) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    const currentDay = result.days[0];
    const dailyForecast = result.days;
    console.log(result);

    return {
      weatherData: result,
      hourlyData: currentDay.hours,
      dailyData: dailyForecast,
    };
  } catch (error) {
    console.error("Error", error);
  }
}

async function searchCityWeatherData() {
  const noResultsMessage = document.querySelector(".no-results");
  const cityInputValue = document
    .getElementById("search-input-city")
    .value.trim();

  try {
    const { weatherData, hourlyData, dailyData } =
      await fetchCityWeatherData(cityInputValue);
    DisplayWeatherData(weatherData);
    DisplayHourlyForecast(hourlyData);
    DisplayDailyForecast(dailyData);
    noResultsMessage.textContent = "";
  } catch (error) {
    displayNoResultsFound(
      `No results found. Try putting the city's name or point of interest.`
    );
    console.error(error);
  }
}

export { fetchCityWeatherData, searchCityWeatherData };
