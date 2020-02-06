import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SearchHeader.css";

export default class SearchHeader extends Component {
  render() {
    return (
      <header className="SearchHeader">
        <form className="searchBarNav">
          <label htmlFor="search">Search: </label>
          <input type="text" id="search" name="search" />

          <label htmlFor="sort">Sort: </label>
          <select id="sort" name="sort">
            <option value="title">Title</option>
            <option value="rating">Rating</option>
          </select>
          <button type="submit">Go</button>
        </form>
        <Link to={"/addgame"}>Add a Game</Link>
      </header>
    );
  }
}
