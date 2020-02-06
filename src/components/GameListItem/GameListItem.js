import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/Utils/Utils";
import "./GameListItem.css";

export default class GameListItem extends Component {
  render() {
    const { game } = this.props;
    console.log(game);
    return (
      <Section className="GameListItem">
        <header className="GameListItem__header">
          <Link to={`/review/${game.id}`} className="GameListItem__link">
            <h2 className="GameListItem__heading">{game.title}</h2>
          </Link>
          <img src={game.cover} alt={`Game cover art for ${game.title}`} />
          <h4>Avg Rating: {game.avg_rating}</h4>
        </header>
        <div className="gameInfo">
          <h4>Description</h4>
          <p>{game.description}</p>
          <p>Rated: {game.rated}</p>
          <p>Platforms: {game.platforms}</p>
        </div>
      </Section>
    );
  }
}
