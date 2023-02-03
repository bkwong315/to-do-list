import editIcon from './imgs/edit.svg';
import delIcon from './imgs/delete.svg';
import './ListItem.scss';

const ListItem = (props) => {
  let { name, tasks } = props.list;
  let dataFlow = props.dataFlow;

  const listItemContainer = document.createElement('div');
  const notification = document.createElement('div');
  const listTitle = document.createElement('span');
  const btnContainer = document.createElement('div');
  const delBtn = document.createElement('img');
  const editBtn = document.createElement('img');

  listItemContainer.classList.add('list-item');
  notification.classList.add('notification');
  btnContainer.classList.add('btn-container');
  editBtn.classList.add('edit-btn');
  delBtn.classList.add('del-btn');

  notification.textContent = tasks.filter((element) => element.checked).length;
  listTitle.textContent = name;
  editBtn.src = editIcon;
  delBtn.src = delIcon;

  const updateListItem = (response) => {
    dataFlow.updateListArr(props.list, response);
  };

  editBtn.addEventListener(
    'click',
    dataFlow.createModal.bind(
      undefined,
      {
        action: 'edit',
        type: 'list',
        details: {
          name: name,
          tasks: tasks,
        },
      },
      updateListItem
    )
  );

  delBtn.addEventListener(
    'click',
    dataFlow.removeList.bind(undefined, props.list)
  );

  listItemContainer.appendChild(notification);
  listItemContainer.appendChild(listTitle);
  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(delBtn);
  listItemContainer.appendChild(btnContainer);

  return { element: listItemContainer };
};

export default ListItem;
