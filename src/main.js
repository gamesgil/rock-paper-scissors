import Game from './game'
import { ROCK, PAPER, SCISSORS } from './shared'

console.log(Game.makeMove())
console.log(Game.makeMove())
console.log(Game.makeMove())
console.log(Game.makeMove())
console.log(Game.makeMove())

for (let i = 0; i < 10; i++) {
    const p = [ROCK, PAPER, SCISSORS][Math.floor(Math.random() * 3)]
    const c = Game.makeMove()

    console.log(Game.evaluate(p, c))
}