import { CreateFooter } from "./src/components/Footer";
import { CreateMain } from "./src/components/Main";
import { CreateHeader } from "./src/components/Header";

let header = CreateHeader();
let footer = CreateFooter();
let main = CreateMain();

document.body.prepend(footer);
document.body.prepend(main);
document.body.prepend(header);
