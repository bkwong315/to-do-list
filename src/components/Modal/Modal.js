import ModalList from './components/ModalList/ModalList';
import ModalTask from './components/ModalTask/ModalTask';
import capitalize from '../../utility/capitalize';

import './Modal.scss';

const Modal = (props) => {
  const modalContainer = document.createElement('div');
  const modalWindow = document.createElement('div');
  const header = document.createElement('h2');
  const content = document.createElement('div');
  let formDataJSON = {};
  let { type, action, details = {} } = props;

  let response = {
    type,
    action,
    details: { ...formDataJSON },
  };

  const updateResponseDetails = () => {
    response.details = formDataJSON;
  };

  const getResponse = () => {
    return response;
  };

  function updateFormData(event) {
    event.preventDefault();
    formDataJSON = {};

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
      updateResponseDetails();
      closeModal();
    }
  }

  const closeModal = () => {
    modalContainer.parentElement.removeChild(modalContainer);
  };

  modalWindow.appendChild(header);
  modalWindow.appendChild(content);

  modalContainer.classList.add('modal-container');
  modalWindow.classList.add('modal-window');
  content.classList.add('modal-content');

  if (props.action === 'view') {
    header.textContent = capitalize(details.title);
  } else {
    header.textContent = `${capitalize(action)} ${capitalize(type)}`;
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
