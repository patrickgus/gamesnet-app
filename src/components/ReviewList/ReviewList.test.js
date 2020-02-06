import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ReviewList from "./ReviewList";

describe("ReviewList component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ReviewList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the list as expected", () => {
    const tree = renderer.create(<ReviewList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
