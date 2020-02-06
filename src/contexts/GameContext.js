import React, { Component } from "react";
import game from "../stores/game-store";

export const nullGame = {
  game: {}
};

const GameContext = React.createContext({
  game,
  error: null,
  setError: () => {},
  clearError: () => {},
  setGame: () => {},
  clearGame: () => {},
  addGame: () => {}
});

export default GameContext;

export class GameProvider extends Component {
  state = {
    game,
    error: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setGame = game => {
    this.setState({ game });
  };

  clearGame = () => {
    this.setGame(nullGame);
  };

  addGame = game => {
    this.setGame([...this.state.game, game]);
  };

  render() {
    const value = {
      game: this.state.game,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGame: this.setGame,
      clearGame: this.clearGame,
      addGame: this.addGame
    };
    return (
      <GameContext.Provider value={value}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}
