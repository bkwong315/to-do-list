import updateKeyValuePairs from '../../../../utility/updateKeyValuePairs';

import editIcon from './imgs/edit.svg';
import './ListItem.scss';

const ListItem = (props) => {
  let { name, tasks } = props.list;
  let dataFlow = props.dataFlow;

  const listItemContainer = document.createElement('div');
  const notification = document.createElement('div');
  const listTitle = document.createElement('span');
  const editBtn = document.createElement('img');

  listItemContainer.classList.add('list-item');
  notification.classList.add('notification');
  editBtn.classList.add('edit-btn');

  notification.textContent = tasks.filter((element) => element.checked).length;
  listTitle.textContent = name;
  editBtn.src = editIcon;

  let request = {
    action: 'edit',
    type: 'list',
    details: {
      name: name,
      tasks: tasks,
    },
  };

  const updateListItem = (response) => {
    let updatedItem = updateKeyValuePairs(props.list, response);
    dataFlow.updateListArr(props.list, updatedItem);
  };

  editBtn.addEventListener(
    'click',
    dataFlow.createModal.bind(undefined, request, updateListItem)
  );

  listItemContainer.appendChild(notification);
  listItemContainer.appendChild(listTitle);
  listItemContainer.appendChild(editBtn);

  return { element: listItemContainer };
};

export default ListItem;
