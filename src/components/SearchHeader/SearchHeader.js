import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";

export default class SearchHeader extends Component {
  render() {
    return (
      <header className="SearchHeader">
        <SearchForm />
        <Link to={"/addgame"}>Add a Game</Link>
      </header>
    );
  }
}
