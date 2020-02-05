import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import AddGameForm from "../../components/AddGameForm/AddGameForm";

export default class AddGamePage extends Component {
  render() {
    return (
      <Section className="AddGame">
        <header className="AddGame__header">
          <h2>Add a Game To Be Reviewed</h2>
        </header>
        <AddGameForm />
      </Section>
    );
  }
}
