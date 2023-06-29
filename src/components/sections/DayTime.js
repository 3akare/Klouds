export const DayTime = () => {
  const day = document.createElement('section');
  const div = document.createElement('div');
  day.setAttribute(
    'class',
    'flex flex-row justify-around items-center rounded-sm h-fit child-1 mt-[15.8rem] bg-white/20 shadow-sm backdrop:blur-sm border-white/20 border dark:bg-white/10 dark:backdrop:blur-lg dark:border-white/10'
  );
  div.setAttribute(
    "class",
    "flex overflow-x-auto divide-x-[1px] divide-slate-200/20"
  );
  for (let i = 0; i < 10; i++){
    div.innerHTML += `
        <div class="flex flex-col items-center justify-center w-[80px] h-32 min-w-[80px] rounded-sm p-2 m-2 space-y-2">
            <p>9:00</p>
            <img src="./cloudy-sunny.svg" width="50px" height="50px">
            <p>24º</p>
        </div>`;
  }
  day.append(div);
  ;
  return day;
};
