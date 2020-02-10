import React, { Component } from "react";
// import GameListContext from "../../contexts/GameListContext";
import "./SearchForm.css";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      sort: "title"
    };
  }

  // static contextType = GameListContext;

  handleSearch = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSort = e => {
    this.setState({
      sort: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const gameList = this.props.games;
    const { sort } = this.state;
    let filteredList = [];
    console.log(sort);

    if (this.state.searchTerm !== "") {
      filteredList = gameList.filter(game => {
        const title = game.title.toLowerCase();
        const filter = this.state.searchTerm.toLowerCase();
        return title.includes(filter);
      });
    } else {
      filteredList = gameList;
    }

    if (sort === "title") {
      filteredList.sort((a, b) => {
        return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
      });
    } else if (sort === "avg_rating") {
      filteredList.sort((a, b) => {
        return b[sort] - a[sort];
      });
    }
    console.log(filteredList);
    return this.context.filterGames;
  };

  render() {
    return (
      <form className="searchBarNav" onSubmit={this.handleSubmit}>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          name="search"
          value={this.state.searchTerm}
          onChange={this.handleSearch}
        />

        <label htmlFor="sort">Sort: </label>
        <select
          id="sort"
          name="sort"
          value={this.state.sort}
          onChange={this.handleSort}
        >
          <option value="title">Title</option>
          <option value="avg_rating">Rating</option>
        </select>
        <button type="submit">Go</button>
      </form>
    );
  }
}
