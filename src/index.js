import Header from './components/Header/Header';
import SideBar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';

import './style.scss';

const App = (() => {
  let appContainer = document.createElement('div');
  let header = Header();
  let sideBar = SideBar();
  let mainContent = MainContent();

  appContainer.classList.add('app-container');

  appContainer.appendChild(header);
  appContainer.appendChild(sideBar);
  appContainer.appendChild(mainContent);

  return appContainer;
})();

document.querySelector('body').appendChild(App);
