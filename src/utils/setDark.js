import { getSunSet } from "./getSunData";

// const sundata = {results: {sunrise: '5', sunset: '8'}};
export const setDarkMode = async () => {
  const sundata = await getSunSet();
  let sunrise = sundata.results.sunrise;
  let sunset = sundata.results.sunset;

  const time = new Date().getHours();

  time >= parseInt(sunset.split(":")[0], 10) + 12 ||
  time < parseInt(sunrise.split(":")[0], 10)
    ? document.querySelector("html").classList.add("dark")
    : document.querySelector("html").classList.remove("dark");
};
