import { searchCityWeatherData } from "./api";
import { updateTemperature } from "./utils";

const EventHandlers = (): void => {
  const searchBtn = <HTMLButtonElement>document.querySelector(".search-btn");
  const searchBar = <HTMLInputElement>document.getElementById("search-input-city");
  const switchBtn = <HTMLLabelElement>document.getElementById("btn-indicator");

  searchBtn.addEventListener("click", searchCityWeatherData);
  searchBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchCityWeatherData();
      searchBar.value = "";
    }
  });
  switchBtn.addEventListener("change", (event: Event) => {
    const target = event.target as HTMLInputElement | null
    const isCelcius = target?.checked;
    updateTemperature(isCelcius);
  });
};

export { EventHandlers };
