const toggleMenu = () => {
  const menu = document.querySelector('.dropdown-menu');

  menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
}

const changeToggleIcon = () => {
  const menu = document.querySelector('.dropdown-menu');
  const img = document.querySelector(".toggle-button").querySelector("img");

  img.src = (menu.style.display === 'none' || menu.style.display === '') ? "../images/ic24-menu.webp" : "../images/x_icon.webp";
}