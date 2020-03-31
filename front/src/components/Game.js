import React from 'react';
import Card from './card';
import {addCard, resetDeck, stop, addCardEnemy} from '../actions/cards';
import {connect} from 'react-redux';
import './css/game.css';

const Game = props => {
  let contCard = 0;
  let contCardEnemy = 0;
  return (
    <div>
      {((props.cards.stop &&
        props.cards.pointsEnemy > props.cards.points &&
        props.cards.pointsEnemy < 7.5) || props.cards.points > 7.5)
        ? <div>Ganador Enemigo</div>
        : props.cards.stop && props.cards.pointsEnemy > 7.5
            ? <div>Has Ganado</div>
            : <div>
                <div>Puntuación: {props.cards.points}</div>
                <div>Puntuación Enemigo: {props.cards.pointsEnemy}</div>
              </div>}

      {!props.cards.stop
        ? props.cards.deckGame.map (card => (
            <Card type={card} left={contCard++ * 70} top={0} />
          ))
        : <div>
            {props.cards.deckGame.map (card => (
              <Card type={card} left={contCard++ * 70} top={0} />
            ))}
            {props.cards.deckEnemy.map (card => (
              <Card type={card} left={contCardEnemy++ * 70} top={380} />
            ))}
          </div>}
      {props.cards.points < 7.5 && !props.cards.stop
        ? <div>
            <button onClick={() => props.addCard ()}>Coger Carta</button>
            <button onClick={() => props.stop ()}>Plantarse</button>
          </div>
        : <div>
            {props.cards.pointsEnemy <= props.cards.points &&
              props.cards.pointsEnemy < 7.5 && props.cards.points < 7.5
              ? <button onClick={() => props.addCardEnemy ()}>
                  Carta Enemigo
                </button>
              : <button onClick={() => props.resetDeck ()}>Resetear</button>}
          </div>}
    </div>
  );
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  addCard: () => dispatch (addCard ()),
  resetDeck: () => dispatch (resetDeck ()),
  stop: () => dispatch (stop ()),
  addCardEnemy: () => dispatch (addCardEnemy ()),
});

export default connect (mapStateToProps, mapDispatchToProps) (Game);
