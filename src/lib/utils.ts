import { items } from './constants'
import { Item } from './definitions'

export const capitalize = (str: string) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`

export function getItemValue(item: Item) {
  return items[item]
}

export function getComputerChoice() {
  const value = Math.floor(Math.random() * 3)

  return (Object.keys(items) as Item[]).find((key) => items[key] === value)
}

export function playRound(
  playerSelection: Item | undefined,
  computerSelection: Item | undefined
) {
  if (playerSelection === undefined) return
  if (computerSelection === undefined) return

  if (
    (getItemValue(playerSelection) + 1) % 3 ===
    getItemValue(computerSelection)
  ) {
    window.alert(
      `You Lose! ${capitalize(computerSelection)} beats ${capitalize(
        playerSelection
      )}`
    )
    return 0
  } else if (
    getItemValue(playerSelection) === getItemValue(computerSelection)
  ) {
    window.alert("It's a draw!")
    return -1
  } else {
    window.alert(
      `You Win! ${capitalize(playerSelection)} beats ${capitalize(
        computerSelection
      )}`
    )
    return 1
  }
}

export function validate(answer: string | undefined) {
  if (answer === undefined) return false
  if (answer in items) return true

  return false
}
