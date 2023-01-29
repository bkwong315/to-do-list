import ListItem from './ListItem';
import './ListsList.scss';

const ListsList = (dataFlow) => {
  const listsArr = [
    { name: 'List 1', tasks: [] },
    { name: 'List 2', tasks: [] },
  ];

  const listsContainer = document.createElement('div');

  listsContainer.classList.add('lists-container');

  const populateListsContainer = () => {
    for (let list of listsArr) {
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

  const updateListArr = (originalItem, updatedItem) => {
    let targetItem = listsArr.find(
      (element) => element.name === originalItem.name
    );

    let idxOfTarget = listsArr.indexOf(targetItem);

    if (targetItem !== undefined) {
      listsArr[idxOfTarget] = updatedItem;
    }

    updateDisplay();
  };

  Object.assign(dataFlow, { updateListArr });
  updateDisplay();

  return listsContainer;
};

export default ListsList;
