import React from 'react'
import './css/carta.css'

const Carta = ({ numero, tipo, pos }) => {
  return (
    <div className='disenio'>
      <img src={`./naipes/${tipo}${numero}.svg`} alt='naipe' />
    </div>
  )
}

export default Carta
