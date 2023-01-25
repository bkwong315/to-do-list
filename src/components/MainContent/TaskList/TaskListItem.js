import editIcon from './imgs/edit.svg';
import delIcon from './imgs/delete.svg';
import './TaskListItem.scss';

const TaskListItem = (props) => {
  const taskListItemContainer = document.createElement('div');
  const startSection = document.createElement('div');
  const checkBox = document.createElement('input');
  const title = document.createElement('h3');
  const endSection = document.createElement('div');
  const detailsBtn = document.createElement('button');
  const priorityDisplay = document.createElement('div');
  const dueDate = document.createElement('span');
  const editBtn = document.createElement('img');
  const delBtn = document.createElement('img');

  taskListItemContainer.classList.add('task-list-item');
  startSection.classList.add('start-section');
  endSection.classList.add('end-section');
  priorityDisplay.classList.add('priority-display');
  editBtn.classList.add('edit-btn');
  delBtn.classList.add('del-btn');

  checkBox.type = 'checkbox';

  title.textContent = props.title;
  detailsBtn.textContent = 'Details';
  priorityDisplay.textContent = props.priority;
  taskListItemContainer.setAttribute('data-priority', props.priority);
  dueDate.textContent = `${
    props.dueDate.getMonth() + 1
  }/${props.dueDate.getDate()}/${props.dueDate.getFullYear()}`;
  editBtn.src = editIcon;
  delBtn.src = delIcon;

  startSection.appendChild(checkBox);
  startSection.appendChild(title);

  endSection.appendChild(detailsBtn);
  endSection.appendChild(priorityDisplay);
  endSection.appendChild(dueDate);
  endSection.appendChild(editBtn);
  endSection.appendChild(delBtn);

  taskListItemContainer.appendChild(startSection);
  taskListItemContainer.appendChild(endSection);

  return { element: taskListItemContainer };
};

export default TaskListItem;
