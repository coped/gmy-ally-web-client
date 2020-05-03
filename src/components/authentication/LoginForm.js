import React, { Component } from "react";
import { TextInputField } from "components/common";
import { Button } from "components/common";
import { AsyncRequest } from "lib";
import { endpoints } from "lib";
import { Messages } from "lib";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      emailValue: "",
      passwordValue: "",
      apiMessages: "",
    };

    this.onTextFieldChange = this.onTextFieldChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  onTextFieldChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  loginUser(credentials) {
    this.setState({ isLoading: true });
    AsyncRequest.post(endpoints.authentication.login, credentials)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          this.props.isAuthenticated(data);
        } else {
          this.setState({ apiMessages: data.messages });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ apiMessages: [Messages.connectionError] });
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { toggleSignupForm } = this.props;
    const { emailValue, passwordValue, apiMessages } = this.state;
    const isLoading = this.state.isLoading ? "is-loading" : "";
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.loginUser({
              login: {
                email: emailValue,
                password: passwordValue,
              },
            });
            e.preventDefault();
          }}
        >
          <div className="has-text-centered">
            {apiMessages &&
              apiMessages.map((message, index) => (
                <div className={`notification is-${message.type} is-medium`}>
                  {message.message}
                </div>
              ))}
          </div>
          <TextInputField
            label="Email:"
            name="emailValue"
            type="email"
            placeholder="your@email.com"
            value={emailValue}
            onChange={this.onTextFieldChange}
          />
          <TextInputField
            label="Password:"
            name="passwordValue"
            type="password"
            value={passwordValue}
            onChange={this.onTextFieldChange}
          />
          <div className="field">
            <div className="control">
              <Button
                textContent="Log in"
                classModifiers={"is-link " + isLoading}
              />
            </div>
          </div>
          <div>
            <p className="is-size-6">
              Don't have an account? <a onClick={toggleSignupForm}>Sign up.</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
