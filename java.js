// Toggle class active
const navbarNav = document.querySelector(".navbar-item");
// Ketika hamburger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dots, index) => {
    dots.classList.toggle('active', index === currentIndex);
  });
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
  });
});

slider.addEventListener('touchstart', handleTouchStart, false);
slider.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;

function handleTouchStart(e) {
  x1 = e.touches[0].clientX;
}

function handleTouchMove(e) {
  if (!x1) return;

  let x2 = e.touches[0].clientX;
  let xDiff = x1 - x2;

  if (xDiff > 0) {
    showNextSlide();
  } else{
    showPrevSlide();
  }

  x1 = null;
}

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);

updateSlider();