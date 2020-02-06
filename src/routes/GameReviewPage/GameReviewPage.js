import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Section, Hyph } from "../../components/Utils/Utils";
import ReviewList from "../../components/ReviewList/ReviewList";
import game from "../../stores/game-store";
import "./GameReviewPage.css";

export default class GameReviewPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };
  
  render() {
    const { gameId } = this.props.match.params;

    return (
      <Section className="GameReviewPage">
        <header className="GameReviewPage__header">
          <h2 className="GameReviewPage__heading">{game[gameId - 1].title}</h2>
          <img
            src={game[gameId - 1].cover}
            alt={`Game cover art for ${game[gameId - 1].title}`}
          />
          <h4>Avg Rating: {game[gameId - 1].avg_rating}</h4>
          <div className="GameReviewPage__links">
            <Link to={`/addreview/${gameId}`}>Add a Review</Link>
            <Hyph />
            <Link to={"/games"}>Back</Link>
          </div>
        </header>
        <ReviewList />
      </Section>
    );
  }
}
