import { weatherData } from "../../utils/getWeather";

export const Features = () => {
  const features = document.createElement("section");
  const dark = document.querySelector("html").classList.contains("dark");
  features.setAttribute(
    "class",
    "flex flex-row justify-around items-center rounded-sm  w-full h-fit child-4 bg-white/20 shadow-sm backdrop:blur-sm border-white/20 border dark:bg-white/10 dark:backdrop:blur-lg dark:border-white/10"
  );
  features.innerHTML = `
    <div class="w-full">
      <ul class="p-2 m-2 divide-y-[1px] dark:divide-white/10">
        <li class="flex flex-row  justify-between p-2 m-2 items-center">
          <div class="flex flex-row items-center">
             <p class="font-medium">Pollen Grain</p>
            <img
            ${
              dark
                ? 'src="/dark/wheat-svgrepo-com.svg"'
                : 'src="/wheat-svgrepo-com.svg"'
            }
             alt="location" width="20px" height="20px">
          </div>
          <p class="">low(2)</p>
        </li>
        <li class="flex flex-row justify-between p-2 m-2 items-center">
          <div class="flex flex-row items-center">
             <p class="font-medium mr-2">AOI</p>
            <img
            ${
              dark
                ? 'src="/dark/wind-svgrepo-com.svg"'
                : 'src="/wind-svgrepo-com.svg"'
            }
            alt="location" width="18px" height="18px">
          </div>
          <p class="">${weatherData.current.air_quality["us-epa-index"]}</p>
        </li>
        <li class="flex flex-row justify-between p-2 m-2">
           <div class="flex flex-row items-center">
             <p class="font-medium">Running</p>
            <img
             ${
               dark
                 ? 'src="/dark/running-run-sport-svgrepo-com.svg"'
                 : 'src="/running-run-sport-svgrepo-com.svg"'
             }
            alt="location" width="35px" height="35px">
          </div>
          <p class="">${
            weatherData.current.air_quality["us-epa-index"] < 50 &&
            weatherData.current.air_quality["us-epa-index"] > 0
              ? `good`
              : `bad`
          }</p>
        </li>
      </ul>
    </div>
  `;
  return features;
};
