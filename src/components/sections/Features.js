export const Features = () => {
  const features = document.createElement("section");
  features.setAttribute(
    "class",
    "flex flex-row justify-around items-center rounded-sm  w-full h-fit child-3 bg-white/20 shadow-sm backdrop:blur-sm border-white/20 border"
  );
  features.innerHTML = `
    <div class="w-full">
      <ul class="p-2 m-2">
        <li class="flex flex-row  justify-between p-2 m-2 items-center">
          <div class="flex flex-row items-center">
             <p class="font-medium">Pollen Grain</p>
            <img src="/wheat-svgrepo-com.svg" alt="location" width="30px" height="30px">
          </div>
          <p class="font-light">low(2)</p>
        </li>
        <li class="flex flex-row justify-between p-2 m-2 items-center">
          <div class="flex flex-row items-center">
             <p class="font-medium mr-2">AOI</p>
            <img src="/wind-svgrepo-com.svg" alt="location" width="20px" height="20px">
          </div>
          <p class="font-light">low(2)</p>
        </li>
        <li class="flex flex-row justify-between p-2 m-2">
           <div class="flex flex-row items-center">
             <p class="font-medium">Running</p>
            <img src="/running-run-sport-svgrepo-com.svg" alt="location" width="40px" height="40px">
          </div>
          <p class="font-light">low(2)</p>
        </li>
      </ul>
    </div>
  `;
  return features;
};
