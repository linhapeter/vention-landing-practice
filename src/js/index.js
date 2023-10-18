const toggleMenu = () => {
  const menu = document.querySelector('.dropdown-menu');

  menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
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