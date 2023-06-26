import { CreateFooter } from "./src/components/Footer";
import { CreateMain } from "./src/components/Main";
import { CreateNavBar } from "./src/components/NavBar";

let header = CreateNavBar();
let footer = CreateFooter();
let main = CreateMain();

document.body.prepend(footer);
document.body.prepend(main);
document.body.prepend(header);
