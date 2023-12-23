import type { Item } from './definitions'

export const items = {
  rock: 0,
  paper: 1,
  scissors: 2
} as const

export const keys = Object.keys(items) as Item[]

export const emojis = {
  paper: '📃',
  rock: '🪨',
  scissors: '✂️'
} as const
