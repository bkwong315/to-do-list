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

  const updateTaskArr = (originalTask, updatedTask) => {
    let targetItem = taskArr.find(
      (element) => element.name === originalTask.name
    );

    let idxOfTask = taskArr.indexOf(targetItem);

    if (targetItem !== undefined) {
      taskArr[idxOfTask] = updatedTask;
    }

    updateDisplay();
  };

  const removeTask = (task) => {
    let idxOfTask = taskArr.indexOf(task);

    if (idxOfTask !== -1) {
      taskArr.splice(idxOfTask, 1);
      updateDisplay();
    }
  };

  Object.assign(dataFlow, { updateTaskArr, removeTask });
  updateDisplay();

  return taskListContainer;
};

export default TaskList;
