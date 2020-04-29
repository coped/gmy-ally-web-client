import React, { Component } from 'react';
import TextInputField from 'components/common/TextInputField';
import Button from 'components/common/Button';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    return (
      <div className="container">
        <TextInputField 
          label="Name:"
          type="text"
          placeholder="Your Name"
        />
        <TextInputField
          label="Email:"
          type="email"
          placeholder="your@email.com"
        />
        <TextInputField
          label="Password:"
          type="password"
        />
        <TextInputField
          label="Password confirmation"
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
          <p className="is-size-6">Already have an account? <a onClick={this.props.toggleSignupCallback}> 
            Log in.</a>
          </p>
        </div>
      </div>
    );
  }
}
