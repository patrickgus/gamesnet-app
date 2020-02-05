import React, { Component } from "react";
import GameContext from "../../contexts/GameContext";
import { Section } from "../../components/Utils/Utils";
import ReviewList from "../../components/ReviewList/ReviewList";

export default class GameReviewPage extends Component {
  static contextType = GameContext;

  componentDidMount() {
    this.context.clearError();
  }

  componentWillUnmount() {
    this.context.clearGame();
  }

  renderGame() {
    const { game } = this.context;
    return (
      <>
        <header className="GameReviewPage__header">
          <h2 className="GameReviewPage__heading">{game.title}</h2>
          <img href={game.cover} alt={`Game cover art for ${game.title}`} />
          <p>Avg Rating: {game.avg_rating}</p>
        </header>
        <ReviewList />
      </>
    );
  }

  render() {
    const { error, game } = this.context;
    let content;
    if (error) {
      content =
        error.error === `Article doesn't exist` ? (
          <p className="red">Game not found</p>
        ) : (
          <p className="red">There was an error</p>
        );
    } else if (!game.id) {
      content = <div className="loading" />;
    } else {
      content = this.renderGame();
    }
    return <Section className="GameReviewPage">{content}</Section>;
  }
}
