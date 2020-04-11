import React from 'react';
import Card from '../card';
import {addCard, resetDeck, stop, addCardEnemy} from '../../actions/cards';
import {connect} from 'react-redux';
import './css/game.css';

let interval = props => setInterval (props.addCardEnemy (), 1000);

const Game = props => {
  let contCard = 0;
  let contCardEnemy = 0;
  const leftDist = () => contCard++ * 5;
  const leftDistEnemy = () => contCardEnemy++ * 5;

  return (
    <div>
      {(props.cards.stop &&
        props.cards.pointsEnemy > props.cards.points &&
        props.cards.pointsEnemy <= 7.5) ||
        props.cards.points > 7.5
        ? <div>Ganador Enemigo</div>
        : props.cards.stop && props.cards.pointsEnemy > 7.5
            ? <div>Has Ganado</div>
            : props.cards.pointsEnemy === props.cards.points &&
                props.cards.pointsEnemy === 7.5
                ? <div>Empate</div>
                : <div>
                    <div>Puntuación: {props.cards.points}</div>
                    <div>Puntuación Enemigo: {props.cards.pointsEnemy}</div>
                  </div>}

      {!props.cards.stop
        ? props.cards.deckGame.map (card => (
            <Card type={card} left={leftDist ()} top={10} />
          ))
        : <div>
            {props.cards.deckGame.map (card => (
              <Card type={card} left={leftDist ()} top={10} />
            ))}
            {props.cards.deckEnemy.map (card => (
              <Card type={card} left={leftDistEnemy ()} top={30} />
            ))}
          </div>}
      {props.cards.points < 7.5 && !props.cards.stop
        ? <div>
            <button onClick={() => props.addCard ()}>Coger Carta</button>
            <button onClick={() => props.stop ()}>Plantarse</button>
          </div>
        : <div>
            {props.cards.pointsEnemy > props.cards.points ||
              props.cards.pointsEnemy >= 7.5 ||
              props.cards.points > 7.5
              ? <div>
                  {clearInterval (interval)}
                  <button onClick={() => props.resetDeck ()}>Resetear</button>
                </div>
              : interval (props)}

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
