import React from 'react'
import { Provider } from 'react-redux'
import Game from './components/game'
import Dashboard from './components/dashboard'
import store from './store'
import './App.css'

function App () {
  return (
    
    <Provider store={store}>
    <div className='App'>
      <Dashboard />
      <Game />
    </div>
    </Provider>
  )
}

export default App
