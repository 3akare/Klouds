import { CreateFooter } from './src/components/Footer';
import { CreateMain } from './src/components/Main';
import { CreateHeader } from './src/components/Header';
import { setDarkModeMode } from './src/utils/setDarkMOde';

setDarkModeMode();

const header = CreateHeader();
const footer = CreateFooter();
const main = CreateMain();

document.body.prepend(footer);
document.body.prepend(main);
document.body.prepend(header);
