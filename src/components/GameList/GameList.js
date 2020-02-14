import React, { Component } from "react";
import { Section } from "../Utils/Utils";
// import GameListContext from "../../contexts/GameListContext";
// import GameListItem from "../../components/GameListItem/GameListItem";

export default class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    };
  }

  // static contextType = GameListContext;

  componentDidMount() {
    this.setState({
      filtered: this.props.games
    });
  }

  // componentWillReceiveProp(nextProps) {
  //   this.setState({
  //     filtered: nextProps.games
  //   });
  // }

  handleChange = e => {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.props.games;

      newList = currentList.filter(game => {
        const title = game.title.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return title.includes(filter);
      });
    } else {
      newList = this.props.games;
    }
    console.log(newList);
    this.setState({ filtered: newList });
  };

  // renderGames() {
  //   const { filtered } = this.state;
  //   return filtered.map(game => <GameListItem key={game.id} game={game} />);
  // }

  render() {
    // const { error } = this.context;
    // console.log(this.state.filtered);
    return (
      <Section list className="GameList">
        <input
          type="text"
          className="search"
          onChange={this.handleChange}
          placeholder="Search..."
        />
        {/* {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderGames()
        )} */}
        <ul>
          {this.state.filtered.map(game => (
            <li key={game.id}>{game.title}</li>
          ))}
        </ul>
      </Section>
    );
  }
}
