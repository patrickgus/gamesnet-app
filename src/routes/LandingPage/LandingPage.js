import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Section } from "../../components/Utils/Utils";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <Section className="LandingPage">
        <div className="login">
          <h3>Log in Here</h3>
          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
          <div className="demo-user">
            <ul>
              <strong>For Demo:</strong>
              <li>Username: testuser</li>
              <li>Password: Test123!</li>
            </ul>
          </div>
        </div>
        <div className="description">
          <h3>See game reviews from your own peers</h3>
          <p>
            Video games can get quite expensive and some take a significant
            investment of time to play. Knowing which game to buy can be a
            challenge because no one likes wasting money on a game they play
            once and then never touch again. GamesNet is a place where the
            common player can learn about a game from other players like
            themselves.
          </p>
        </div>
        <div className="description">
          <h3>Add any game to get reviewed</h3>
          <p>
            From video games to board games, any user will be able to add any
            kind of game so that it can be rated and reviewed by other users.
            This is not a official review of a game but rather the opinions of
            people who have played the game and want to share their experience
            with others.
          </p>
        </div>
      </Section>
    );
  }
}
