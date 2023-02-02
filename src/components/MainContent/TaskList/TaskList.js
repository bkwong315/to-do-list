import TaskListItem from './TaskListItem';
import updateArrElement from '../../../utility/updateArrElement';
import removeFromArr from '../../../utility/removeFromArr';

import './TaskList.scss';

const TaskList = (props, dataFlow) => {
  let taskArr = props.tasks;

  const taskListContainer = document.createElement('div');

  taskListContainer.classList.add('task-list');

  const populateListsContainer = () => {
    if (taskArr.length < 1) return;
    for (let task of taskArr) {
      let newListItem = Object.create(TaskListItem({ task, dataFlow }));
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

  const updateTaskArr = (originalTask, updatedTask) => {
    if (updateArrElement(taskArr, originalTask, updatedTask, 'name')) {
      updateDisplay();
    }
  };

  const removeTask = (task) => {
    if (removeFromArr(taskArr, task)) {
      updateDisplay();
    }
  };

  const addTask = (task) => {
    taskArr.push(task);
    updateDisplay();
  };

  const loadTaskArr = (newTaskArr) => {
    taskArr = newTaskArr;
    updateDisplay();
  };

  Object.assign(dataFlow, { loadTaskArr, updateTaskArr, removeTask, addTask });
  updateDisplay();

  return taskListContainer;
};

export default TaskList;
