import React from "react";
import { Provider } from "react-redux";
import Game from "./components/game";
import Dashboard from "./components/dashboard";
import Vertical from "./components/vertical";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
        <Vertical />
        <Game />
      </div>
    </Provider>
  );
}

export default App;
