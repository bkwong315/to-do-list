import Header from './components/Header/Header';
import SideBar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Modal from './components/Modal/Modal';

import './style.scss';

const App = (() => {
  let appContainer = document.createElement('div');
  let header = Header();
  let sideBar = SideBar();
  let mainContent = MainContent();

  let modal = Modal({
    action: 'add',
    type: 'task',
    details: {
      name: 'Task 1',
      desc: 'Task 1 description',
      priority: 'high',
      dueDate: new Date(2023, 0, 21).valueOf(),
    },
  });

  appContainer.classList.add('app-container');

  appContainer.appendChild(header);
  appContainer.appendChild(sideBar);
  appContainer.appendChild(mainContent);
  appContainer.appendChild(modal.element);

  return appContainer;
})();

document.querySelector('body').appendChild(App);
