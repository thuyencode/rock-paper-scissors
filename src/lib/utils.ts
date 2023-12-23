import { emojis, items } from './constants'
import type { Emoji, Item } from './definitions'

export function getComputerChoice(): Item | undefined {
  const value = Math.floor(Math.random() * 3)

  return (Object.keys(items) as Item[]).find((key) => items[key] === value)
}

export function playRound(
  playerSelection: Item | undefined,
  computerSelection: Item | undefined
): 0 | -1 | 1 | undefined {
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

export function getEmoji(item: Item): Emoji | undefined {
  return emojis[item]
}
