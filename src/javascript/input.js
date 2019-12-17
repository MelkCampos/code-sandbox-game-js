export default class inputHandle {
    
    constructor(paddle, game, event) {
        document.addEventListener("keydown", event => {

            const keyPressed = event.keyCode

            switch(keyPressed) {

                // moving to the LEFT 
                case 37:
                    paddle.moveLeft()
                    break

                // moving to the RIGHT
                case 39:
                    paddle.moveRight()
                    break
                
                //  pause game 
                case 27:
                    game.togglePause()
                    break

                    //  start game
                case 32:
                    game.start()
                    break
            }
        });

        document.addEventListener("keyup", event => {

            const keyDepress = event.keyCode
            
            switch(keyDepress) {
                case 37:
                    if(paddle.speed < 0) paddle.stop()
                    break
                
                case 39:
                    if(paddle.speed > 0) paddle.stop()
                    break
            }
        });
    }
}