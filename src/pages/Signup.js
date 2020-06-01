import React, { Component } from "react";
import { Notification, Logo } from "components/common";
import { Input, Button } from "components/form";
import { AsyncRequest, endpoints, Messages } from "lib";

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

    this.onTextFieldChange = this.onTextFieldChange.bind(this);
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

  onTextFieldChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }
  render() {
    const { apiMessages, form } = this.state;
    return (
      <div className="center-column">
        <div className="logo-login">
          <Logo isAnimated={true} />
        </div>
        <div className="column is-5">
          <div className="box"></div>
          <form onSubmit={this.onFormSubmit}>
            <div className="has-text-centered">
              {apiMessages &&
                apiMessages.map((message, index) => (
                  <Notification key={index} type={message.type}>
                    <p>{message.message}</p>
                  </Notification>
                ))}
            </div>
            <Input
              label="Email:"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={this.onTextFieldChange}
            />
            <Input
              label="Password:"
              name="password"
              type="password"
              value={form.password}
              onChange={this.onTextFieldChange}
            />
            <Input
              label="Password confirmation:"
              name="passwordConfirmation"
              type="password"
              value={form.passwordConfirmation}
              onChange={this.onTextFieldChange}
            />
            <Button>Sign up</Button>
            <div>
              <p className="is-size-6">
                Already have an account? <a href="/login">Log in</a>.
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
