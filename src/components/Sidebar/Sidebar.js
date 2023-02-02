import NavLink from './components/NavLink/NavLink';
import ListSection from './components/ListSection/ListSection';

import inboxIcon from './imgs/inbox.svg';
import dayIcon from './imgs/day.svg';
import weekIcon from './imgs/week.svg';
import pinnedIcon from './imgs/pinned.svg';
import './SideBar.scss';

const SideBar = (dataFlow) => {
  const sideBarContainer = document.createElement('div');
  const navigationLinks = document.createElement('div');

  /*
   * Code from https://stackoverflow.com/questions/2698725/comparing-date-part-only-without-comparing-time-in-javascript
   */
  Date.prototype.withoutTime = function () {
    let d = new Date(this);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const inboxLink = Object.create(
    NavLink({
      linkName: 'inbox',
      icon: inboxIcon,
      filterFunc: () => {},
      dataFlow,
    })
  );

  const todayLink = Object.create(
    NavLink({
      linkName: 'today',
      icon: dayIcon,
      filterFunc: (task) => {
        return (
          new Date(task.dueDate.replace(/-/g, '/')).withoutTime().valueOf() ===
          new Date().withoutTime().valueOf()
        );
      },
      dataFlow,
    })
  );

  const weekLink = Object.create(
    NavLink({
      linkName: 'Week',
      icon: weekIcon,
      filterFunc: (task) => {
        let currDate = new Date().withoutTime().valueOf();
        let taskDate = new Date(task.dueDate.replace(/-/g, '/'))
          .withoutTime()
          .valueOf();
        const weekInMs = 604800000;

        return currDate <= taskDate && taskDate <= currDate + weekInMs;
      },
      dataFlow,
    })
  );

  const pinnedLink = Object.create(
    NavLink({
      linkName: 'pinned',
      icon: pinnedIcon,
      filterFunc: (task) => task.pinned,
      dataFlow,
    })
  );
  const listSection = ListSection(dataFlow);

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
