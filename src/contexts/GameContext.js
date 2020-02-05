import React, { Component } from "react";
import game from "../dummy-store";

export const nullGame = {
  title: ""
};

const GameContext = React.createContext({
  game,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setGame: () => {},
  clearGame: () => {},
  setComments: () => {},
  addComment: () => {}
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

  setComments = comments => {
    this.setState({ comments });
  };

  clearGame = () => {
    this.setGame(nullGame);
    this.setComments([]);
  };

  addComment = comment => {
    this.setComments([...this.state.comments, comment]);
  };

  render() {
    const value = {
      game: this.state.game,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGame: this.setGame,
      setComments: this.setComments,
      clearGame: this.clearGame,
      addComment: this.addComment
    };
    return (
      <GameContext.Provider value={value}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}
