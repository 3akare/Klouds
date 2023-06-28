export const Others = () => {
  const others = document.createElement('section');
  const dark = document.querySelector('html').classList.contains('dark');
  others.setAttribute(
    'class',
    'flex flex-row justify-around items-center rounded-sm w-full h-fit child-3 bg-white/20 shadow-sm backdrop:blur-sm border-white/20 border dark:bg-white/10 dark:backdrop:blur-lg dark:border-white/10'
  );

  others.innerHTML = `
        <div class="p-2 m-2 text-center flex items-center flex-col">
            <img
            ${
              dark
                ? 'src="/dark/humidity-svgrepo-com.svg"'
                : 'src="/humidity-svgrepo-com.svg" '
            }
            alt="" width="40px" height="40px" class="w-12 h-12">
            <p class="p-1 m-1 font-semibold">Humidity</p>
            <p class="p-1 m-1">low</p>
        </div>
        <div class="p-2 m-2 text-center flex items-center flex-col">
            <img
             ${
               dark
                 ? 'src="/dark/uv-index-alt-svgrepo-com.svg"'
                 : 'src="/uv-index-alt-svgrepo-com.svg"'
             }
            alt="" width="40px" height="40px" class="w-12 h-12">
            <p class="p-1 m-1 font-semibold">UV index</p>
            <p class="p-1 m-1">low</p>
        </div>
        <div class="p-2 m-2 text-center flex items-center flex-col">
            <img
            ${
              dark
                ? 'src="/dark/wind-svgrepo-com.svg"'
                : 'src="/wind-svgrepo-com.svg"'
            }
            alt="" width="40px" height="40px" class="w-12 h-12">
            <p class="p-1 m-1 font-semibold">Wind</p>
            <p class="p-1 m-1">low</p>
        </div>
    `;
  return others;
};
