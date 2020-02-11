import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import GameListContext from "../../contexts/GameContext";
import GameApiService from "../../services/game-api-service";
import {
  Input,
  Required,
  Textarea,
  Button
} from "../../components/Utils/Utils";
import "./AddGameForm.css";

class AddGameForm extends Component {
  static contextType = GameListContext;

  handleSumbit = e => {
    e.preventDefault();
    const { title, description, rated, platforms } = e.target;

    GameApiService.postGame(
      title.value,
      description.value,
      rated.value,
      platforms.value
    )
      .then(this.context.addGame)
      .then(() => {
        title.value = "";
        description.value = "";
        rated.value = "";
        platforms.value = "";
        this.props.history.push("/games");
      })
      .catch(this.context.setError);
  };

  handleCancel = e => {
    e.preventDefault();
    this.props.history.push("/games");
  };

  render() {
    return (
      <form className="AddGameForm" onSubmit={this.handleSumbit}>
        <div className="AddGameForm__title">
          <label htmlFor="title">
            Game title <Required />
          </label>
          <Input name="title" type="text" required id="title" />
        </div>
        <div className="AddGameForm__description">
          <label htmlFor="description">
            Game description <Required />
          </label>
          <Textarea
            required
            aria-label="Write a brief description..."
            name="description"
            id="description"
            rows="15"
            placeholder="Write a brief description..."
          />
        </div>
        <div className="AddGameForm__rated">
          <label htmlFor="rated">
            Rated <Required />
          </label>
          <Input
            name="rated"
            type="text"
            required
            id="rated"
            placeholder="E, T, M, etc."
          />
        </div>
        <div className="AddGameForm__platforms">
          <label htmlFor="platforms">
            Platforms <Required />
          </label>
          <Input
            name="platforms"
            type="text"
            required
            id="platforms"
            placeholder="Playstation, Xbox, PC, etc."
          />
        </div>
        <div className="AddGameForm__buttons">
          <Button type="submit">Add Game</Button>
          <Button onClick={this.handleCancel}>Cancel</Button>
        </div>
      </form>
    );
  }
}

export default withRouter(AddGameForm);
