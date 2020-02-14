import React, { Component } from "react";

const GameListContext = React.createContext({
  gameList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setGameList: () => {},
  addGame: () => {},
});

export default GameListContext;

export class GameListProvider extends Component {
  state = {
    gameList: [],
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

  addGame = game => {
    this.setGame([...this.state.gameList, game]);
  };

  render() {
    const value = {
      gameList: this.state.gameList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGameList: this.setGameList,
      addGame: this.addGame,
    };
    return (
      <GameListContext.Provider value={value}>
        {this.props.children}
      </GameListContext.Provider>
    );
  }
}
