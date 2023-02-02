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

  const loadList = (list) => {
    selectedList = list;
    updateMainContent();
  };

  const updateMainContent = () => {
    mainContent.updateListInfo(selectedList);
  };

  const dataFlow = { createModal, loadList, updateMainContent };

  let appContainer = document.createElement('div');
  let header = Header();
  let sideBar = SideBar(dataFlow);

  let selectedList = dataFlow.getListArr()[0];
  let mainContent = MainContent(selectedList, dataFlow);

  appContainer.classList.add('app-container');

  appContainer.appendChild(header);
  appContainer.appendChild(sideBar);
  appContainer.appendChild(mainContent.element);

  return appContainer;
})();

document.querySelector('body').appendChild(App);
