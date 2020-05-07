import React, { Component } from "react";
import { Logo } from "components/common/";
import { LoginForm, SignupForm } from "components/authentication";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignup: false,
    };

    this.toggleSignupForm = this.toggleSignupForm.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  showForm() {
    if (this.state.showSignup) {
      return (
        <SignupForm
          toggleSignupForm={this.toggleSignupForm}
          authenticate={this.props.authenticate}
        />
      );
    } else {
      return (
        <LoginForm
          toggleSignupForm={this.toggleSignupForm}
          authenticate={this.props.authenticate}
        />
      );
    }
  }

  toggleSignupForm() {
    this.setState({ showSignup: !this.state.showSignup });
  }

  render() {
    return (
      <div className="center-column">
        <div className="logo-login">
          <Logo isAnimated={true} />
        </div>
        <div className="column is-5">
          <div className="box">{this.showForm()}</div>
        </div>
      </div>
    );
  }
}
