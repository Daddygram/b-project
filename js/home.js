let slideIndex = 0;
const slideWidth = document.querySelector('.card-body').offsetWidth + 5;
const container = document.querySelector('.AllSlides');
const slides = document.querySelectorAll('.card-body');

function showSlides() {
  const target = slideIndex * slideWidth;
  slowScroll(container, target, 1000);
}

function slowScroll(element, target, duration) {
  const start = element.scrollLeft;
  const startTime = performance.now();

  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    element.scrollLeft = start + (target - start) * easeOutQuad(progress);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

function easeOutQuad(t) {
  return t * (2 - t);
}

function nextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
    showSlides();
  }
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
    showSlides();
  }
}

// Show the slides when the page loads
showSlides();
