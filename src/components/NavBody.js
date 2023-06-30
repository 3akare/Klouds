import { getSunSet } from "../utils/getSunData";
import { weatherData } from "../utils/getWeather";

export const NavBody = async () => {
  const div = document.createElement("div");
  const time = new Date().getHours();
  const sundata = await getSunSet();
  let sunrise = sundata.results.sunrise;
  let sunset = sundata.results.sunset;
  const dark = document.querySelector("html").classList.contains("dark");
  div.setAttribute("class", "flex flex-row justify-between p-2 m-2");
  div.innerHTML = `
        <div class="flex flex-col p-1 m-1 space-y-4 justify-center">
            <h1 class="text-7xl">
                ${Math.ceil(
                  weatherData.current.feelslike_c
                )}<span class="text-5xl">ºc</span>
            </h1>
            <div class="flex flex-row m-1 space-x-1">
                <p class="text-lg">
                    ${weatherData.location.name}
                </p>
                <img
                ${
                  dark
                    ? `src="/dark/location-pin-svgrepo-com.svg"`
                    : `src = "/location-pin-svgrepo-com.svg")`
                }alt="location" width="15px" height="15px">
            </div>
        </div>
        <div class="flex p-1 m-1 flex-col justify-end items-start">
        ${
          time >= parseInt(sunset.split(":")[0], 10) + 12 ||
          time < parseInt(sunrise.split(":")[0], 10)
            ? ` <lottie-player src="./10686-the-moon.json"  background="transparent"  speed="1"  style="width: 100px; height: 100px;"  loop autoplay></lottie-player>
            `
            : `<lottie-player src="./36236-sun-icon (1).json"  background="transparent"  speed="1"  style="width: 150px; height: 150px;"  loop autoplay></lottie-player>`
        }
        </div>
    `;
  // todo: Change the src of the lottie-player above
  return div;
};
