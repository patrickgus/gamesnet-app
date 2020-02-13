import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "./RegistrationPage.css";

export default class RegistrationPage extends Component {
  render() {
    return (
      <Section className="RegistrationPage">
        <h2>Register</h2>
        <RegistrationForm />
      </Section>
    );
  }
}
