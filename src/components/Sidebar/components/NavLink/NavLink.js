import './NavLink.scss';

const NavLink = (props) => {
  const { linkName, icon, filterFunc, filteredListTemplate, dataFlow } = props;
  const navLinkContainer = document.createElement('div');
  const img = document.createElement('img');
  const label = document.createElement('span');

  navLinkContainer.classList.add('nav-link');

  label.textContent = linkName;
  img.src = icon;

  navLinkContainer.addEventListener('click', () => {
    let listArr = dataFlow.getListArr();
    let filteredArr = [];

    for (const list of listArr) {
      console.log(list.tasks);
      filteredArr = [...filteredArr, ...list.tasks.filter(filterFunc)];
    }

    dataFlow.loadList(
      Object.assign(filteredListTemplate, { tasks: filteredArr })
    );
  });
  navLinkContainer.append(img);
  navLinkContainer.append(label);

  return { element: navLinkContainer };
};

export default NavLink;
