console.log("========>>>Hello Gulp<<<========");

const toggleMenu = () => {
  const menu = document.querySelector('.dropdown-menu');

  menu.classList.toggle("dropdown-menu_off");
  menu.classList.toggle("dropdown-menu_on");
}

const changeToggleIcon = () => {
  const icon = document.querySelector(".toggle-button").querySelector("i");

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-x");
  icon.classList.toggle("menu-icon");
  icon.classList.toggle("x-icon");
}

const handleNavOpen = () => {
  toggleMenu();
  changeToggleIcon();
}