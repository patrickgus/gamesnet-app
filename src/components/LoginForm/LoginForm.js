import React, { Component } from "react";
import { Button, Input } from "../Utils/Utils";

export default class LoginForm extends Component {
  render() {
    return (
      <form className="LoginForm">
        <div className="user_name">
          <label htmlFor="LoginForm__username">Username</label>
          <Input
            type="text"
            name="username"
            id="LoginForm__username"
            value="test"
          />
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password">Password</label>
          <Input
            name="password"
            type="password"
            id="LoginForm__password"
            value="test123"
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    );
  }
}
