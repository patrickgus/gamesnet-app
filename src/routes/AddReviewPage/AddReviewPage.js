import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import AddReviewForm from "../../components/AddReviewForm/AddReviewForm";

export default class AddReviewPage extends Component {
  render() {
    return (
      <Section className="AddReview">
        <header className="AddReview__header">
          <h2>Add a Review</h2>
        </header>
        <AddReviewForm />
      </Section>
    );
  }
}
