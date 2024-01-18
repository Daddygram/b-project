// category circles 
const circleSize = 12
const circles = []

for (let i = 6; i <= circleSize; i++){
  circles[i] = document.querySelectorAll(`.category-circle${i}`)
}

const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "cyan", "magenta", "teal", "lime"]
let colorIndex = 0

circles.forEach((circle, index) => {
  circle.forEach(element => {
    element.addEventListener('click', (function(index) {
      return function() {
        if(element.style.backgroundColor !== colors[index % colors.length]){
            element.style.backgroundColor = colors[index % colors.length]
        } else {
            element.style.backgroundColor = 'white'
        }
        colorIndex = (index + 1) % colors.length
      }
    })(index))
  })
})