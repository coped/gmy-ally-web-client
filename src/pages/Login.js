import React, { Component } from "react";
import { Logo } from "components/common";
import { Input, Button } from "components/form";
import { AsyncRequest, endpoints, Messages } from "lib";
import { Notification } from "components/common";
import { Route, Link } from "react-router-dom";
import "assets/Login.scss";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      apiMessages: "",
      form: {
        email: "",
        password: "",
      },
    };

    this.onChange = this.onChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onChange(event) {
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
          // Authenticate user
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
    const { form } = this.state;
    this.loginUser({
      login: {
        email: form.email,
        password: form.password,
      },
    });
  }

  render() {
    const { form, apiMessages, isLoading } = this.state;
    return (
      <div id="Login">
        <h1 className="log-in">Log in</h1>
        <form onSubmit={this.onFormSubmit} className="form box">
          {apiMessages &&
            apiMessages.map((message, index) => (
              <Notification key={index} type={message.type}>
                <p>{message.message}</p>
              </Notification>
            ))}
          <Input
            label="Email:"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={this.onChange}
          />
          <Input
            label="Password:"
            name="password"
            type="password"
            value={form.password}
            onChange={this.onChange}
          />
          <Button classList={["is-link"]} loading={isLoading}>
            Log in
          </Button>
          <div>
            <p>
              Don't have an account? <a href="/signup">Sign up</a>.
            </p>
          </div>
        </form>
      </div>
    );
  }
}
