import React from 'react'
import Carta from './components/carta'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Carta numero='1' tipo='h' pos='1' />
      <Carta numero='q' tipo='d' pos='2' />
      <Carta numero='4' tipo='c' pos='3' />
      <Carta numero='10' tipo='s' pos='4' />
    </div>
  )
}

export default App
