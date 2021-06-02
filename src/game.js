import { ROCK, PAPER, SCISSORS } from './shared'

export default Game = (() => {
    return {
        test: () => console.log('test'),

        makeMove: () => [ROCK, PAPER, SCISSORS][Math.floor(Math.random() * 3)],

        evaluate: (playerMove, cpuMove) => {
            console.log(`Player: ${playerMove}, Computer: ${cpuMove}`)

            if (playerMove === cpuMove) {
                return 'Draw'
            } else if (playerMove === ROCK && cpuMove === SCISSORS ||
                playerMove === SCISSORS && cpuMove === PAPER ||
                playerMove === PAPER && cpuMove === ROCK) {
                return 'Player wins'
            } else {
                return 'Computer wins'
            }
        }
    }
})();
