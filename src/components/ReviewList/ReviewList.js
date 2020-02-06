import React, { Component } from "react";
import ReviewListItem from "../ReviewListItem/ReviewListItem";
import { Section } from "../../components/Utils/Utils";
import reviewList from "../../stores/review-store";

export default class ReviewList extends Component {
  renderReviews() {
    return reviewList.map(review => (
      <ReviewListItem key={review.id} review={review} />
    ));
  }

  render() {
    return (
      <Section list className="ReviewList">
        {this.renderReviews()}
      </Section>
    );
  }
}
