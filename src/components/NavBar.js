export function CreateNavBar() {
  const header = document.createElement("header");
  header.setAttribute("class", "text-blue-600");
  header.innerHTML = `
            <nav>
              This is Header
            </nav>
    `;
  return header;
}
