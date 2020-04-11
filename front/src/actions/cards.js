import { ADD_CARD, RESET_DECK, STOP, ADD_CARD_ENEMY } from './types'

export const addCard = () => ({
  type: ADD_CARD
})

export const resetDeck = () => ({
  type: RESET_DECK
})

export const stop = () => ({
  type: STOP
})

export const addCardEnemy = () => ({
  type: ADD_CARD_ENEMY
})

