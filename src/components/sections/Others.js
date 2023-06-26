export const Others = () => {
  const others = document.createElement("section");
  others.setAttribute(
    "class",
    "flex flex-row justify-around items-center rounded-sm w-full h-fit child-2 bg-white/20 shadow-sm backdrop:blur-sm border-white/20 border"
  );

  others.innerHTML = `
        <div class="p-2 m-2 text-center flex items-center flex-col">
            <img src="/humidity-svgrepo-com.svg" alt="" width="40px" height="40px" class="w-12 h-12">
            <p class="p-1 m-1">UV index</p>
            <p class="p-1 m-1">low</p>
        </div>
        <div class="p-2 m-2 text-center flex items-center flex-col">
            <img src="/uv-index-alt-svgrepo-com.svg" alt="" width="40px" height="40px" class="w-12 h-12">
            <p class="p-1 m-1">Humidity</p>
            <p class="p-1 m-1">low</p>
        </div>
        <div class="p-2 m-2 text-center flex items-center flex-col">
            <img src="/wind-svgrepo-com.svg" alt="" width="40px" height="40px" class="w-12 h-12">
            <p class="p-1 m-1">Wind</p>
            <p class="p-1 m-1">low</p>
        </div>
    `;
  return others;
};
