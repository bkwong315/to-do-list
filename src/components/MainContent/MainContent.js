import TaskList from './TaskList/TaskList';

import './MainContent.scss';

const MainContent = (dataFlow) => {
  const mainContentContainer = document.createElement('div');
  const header = document.createElement('h2');
  const taskList = TaskList(dataFlow);
  const addBtn = document.createElement('button');

  mainContentContainer.classList.add('main-content');

  header.textContent = 'Inbox';
  addBtn.textContent = '+ Add Task';

  mainContentContainer.appendChild(header);
  mainContentContainer.appendChild(taskList);
  mainContentContainer.appendChild(addBtn);

  addBtn.addEventListener(
    'click',
    dataFlow.createModal.bind(
      undefined,
      { action: 'add', type: 'task' },
      dataFlow.addTask
    )
  );

  return mainContentContainer;
};

export default MainContent;
