export const Features = () => {
  const features = document.createElement("section");
  features.setAttribute(
    "class",
    "flex flex-row justify-around items-center rounded-sm bg-slate-300 w-full h-fit child-4"
  );
  features.innerHTML = `
    <div class="w-full">
      <ul class="p-2 m-2">
        <li class="flex flex-row justify-between p-2 m-2">
          <p class="font-medium">Pollen Grain</p>
          <p class="font-light">low(2)</p>
        </li>
        <li class="flex flex-row justify-between p-2 m-2">
          <p class="font-medium">Pollen Grain</p>
          <p class="font-light">low(2)</p>
        </li>
        <li class="flex flex-row justify-between p-2 m-2">
          <p class="font-medium">Pollen Grain</p>
          <p class="font-light">low(2)</p>
        </li>
      </ul>
    </div>
  `;
  return features;
};
