import React, { Component } from 'react';
import TextInputField from 'components/common/TextInputField';
import Button from 'components/common/Button';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  render() {
    return (
      <div className="container">
        <TextInputField 
          label="Email:"
          type="email"
          placeholder="your@email.com"
        />
        <TextInputField
          label="Password:"
          type="password"
        />
        <div className="field">
          <div className="control">
            <Button 
              textContent="Log in"
              classModifiers="is-link"
              onClick={() => console.log('clicked')}
            />
          </div>
        </div>
        <div>
          <p className="is-size-6">Don't have an account? <a onClick={this.props.toggleSignupCallback}> 
            Sign up.</a>
          </p>
        </div>
      </div>
    );
  }
}
