import { NavBar } from './NavBar';
import { NavBody } from './NavBody';

export const CreateHeader = async () => {
  const nav = await NavBar();
  const div = await NavBody();

  const header = document.createElement('header');
  header.setAttribute('class', 'fixed w-full');

  const section = document.createElement('section');
  section.setAttribute(
    'class',
    'container mx-auto max-w-3xl p-2 bg-white/60 backdrop-blur-lg border-white/20 border dark:bg-white/10 dark:backdrop:blur-lg dark:border-white/10'
  );
  header.prepend(section);
  section.prepend(nav);
  section.append(div);
  return header;
};
