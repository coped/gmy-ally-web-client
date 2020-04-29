import React, { Component } from 'react';
import Logo from 'components/common/Logo';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignup: false
    };

    this.toggleSignupForm = this.toggleSignupForm.bind(this);
  }

  toggleSignupForm() {
    this.setState({ showSignup: !this.state.showSignup});
  }

  render() {
    const {showSignup} = this.state;
    return (
      <div className="container">
        <div className="logo-medium">
          <Logo
            isAnimated={true}
          />
        </div>
        <div className="container box">
          {(showSignup) ? 
          <SignupForm 
            toggleSignupCallback={this.toggleSignupForm}
          /> : 
          <LoginForm 
            toggleSignupCallback={this.toggleSignupForm}
          />}
        </div>
      </div>
    );
  }
}
