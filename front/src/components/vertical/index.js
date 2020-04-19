import React from 'react';
import {connect} from 'react-redux';
import './css/vertical.css';

const Vertical = props => {
  return <div className="vertical">
    <div>Partidas: {props.cards.games}</div>
    <div>Ganadas: {props.cards.winGames}</div>
  </div>
};

const mapStateToProps = state => ({
  ...state,
});


export default connect (mapStateToProps) (Vertical);

