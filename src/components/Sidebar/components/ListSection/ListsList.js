import removeFromArr from '../../../../utility/removeFromArr';
import updateArrElement from '../../../../utility/updateArrElement';
import ListItem from './ListItem';
import './ListsList.scss';

const ListsList = (props, dataFlow) => {
  const listArr = props.data;

  const listsContainer = document.createElement('div');

  listsContainer.classList.add('lists-container');

  const populateListsContainer = () => {
    for (let list of listArr) {
      if (list.id === '__inbox__') continue;

      let newListItem = Object.create(ListItem({ list, dataFlow }));
      listsContainer.appendChild(newListItem.element);
    }
  };

  const clearList = () => {
    while (listsContainer.lastElementChild) {
      listsContainer.removeChild(listsContainer.lastElementChild);
    }
  };

  const updateDisplay = () => {
    clearList();
    populateListsContainer();
  };

  const updateListArr = (originalList, updatedList) => {
    if (updateArrElement(listArr, originalList, updatedList, 'name')) {
      updateDisplay();
    }
  };

  const removeList = (list) => {
    if (removeFromArr(listArr, list)) {
      updateDisplay();
    }
  };

  const addList = (list) => {
    listArr.push(list);
    updateDisplay();
  };

  const getListArr = () => {
    return listArr;
  };

  Object.assign(dataFlow, { updateListArr, removeList, addList, getListArr });
  updateDisplay();

  return listsContainer;
};

export default ListsList;
