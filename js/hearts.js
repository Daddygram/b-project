// component that turns every heart svg red when clicked
const hearts = document.querySelectorAll(".profileCarousel-heart")

hearts.forEach(heart => {
    heart.addEventListener("click", () => {
        heart.classList.toggle("clicked")
    })
})