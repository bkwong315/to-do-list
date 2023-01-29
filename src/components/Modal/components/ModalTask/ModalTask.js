import ModalControls from '../ModalControls/ModalControls';

import './ModalTask.scss';

const ModalTask = (props, windowContainer) => {
  const { action, details } = props;
  const content = windowContainer.children[1];
  const form = document.createElement('form');

  form.classList.add('task-form');
  form.id = `${action}-list-form`;

  const nameContainer = document.createElement('div');
  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');

  nameLabel.textContent = 'Task Name:';
  nameLabel.setAttribute('for', 'name-input');
  nameInput.type = 'input';
  nameInput.placeholder = 'Name';
  nameInput.id = 'name-input';
  nameInput.name = 'name-input';
  nameContainer.classList.add('name-container');

  nameContainer.appendChild(nameLabel);
  nameContainer.appendChild(nameInput);

  const dueDateContainer = document.createElement('div');
  const dueDateLabel = document.createElement('label');
  const dueDateInput = document.createElement('input');

  dueDateLabel.textContent = 'Due Date:';
  dueDateLabel.setAttribute('for', 'due-date-input');
  dueDateInput.type = 'date';
  dueDateInput.id = 'due-date-input';
  dueDateInput.name = 'due-date-input';
  dueDateContainer.classList.add('due-date-container');

  dueDateContainer.appendChild(dueDateLabel);
  dueDateContainer.appendChild(dueDateInput);

  const priorityContainer = document.createElement('div');
  const priorityLabel = document.createElement('label');
  const prioritySelect = document.createElement('select');
  const priorityLow = document.createElement('option');
  const priorityMedium = document.createElement('option');
  const priorityHigh = document.createElement('option');

  priorityContainer.classList.add('priority-container');

  priorityLabel.textContent = 'Priority:';
  priorityLabel.setAttribute('for', 'priority-input');
  prioritySelect.id = 'priority-input';
  prioritySelect.name = 'priority-input';
  priorityLow.textContent = 'Low';
  priorityMedium.textContent = 'Medium';
  priorityHigh.textContent = 'High';

  priorityLow.value = 'low';
  priorityMedium.value = 'medium';
  priorityHigh.value = 'high';

  prioritySelect.addEventListener('change', (event) => {
    let priorityColor;
    switch (event.target.value) {
      case 'medium':
        priorityColor = '#ff9900';
        break;
      case 'high':
        priorityColor = '#e60000';
        break;
      default:
        priorityColor = '#00b107';
        break;
    }

    event.target.style.borderColor = priorityColor;
    event.target.style.color = priorityColor;
  });

  prioritySelect.appendChild(priorityLow);
  prioritySelect.appendChild(priorityMedium);
  prioritySelect.appendChild(priorityHigh);

  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(prioritySelect);

  const descContainer = document.createElement('div');
  const descLabel = document.createElement('label');
  const descInput = document.createElement('textarea');

  descLabel.textContent = 'Description:';
  descLabel.setAttribute('for', 'desc-input');
  descInput.placeholder = 'Optional';
  descInput.id = 'desc-input';
  descInput.name = 'desc-input';
  descContainer.classList.add('desc-container');

  descContainer.appendChild(descLabel);
  descContainer.appendChild(descInput);

  form.appendChild(nameContainer);
  form.appendChild(dueDateContainer);
  form.appendChild(priorityContainer);
  form.appendChild(descContainer);

  if (props.action === 'edit' || props.action === 'view') {
    nameInput.value = details.name;

    let dateObj = new Date(parseInt(details.dueDate));
    let year = dateObj.getFullYear();
    let month =
      dateObj.getMonth() < 9
        ? '0' + (dateObj.getMonth() + 1)
        : dateObj.getMonth() + 1;
    let day =
      dateObj.getDate() < 10 ? '0' + dateObj.getDate() : dateObj.getDate();
    let formattedDate = `${year}-${month}-${day}`;

    dueDateInput.value = formattedDate;

    prioritySelect.value = details.priority;
    prioritySelect.dispatchEvent(new Event('change', { bubbles: false }));

    descInput.value = details.desc;
    if (props.action === 'view') {
      prioritySelect.disabled = true;
    }
  }

  content.appendChild(form);

  if (props.action === 'add' || props.action === 'edit') {
    const modalControls = ModalControls(props);

    modalControls.setConfirmFormValue(form.id);

    content.appendChild(modalControls.element);
  }

  return windowContainer;
};

export default ModalTask;
