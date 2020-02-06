import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import GameListItem from "../../components/GameListItem/GameListItem";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import gameList from "../../stores/game-store";
import "./GameListPage.css";

export default class GameListPage extends Component {
  renderGames() {
    return gameList.map(game => <GameListItem key={game.id} game={game} />);
  }

  render() {
    return (
      <Section list className="GameList">
        <SearchHeader />
        {this.renderGames()}
      </Section>
    );
  }
}
