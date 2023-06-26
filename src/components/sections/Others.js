export const Others = () => {
  const others = document.createElement("section");
  others.setAttribute(
    "class",
    "flex flex-row justify-around items-center rounded-sm bg-slate-300 w-full h-fit child-3"
  );

  others.innerHTML = `
        <div class="p-2 m-2 text-center">
            <img src="#" alt="" widht="80px" height="80px" class="w-[80px] h-[80px]">
            <p class="p-1 m-1">UV index</p>
        </div>
        <div class="p-2 m-2 text-center">
            <img src="#" alt="" widht="80px" height="80px" class="w-[80px] h-[80px]">
            <p class="p-1 m-1">UV index</p>
        </div>
        <div class="p-2 m-2 text-center">
            <img src="#" alt="" widht="80px" height="80px" class="w-[80px] h-[80px]">
            <p class="p-1 m-1">UV index</p>
        </div>
    `;
  return others;
};
