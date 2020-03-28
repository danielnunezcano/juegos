import React from 'react'
import { Provider } from 'react-redux'
import Game from './components/Game'
import store from './store'
import './App.css'

function App () {
  return (
    
    <Provider store={store}>
    <div className='App'>
      <Game />
    </div>
    </Provider>
  )
}

export default App
