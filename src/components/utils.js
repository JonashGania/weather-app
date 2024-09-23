import { parse, format } from "date-fns";
import cloudy from "../assets/icons/cloudy.svg";
import clearDay from "../assets/icons/clear-day.svg";
import clearNight from "../assets/icons/clear-night.svg";
import partlyCloudyDay from "../assets/icons/partly-cloudy-day.svg";
import partlyCloudyNight from "../assets/icons/partly-cloudy-night.svg";
import rainy from "../assets/icons/rainy.svg";
import rainStorm from "../assets/icons/rain-storm.svg";
import overcast from "../assets/icons/overcast.svg";

const formatTime = (timeValue) => {
  const parsedTime = timeValue
    ? parse(timeValue, "HH:mm:ss", new Date())
    : null;
  const formattedTime = parsedTime ? format(parsedTime, "hh:mm a") : null;

  return formattedTime;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}/${day}`;
};

const checkWeatherIcon = (icon) => {
  const weatherIcon = document.createElement("img");
  const conditionIcon = icon.toLowerCase();

  switch (conditionIcon) {
    case "cloudy":
      weatherIcon.src = overcast;
      break;
    case "clear-day":
      weatherIcon.src = clearDay;
      break;
    case "clear-night":
      weatherIcon.src = clearNight;
      break;
    case "partly-cloudy-day":
      weatherIcon.src = partlyCloudyDay;
      break;
    case "partly-cloudy-night":
      weatherIcon.src = partlyCloudyNight;
      break;
    case "rain":
      weatherIcon.src = rainy;
      break;
    default:
      break;
  }

  return weatherIcon;
};

const changeDateToDay = (dateString) => {
  const date = new Date(dateString);
  return format(date, "EEEE");
};

export { formatTime, checkWeatherIcon, changeDateToDay, formatDate };
