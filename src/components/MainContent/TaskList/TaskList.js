import TaskListItem from './TaskListItem';

import './TaskList.scss';

const TaskList = (props, dataFlow) => {
  let { id: list_id, tasks: taskArr } = props;

  const taskListContainer = document.createElement('div');

  taskListContainer.classList.add('task-list');

  const populateListsContainer = () => {
    if (taskArr.length < 1) return;
    for (let task of taskArr) {
      let newListItem = Object.create(
        TaskListItem({ list_id, task, updateDisplay, dataFlow })
      );
      taskListContainer.appendChild(newListItem.element);
    }
  };

  const clearList = () => {
    while (taskListContainer.lastElementChild) {
      taskListContainer.removeChild(taskListContainer.lastElementChild);
    }
  };

  const updateDisplay = () => {
    clearList();
    populateListsContainer();
  };

  const loadTaskArr = (newTaskArr) => {
    taskArr = newTaskArr;
    updateDisplay();
  };

  Object.assign(dataFlow, { loadTaskArr });
  updateDisplay();

  return { element: taskListContainer };
};

export default TaskList;
