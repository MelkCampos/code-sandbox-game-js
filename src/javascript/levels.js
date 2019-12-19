import Brick from './brick'

export function buildLevel(game, level) {

    let bricks = []

    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {

            if(brick === 1) {
                let position = {
                    x: 80 * brickIndex,
                    y: 75 + 24 * rowIndex,
                }
                
                brick.push(new Brick(game, position)) 
            }
        })
    })

    return bricks
}


export const level_1 = [
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
]

export const level_2 = [
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]