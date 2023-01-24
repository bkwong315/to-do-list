import addIcon from './imgs/add.svg';
import ListsList from './ListsList';
import './ListSection.scss';

const ListsSection = () => {
  const listsContainer = document.createElement('div');
  const sectionHeader = document.createElement('div');
  const addBtn = document.createElement('img');
  const heading = document.createElement('h2');
  const listsList = ListsList();

  listsContainer.classList.add('lists-section');
  sectionHeader.classList.add('section-header');

  addBtn.src = addIcon;

  heading.textContent = 'Lists';

  sectionHeader.appendChild(heading);
  sectionHeader.appendChild(addBtn);

  listsContainer.appendChild(sectionHeader);
  listsContainer.appendChild(listsList);

  return listsContainer;
};

export default ListsSection;
