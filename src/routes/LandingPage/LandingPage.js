import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LandingPage.css";

export default class LandingPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/games";
    history.push(destination);
  };

  render() {
    return (
      <div className="LandingPage">
        <section>
          <h3>Login Here</h3>
          <LoginForm />
        </section>
        <section>
          <h3>See game reviews from your own peers</h3>
          <img
            href="placeholder.jpg"
            alt="placehoder for screenshot of game list page"
          />
          <p>
            Video games can get quite expensive and some take a significant
            investment of time to play. Knowing which game to buy can be a
            challenge because no one likes wasting money on a game they play
            once and then never touch again. GamesNet is a place where the
            common player can learn about a game from other players like
            themselves.
          </p>
        </section>
        <section>
          <h3>Add any game to get reviewed</h3>
          <img
            href="placeholder.jpg"
            alt="placehoder for screenshot of game review page"
          />
          <p>
            From video games to board games, any user will be able to add any
            kind of game so that it can be rated and reviewed by other users.
            This is not a official review of a game but rather the opinions of
            people who have played the game and want to share their experience
            with others.
          </p>
        </section>
      </div>
    );
  }
}
