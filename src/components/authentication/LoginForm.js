import React, { Component } from "react";
import TextInputField from "components/common/TextInputField";
import Button from "components/common/Button";
import Tag from "components/common/Tag";
import AsyncRequest from "lib/asyncRequest";
import { endpoints } from "lib/endpoints";
import Messages from "lib/messages";

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
    AsyncRequest.post(endpoints.authentication.login, credentials)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          this.props.isAuthenticated(data.payload.jwt);
        } else {
          this.setState({ apiMessages: data.messages });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ apiMessages: [Messages.generalError] });
      });
  }

  render() {
    const { toggleSignupForm } = this.props;
    const { emailValue, passwordValue, apiMessages } = this.state;
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
                <Tag
                  key={index}
                  type={message.type}
                  message={message.message}
                />
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
              <Button textContent="Log in" classModifiers="is-link" />
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
