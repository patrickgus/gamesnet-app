import React, { Component } from "react";
import { Section } from "../Utils/Utils";
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

  componentDidMount() {
    this.setState({
      filtered: this.props.games
    });
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
    this.setState({ filtered: newList });
  };

  handleSort = e => {
    const { filtered } = this.state;
    const sort = e.target.value;

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
    const { filtered } = this.state;
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
        {filtered.length ? (
          this.renderGames()
        ) : (
          <p className="noResults">No matches found. Please try another search.</p>
        )}
      </Section>
    );
  }
}
