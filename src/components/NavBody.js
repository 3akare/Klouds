export const NavBody = () => {
  const div = document.createElement("div");
  const time = (new Date).getHours;
  div.setAttribute("class", "flex flex-row justify-between p-2 m-2");
  div.innerHTML = `
        <div class="flex flex-col p-1 m-1 space-y-4 justify-center">
            <h1 class="text-7xl">
                23<span class="text-5xl">ºc</span>
            </h1>
            <div class="flex flex-row m-1 space-x-1">
                <p class="text-lg">
                    Abuja
                </p>
                <img src="/location-pin-svgrepo-com.svg" alt="location" width="15px" height="15px">
            </div>
        </div>
        <div class="flex p-1 m-1 flex-col justify-end items-start">
        ${
          time > 6 && time < 20
            ? ` <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_5i5k8eh3.json"  background="transparent"  speed="1"  style="width: 150px; height: 150px;"  loop autoplay></lottie-player>`
            : ` <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_sCwGNr.json"  background="transparent"  speed="1"  style="width: 100px; height: 100px;"  loop autoplay></lottie-player>`
        }
           
           
        </div>
    `;
  return div;
};
