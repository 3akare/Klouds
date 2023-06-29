import { weatherData } from "../../utils/getWeather";

export const DayTime = () => {
  const day = document.createElement("section");
  const div = document.createElement("div");
  day.setAttribute(
    "class",
    "flex flex-row justify-around items-center rounded-sm h-fit child-1 mt-[15.8rem] bg-white/20 shadow-sm backdrop:blur-sm border-white/20 border dark:bg-white/10 dark:backdrop:blur-lg dark:border-white/10"
  );
  div.setAttribute("class", "flex overflow-x-auto");
  weatherData.forecast.forecastday[0].hour.forEach((element) => {
    div.innerHTML += `
        <div class="flex flex-col items-center justify-center w-[80px] h-32 min-w-[80px] rounded-sm p-2 m-2 space-y-2">
            <p>${element.time.split(" ")[1]}</p>
            <img src="${element.condition.icon}" width="50px" height="50px">
            <p>${Math.ceil(parseInt(element.feelslike_c))}ºc</p>
        </div>`;
  });
  day.append(div);
  return day;
};
