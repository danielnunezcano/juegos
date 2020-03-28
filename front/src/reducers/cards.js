import { SHUFFLE_CARDS } from '../actions/types'

const initialState = {
  deck: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'h7',
    'hj',
    'hq',
    'hk',
    'c1',
    'c2',
    'c3',
    'c4',
    'c5',
    'c6',
    'c7',
    'cj',
    'cq',
    'ck',
    'd1',
    'd2',
    'd3',
    'd4',
    'd5',
    'd6',
    'd7',
    'dj',
    'dq',
    'dk',
    's1',
    's2',
    's3',
    's4',
    's5',
    's6',
    's7',
    'sj',
    'sq',
    'sk'
  ]
}

const cards = (state = initialState, action) => {
  switch (action.type) {
    case SHUFFLE_CARDS:
      return {
        ...state,
        deck: state.deck.sort(function () {
          return Math.random() - 0.5
        })
      }
    default:
        return {
            ...state,
            deck: state.deck.sort(function () {
              return Math.random() - 0.5
            })
          }
  }
}

export default cards
