import React, { Component } from "react";
import { TextInputField, Button } from "components/form";
import { AsyncRequest, endpoints, Messages } from "lib";
import { Notification } from "components/common";

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
    this.onFormSubmit = this.onFormSubmit.bind(this);
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
          this.props.authenticate(data);
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

  onFormSubmit(e) {
    e.preventDefault();
    this.loginUser({
      login: {
        email: this.state.emailValue,
        password: this.state.passwordValue,
      },
    });
  }

  render() {
    const { toggleSignupForm } = this.props;
    const { emailValue, passwordValue, apiMessages } = this.state;
    const isLoading = this.state.isLoading ? "is-loading" : "";
    const emailTextInputField = {
      label: "Email:",
      name: "emailValue",
      type: "email",
      placeholder: "your@email.com",
      value: emailValue,
      onChange: this.onTextFieldChange,
    };
    const passwordTextInputField = {
      label: "Password:",
      name: "passwordValue",
      type: "password",
      value: passwordValue,
      onChange: this.onTextFieldChange,
    };
    const buttonProps = {
      classModifiers: "is-link",
      isLoading: isLoading,
    };
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="has-text-centered">
            {apiMessages &&
              apiMessages.map((message, index) => (
                <Notification key={index} type={message.type}>
                  <p>{message.message}</p>
                </Notification>
              ))}
          </div>
          <TextInputField {...emailTextInputField} />
          <TextInputField {...passwordTextInputField} />
          <Button {...buttonProps}>Log in</Button>
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
