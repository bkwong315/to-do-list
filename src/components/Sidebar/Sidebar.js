import NavLink from './components/NavLink/NavLink';
import ListsSection from './components/ListSection/ListSection';

import inboxIcon from './imgs/inbox.svg';
import dayIcon from './imgs/day.svg';
import weekIcon from './imgs/week.svg';
import pinnedIcon from './imgs/pinned.svg';
import './SideBar.scss';

const SideBar = () => {
  const sideBarContainer = document.createElement('div');
  const navigationLinks = document.createElement('div');
  const inboxLink = Object.create(NavLink(inboxIcon, 'Inbox'));
  const todayLink = Object.create(NavLink(dayIcon, 'Today'));
  const weekLink = Object.create(NavLink(weekIcon, 'Week'));
  const pinnedLink = Object.create(NavLink(pinnedIcon, 'Pinned'));
  const listSection = ListsSection();

  sideBarContainer.classList.add('sidebar');
  navigationLinks.classList.add('nav-links');

  navigationLinks.appendChild(inboxLink.element);
  navigationLinks.appendChild(todayLink.element);
  navigationLinks.appendChild(weekLink.element);
  navigationLinks.appendChild(pinnedLink.element);

  sideBarContainer.appendChild(navigationLinks);
  sideBarContainer.appendChild(listSection);

  return sideBarContainer;
};

export default SideBar;
