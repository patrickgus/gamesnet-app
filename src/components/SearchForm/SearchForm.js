import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import GameListContext from "../../contexts/GameListContext";
import "./SearchForm.css";

class SearchForm extends Component {
  state = {
    searchTerm: "",
    sort: "title"
  };

  static contextType = GameListContext;

  // setSearch = val => {
  //   this.setState({ searchTerm: val });
  // };

  // handleSearch = searchTerm => {
  //   this.setSearch(searchTerm);
  // };

  // handleSearch = e => {
  //   this.setState(state => {
  //     return {searchTerm: state.searchTerm}
  //   });
  // };

  // handleSearch = e => {
  //   this.setState({
  //     searchTerm: e.target.value
  //   });
  // };

  handleSearch = e => {
    this.props.filterList(e.target.value);
  };

  // handleSort = e => {
  //   this.setState({
  //     sort: e.target.value
  //   });
  // };

  handleSort = e => {
    this.props.sortList(e.target.value);
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { gameList } = this.context;
  //   const { sort, searchTerm } = this.state;

  //   let filteredList = [];

  //   if (searchTerm !== "") {
  //     filteredList = gameList.filter(game => {
  //       const title = game.title.toLowerCase();
  //       const filter = searchTerm.toLowerCase();
  //       return title.includes(filter);
  //     });
  //   } else {
  //     filteredList = gameList;
  //   }

  //   if (sort === "title") {
  //     filteredList.sort((a, b) => {
  //       return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
  //     });
  //   } else if (sort === "avg_rating") {
  //     filteredList.sort((a, b) => {
  //       return b[sort] - a[sort];
  //     });
  //   }
  //   this.context.setGameList(filteredList);

  //   this.props.history.push("/games");
  // };

  render() {
    const { sort, searchTerm } = this.state;
    return (
      <form className="searchBar">
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          name="search"
          value={searchTerm}
          onChange={this.handleSearch}
        />

        <label htmlFor="sort">Sort: </label>
        <select
          id="sort"
          name="sort"
          value={sort}
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

export default withRouter(SearchForm);
