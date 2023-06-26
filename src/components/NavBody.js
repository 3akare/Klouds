export const NavBody = () => {
  const div = document.createElement("div");
  div.setAttribute("class", "flex flex-row justify-between p-2 m-2");
  div.innerHTML = `
        <div class="flex flex-col p-1 m-1 space-y-4 justify-center">
            <h1 class="text-7xl">
                23<span class="text-5xl">ºc</span>
            </h1>
            <div class="flex flex-row space-x-4 m-1">
                <p class="text-xl">
                    Abuja
                </p>
                <img src="#" alt="location" width="30px" height="30px">
            </div>
        </div>
        <div class="flex p-1 m-1 flex-col justify-center">
            <img src="#" alt="weather" width="100px" height="100px">
            <p>
                date
            </p>
        </div>
    `;
  return div;
};
