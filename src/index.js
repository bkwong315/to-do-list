import Header from './components/Header/Header';
import SideBar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Modal from './components/Modal/Modal';

import './style.scss';

const App = (() => {
  let data = [
    { id: '__inbox__', name: 'Inbox', tasks: [] },
    {
      id: 'list_1',
      name: 'List 1',
      tasks: [
        {
          name: 'List 1 Task 1',
          completed: false,
          desc: 'Task 1 description',
          priority: 'high',
          dueDate: '2023-01-17',
          pinned: true,
        },
        {
          name: 'List 1 Task 2',
          completed: false,
          desc: 'Task 2 description',
          priority: 'medium',
          dueDate: '2023-01-30',
          pinned: false,
        },
        {
          name: 'List 1 Task 3',
          completed: false,
          desc: 'Task 3 description',
          priority: 'low',
          dueDate: '2023-06-03',
          pinned: false,
        },
      ],
    },
    {
      id: 'list_2',
      name: 'List 2',
      tasks: [
        {
          name: 'List 2 Task 1',
          completed: false,
          desc: 'Task 1 description',
          priority: 'high',
          dueDate: '2023-02-06',
          pinned: false,
        },
        {
          name: 'List 2  Task 2',
          completed: false,
          desc: 'Task 2 description',
          priority: 'medium',
          dueDate: '2023-02-03',
          pinned: true,
        },
        {
          name: 'List 2 Task 3',
          completed: false,
          desc: 'Task 3 description',
          priority: 'low',
          dueDate: '2023-01-30',
          pinned: false,
        },
      ],
    },
  ];

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
  let sideBar = SideBar({ data }, dataFlow);

  let selectedList = dataFlow.getListArr()[0];
  let mainContent = MainContent(selectedList, dataFlow);

  appContainer.classList.add('app-container');

  appContainer.appendChild(header);
  appContainer.appendChild(sideBar);
  appContainer.appendChild(mainContent.element);

  return appContainer;
})();

document.querySelector('body').appendChild(App);
