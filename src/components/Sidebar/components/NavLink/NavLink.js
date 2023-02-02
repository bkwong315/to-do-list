import './NavLink.scss';

const NavLink = (props) => {
  const { linkName, icon, filterFunc, dataFlow } = props;
  const navLinkContainer = document.createElement('div');
  const img = document.createElement('img');
  const label = document.createElement('span');

  navLinkContainer.classList.add('nav-link');

  label.textContent = linkName;
  img.src = icon;

  navLinkContainer.addEventListener('click', () => {
    let listArr = dataFlow.getListArr();
    let filteredArr = [];

    if (linkName === 'inbox') {
      filteredArr = listArr[0];
    } else {
      for (const list of listArr) {
        if (list.name === '__inbox__') continue;
        filteredArr = filteredArr.concat(list.tasks.filter(filterFunc));
      }
    }

    dataFlow.loadTaskArr(filteredArr);
  });
  navLinkContainer.append(img);
  navLinkContainer.append(label);

  return { element: navLinkContainer };
};

export default NavLink;
