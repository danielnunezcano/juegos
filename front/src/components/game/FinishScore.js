import React from "react";

const FinishScore = ({ props }) => {
  return (props.cards.stop &&
    props.cards.pointsEnemy > props.cards.points &&
    props.cards.pointsEnemy <= 7.5) ||
    props.cards.points > 7.5 ? (
    <div
      className="cartelInfo"
      style={{ border: "1vh solid red" }}
      onClick={() => props.resetDeck()}
    >
      Has Perdido
    </div>
  ) : props.cards.stop && props.cards.pointsEnemy > 7.5 ? (
    <div
      className="cartelInfo"
      style={{ border: "1vh solid green" }}
      onClick={() => props.resetDeck()}
    >
      Has Ganado
    </div>
  ) : props.cards.pointsEnemy === props.cards.points &&
    props.cards.pointsEnemy === 7.5 ? (
    <div
      className="cartelInfo"
      style={{ border: "1vh solid grey" }}
      onClick={() => props.resetDeck()}
    >
      Empate
    </div>
  ) : (
    <div></div>
  );
};

export default FinishScore;
