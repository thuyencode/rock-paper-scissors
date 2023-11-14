import { items } from './constants'
import { Item } from './definitions'

export function getComputerChoice() {
  const value = Math.floor(Math.random() * 3)

  return (Object.keys(items) as Item[]).find((key) => items[key] === value)
}

export function playRound(
  playerSelection: Item | undefined,
  computerSelection: Item | undefined,
) {
  if (playerSelection === undefined) return
  if (computerSelection === undefined) return

  if ((items[playerSelection] + 1) % 3 === items[computerSelection]) {
    return 0
  } else if (items[playerSelection] === items[computerSelection]) {
    return -1
  } else {
    return 1
  }
}

export function getEmoji(str: Item) {
  switch (str) {
    case 'paper':
      return '📃'

    case 'rock':
      return '🪨'

    case 'scissors':
      return '✂️'

    default:
      break
  }
}
