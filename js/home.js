// card sliders
function setupSlider(containerSelector, prevBtnSelector, nextBtnSelector) {
  const container = document.querySelector(containerSelector)
  const slides = Array.from(container.children)
  const prevBtn = document.querySelector(prevBtnSelector)
  const nextBtn = document.querySelector(nextBtnSelector)

  let currentIndex = 0

  slides.forEach((slide, index) => {
    slide.style.order = index
  })

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides()
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides()
  }

  function updateSlides() {
    slides.forEach((slide) => {
      slide.style.order = currentIndex
    })
    container.scrollTo({
      left: currentIndex * slides[0].offsetWidth,
      behavior: "smooth",
    })
  }

  prevBtn.addEventListener("click", prevSlide)
  nextBtn.addEventListener("click", nextSlide)

  // update of the slides
  updateSlides()
}

