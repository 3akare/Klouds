export const CreateMain = () => {
  let main = document.createElement("main");
  main.setAttribute("class", "text-red-900");
  main.innerHTML = `
        <section>
            This is main
        </section>
    `;
  return main;
};
