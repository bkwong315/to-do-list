import ModalList from './components/ModalList/ModalList';
import ModalTask from './components/ModalTask/ModalTask';
import capitalize from '../../utility/capitalize';

import closeIcon from './imgs/close.svg';
import './Modal.scss';

const Modal = (props, callBack) => {
  const modalContainer = document.createElement('div');
  const modalWindow = document.createElement('div');
  const header = document.createElement('div');
  const headerText = document.createElement('h2');
  const headerCloseBtn = document.createElement('img');
  const content = document.createElement('div');
  let formDataJSON = {};
  let { type, action, details = {} } = props;

  let response = {};

  const updateResponse = () => {
    response = formDataJSON;
  };

  const getResponse = () => {
    return response;
  };

  function updateFormData(event) {
    event.preventDefault();

    console.log(props);

    if (this.form.checkValidity()) {
      const formData = new FormData(this.form);

      for (const data of formData.entries()) {
        let splitKey = data[0].split('-');
        let key =
          splitKey.length <= 2
            ? splitKey[0]
            : splitKey[0] +
              splitKey
                .map(capitalize)
                .slice(1, splitKey.length - 1)
                .join('');

        formDataJSON[key] = data[1];
      }

      if (type === 'task') {
        formDataJSON.completed =
          details.completed === undefined ? false : details.completed;
        formDataJSON.pinned =
          details.pinned === undefined ? false : details.pinned;
      } else if (type === 'list') {
        formDataJSON.list_id = formDataJSON.name;
        formDataJSON.tasks = [];
      }
      console.log(callBack);

      updateResponse();
      closeModal();
      callBack(response);
    }
  }

  const closeModal = () => {
    modalContainer.parentElement.removeChild(modalContainer);
  };

  headerCloseBtn.addEventListener('click', closeModal);
  headerCloseBtn.src = closeIcon;

  header.classList.add('modal-header');

  header.appendChild(headerText);
  header.appendChild(headerCloseBtn);

  modalWindow.appendChild(header);
  modalWindow.appendChild(content);

  modalContainer.classList.add('modal-container');
  modalWindow.classList.add('modal-window');
  content.classList.add('modal-content');

  if (props.action === 'view') {
    headerText.textContent = capitalize(details.name);
  } else {
    headerText.textContent = `${capitalize(action)} ${capitalize(type)}`;
  }

  modalWindow.classList.add(`${props.action}-${props.type}`);

  props = Object.assign(props, { closeModal, callBack: updateFormData });

  if (props.type === 'task') {
    ModalTask(props, modalWindow);
  } else if (props.type === 'list') {
    ModalList(props, modalWindow);
  }

  modalContainer.appendChild(modalWindow);

  return { element: modalContainer, getResponse };
};

export default Modal;
