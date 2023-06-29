import { getWeather } from "../utils/getWeather";

export const NavBar = async () => {
  const nav = document.createElement("nav");
  const dark = document.querySelector("html").classList.contains("dark");
  nav.setAttribute(
    "class",
    "flex flex-row justify-between items-center p-2 m-2"
  );
  nav.innerHTML = `
        <h1 class="p-2">
            Klouds™
        </h1>
        <div class="search-container">
          <input type="text" name="search" id="search" placeholder="Search city..." class="border p-1 px-4 rounded-md w-full dark:bg-indigo-950 dark:border-white/20 focus:outline-none hover:outline-none selection:outline-none">
          <button type="submit" class="search-button" id="searchButton">
            <img
            ${
              dark
                ? 'src="./search-svgrepo-com.svg"'
                : 'src="./dark/search-svgrepo-com.svg"'
            }
            alt="Search"
            width="20px"
            height="20px">
          </button>
        </div>

    `;
  return nav;
};
