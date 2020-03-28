import React from 'react'
import Carta from './card'
import { connect } from 'react-redux'
import './css/game.css'

let cont = -70;

class Game extends React.Component {
  componentDidMount () {
  }

  renderGame () {
    const { cards } = this.props
    return <div className='game'>
    {cards.deck.map(c => {
      return <Carta type={c} pos={cont=cont+70} />})
  }
  </div>
  }
  render () {
    return this.renderGame()
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Game)
