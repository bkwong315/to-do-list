import menu from './imgs/menu.svg';

import './Header.scss';

const Header = () => {
  const headerContainer = document.createElement('header');
  const hamburgerMenu = document.createElement('img');
  const title = document.createElement('h1');

  headerContainer.classList.add('header-container');

  hamburgerMenu.src = menu;
  title.textContent = 'To Do';

  headerContainer.appendChild(hamburgerMenu);
  headerContainer.appendChild(title);

  return headerContainer;
};

export default Header;
