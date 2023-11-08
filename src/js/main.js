
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

const createCarousel = (containerSelector) => {
  const carouselContainer = document.querySelector(containerSelector);
  const carousel = carouselContainer.querySelector('.carousel')
  const slides = carouselContainer.querySelectorAll('.slide');
  const indicatorsContainer = carouselContainer.querySelector('.slide-indicators');

  let currentIndex = 0;

  const updateIndicators = () => {
    indicatorsContainer.innerHTML = '';
    slides.forEach((slide, index) => {
      const indicator = document.createElement('div');
      indicator.className = 'slide-indicator';
      if (index === currentIndex) {
        indicator.classList.add('active');
      }
      indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        updateIndicators();
      });
      indicatorsContainer.appendChild(indicator);
    });
  }

  const updateCarousel = () => {
    const translateValue = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateValue}%)`;
  }

  updateIndicators();
  updateCarousel();

  let touchStartX;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;
    const threshold = 50;

    if (deltaX > threshold && currentIndex < slides.length - 1) {
      currentIndex++;
    } else if (deltaX < -threshold && currentIndex > 0) {
      currentIndex--;
    }

    updateCarousel();
    updateIndicators();
  });
}


const carouselSections = ['.candidates-carousel', '.employers-carousel', '.headhunters-carousel'];

carouselSections.forEach((section) => {
  createCarousel(section);
});
