import React, { Component } from "react";
import { Link } from "react-router-dom";
import GameContext from "../../contexts/GameContext";
import { Section } from "../../components/Utils/Utils";
import ReviewList from "../../components/ReviewList/ReviewList";
import "./GameReviewPage.css";

export default class GameReviewPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = GameContext;

  componentDidMount() {
    this.context.clearError();
  }

  componentWillUnmount() {
    this.context.clearGame();
  }

  renderGame() {
    const { game } = this.context;
    const { gameId } = this.props.match.params;
    return (
      <>
        <header className="GameReviewPage__header">
          <h2 className="GameReviewPage__heading">{game[gameId - 1].title}</h2>
          <img
            src={game[gameId - 1].cover}
            alt={`Game cover art for ${game[gameId - 1].title}`}
          />
          <h4>Avg Rating: {game[gameId - 1].avg_rating}</h4>
          <Link to={"/games"}>Back</Link>
        </header>
        <ReviewList />
      </>
    );
  }

  render() {
    const { error, game } = this.context;
    const { gameId } = this.props.match.params;
    console.log(game[gameId - 1].id);
    let content;
    if (error) {
      content =
        error.error === `Game doesn't exist` ? (
          <p className="red">Game not found</p>
        ) : (
          <p className="red">There was an error</p>
        );
    } else if (!game[gameId - 1].id) {
      content = <div className="loading" />;
    } else {
      content = this.renderGame();
    }
    return <Section className="GameReviewPage">{content}</Section>;
  }
}
