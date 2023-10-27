const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const indicatorsContainer = document.querySelector('.slide-indicators');

let currentIndex = 0;

function updateIndicators() {
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

function updateCarousel() {
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
  const threshold = 50; // Adjust this value for sensitivity

  if (deltaX > threshold && currentIndex < slides.length - 1) {
    currentIndex++;
  } else if (deltaX < -threshold && currentIndex > 0) {
    currentIndex--;
  }

  updateCarousel();
  updateIndicators();
});
