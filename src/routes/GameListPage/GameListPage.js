import React, { Component } from "react";
import GameListContext from "../../contexts/GameListContext";
import { Section } from "../../components/Utils/Utils";
import GameListItem from "../../components/GameListItem/GameListItem";

export default class GameListPage extends Component {
  static contextType = GameListContext;

  componentDidMount() {
    this.context.clearError();
  }

  renderGames() {
    const { gameList = [] } = this.context;
    return gameList.map(game => <GameListItem key={game.id} game={game} />);
  }

  render() {
    const { error } = this.context;
    return (
      <Section list className="GameList">
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderGames()
        )}
      </Section>
    );
  }
}
