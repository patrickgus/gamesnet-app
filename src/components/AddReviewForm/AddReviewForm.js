import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import GameContext from "../../contexts/GameContext";
import GameApiService from "../../services/game-api-service";
import {
  Input,
  Required,
  Textarea,
  Button
} from "../../components/Utils/Utils";
import "./AddReviewForm.css";

class AddReviewForm extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = GameContext;

  handleSumbit = e => {
    e.preventDefault();
    const { gameId } = this.props.match.params;
    const { title, rating, review } = e.target;

    GameApiService.postReview(
      gameId,
      title.value,
      Number(rating.value),
      review.value
    )
      .then(this.context.addGame)
      .then(() => {
        title.value = "";
        rating.value = "";
        review.value = "";
        this.props.history.push(`/review/${gameId}`);
      })
      .catch(this.context.setError);
  };

  handleCancel = e => {
    e.preventDefault();
    const { gameId } = this.props.match.params;
    this.props.history.push(`/review/${gameId}`);
  };

  render() {
    return (
      <form className="AddReviewForm" onSubmit={this.handleSumbit}>
        <div className="AddReviewForm__title">
          <label htmlFor="review-title">
            Review title <Required />
          </label>
          <Input name="title" type="text" required id="review-title" />
        </div>
        <div className="AddReviewForm__rating">
          <label htmlFor="game-rating">
            Rating <Required />
          </label>
          <select name="rating" required id="game-rating">
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
        <div className="AddReviewForm__game-review">
          <label htmlFor="game-review">
            Game review <Required />
          </label>
          <Textarea
            required
            aria-label="Write your review..."
            name="review"
            id="game-review"
            rows="15"
            placeholder="Write your review..."
          />
        </div>
        <div className="AddReviewForm__buttons">
          <Button type="submit">Add Review</Button>
          <Button onClick={this.handleCancel}>Cancel</Button>
        </div>
      </form>
    );
  }
}

export default withRouter(AddReviewForm);
