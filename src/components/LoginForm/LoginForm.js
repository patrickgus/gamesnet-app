import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Input } from "../Utils/Utils";

export default class LoginForm extends Component {
  state = {
    toGameList: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(() => ({
      toGameList: true
    }));
  };

  render() {
    if (this.state.toGameList === true) {
      return <Redirect to="/games" />;
    }

    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <div className="user_name">
          <label htmlFor="LoginForm__username">Username</label>
          <Input
            type="text"
            name="username"
            id="LoginForm__username"
          />
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password">Password</label>
          <Input
            name="password"
            type="password"
            id="LoginForm__password"
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    );
  }
}
