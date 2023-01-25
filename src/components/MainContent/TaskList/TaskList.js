import TaskListItem from './TaskListItem';

import './TaskList.scss';

const TaskList = () => {
  let taskArr = [
    {
      title: 'Task 1',
      completed: false,
      desc: 'Task 1 description',
      priority: 'high',
      dueDate: new Date(2023, 0, 21),
    },
    {
      title: 'Task 2',
      completed: false,
      desc: 'Task 2 description',
      priority: 'medium',
      dueDate: new Date(2023, 3, 27),
    },
    {
      title: 'Task 3',
      completed: false,
      desc: 'Task 3 description',
      priority: 'low',
      dueDate: new Date(2023, 5, 3),
    },
  ];

  const taskListContainer = document.createElement('div');

  taskListContainer.classList.add('task-list');

  for (let task of taskArr) {
    taskListContainer.appendChild(Object.create(TaskListItem(task)).element);
  }

  return taskListContainer;
};

export default TaskList;
