import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import LandingPage from "../../routes/LandingPage/LandingPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import GameListPage from "../../routes/GameListPage/GameListPage";
import GameReviewPage from "../../routes/GameReviewPage/GameReviewPage";
import AddGamePage from "../../routes/AddGamePage/AddGamePage";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <Route path={"/register"} component={RegistrationPage} />
            <Route path={"/games"} component={GameListPage} />
            <Route path={"/review/:gameId"} component={GameReviewPage} />
            <Route path={"/addgame"} component={AddGamePage} />
          </Switch>
        </main>
      </div>
    );
  }
}
