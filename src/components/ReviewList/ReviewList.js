import React, { Component } from "react";
import ReviewListItem from "../ReviewListItem/ReviewListItem";
import { Section } from "../../components/Utils/Utils";
import ReviewListContext from "../../contexts/ReviewListContext";

export default class ReviewList extends Component {
  static contextType = ReviewListContext;

  renderReviews() {
    const { reviewList = [] } = this.context;
    return reviewList.map(review => (
      <ReviewListItem key={review.id} review={review} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <Section list className="ReviewList">
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderReviews()
        )}
      </Section>
    );
  }
}
