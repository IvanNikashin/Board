const board = document.querySelector('#board')
const colors = ['#4e87a4' , '#b0d5ce' , '#fff1e4' , '#fa86ab' , '#ee2889']
const SQUARES_NUMBER = 990

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover' , () => setColor(square))

    square.addEventListener('mouseleave' , () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor= color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor= '#b33572'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}