import { ROCK, PAPER, SCISSORS } from './shared'

export class Controller {
    constructor(game, view, domElements) {
        this.game = game
        this.view = view

        this.view.hideIcons()
        this.view.updateScore(this.game.playerScore, this.game.cpuScore)

        domElements.player.buttons.rock.addEventListener('click', () => {
            this.play(ROCK)
        })

        domElements.player.buttons.paper.addEventListener('click', () => {
            this.play(PAPER)
        })

        domElements.player.buttons.scissors.addEventListener('click', () => {
            this.play(SCISSORS)
        })
    }

    play(playerMove) {
        this.view.hideIcons()
        this.view.show('player-' + playerMove)

        setTimeout(() => {
            const cpuMove = this.game.makeMove()
            this.game.evaluate(playerMove, cpuMove)

            this.view.show('cpu-' + cpuMove)
            this.view.updateScore(this.game.playerScore, this.game.cpuScore)
        }, 100)
    }
}