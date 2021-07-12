// Hamburger menu functionality

// close the menu
const closeMenu = (menuButton, menuList) => {
  menuButton.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', false);
  menuList.classList.remove('show-navigation');
}

// open the menu
const openMenu = (menuButton, menuList) => {
  menuButton.classList.add('menu-open');
  menuButton.setAttribute('aria-expanded', true);
  menuList.classList.add('show-navigation');
}

// close the inner list menu
const closeInnerList = (innerList) => {
  innerList.forEach(list => { 
    list.nextElementSibling.classList.remove('show-inner-navigation');
  });
}

// check if the menu is open
const isMenuOpen = (menuButton) => {
  return menuButton.classList.contains('menu-open');
}

export default function toggleNavigation({menuButton, menuList, innerList}) {
  // listen for click events
  menuButton.addEventListener('click', () => {
    isMenuOpen(menuButton) ? closeMenu(menuButton, menuList) : openMenu(menuButton, menuList);
  });

  let innerLink;

  if (innerList.length > 0) {
    innerList.forEach(list => {
      list.addEventListener('click', (event) => {
        innerList.forEach(elem => elem.nextElementSibling.classList.remove('show-inner-navigation'));
        event.preventDefault();
        if (list === event.target) {
          list.nextElementSibling.classList.add('show-inner-navigation');
          innerLink = list;
        }
      })
    })
  }

  // listen for click events on the document object
  document.addEventListener('click', ({target}) => {
    const isOpen = isMenuOpen(menuButton);
    if (isOpen && target !== menuButton && target !== innerLink) {
      closeMenu(menuButton, menuList);
      closeInnerList(innerList);
    } 
    if (target !== menuButton && target !== innerLink) {
      closeMenu(menuButton, menuList);
      closeInnerList(innerList);
    }
  });
}