import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SearchForm from "./SearchForm";

describe("SearchForm component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the form as expected", () => {
    const tree = renderer.create(<SearchForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
