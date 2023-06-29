import { weatherData } from "./getWeather";

export const getSunSet = async () => {
  const url = `https://api.sunrisesunset.io/json?lat=${weatherData.location.lat}&lng=${weatherData.location.lon}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
