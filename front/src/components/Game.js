import React from 'react';
import Card from './card';
import { addCard } from '../actions/cards'
import {connect} from 'react-redux';
import './css/game.css';



const Game = (props) => {
  let contCard = 0;
  return (
    <div>
      <button onClick={() => props.addCard()}>Coger Carta</button>
      {
        props.cards.deckGame.map(card => {
          return <Card type={card} pos={contCard++ * 70} />
        })
      }        
    </div>
  )
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  addCard: () => dispatch(addCard())
})

export default connect (mapStateToProps, mapDispatchToProps) (Game);
