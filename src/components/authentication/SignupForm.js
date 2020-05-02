import React, { Component } from "react";
import TextInputField from "components/common/TextInputField";
import Button from "components/common/Button";
import AsyncRequest from "lib/asyncRequest";
import { endpoints } from "lib/endpoints";
import Messages from "lib/messages";

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      nameValue: "",
      emailValue: "",
      passwordValue: "",
      passwordConfirmationValue: "",
      apiMessages: "",
    };

    this.onTextFieldChange = this.onTextFieldChange.bind(this);
    this.signupUser = this.signupUser.bind(this);
  }

  signupUser(credentials) {
    this.setState({ isLoading: true });
    AsyncRequest.post(endpoints.users.create, credentials)
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
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  onTextFieldChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { toggleSignupForm } = this.props;
    const {
      nameValue,
      emailValue,
      passwordValue,
      passwordConfirmationValue,
      apiMessages,
    } = this.state;
    const isLoading = this.state.isLoading ? "is-loading" : "";
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.signupUser({
              user: {
                name: nameValue,
                email: emailValue,
                password: passwordValue,
                password_confirmation: passwordConfirmationValue,
              },
            });
            e.preventDefault();
          }}
        >
          <div>
            {apiMessages &&
              apiMessages.map((message, index) => (
                <div className={`notification is-${message.type} is-medium`}>
                  <p>The following errors occurred:</p>
                  <ul>
                    {message.message.split("\n").map((error) => (
                      <li>• {error}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
          <TextInputField
            label="Name:"
            name="nameValue"
            type="text"
            placeholder="Your Name"
            value={nameValue}
            onChange={this.onTextFieldChange}
          />
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
          <TextInputField
            label="Password confirmation:"
            name="passwordConfirmationValue"
            type="password"
            value={passwordConfirmationValue}
            onChange={this.onTextFieldChange}
          />
          <div className="field">
            <div className="control">
              <Button
                textContent="Sign up"
                classModifiers={"is-link " + isLoading}
              />
            </div>
          </div>
          <div>
            <p className="is-size-6">
              Already have an account? <a onClick={toggleSignupForm}>Log in.</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}