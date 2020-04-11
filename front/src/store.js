import { createStore, combineReducers } from 'redux'
import cards from './reducers/cards'

const store = createStore(
  combineReducers({ cards })
)

export default store