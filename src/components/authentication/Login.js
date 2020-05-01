import React, { Component } from "react";
import Logo from "components/common/Logo";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

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
      <div>
        <div className="logo-medium">
          <Logo isAnimated={true} />
        </div>
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
    );
  }
}
