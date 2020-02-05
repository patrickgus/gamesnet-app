import React, { Component } from "react";
import gameList from "../stores/game-store";

const GameListContext = React.createContext({
  gameList,
  error: null,
  setError: () => {},
  clearError: () => {},
  setGameList: () => {}
});

export default GameListContext;

export class GameListProvider extends Component {
  state = {
    gameList,
    error: null
  };

  setGameList = gameList => {
    this.setState({ gameList });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      gameList: this.state.gameList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGameList: this.setGameList
    };
    return (
      <GameListContext.Provider value={value}>
        {this.props.children}
      </GameListContext.Provider>
    );
  }
}
