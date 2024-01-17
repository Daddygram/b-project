// hamburger menu comes to life
const hamburger = document.querySelector("#burger")
const sidebar = document.querySelector(".sidebar")
const hamLinks = document.querySelectorAll(".hamburger-links")

hamburger.addEventListener("click", ()=> {
    sidebar.classList.toggle("hamActive")
})
hamLinks.forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.toggle("hamActive")
    });
});

//sidebar height fix on mobile

function setSidebarHeight() {
    var viewportHeight = window.innerHeight
    document.querySelector('.sidebar').style.height = viewportHeight + 'px'
}

document.addEventListener('DOMContentLoaded', setSidebarHeight)
window.addEventListener('resize', setSidebarHeight)
