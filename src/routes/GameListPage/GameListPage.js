import React, { Component } from "react";
import { Link } from "react-router-dom";
import GameListContext from "../../contexts/GameListContext";
import GameApiService from "../../services/game-api-service";
import { Section } from "../../components/Utils/Utils";
import GameList from "../../components/GameList/GameList";
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

  render() {
    return (
      <Section className="GameListPage">
        <Link className="addGameLink" to={"/addgame"}>
          Add Game
        </Link>
        <GameList games={this.state.games} />
      </Section>
    );
  }
}
