import React, { Component } from "react";
import { Section } from "../Utils/Utils";
import GameListContext from "../../contexts/GameListContext";
import GameListItem from "../../components/GameListItem/GameListItem";
import "./GameList.css";

export default class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      sort: ""
    };
  }

  static contextType = GameListContext;

  componentDidMount() {
    this.setState({
      filtered: this.props.games
    });
    console.log("props.games", this.props.games);
    console.log("filtered", this.state.filtered);
  }

  componentDidUpdate(prevProps) {
    if (this.props.games !== prevProps.games) {
      this.setState({
        filtered: this.props.games
      });
    }
  }

  handleSearch = e => {
    let currentList = [];
    let newList = [];

    if (e.target.value === "") {
      newList = this.props.games;
    } else {
      currentList = this.props.games;

      newList = currentList.filter(game => {
        const title = game.title.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return title.includes(filter);
      });
    }
    console.log("newList", newList);
    this.setState({ filtered: newList });
  };

  handleSort = e => {
    const { filtered } = this.state;
    const sort = e.target.value;
    console.log(sort);
    if (sort === "title") {
      filtered.sort((a, b) => {
        return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
      });
    } else if (sort === "avg_rating") {
      filtered.sort((a, b) => {
        return b[sort] - a[sort];
      });
    }
    this.setState({ sort });
  };

  renderGames() {
    const { filtered } = this.state;
    return filtered.map(game => <GameListItem key={game.id} game={game} />);
  }

  render() {
    const { error } = this.context;
    return (
      <Section list className="GameList">
        <div className="searchBar">
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            id="search"
            name="search"
            onChange={this.handleSearch}
          />
          <label htmlFor="sort">Sort: </label>
          <select id="sort" name="sort" onChange={this.handleSort}>
            <option value="title">Title</option>
            <option value="avg_rating">Rating</option>
          </select>
        </div>
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderGames()
        )}
      </Section>
    );
  }
}
