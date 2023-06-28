import { CreateFooter } from './src/components/Footer';
import { CreateMain } from './src/components/Main';
import { CreateHeader } from './src/components/Header';
import { setDarkMode } from './src/utils/setDark';

setDarkMode();

const setup = async ()=> {
    const header = await CreateHeader();
    const footer = CreateFooter();
    const main = await CreateMain();

    document.body.prepend(footer);
    document.body.prepend(main);
    document.body.prepend(header);
}

setup();


