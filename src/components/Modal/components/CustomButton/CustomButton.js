import './CustomButton.scss';

const CustomButton = (props) => {
  const customBtn = document.createElement('button');
  const { action, type, callBack } = props;

  customBtn.classList.add('custom-btn');
  customBtn.classList.add(action);
  customBtn.textContent = action;
  customBtn.type = type;

  customBtn.addEventListener('click', callBack.bind(customBtn));

  const customSetAttribute = (attr, value) => {
    customBtn.setAttribute(attr, value);
  };

  return { element: customBtn, customSetAttribute };
};

export default CustomButton;
