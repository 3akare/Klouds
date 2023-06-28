import { getSunSet } from "../../utils/getSunData";

// const sundata = { results: { sunrise: "5", sunset: "8" } };
export const SunSection = async () => {
  const sun = document.createElement("section");
  const sundata = await getSunSet();
  sun.setAttribute(
    "class",
    "flex flex-row justify-between items-center rounded-sm w-full h-fit child-2 bg-white/20 shadow-sm backdrop:blur-sm border-white/20 border dark:bg-white/10 dark:backdrop:blur-lg dark:border-white/10"
  );
  sun.innerHTML = `
    <div class="flex flex-col items-center justify-center space-y-4 p-2 m-2">
        <h2 class="font-semibold">
          Sunrise
        </h2>
          <lottie-player src="./36236-sun-icon (1).json"  background="transparent"  speed="1"  style="width: 150px; height: 150px;" hover autoplay loop class="-z-10"></lottie-player>
        <time>
          ${sundata.results.sunrise}
        </time>
    </div>
    <div class="flex flex-col items-center justify-center space-y-4 p-2 m-2">
        <h2 class="font-semibold">
          Sunset
        </h2>
        <lottie-player src="./36236-blue-sun.json"  background="transparent"  speed="1"  style="width: 150px; height: 150px;" hover autoplay loop class="-z-10"></lottie-player>
        <time>
          ${sundata.results.sunset}
        </time>
    </div>
  `;
  return sun;
};
