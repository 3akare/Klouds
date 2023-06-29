export const CreateFooter = async () => {
  const footer = document.createElement("footer");
  const section = document.createElement("section");
  const dark = document.querySelector("html").classList.contains("dark");
  const day = new Date().getUTCDate();
  const month = new Date().getUTCMonth();
  const hour = new Date().getUTCHours();
  const min = new Date().getUTCMinutes();

  footer.setAttribute("class", "w-full mt-12");
  section.setAttribute("class", "container mx-auto max-w-3xl p-2");
  section.innerHTML = `
    <div class="flex flex-row justify-between p-2 m-2">
      <p>Klouds™</p>
      <div class="flex flex-row gap-2 items-center">
        <p>${day + "/" + month + ", " + hour + ":" + min} Updated</p>
       <img
            ${
              dark
                ? 'src="/dark/reload-svgrepo-com.svg"'
                : 'src="/reload-svgrepo-com.svg"'
            }
            alt="location" width="18ox" height="18px" onclick="window.location.reload()">
      </div>
    </div>
  `;
  footer.prepend(section);
  return footer;
};
