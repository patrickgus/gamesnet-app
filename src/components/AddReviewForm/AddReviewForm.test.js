import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import AddReviewForm from "./AddReviewForm";

describe("AddReviewForm component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddReviewForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the form as expected", () => {
    const tree = renderer.create(<AddReviewForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
