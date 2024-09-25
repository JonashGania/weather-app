import { searchCityWeatherData } from "./api";
import { updateTemperature } from "./utils";

const EventHandlers = () => {
  const searchBtn = document.querySelector(".search-btn");
  const searchBar = document.getElementById("search-input-city");
  const switchBtn = document.getElementById("btn-indicator");

  searchBtn.addEventListener("click", searchCityWeatherData);
  searchBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchCityWeatherData();
      searchBar.value = "";
    }
  });
  switchBtn.addEventListener("change", (event) => {
    const isCelcius = event.target.checked;
    updateTemperature(isCelcius);
  });
};

export { EventHandlers };
