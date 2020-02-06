import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Input, Required } from "../Utils/Utils";

export default class RegistrationForm extends Component {
  state = {
    toGameList: false,
    toLandingPage: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(() => ({
      toGameList: true
    }));
  };

  handleCancel = e => {
    e.preventDefault();
    this.setState(() => ({
      toLandingPage: true
    }));
  };

  render() {
    if (this.state.toGameList === true) {
      return <Redirect to="/games" />;
    } else if (this.state.toLandingPage === true) {
      return <Redirect to="/" />;
    }

    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div className="full_name">
          <label htmlFor="RegistrationForm__full_name">
            Full name <Required />
          </label>
          <Input
            name="full_name"
            type="text"
            required
            id="RegistrationForm__full_name"
          />
        </div>
        <div className="user_name">
          <label htmlFor="RegistrationForm__user_name">
            Username <Required />
          </label>
          <Input
            name="user_name"
            type="text"
            required
            id="RegistrationForm__user_name"
          />
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">
            Password <Required />
          </label>
          <Input
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          />
        </div>
        <Button type="submit">Register</Button>
        <Button onClick={this.handleCancel}>Cancel</Button>
      </form>
    );
  }
}
