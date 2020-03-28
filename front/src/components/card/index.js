import React from 'react'
import './css/card.css'

const Card = ({ type, pos }) => {
  return (
    <div className='card'>
      <div className='style' style={{left: `${pos}px`}}>
        <img src={`./cards/${type}.svg`} alt='card' />
      </div>
    </div>
  )
}

export default Card
