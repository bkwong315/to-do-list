import Header from './components/Header/Header';
import SideBar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Modal from './components/Modal/Modal';

import './style.scss';

const App = (() => {
  const createModal = (request, callBack) => {
    let modal = Modal(request, callBack);
    appContainer.append(modal.element);
  };

  const dataFlow = { createModal };

  let appContainer = document.createElement('div');
  let header = Header();
  let sideBar = SideBar(dataFlow);
  let mainContent = MainContent(dataFlow);

  /* let modal = Modal({
    action: 'add',
    type: 'task',
    details: {
      name: 'Task 1',
      desc: 'Task 1 description',
      priority: 'high',
      dueDate: new Date(2023, 0, 21).valueOf(),
    },
  }); */

  appContainer.classList.add('app-container');

  appContainer.appendChild(header);
  appContainer.appendChild(sideBar);
  appContainer.appendChild(mainContent);

  return appContainer;
})();

document.querySelector('body').appendChild(App);
