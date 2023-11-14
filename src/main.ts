import { Item } from './lib/definitions'
import { getEmoji, getComputerChoice, playRound } from './lib/utils'

function game() {
  const buttonsHtml = window.document.querySelectorAll('button')
  const playerScoreHtml = window.document.querySelector('#playerScore')
  const computerScoreHtml = window.document.querySelector('#computerScore')
  const notificationHtml = window.document.querySelector('#notification')

  let playerScore = 0
  let computerScore = 0

  buttonsHtml.forEach((button) => {
    button.addEventListener('click', () => {
      if (playerScore >= 5 || computerScore >= 5) return

      let computerSelection: Item | undefined
      let playerSelection = button.id as Item

      computerSelection = getComputerChoice()

      // Make sure the random output is valid
      if (computerSelection === undefined) {
        computerSelection = getComputerChoice()
      }

      const result = playRound(playerSelection, computerSelection)

      switch (result) {
        case 1:
          playerScore++

          playerScoreHtml!.textContent = playerScore.toString()
          notificationHtml!.textContent = `🥳 You Win! ${getEmoji(
            playerSelection,
          )} beats ${getEmoji(computerSelection!)}`

          break

        case 0:
          computerScore++

          notificationHtml!.textContent = `😓 You Lose! ${getEmoji(
            computerSelection!,
          )} beats ${getEmoji(playerSelection)}`
          computerScoreHtml!.textContent = computerScore.toString()

          break

        default:
          notificationHtml!.textContent = "👌 It's a draw!"
          break
      }
    })
  })
}

game()
