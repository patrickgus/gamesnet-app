import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import AddGameForm from "./AddGameForm";

describe("AddGameForm component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddGameForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the form as expected", () => {
    const tree = renderer.create(<AddGameForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
