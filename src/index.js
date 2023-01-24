import Header from './components/Header/Header';

import './style.scss';

const App = (() => {
  let appContainer = document.createElement('div');
  let header = Header();

  appContainer.classList.add('app-container');

  appContainer.appendChild(header);

  return appContainer;
})();

document.querySelector('body').appendChild(App);
