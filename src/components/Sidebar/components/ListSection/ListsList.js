import removeFromArr from '../../../../utility/removeFromArr';
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
    let targetItem = listArr.find(
      (element) => element.name === originalList.name
    );

    let idxOfTarget = listArr.indexOf(targetItem);

    if (targetItem !== undefined) {
      listArr[idxOfTarget] = updatedList;
    }

    updateDisplay();
  };

  const removeList = (list) => {
    if (removeFromArr(listArr, list)) {
      updateDisplay();
    }
  };

  Object.assign(dataFlow, { updateListArr, removeList });
  updateDisplay();

  return listsContainer;
};

export default ListsList;
