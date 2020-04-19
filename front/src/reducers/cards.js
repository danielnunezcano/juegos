import { ADD_CARD, RESET_DECK, STOP, ADD_CARD_ENEMY } from "../actions/types";

const initialState = {
  cont: 0,
  points: 0,
  games: 0,
  winGames: 0,
  deckGame: [],
  deckEnemy: [],
  pointsEnemy: 0,
  stop: false,
  deck: [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "h7",
    "hj",
    "hq",
    "hk",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "cj",
    "cq",
    "ck",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "dj",
    "dq",
    "dk",
    "s1",
    "s2",
    "s3",
    "s4",
    "s5",
    "s6",
    "s7",
    "sj",
    "sq",
    "sk",
  ],
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cont: state.cont + 1,
        deckGame: [...state.deckGame, state.deck[state.cont]],
        points:
          state.points +
          (!isNaN(state.deck[state.cont][1])
            ? parseInt(state.deck[state.cont][1])
            : 0.5),
      };
    case RESET_DECK:
      return {
        ...state,
        cont: 0,
        deck: state.deck.sort(function () {
          return Math.random() - 0.5;
        }),
        deckGame: [],
        deckEnemy: [],
        points: 0,
        pointsEnemy: 0,
        stop: false,
        winGames:
          (state.points < 8 &&
          state.pointsEnemy > 7.5) ?
          state.winGames + 1 : state.winGames,
        games: state.games + 1,
      };
    case ADD_CARD_ENEMY:
      return {
        ...state,
        cont: state.cont + 1,
        stop: true,
        deckEnemy: [...state.deckEnemy, state.deck[state.cont]],
        pointsEnemy:
          state.pointsEnemy +
          (!isNaN(state.deck[state.cont][1])
            ? parseInt(state.deck[state.cont][1])
            : 0.5),
      };
    case STOP:
      return {
        ...state,
        cont: state.cont + 1,
        pointsEnemy:
          state.pointsEnemy +
          (!isNaN(state.deck[state.cont][1])
            ? parseInt(state.deck[state.cont][1])
            : 0.5),
        deckEnemy: [...state.deckEnemy, state.deck[state.cont]],
        stop: true,
      };
    default:
      return {
        ...state,
        deck: state.deck.sort(function () {
          return Math.random() - 0.5;
        }),
      };
  }
};

export default cards;
