import './NavLink.scss';

const NavLink = (icon, text) => {
  const navLinkContainer = document.createElement('div');
  const img = document.createElement('img');
  const label = document.createElement('div');

  navLinkContainer.classList.add('nav-link');

  label.textContent = text;
  img.src = icon;

  navLinkContainer.append(img);
  navLinkContainer.append(label);

  return { element: navLinkContainer };
};

export default NavLink;
