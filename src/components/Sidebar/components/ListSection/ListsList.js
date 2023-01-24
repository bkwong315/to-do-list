import ListItem from './ListItem';
import './ListsList.scss';

const ListsList = () => {
  const listsArr = [
    { title: 'List 1', remainingTasks: 4 },
    { title: 'List 2', remainingTasks: 2 },
  ];

  const listsContainer = document.createElement('div');

  listsContainer.classList.add('lists-container');

  for (let list of listsArr) {
    console.log(list);
    listsContainer.appendChild(Object.create(ListItem(list)).element);
  }

  return listsContainer;
};

export default ListsList;
