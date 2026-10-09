const button = document.getElementById('target')
const scoreElement = document.getElementById('score')
let score = 0
function moveButton() {
    let coordinateX = Math.random() * (window.innerWidth - 100);
    let coordinateY = Math.random() * (window.innerHeight - 100);
    button.style.left = coordinateX + 'px';
    button.style.top = coordinateY + 'px';
    console.log(coordinateX, coordinateY)
}
button.addEventListener('click', function() {
    moveButton()
    console.log("Кнопка нажата")
    score ++
    scoreElement.textContent = score
})

