import { CreateFooter } from "./src/components/Footer";
import { CreateMain } from "./src/components/Main";
import { CreateHeader } from "./src/components/Header";
import { setDarkMode } from "./src/utils/setDark";
import { validLocation } from "./src/utils/validLocation";

setDarkMode();

const domSetup = async () => {
  const header = await CreateHeader();
  const footer = await CreateFooter();
  const main = await CreateMain();

  document.body.prepend(footer);
  document.body.prepend(main);
  document.body.prepend(header);
  const searchInput = document.querySelector("#search");
  const searchButton = document.querySelector("#searchButton");

  searchButton.addEventListener("click", async function (event) {
    const searchTerm = searchInput.value.trim();
    const status = await validLocation(searchTerm);
    if (status) {
      window.localStorage.setItem("location", searchTerm);
      window.location.reload();
    } else {
      alert("Invalid Location");
      searchInput.value = "";
    }
  });

  searchInput.addEventListener("keypress", async function (event) {
    if (event.key === "Enter") {
      const searchTerm = searchInput.value.trim();
      const status = await validLocation(searchTerm);
      if (status) {
        window.localStorage.setItem("location", searchTerm);
        window.location.reload();
      } else {
        alert("Invalid Location");
        searchInput.value = "";
      }
    }
  });
};

domSetup();
