import ModalControls from '../ModalControls/ModalControls';

import './ModalList.scss';

const ModalList = (props, windowContainer) => {
  const { action, details } = props;
  const content = windowContainer.children[1];
  const form = document.createElement('form');
  const modalControls = ModalControls(props);

  form.classList.add('list-form');
  form.id = `${action}-list-form`;

  const label = document.createElement('label');
  const nameInput = document.createElement('input');

  nameInput.id = 'name-input';
  nameInput.name = 'name-input';
  label.setAttribute('for', 'name-input');

  label.textContent = 'List Name:';
  nameInput.type = 'text';

  if (action === 'edit') {
    nameInput.value = details.name;
  }

  form.appendChild(label);
  form.appendChild(nameInput);

  content.appendChild(form);

  modalControls.setConfirmFormValue(form.id);

  content.appendChild(modalControls.element);

  return windowContainer;
};

export default ModalList;
