import '../style.css'

import { Game } from './game'
import { View } from './view'
import { Controller } from './controller'


const domElements = {
    player: {
        score: document.getElementById('playerScore'),
        buttons: {
            rock: document.querySelector('.btn.rock'),
            paper: document.querySelector('.btn.paper'),
            scissors: document.querySelector('.btn.scissors')
        },
        icons: {
            rock: document.querySelector('.player > .icons > .rock'),
            paper: document.querySelector('.player > .icons > .paper'),
            scissors: document.querySelector('.player > .icons > .scissors')
        }
    },
    cpu: {
        score: document.getElementById('cpuScore'),
        icons: {
            rock: document.querySelector('.cpu > .icons > .rock'),
            paper: document.querySelector('.cpu > .icons > .paper'),
            scissors: document.querySelector('.cpu > .icons > .scissors')
        }

    }
}
const view = new View(domElements)
const game = new Game()
const controller = new Controller(game, view, domElements)
controller.init()

