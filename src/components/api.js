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

    return {
      weatherData: result,
      hourlyData: currentDay.hours,
      dailyData: dailyForecast,
    };
  } catch (error) {
    console.error("Error", error);
  }
}

export { fetchCityWeatherData };
