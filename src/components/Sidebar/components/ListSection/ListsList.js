import removeFromArr from '../../../../utility/removeFromArr';
import updateArrElement from '../../../../utility/updateArrElement';
import ListItem from './ListItem';
import './ListsList.scss';

const ListsList = (dataFlow) => {
  const listArr = [
    { name: '__inbox__', tasks: [] },
    {
      name: 'List 1',
      tasks: [
        {
          name: 'List 1 Task 1',
          completed: false,
          desc: 'Task 1 description',
          priority: 'high',
          dueDate: '2023-01-17',
          pinned: true,
        },
        {
          name: 'List 1 Task 2',
          completed: false,
          desc: 'Task 2 description',
          priority: 'medium',
          dueDate: '2023-01-30',
          pinned: false,
        },
        {
          name: 'List 1 Task 3',
          completed: false,
          desc: 'Task 3 description',
          priority: 'low',
          dueDate: '2023-06-03',
          pinned: false,
        },
      ],
    },
    {
      name: 'List 2',
      tasks: [
        {
          name: 'List 2 Task 1',
          completed: false,
          desc: 'Task 1 description',
          priority: 'high',
          dueDate: '2023-02-06',
          pinned: false,
        },
        {
          name: 'List 2  Task 2',
          completed: false,
          desc: 'Task 2 description',
          priority: 'medium',
          dueDate: '2023-02-03',
          pinned: true,
        },
        {
          name: 'List 2 Task 3',
          completed: false,
          desc: 'Task 3 description',
          priority: 'low',
          dueDate: '2023-01-30',
          pinned: false,
        },
      ],
    },
  ];

  const listsContainer = document.createElement('div');

  listsContainer.classList.add('lists-container');

  const populateListsContainer = () => {
    for (let list of listArr) {
      if (list.name === '__inbox__') continue;

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
