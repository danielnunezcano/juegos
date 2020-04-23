import React from 'react'
import './css/card.css'

const Card = ({ type, left, top }) => {
  return (
    <div className='card'>
      <div className='style' style={{left: `${left}%`, top: `${top}px`}}>
        <img src={`./cards/${type}.svg`} alt='card' />
      </div>
    </div>
  )
}

export default Card
