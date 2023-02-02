import Header from './components/Header/Header';
import SideBar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Modal from './components/Modal/Modal';
import updateArrElement from './utility/updateArrElement';
import removeFromArr from './utility/removeFromArr';

import './style.scss';

const App = (() => {
  let data = [
    { id: '__inbox__', name: 'Inbox', tasks: [] },
    {
      id: 'list_1',
      name: 'List 1',
      tasks: [
        {
          list_id: 'list_1',
          name: 'List 1 Task 1',
          completed: false,
          desc: 'Task 1 description',
          priority: 'high',
          dueDate: '2023-01-17',
          pinned: true,
        },
        {
          list_id: 'list_1',
          name: 'List 1 Task 2',
          completed: false,
          desc: 'Task 2 description',
          priority: 'medium',
          dueDate: '2023-01-30',
          pinned: false,
        },
        {
          list_id: 'list_1',
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
          list_id: 'list_2',
          name: 'List 2 Task 1',
          completed: false,
          desc: 'Task 1 description',
          priority: 'high',
          dueDate: '2023-02-06',
          pinned: false,
        },
        {
          list_id: 'list_2',
          name: 'List 2 Task 2',
          completed: false,
          desc: 'Task 2 description',
          priority: 'medium',
          dueDate: '2023-02-03',
          pinned: true,
        },
        {
          list_id: 'list_2',
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

  const updateDataArrList = (originalList, updatedList, updateDisplay) => {
    if (updateArrElement(data, originalList, updatedList, 'name')) {
      updateDisplay();
    }
  };

  const updateDataArrTask = (originalTask, updatedTask, updateDisplay) => {
    for (const list of data) {
      if (list.id === originalTask.list_id) {
        updateArrElement(list.tasks, originalTask, updatedTask, 'name');
        updateDisplay();
      }
    }
  };

  const addTask = (task) => {
    let newTask = Object.assign(task, { list_id: selectedList.id });
    data.filter((list) => list.id === selectedList.id)[0].tasks.push(newTask);
    selectedList.tasks.push(newTask);
    console.log(selectedList);
    loadList(selectedList);
  };

  const removeTask = (task) => {
    removeFromArr(
      data.filter((list) => list.id === task.list_id)[0].tasks,
      task
    );
    removeFromArr(selectedList.tasks, task);
    loadList(selectedList);
  };

  const loadList = (list) => {
    selectedList = list;
    updateMainContent();
  };

  const updateMainContent = () => {
    mainContent.updateListInfo(selectedList);
  };

  const dataFlow = {
    data,
    createModal,
    loadList,
    updateMainContent,
    updateDataArrList,
    updateDataArrTask,
    addTask,
    removeTask,
  };

  let appContainer = document.createElement('div');
  let header = Header();
  let sideBar = SideBar({ data }, dataFlow);

  let selectedList = {
    id: data[0].id,
    name: data[0].name,
    tasks: structuredClone(data[0].tasks),
  };
  let mainContent = MainContent({ selectedList }, dataFlow);

  appContainer.classList.add('app-container');

  appContainer.appendChild(header);
  appContainer.appendChild(sideBar);
  appContainer.appendChild(mainContent.element);

  return appContainer;
})();

document.querySelector('body').appendChild(App);
