export const CreateFooter = () => {
  const footer = document.createElement('footer');
  const section = document.createElement('section');
  const day = new Date().getUTCDate();
  const month = new Date().getUTCMonth();
  const hour = new Date().getUTCHours();
  const min = new Date().getUTCMinutes();

  footer.setAttribute('class', 'w-full mt-12');
  section.setAttribute('class', 'container mx-auto max-w-3xl p-2');

  section.innerHTML = `
    <div class="flex flex-row justify-between p-2 m-2">
      <p>Klouds™</p>
      <p>${day + '/' + month + ', ' + hour + ':' + min} Updated</p>
    </div>
  `;
  footer.prepend(section);
  return footer;
};
