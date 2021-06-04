export class View {
    constructor(domElements) {
        this.domElements = domElements
    }

    updateScore(playerScore, cpuScore) {
        this.domElements.player.score.innerText = playerScore
        this.domElements.cpu.score.innerText = cpuScore
    }

    hideIcons() {
        this.hide(this.domElements.player.icons.rock)
        this.hide(this.domElements.player.icons.paper)
        this.hide(this.domElements.player.icons.scissors)

        this.hide(this.domElements.cpu.icons.rock)
        this.hide(this.domElements.cpu.icons.paper)
        this.hide(this.domElements.cpu.icons.scissors)
    }

    hide(element) {
        element.classList.add('hidden')
    }

    show(elementName) {
        switch (elementName) {
            case 'player-rock':
                this.domElements.player.icons.rock.classList.remove('hidden')
                break

            case 'player-paper':
                this.domElements.player.icons.paper.classList.remove('hidden')
                break

            case 'player-scissors':
                this.domElements.player.icons.scissors.classList.remove('hidden')
                break

            case 'cpu-rock':
                this.domElements.cpu.icons.rock.classList.remove('hidden')
                break

            case 'cpu-paper':
                this.domElements.cpu.icons.paper.classList.remove('hidden')
                break

            case 'cpu-scissors':
                this.domElements.cpu.icons.scissors.classList.remove('hidden')
                break
        }
    }
}