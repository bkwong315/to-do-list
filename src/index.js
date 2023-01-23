import './style.scss';

const App = (() => {
  let appContainer = document.createElement('div');

  appContainer.textContent = 'Hello World';

  appContainer.classList.add('app');

  return appContainer;
})();

document.querySelector('body').appendChild(App);
