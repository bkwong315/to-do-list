import removeFromArr from '../../../../utility/removeFromArr';
import ListItem from './ListItem';
import './ListsList.scss';

const ListsList = (props, dataFlow) => {
  const listArr = props.data;

  const listsContainer = document.createElement('div');

  listsContainer.classList.add('lists-container');

  const populateListsContainer = () => {
    for (let list of listArr) {
      if (list.list_id === '__inbox__') continue;

      let newListItem = Object.create(
        ListItem({ list, updateDisplay, dataFlow })
      );
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
    dataFlow.updateDataArrList(originalList, updatedList, updateDisplay);
  };

  const removeList = (list) => {
    if (removeFromArr(listArr, list)) {
      dataFlow.saveData();
      updateDisplay();
    }
  };

  const addList = (list) => {
    listArr.push(list);
    dataFlow.saveData();
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
