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
