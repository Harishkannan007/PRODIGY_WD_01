let sliderImages = document.querySelectorAll('.slider img');
let currentSlide = 0;

function nextSlide() {
  sliderImages[currentSlide].style.transform = 'translateX(-100%)';
  currentSlide = (currentSlide + 1) % sliderImages.length;
  sliderImages[currentSlide].style.transform = 'translateX(0)';
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
