import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/Utils/Utils";
import "./GameListItem.css";

export default function GameListItem(props) {
  const game = props.game;

  return (
    <Section className="GameListItem">
      <header className="GameListItem__header">
        <Link to={`/review/${game.id}`} className="GameListItem__link">
          <h2 className="GameListItem__heading">{game.title}</h2>
          <img
            className="GameListItem__cover"
            src={game.cover}
            alt={`Game cover art for ${game.title}`}
          />
        </Link>
        <h3>Average Rating: {game.avg_rating}</h3>
      </header>
      <div className="GameListItem__info">
        <h4>Description</h4>
        <p>{game.description}</p>
        <p>
          <strong>Rated:</strong> {game.rated}
        </p>
        <p>
          <strong>Platforms:</strong> {game.platforms}
        </p>
      </div>
    </Section>
  );
}
