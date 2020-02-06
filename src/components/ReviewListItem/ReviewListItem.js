import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import "./ReviewListItem.css";

export default function ReviewListItem(props) {
  const review = props.review;

  return (
    <Section className="ReviewListItem">
      <h4>"{review.title}"</h4>
      <p>Rating: {review.rating}</p>
      <div className="reviewInfo">
        <p>{review.description}</p>
      </div>
    </Section>
  );
}
