export const CreateFooter = () => {
  const footer = document.createElement("footer");
  const section = document.createElement("section");
  let day = new Date().getUTCDate();
  let month = new Date().getUTCMonth();
  let hour = new Date().getUTCHours();
  let min = new Date().getUTCMinutes();

  footer.setAttribute("class", "w-full mt-12");
  section.setAttribute("class", "container mx-auto max-w-3xl p-2");

  section.innerHTML = `
    <div class="flex flex-row justify-between p-2 m-2">
      <p>&copy; Klouds</p>
      <p>${day + "/" + month + ", " + hour + ":" + min} Updated</p>
    </div>
  `;
  footer.prepend(section);
  return footer;
};
