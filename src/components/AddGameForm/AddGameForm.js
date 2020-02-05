import React, { Component } from "react";
import {
  Input,
  Required,
  Textarea,
  Button
} from "../../components/Utils/Utils";

export default class AddGameForm extends Component {
  render() {
    return (
      <form className="AddGameForm" onSubmit={this.handleSumbit}>
        <div className="game_title">
          <label htmlFor="AddGameForm__game_title">
            Game title <Required />
          </label>
          <Input
            name="game_title"
            type="text"
            required
            id="AddGameForm__game_title"
          />
        </div>
        <div className="game_cover">
          <label htmlFor="AddGameForm__game_cover">
            Game cover image url
          </label>
          <Input
            name="game_cover"
            type="text"
            id="AddGameForm__game_cover"
          />
        </div>
        <div className="game_description">
          <label htmlFor="AddGameForm__game_description">
            Game description <Required />
          </label>
          <Textarea
            required
            aria-label="Write a brief description..."
            name="game_description"
            id="AddGameForm__game_description"
            rows="15"
            placeholder="Write a brief description..."
          />
        </div>
        <div className="rated">
          <label htmlFor="AddGameForm__rated">
            Rated <Required />
          </label>
          <Input
            name="rated"
            type="text"
            required
            id="AddGameForm__rated"
            placeholder="E, T, M, etc."
          />
        </div>
        <div className="platforms">
          <label htmlFor="AddGameForm__platforms">
            Platforms <Required />
          </label>
          <Input
            name="platforms"
            type="text"
            required
            id="AddGameForm__platforms"
            placeholder="Playstation, Xbox, PC, etc."
          />
        </div>
        <Button type="submit">Add Game</Button>
        <Button>Cancel</Button>
      </form>
    );
  }
}
