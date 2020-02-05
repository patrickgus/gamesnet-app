import React, { Component } from "react";
import { Required, Textarea, Button } from "../../components/Utils/Utils";
import "./AddReviewForm.css";

export default class AddReviewForm extends Component {
  render() {
    return (
      <form className="AddReviewForm" onSubmit={this.handleSumbit}>
        <div className="game_rating">
          <label htmlFor="AddReviewForm__game_rating">
            Rating <Required />
          </label>
          <select name="game_rating" required id="AddReviewForm__game_rating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="game_review">
          <label htmlFor="AddReviewForm__game_review">
            Game review <Required />
          </label>
          <Textarea
            required
            aria-label="Write your review..."
            name="game_review"
            id="AddReviewForm__game_review"
            rows="15"
            placeholder="Write your review..."
          />
        </div>
        <Button type="submit">Add Review</Button>
        <Button>Cancel</Button>
      </form>
    );
  }
}
