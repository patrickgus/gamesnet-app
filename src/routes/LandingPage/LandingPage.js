import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/Utils/Utils";
import TokenService from "../../services/token-service";
import LoginForm from "../../components/LoginForm/LoginForm";
import LandingPageImg from "../../images/GamesNet-landingPage-img.jpg";
import GameListImg from "../../images/GamesNet-gameList.png";
import AddGameImg from "../../images/GamesNet-addGame.png";
import "./LandingPage.css";

export default class LandingPage extends Component {
  renderLoggedIn = () => {
    return (
      <div className="logged-in">
        <h3>You are already logged in</h3>
        <Link to="/games">To Games</Link>
      </div>
    );
  };

  renderNotLoggedIn = () => {
    return <LoginForm />;
  };

  render() {
    return (
      <Section className="LandingPage">
        <div className="LandingPage__login">
          {TokenService.hasAuthToken()
            ? this.renderLoggedIn()
            : this.renderNotLoggedIn()}
          <div className="LandingPage__demo-user">
            <ul>
              <strong>For Demo:</strong>
              <li>Username: testuser</li>
              <li>Password: Test123!</li>
            </ul>
          </div>
          <div className="LandingPage__image">
            <img
              src={LandingPageImg}
              alt="Retro game console with the words 'Game Over' on the screen"
            />
          </div>
        </div>
        <div className="LandingPage__descriptions-container">
          <h2 className="LandingPage__descriptions-header">
            Welcome to GamesNet
          </h2>
          <div className="LandingPage__description">
            <div className="LandingPage__description-content">
              <h3>See game reviews from your peers</h3>
              <p>
                Video games can get quite expensive and some take a significant
                investment of time to play. Knowing which game to buy can be a
                challenge because no one likes wasting money on a game they play
                once and then never touch again. GamesNet is a place where the
                common player can learn about a game from other players like
                themselves.
              </p>
            </div>
            <div className="LandingPage__description-image">
              <img
                src={GameListImg}
                alt="screenshot of GamesNet games list page"
              />
            </div>
          </div>
          <div className="LandingPage__description">
            <div className="LandingPage__description-content-2">
              <h3>Add any game to get reviewed</h3>
              <p>
                From video games to board games, any user will be able to add
                any kind of game so that it can be rated and reviewed by other
                users. This is not a official review of a game but rather the
                opinions of people who have played the game and want to share
                their experience with others.
              </p>
            </div>
            <div className="LandingPage__description-image">
              <img
                src={AddGameImg}
                alt="screenshot of GamesNet add-game page"
              />
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
