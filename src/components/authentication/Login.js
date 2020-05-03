import React, { Component } from "react";
import { Logo } from "components/common/";
import { LoginForm } from "components/authentication";
import { SignupForm } from "components/authentication";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignup: false,
    };

    this.toggleSignupForm = this.toggleSignupForm.bind(this);
  }

  toggleSignupForm() {
    this.setState({ showSignup: !this.state.showSignup });
  }

  render() {
    const { isAuthenticated } = this.props;
    const { showSignup } = this.state;
    return (
      <div className="center-column">
        <div className="logo-login">
          <Logo isAnimated={true} />
        </div>
        <div className="column is-5">
          <div className="box">
            {showSignup ? (
              <SignupForm
                toggleSignupForm={this.toggleSignupForm}
                isAuthenticated={isAuthenticated}
              />
            ) : (
              <LoginForm
                toggleSignupForm={this.toggleSignupForm}
                isAuthenticated={isAuthenticated}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
