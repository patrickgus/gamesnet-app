import React, { Component } from "react";

const GameListContext = React.createContext({
  gameList: [],
  filteredList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setGameList: () => {},
  addGame: () => {},
  filterGames: () => {}
});

export default GameListContext;

export class GameListProvider extends Component {
  state = {
    gameList: [],
    filteredList: [],
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

  filterGames = filteredList => {
    this.setGameList({ filteredList })
  }

  render() {
    const value = {
      gameList: this.state.gameList,
      filteredList: this.state.filteredList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGameList: this.setGameList,
      addGame: this.addGame,
      filterGames: this.filterGames
    };
    return (
      <GameListContext.Provider value={value}>
        {this.props.children}
      </GameListContext.Provider>
    );
  }
}
