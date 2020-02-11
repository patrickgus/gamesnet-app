import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AuthApiService from "../../services/auth-api-service";
import { Button, Input } from "../Utils/Utils";
import "./LoginForm.css";

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = ev.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        username.value = "";
        password.value = "";
        this.props.onLoginSuccess();
        this.props.history.push("/games");
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div className="LoginForm__header">
          <h2>Login Here</h2>
        </div>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_name">
          <label htmlFor="LoginForm__username">Username</label>
          <Input type="text" name="username" id="LoginForm__username" />
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password">Password</label>
          <Input name="password" type="password" id="LoginForm__password" />
        </div>
        <Button type="submit">Login</Button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
