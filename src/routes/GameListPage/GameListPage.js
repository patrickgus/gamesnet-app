import React, { Component } from "react";
import { Link } from "react-router-dom";
import GameListContext from "../../contexts/GameListContext";
import GameApiService from "../../services/game-api-service";
import { Section } from "../../components/Utils/Utils";
import GameListItem from "../../components/GameListItem/GameListItem";
import SearchForm from "../../components/SearchForm/SearchForm";
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
        <Link className="addGameLink" to={"/addgame"}>
          Add Game
        </Link>
        <SearchForm />
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderGames()
        )}
      </Section>
    );
  }
}
