export default class Game {

    constructor(gameWidth, gameHeight, brickPerRow) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.gameState = GAMESTATE.MENU

        this.ball = new Ball(this)
        this.paddle = new Paddle(this)

        this.gameObjects = []
        this.brick = []
        
        this.lives = 3
    }
}

import InputHandle from './input'
import Ball from './ball'
import Brick from './brick'

// levels
import { buildLevel, level_1, level_2 } from './levels'

const gameState = {
    paused: 0,
    running: 1,
    menu: 2,
    gameover: 3,
    newLevel: 4,
}

export default class Game {

    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.gameState = gameState

        this.gameState = gameState.menu
        this.ball = new Ball(this)
        this.paddle = new Paddle(this)

        // arrays
        this.gameObjects = []
        this.bricks = []
        this.lives = 3

        this.levels = [level_1, level_2]
        this.currentLevel = 0

        new InputHandle(this.paddle, this)
    }

    start() {

        if (
            this.gameState !== gameState.menu &&
            this.gameState !== gameState.newLevel
        )
        return

        this.bricks = buildLevel(this, this.levels[this.currentLevel])
        this.ball.reset()
        this.gameObjects = [this.ball, this.paddle]

        this.gameState = gameState.running
    }

    update(deltaTime) {

        if(this.lives === 0) this.gameState = gameState.gameover

        if (
            this.gameState === gameState.paused ||
            this.gameState === gameState.menu ||
            this.gameState === gameState.gameover
        ) 
        return
        
        // avança de nível
        if(this.bricks.length === 0) {
            this.currentLevel++
            this.gameState = gameState.newLevel
            this.start()
        }

        [...this.gameObjects, ...this.bricks].forEach(object => 
            object.update(deltaTime)
        )

        this.bricks = this.bricks.filter(brick => 
            !brick.markedForDeletion    
        )
    }    

        draw(context) {
            [...this.gameObjects, ...this.bricks].forEach(object =>
                object.draw(context))
        
        if(this.gameState === gameState.paused) {

            context.rect(0, 0, this.gameWidth, this.gameHeight)
            context.fillStyle = "rgba(0, 0, 0, 0.5)"
            context.fill()

            context.font = "30px Arial" 
            context.fillStyle = "white"
            context.textAlign = "center"
            context.fillText("PAUSED", this.gameWidth / 2, this.gameHeight / 2)
        }

        if(this.gameState === gameState.menu) {
            context.rect(0, 0, this.gameWidth, this.gameHeight)
            context.fillStyle = "rgba(0, 0, 0, 1)"
            context.fill()

          
        }
    }
}