import React, { Component } from "react";
import { Notification } from "components/common";
import { FormInput, FormButton } from "components/form";
import { AsyncRequest, endpoints, Messages } from "lib";
import "assets/Signup.scss";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      form: {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      },
      apiMessages: "",
    };

    this.onChange = this.onChange.bind(this);
    this.signupUser = this.signupUser.bind(this);
  }

  signupUser(credentials) {
    this.setState({ isLoading: true });
    AsyncRequest.post(endpoints.users.create, credentials)
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
        this.setState({ clientMessages: [Messages.connectionError] });
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  onChange(event) {
    const target = event.target;
    this.setState({
      form: {
        ...this.state.form,
        [target.name]: target.value,
      },
    });
  }
  render() {
    const { apiMessages, form } = this.state;
    return (
      <div id="Signup">
        <h1 className="signup-title">Sign up</h1>
        <form onSubmit={this.onFormSubmit} className="column is-6 box">
          {apiMessages &&
            apiMessages.map((message, index) => (
              <Notification key={index} type={message.type}>
                <p>{message.message}</p>
              </Notification>
            ))}
          <FormInput
            id="name-input"
            label="Name:"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={this.onChange}
          />
          <FormInput
            id="email-input"
            label="Email:"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={this.onChange}
          />
          <FormInput
            id="password-input"
            label="Password:"
            name="password"
            type="password"
            value={form.password}
            onChange={this.onChange}
          />
          <FormInput
            id="password-confirmation-input"
            label="Password confirmation:"
            name="passwordConfirmation"
            type="password"
            value={form.passwordConfirmation}
            onChange={this.onChange}
          />
          <FormButton classList={["is-link"]}>Sign up</FormButton>
          <p className="is-size-6">
            Already have an account? <a href="/login">Log in</a>.
          </p>
        </form>
      </div>
    );
  }
}
