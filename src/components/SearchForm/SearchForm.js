import React, { Component } from "react";
import "./SearchForm.css";

export default class SearchForm extends Component {
  render() {
    return (
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
    );
  }
}
