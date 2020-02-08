import React, { Component } from "react";

export const nullGame = {
  poster_id: ""
};

const GameContext = React.createContext({
  game: nullGame,
  reviews: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setGame: () => {},
  clearGame: () => {},
  addGame: () => {},
  setReviews: () => {},
  addReview: () => {}
});

export default GameContext;

export class GameProvider extends Component {
  state = {
    game: nullGame,
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

  setReviews = reviews => {
    this.setState({ reviews });
  };

  clearGame = () => {
    this.setGame(nullGame);
    this.setReviews([]);
  };

  addGame = game => {
    this.setGame([...this.state.game, game]);
  };

  addReview = review => {
    this.setReviews([...this.state.reviews, review]);
  };

  render() {
    const value = {
      game: this.state.game,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGame: this.setGame,
      setReviews: this.setReviews,
      clearGame: this.clearGame,
      addGame: this.addGame,
      addReview: this.addReview
    };
    return (
      <GameContext.Provider value={value}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}
