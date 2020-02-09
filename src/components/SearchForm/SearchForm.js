import React, { Component } from "react";
import "./SearchForm.css";

export default class SearchForm extends Component {
  render() {
    return (
      <form className="searchBarNav">
        <label htmlFor="search">Search: </label>
        <input type="text" id="search" name="search" onChange={this.handleSearch} />

        <label htmlFor="sort">Sort: </label>
        <select id="sort" name="sort" onChange={this.handleSort}>
          <option value="title">Title</option>
          <option value="rating">Rating</option>
        </select>
        <button type="submit">Go</button>
      </form>
    );
  }
}
