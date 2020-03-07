import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AuthApiService from "../../services/auth-api-service";
import { Button, Input, Required } from "../Utils/Utils";
import "./RegistrationForm.css";

class RegistrationForm extends Component {
  state = { error: null };

  handleSubmit = ev => {
    ev.preventDefault();
    const { fullname, username, password } = ev.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      fullname: fullname.value
    }).then(user => {
      AuthApiService.postLogin({
        username: user.username,
        password: password.value
      })
        .then(res => {
          fullname.value = "";
          username.value = "";
          password.value = "";
          this.props.history.push("/games");
        })
        .catch(res => {
          this.setState({ error: res.error });
        });
    });
  };

  handleCancel = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  render() {
    const { error } = this.state;
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="full_name">
          <label htmlFor="RegistrationForm__full_name">
            Full name <Required />
          </label>
          <Input
            name="fullname"
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
            name="username"
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
        <div className="RegistrationForm__buttons">
          <Button type="submit">Register</Button>
          <Button onClick={this.handleCancel}>Cancel</Button>
        </div>
      </form>
    );
  }
}

export default withRouter(RegistrationForm);
