import React, { Component } from "react";
import GameListContext from "../../contexts/GameListContext";
import GameApiService from "../../services/game-api-service";
import { Section } from "../../components/Utils/Utils";
import GameListItem from "../../components/GameListItem/GameListItem";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import "./GameListPage.css";

export default class GameListPage extends Component {
  static contextType = GameListContext;

  componentDidMount() {
    this.context.clearError();
    GameApiService.getGames()
      .then(this.context.setGameList)
      .catch(this.context.setError);
  }

  renderGames() {
    const { gameList = [] } = this.context;
    return gameList.map(game => <GameListItem key={game.id} game={game} />);
  }

  render() {
    const { error } = this.context;
    return (
      <Section list className="GameList">
        <SearchHeader />
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderGames()
        )}
      </Section>
    );
  }
}
