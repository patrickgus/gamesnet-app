import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/Utils/Utils";

export default class GameListItem extends Component {
  render() {
    const { game } = this.props;
    return (
      <Section className="GameListItem">
        <header className="GameListItem__header">
          <Link to={`/games/${game.id}`} className="GameListItem__link">
            <h2 className="GameListItem__heading">{game.title}</h2>
          </Link>
          <img href={game.cover} alt={`Game cover art for ${game.title}`} />
          <p>Avg Rating: {game.avg_rating}</p>
        </header>
        <div className="gameInfo">
          <h4>Description</h4>
          {game.description}
          <p>Rated: {game.rated}</p>
          <p>Platforms: {game.platforms}</p>
        </div>
      </Section>
    );
  }
}
