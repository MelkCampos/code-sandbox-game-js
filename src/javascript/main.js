
var screen = document.getElementById('screen')
var context = screen.getContext('2d')

const gameWidth = 800
const gameHeight = 600
var lastTime = 0

function loop(timestamp) {
    let deltaTime = timestamp - lastTime
    lastTime = timestamp

    context.clearRect(screen.width, screen.height, 0, 0)

    requestAnimationFrame(loop)
}

requestAnimationFrame(loop)