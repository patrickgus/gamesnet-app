import React, { Component } from "react";
import { Link } from "react-router-dom";
import GameContext from "../../contexts/GameContext";
import GameApiService from "../../services/game-api-service";
import { Section, Hyph } from "../../components/Utils/Utils";
import ReviewList from "../../components/ReviewList/ReviewList";
import "./GameReviewPage.css";

export default class GameReviewPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = GameContext;

  componentDidMount() {
    const { gameId } = this.props.match.params;
    this.context.clearError();
    GameApiService.getGame(gameId)
      .then(this.context.setGame)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearGame();
  }

  renderGame() {
    const { gameId } = this.props.match.params;
    const { game } = this.context;
    return (
      <>
        <header className="GameReviewPage__header">
          <h2 className="GameReviewPage__heading">{game.title}</h2>
          <img src={game.cover} alt={`Game cover art for ${game.title}`} />
          <h4>Avg Rating: {game.avg_rating}</h4>
          <div className="GameReviewPage__links">
            <Link to={`/addreview/${gameId}`}>Add a Review</Link>
            <Hyph />
            <Link to={"/games"}>Back</Link>
          </div>
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
        error.error === `Game doesn't exist` ? (
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
