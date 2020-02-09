import React, { Component } from "react";
// import GameListContext from "../../contexts/GameListContext";
import "./SearchForm.css";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredList: [],
      searchTerm: "",
      sort: ""
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
    this.context.filterGames(gameList, sort, this.state.searchTerm);
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
          <option value="rating">Rating</option>
        </select>
        <button type="submit">Go</button>
      </form>
    );
  }
}
