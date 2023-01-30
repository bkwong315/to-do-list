import removeFromArr from '../../../../utility/removeFromArr';
import updateArrElement from '../../../../utility/updateArrElement';
import ListItem from './ListItem';
import './ListsList.scss';

const ListsList = (dataFlow) => {
  const listArr = [
    { name: 'List 1', tasks: [] },
    { name: 'List 2', tasks: [] },
  ];

  const listsContainer = document.createElement('div');

  listsContainer.classList.add('lists-container');

  const populateListsContainer = () => {
    for (let list of listArr) {
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

  Object.assign(dataFlow, { updateListArr, removeList, addList });
  updateDisplay();

  return listsContainer;
};

export default ListsList;
