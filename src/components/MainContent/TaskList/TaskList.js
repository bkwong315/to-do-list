import TaskListItem from './TaskListItem';

import './TaskList.scss';

const TaskList = (dataFlow) => {
  let taskArr = [
    {
      name: 'Task 1',
      completed: false,
      desc: 'Task 1 description',
      priority: 'high',
      dueDate: '2023-01-17',
    },
    {
      name: 'Task 2',
      completed: false,
      desc: 'Task 2 description',
      priority: 'medium',
      dueDate: '2023-04-27',
    },
    {
      name: 'Task 3',
      completed: false,
      desc: 'Task 3 description',
      priority: 'low',
      dueDate: '2023-06-03',
    },
  ];

  const taskListContainer = document.createElement('div');

  taskListContainer.classList.add('task-list');

  const populateListsContainer = () => {
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

  const updateListArr = (originalItem, updatedItem) => {
    let targetItem = taskArr.find(
      (element) => element.name === originalItem.name
    );

    let idxOfTarget = taskArr.indexOf(targetItem);

    if (targetItem !== undefined) {
      taskArr[idxOfTarget] = updatedItem;
    }

    updateDisplay();
  };

  Object.assign(dataFlow, { updateListArr });
  updateDisplay();

  return taskListContainer;
};

export default TaskList;
