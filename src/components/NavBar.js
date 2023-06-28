export const NavBar = () => {
  const nav = document.createElement('nav');
  nav.setAttribute(
    'class',
    'flex flex-row justify-between items-center p-2 m-2'
  );
  nav.innerHTML = `
        <h1 class="p-2">
            Klouds™
        </h1>
        <input type="text" name="search" id="search" placeholder="search city..." class="border p-1 px-4 rounded-md w-1/2 dark:bg-indigo-950 dark:border-white/20 focus:outline-none">
    `;
  return nav;
};
