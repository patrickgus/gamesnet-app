import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ReviewListItem from "./ReviewListItem";
import review from "../../stores/review-store";

describe("ReviewListItem component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ReviewListItem review={review} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the item as expected", () => {
    const tree = renderer.create(<ReviewListItem review={review} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
