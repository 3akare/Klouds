import { DayTime } from "./sections/DayTime";
import { Features } from "./sections/Features";
import { Others } from "./sections/Others";
import { SunSection } from "./sections/Sun";

export const CreateMain = async () => {
  const main = document.createElement("main");
  const child1 = DayTime();
  const child2 = await SunSection();
  const child3 = Others();
  const child4 = Features();

  main.setAttribute("class", "container mx-auto p-2 max-w-3xl space-y-4");
  main.prepend(child1);
  main.append(child2);
  main.append(child3);
  main.append(child4);

  return main;
};
