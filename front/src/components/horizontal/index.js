import React from "react";
import { connect } from "react-redux";
import { resetDeck, stop } from "../../actions/cards";
import "./css/horizontal.css";

const Horizontal = (props) => {
  return (
    <div className="horizontal">
      {props.cards.points > 0 &&
        props.cards.points < 7.5 &&
        !props.cards.stop && (
          <button className="button" onClick={() => props.stop()}>Plantarse</button>
        )}
      <div className="resultado">
        <div>Partidas: {props.cards.games}</div>
        <div>Ganadas: {props.cards.winGames}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  resetDeck: () => dispatch(resetDeck()),
  stop: () => dispatch(stop()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Horizontal);
