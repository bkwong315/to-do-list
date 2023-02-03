import Header from './components/Header/Header';
import SideBar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Modal from './components/Modal/Modal';
import updateArrElement from './utility/updateArrElement';
import removeFromArr from './utility/removeFromArr';

import './style.scss';

const App = (() => {
  /* let data = [
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
  ]; */

  let selectedList;

  const createModal = (request, callBack) => {
    let modal = Modal(request, callBack);
    appContainer.append(modal.element);
  };

  const loadData = () => {
    let retrievedData = localStorage.getItem('data');
    if (retrievedData === null)
      return [{ list_id: '__inbox__', name: 'Inbox', tasks: [] }];
    return JSON.parse(retrievedData);
  };

  let data = loadData();

  const saveData = () => {
    localStorage.setItem('data', JSON.stringify(data));
  };

  const updateDataArrList = (originalList, updatedList, updateDisplay) => {
    if (updateArrElement(data, originalList, updatedList, 'name')) {
      saveData();
      updateDisplay();
    }
  };

  const updateDataArrTask = (originalTask, updatedTask) => {
    for (const list of data) {
      if (list.list_id === originalTask.list_id) {
        updateArrElement(list.tasks, originalTask, updatedTask, 'name');
        updateArrElement(selectedList.tasks, originalTask, updatedTask, 'name');
        saveData();
        loadList(selectedList);
      }
    }
  };

  const addTask = (task) => {
    console.log(selectedList);
    console.log(data);
    let newTask = Object.assign(task, { list_id: selectedList.list_id });
    data
      .filter((list) => list.list_id === selectedList.list_id)[0]
      .tasks.push(newTask);
    selectedList.tasks.push(newTask);
    saveData();
    loadList(selectedList);
  };

  const removeTask = (task) => {
    removeFromArr(
      data.filter((list) => list.list_id === task.list_id)[0].tasks,
      task
    );
    removeFromArr(selectedList.tasks, task);
    saveData();
    loadList(selectedList);
  };

  const getList = () => {
    return selectedList;
  };

  const loadList = (list) => {
    selectedList = structuredClone(list);
    console.log(selectedList);
    updateMainContent();
  };

  const updateMainContent = () => {
    mainContent.updateListInfo(selectedList);
  };

  const dataFlow = {
    data,
    createModal,
    getList,
    loadList,
    updateMainContent,
    updateDataArrList,
    updateDataArrTask,
    addTask,
    removeTask,
    saveData,
  };

  let appContainer = document.createElement('div');
  let header = Header();
  let sideBar = SideBar({ data }, dataFlow);

  selectedList = {
    list_id: data[0].list_id,
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
