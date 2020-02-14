import React, { Component } from "react";
import { Link } from "react-router-dom";
import GameListContext from "../../contexts/GameListContext";
import GameApiService from "../../services/game-api-service";
import { Section } from "../../components/Utils/Utils";
import GameListItem from "../../components/GameListItem/GameListItem";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./GameListPage.css";

export default class GameListPage extends Component {
  state = {
    games: [],
    gameList: [],
    sort: "",
    error: null
  };

  static contextType = GameListContext;

  componentDidMount() {
    this.context.clearError();
    GameApiService.getGames()
      .then(games => {
        this.setState({ games, gameList: games });
      })
      .catch(this.context.setError);
  }

  filterList = query => {
    console.log(query);
    const { gameList } = this.state;
    let games = gameList.filter(game => {
      const title = game.title.toLowerCase();
      const filter = query.toLowerCase();
      return title.includes(filter);
    });
    console.log(games);
    this.setState({ games });
  };

  sortList = e => {
    const { sort, games } = this.state;
    console.log(sort);
    if (sort === "title") {
      games.sort((a, b) => {
        return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
      });
    } else if (sort === "avg_rating") {
      games.sort((a, b) => {
        return b[sort] - a[sort];
      });
    }
    this.setState({ sort });
  };

  renderGames() {
    const { games } = this.state;
    return games.map(game => <GameListItem key={game.id} game={game} />);
  }

  render() {
    const { error } = this.context;
    return (
      <Section list className="GameList">
        <Link className="addGameLink" to={"/addgame"}>
          Add Game
        </Link>
        <SearchForm filterList={this.filterList} sortList={this.sortList} />
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderGames()
        )}
      </Section>
    );
  }
}
