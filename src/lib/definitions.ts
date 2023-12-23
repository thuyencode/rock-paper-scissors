import type { emojis, items } from './constants'

export type Item = keyof typeof items

export type Emoji = (typeof emojis)[keyof typeof emojis]
