import addIcon from './imgs/add.svg';
import ListsList from './ListsList';
import './ListSection.scss';

const ListsSection = (props, dataFlow) => {
  const listsContainer = document.createElement('div');
  const sectionHeader = document.createElement('div');
  const addBtn = document.createElement('img');
  const heading = document.createElement('h2');
  const listsList = ListsList(props, dataFlow);

  listsContainer.classList.add('lists-section');
  sectionHeader.classList.add('section-header');

  addBtn.src = addIcon;

  heading.textContent = 'Lists';

  sectionHeader.appendChild(heading);
  sectionHeader.appendChild(addBtn);

  listsContainer.appendChild(sectionHeader);
  listsContainer.appendChild(listsList);

  addBtn.addEventListener(
    'click',
    dataFlow.createModal.bind(
      undefined,
      { action: 'add', type: 'list' },
      dataFlow.addList
    )
  );

  return listsContainer;
};

export default ListsSection;
