import Header from './components/Header/Header';
import SideBar from './components/Sidebar/Sidebar';

import './style.scss';

const App = (() => {
  let appContainer = document.createElement('div');
  let header = Header();
  let sideBar = SideBar();

  appContainer.classList.add('app-container');

  appContainer.appendChild(header);
  appContainer.appendChild(sideBar);

  return appContainer;
})();

document.querySelector('body').appendChild(App);
