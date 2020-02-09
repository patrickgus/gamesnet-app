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

  filterGames = (games, sort, searchTerm) => {
    let filteredList = [];

    if (searchTerm !== "") {
      filteredList = games.filter(game => {
        const title = game.props.game.title.toLowerCase();
        const filter = searchTerm.toLowerCase();
        return title.includes(filter);
      });
    } else {
      filteredList = games;
    }

    if (sort) {
      filteredList.sort((a, b) => {
        return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
      });
    }

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
