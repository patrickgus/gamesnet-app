import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/Utils/Utils";
import GameListItem from "../../components/GameListItem/GameListItem";
import gameList from "../../stores/game-store";
import "./GameListPage.css";

export default class GameListPage extends Component {
  renderGames() {
    return gameList.map(game => <GameListItem key={game.id} game={game} />);
  }

  render() {
    return (
      <Section list className="GameList">
        <Link to={"/addgame"}>Add a Game</Link>
        {this.renderGames()}
      </Section>
    );
  }
}
