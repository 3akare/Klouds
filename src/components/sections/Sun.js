export const SunSection = () => {
  const sun = document.createElement("section");
  sun.setAttribute(
    "class",
    "flex flex-row justify-around items-center rounded-sm bg-slate-300 w-full h-fit child-2"
  );
  sun.innerHTML = `
    <div class="flex flex-col items-center justify-center space-y-4 p-1 m-1">
        <h2>
          Sunrise
        </h2>
        <time>
          06:25
        </time>
        <img src="#" alt="sunrise" width="70px" height="70px" class="w-32 h-32">
    </div>
    <div class="flex flex-col items-center justify-center space-y-4 p-1 m-1">
       <h2>
          Sunrise
        </h2>
        <time>
          06:25
        </time>
        <img src="#" alt="sunrise" width="70px" height="70px" class="w-32 h-32">
    </div>
  `;
  return sun;
};
