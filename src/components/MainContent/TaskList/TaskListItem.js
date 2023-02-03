import formatDate from '../../../utility/formatDate';

import editIcon from './imgs/edit.svg';
import delIcon from './imgs/delete.svg';
import './TaskListItem.scss';

const TaskListItem = (props) => {
  let { name, completed, pinned, priority, dueDate } = props.task;
  let dataFlow = props.dataFlow;

  const taskListItemContainer = document.createElement('div');
  const startSection = document.createElement('div');
  const completedButton = document.createElement('input');
  const pinButton = document.createElement('input');
  const nameHeading = document.createElement('h3');
  const endSection = document.createElement('div');
  const detailsBtn = document.createElement('button');
  const priorityDisplay = document.createElement('div');
  const dueDateSpan = document.createElement('span');
  const editBtn = document.createElement('img');
  const delBtn = document.createElement('img');

  taskListItemContainer.classList.add('task-list-item');
  startSection.classList.add('start-section');
  endSection.classList.add('end-section');
  priorityDisplay.classList.add('priority-display');
  editBtn.classList.add('task-edit-btn');
  delBtn.classList.add('task-del-btn');
  completedButton.classList.add('completed-checkbox');
  pinButton.classList.add('pinned-checkbox');

  completedButton.type = 'checkbox';
  completedButton.checked = completed;

  pinButton.type = 'checkbox';
  pinButton.checked = pinned;

  nameHeading.textContent = name;
  detailsBtn.textContent = 'Details';
  priorityDisplay.textContent = priority;
  taskListItemContainer.setAttribute('data-priority', priority);

  let formattedDate = formatDate(dueDate).split('-');

  dueDateSpan.textContent = `${formattedDate[1]}/${formattedDate[2]}/${formattedDate[0]}`;
  editBtn.src = editIcon;
  delBtn.src = delIcon;

  startSection.appendChild(pinButton);
  startSection.appendChild(completedButton);
  startSection.appendChild(nameHeading);

  endSection.appendChild(detailsBtn);
  endSection.appendChild(priorityDisplay);
  endSection.appendChild(dueDateSpan);
  endSection.appendChild(editBtn);
  endSection.appendChild(delBtn);

  taskListItemContainer.appendChild(startSection);
  taskListItemContainer.appendChild(endSection);

  const updateListItem = (response) => {
    dataFlow.updateDataArrTask(props.task, response, props.updateDisplay);
  };

  const removeListItem = () => {
    dataFlow.removeTask(props.task, props.updateDisplay);
  };

  completedButton.addEventListener('click', () => {
    dataFlow.updateDataArrTask(
      props.task,
      { completed: !completed },
      props.updateDisplay
    );
  });

  pinButton.addEventListener('click', () => {
    dataFlow.updateDataArrTask(
      props.task,
      { pinned: !pinned },
      props.updateDisplay
    );
  });

  editBtn.addEventListener(
    'click',
    dataFlow.createModal.bind(
      undefined,
      {
        action: 'edit',
        type: 'task',
        details: props.task,
      },
      updateListItem
    )
  );

  delBtn.addEventListener('click', removeListItem);

  detailsBtn.addEventListener(
    'click',
    dataFlow.createModal.bind(undefined, {
      action: 'view',
      type: 'task',
      details: props.task,
    })
  );

  return { element: taskListItemContainer };
};

export default TaskListItem;
