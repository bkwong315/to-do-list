import CustomButton from '../CustomButton/CustomButton';

import './ModalControls.scss';

const ModalControls = (props) => {
  const { closeModal } = props;
  const buttonContainer = document.createElement('div');

  const confirmBtn = CustomButton({
    action: 'confirm',
    type: 'submit',
    callBack: props.callBack,
  });
  const cancelBtn = CustomButton({
    action: 'cancel',
    type: 'button',
    callBack: closeModal,
  });

  buttonContainer.classList.add('button-container');

  buttonContainer.appendChild(confirmBtn.element);
  buttonContainer.appendChild(cancelBtn.element);

  const setConfirmFormValue = (formId) => {
    confirmBtn.customSetAttribute('form', formId);
  };

  return { element: buttonContainer, setConfirmFormValue };
};

export default ModalControls;
