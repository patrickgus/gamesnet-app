import React, { Component } from "react";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm">
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_name">
          <label htmlFor="LoginForm__username">Username</label>
          <input
            type="text"
            name="username"
            id="LoginForm__username"
            value="test"
          />
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password">Password</label>
          <input
            name="password"
            type="password"
            id="LoginForm__password"
            value="test123"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}
