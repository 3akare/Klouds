import { NavBar } from "./NavBar";
import { NavBody } from "./NavBody";

export const CreateHeader = () => {
  const nav = NavBar();
  const div = NavBody();

  const header = document.createElement("header");
  header.setAttribute("class", "fixed w-full");

  const section = document.createElement("section");
  section.setAttribute(
    "class",
    "container mx-auto max-w-3xl p-2 z-10 bg-white"
  );
  header.prepend(section);

  section.prepend(nav);
  section.append(div);
  return header;
};
