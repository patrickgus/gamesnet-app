import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import LandingPage from "../../routes/LandingPage/LandingPage";

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
          </Switch>
        </main>
      </div>
    );
  }
}
