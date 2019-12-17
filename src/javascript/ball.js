import { detectCollision } from './detectCollision'

export default class Ball {

    constructor(game) {
        this.image = document.getElementById('ball-image')

        this.gamewidth = game.gameWidth
        this.gameHeight = game.gameHeight

        this.game = game = game
        this.size = 16
        this.reset()
    }

    reset() {
        this.position = { x: 10, y: 400 }
        this.speed = { x: 4, y: -2 }
    }

    draw(context) {
        context.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.size,
            this.size
        )
    }

    update(deltaTime) {
        this.position.x += this.speed.x
        this.position.y += this.speed.y

        // Wall on Left or Right
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x =- this.speed.x
        }

        // Wall on Top
        if (this.position.y < 0) {
            this.speed.y =- this.speed.y
        }

        // Bottom of Game
        if (this.position.y + this.size > this.gameHeight) {
            this.game.lives--
            this.reset()
        }

        if (detectCollision(this, this.game.paddle)) {
            this.speed.y =- this.speed.y
            this.position.y = this.game.paddle.position.y - this.size
        }
    }
}