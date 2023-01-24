import editIcon from './imgs/edit.svg';
import './ListItem.scss';

const ListItem = (props) => {
  const listItemContainer = document.createElement('div');
  const notification = document.createElement('div');
  const listTitle = document.createElement('span');
  const editBtn = document.createElement('img');

  listItemContainer.classList.add('list-item');
  notification.classList.add('notification');
  editBtn.classList.add('edit-btn');

  notification.textContent = props.remainingTasks;
  listTitle.textContent = props.title;
  editBtn.src = editIcon;

  listItemContainer.appendChild(notification);
  listItemContainer.appendChild(listTitle);
  listItemContainer.appendChild(editBtn);

  return { element: listItemContainer };
};

export default ListItem;
