import TaskList from './TaskList/TaskList';

import './MainContent.scss';

const MainContent = (props, dataFlow) => {
  let { id, name, tasks } = props.selectedList;
  const mainContentContainer = document.createElement('div');
  const header = document.createElement('h2');
  const taskList = Object.create(TaskList({ id, tasks }, dataFlow));
  const addBtn = document.createElement('button');

  mainContentContainer.classList.add('main-content');

  const updateDisplay = () => {
    if (mainContentContainer.querySelector('#add-btn')) {
      mainContentContainer.removeChild(addBtn);
    }
    header.textContent = name;
    dataFlow.loadTaskArr(tasks);

    if (id !== '__today__' && id !== '__week__' && id !== '__pinned__') {
      mainContentContainer.appendChild(addBtn);
    }
  };

  const updateListInfo = (newProps) => {
    ({ id, name, tasks } = newProps);
    dataFlow.loadTaskArr(tasks);
    updateDisplay();
  };

  addBtn.id = 'add-btn';
  addBtn.textContent = '+ Add Task';

  mainContentContainer.appendChild(header);
  mainContentContainer.appendChild(taskList.element);

  updateDisplay();

  addBtn.addEventListener(
    'click',
    dataFlow.createModal.bind(
      undefined,
      { action: 'add', type: 'task' },
      dataFlow.addTask
    )
  );

  return { element: mainContentContainer, updateListInfo };
};

export default MainContent;
