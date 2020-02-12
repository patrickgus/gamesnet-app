import React, { Component } from "react";
import { Link } from "react-router-dom";
import GameContext from "../../contexts/GameContext";
import GameApiService from "../../services/game-api-service";
import { Section, Hyph } from "../../components/Utils/Utils";
import "./GamePage.css";

export default class GamePage extends Component {
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
    GameApiService.getGameReviews(gameId)
      .then(this.context.setReviews)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearGame();
  }

  renderGame() {
    const { gameId } = this.props.match.params;
    const { game, reviews } = this.context;
    return (
      <>
        <header className="GamePage__header">
          <h2 className="GamePage__heading">{game.title}</h2>
          <img src={game.cover} alt={`Game cover art for ${game.title}`} />
          <h3>Average Rating: {game.avg_rating}</h3>
          <div className="GamePage__links">
            <Link to={`/addreview/${gameId}`}>Add Review</Link>
            <Hyph />
            <Link to={"/games"}>Back</Link>
          </div>
        </header>
        <GameReviews reviews={reviews} />
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
    return <Section className="GamePage">{content}</Section>;
  }
}

function GameReviews({ reviews = [] }) {
  return (
    <Section list className="GamePage__review-list">
      {reviews.map(review => (
        <Section key={review.id} className="GamePage__review">
          <h4>"{review.title}"</h4>
          <p>Rating: {review.rating}</p>
          <div className="GamePage__review-review">
            <p>{review.review}</p>
          </div>
          <p className="GamePage__review-user">- {review.user.username}</p>
        </Section>
      ))}
    </Section>
  );
}
