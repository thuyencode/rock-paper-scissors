import { Item } from './lib/definitions'
import { getComputerChoice, playRound, validate } from './lib/utils'

function game() {
  let playerScore = 0
  let computerScore = 0

  for (let i = 0; i < 5; i++) {
    let playerSelection: Item | undefined
    let computerSelection: Item | undefined

    // Make sure the input is valid
    while (!validate(playerSelection)) {
      playerSelection = window
        .prompt('Rock, paper or scissors?')
        ?.toLowerCase() as Item | undefined

      if (playerSelection === undefined) return
    }

    computerSelection = getComputerChoice()

    // Make sure the random output is valid
    if (computerSelection === undefined) {
      computerSelection = getComputerChoice()
    }

    const result = playRound(playerSelection, computerSelection)

    if (result === 1) playerScore++
    else if (result === 0) computerScore++
  }

  window.alert(`Player's score: ${playerScore}
Computer's score: ${computerScore}`)
}

game()
