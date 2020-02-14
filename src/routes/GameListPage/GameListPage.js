import React, { Component } from "react";
import { Link } from "react-router-dom";
import GameListContext from "../../contexts/GameListContext";
import GameApiService from "../../services/game-api-service";
import { Section } from "../../components/Utils/Utils";
import GameList from "../../components/GameList/GameList";
// import GameListItem from "../../components/GameListItem/GameListItem";
// import SearchForm from "../../components/SearchForm/SearchForm";
import "./GameListPage.css";

export default class GameListPage extends Component {
  constructor(props) {
    super(props);
      this.state = {
        games: []
      };
  }

  static contextType = GameListContext;

  componentDidMount() {
    this.context.clearError();
    GameApiService.getGames()
      .then(games => {
        this.setState({ games });
      })
      .catch(this.context.setError);
  }

  // filterList = query => {
  //   console.log(query);
  //   const { gameList } = this.state;
  //   let games = gameList.filter(game => {
  //     const title = game.title.toLowerCase();
  //     const filter = query.toLowerCase();
  //     return title.includes(filter);
  //   });
  //   console.log(games);
  //   this.setState({ games });
  // };

  // sortList = e => {
  //   const { sort, games } = this.state;
  //   console.log(sort);
  //   if (sort === "title") {
  //     games.sort((a, b) => {
  //       return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
  //     });
  //   } else if (sort === "avg_rating") {
  //     games.sort((a, b) => {
  //       return b[sort] - a[sort];
  //     });
  //   }
  //   this.setState({ sort });
  // };

  // renderGames() {
  //   const { games } = this.state;
  //   return games.map(game => <GameListItem key={game.id} game={game} />);
  // }

  render() {
    // console.log(this.state.games);
    // const { error } = this.context;
    return (
      <Section className="GameListPage">
        <Link className="addGameLink" to={"/addgame"}>
          Add Game
        </Link>
        {/* <SearchForm filterList={this.filterList} sortList={this.sortList} /> */}
        <GameList games={this.state.games} />
        {/* {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderGames()
        )} */}
      </Section>
    );
  }
}
