export const DayTime = () => {
  const day = document.createElement("section");
  day.setAttribute(
    "class",
    "flex flex-row justify-around items-center rounded-sm bg-slate-300  h-fit child-1 mt-72"
  );
  day.innerHTML = `
    <div class="flex overflow-x-auto">
        <div class="flex flex-col items-center w-[80px] h-32 min-w-[80px] bg-red-300 rounded-sm p-2 m-2">
            <p>9:00</p>
            <img src="#" alt="svg" width="96px" height="50px">
            <p>24º</p>
        </div>
    </div>
  `;
  return day;
};
