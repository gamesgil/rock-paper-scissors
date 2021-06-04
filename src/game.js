import { ROCK, PAPER, SCISSORS } from './shared'

export class Game {
    constructor() {
        this.cpuScore = 0
        this.playerSco
        re = 0
    }

    makeMove() {
        return [ROCK, PAPER, SCISSORS][Math.floor(Math.random() * 3)]
    }

    evaluate(playerMove, cpuMove) {
        console.log(`Player: ${playerMove}, Computer: ${cpuMove}`)

        if (playerMove === cpuMove) {
            return 'Draw'
        } else if (playerMove === ROCK && cpuMove === SCISSORS ||
            playerMove === SCISSORS && cpuMove === PAPER ||
            playerMove === PAPER && cpuMove === ROCK) {
            this.playerScore++

            return 'Player wins'
        } else {
            this.cpuScore++

            return 'Computer wins'
        }
    }
}