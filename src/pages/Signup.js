import React, { useState } from "react";
import { Notification } from "components/common";
import { FormInput, FormButton } from "components/form";
import { AsyncRequest, endpoints, Messages } from "lib";
import { Link, Redirect } from "react-router-dom";
import "assets/Signup.scss";
import { useAuth } from "context/auth";

export default function Signup(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [apiMessages, setApiMessages] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setAuthToken } = useAuth();

  function signupUser(credentials) {
    setIsLoading(true);
    AsyncRequest.post(endpoints.users.create, credentials)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setAuthToken(data.payload.jwt)
          setIsLoggedIn(true);
        } else {
          setApiMessages(data.messages);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setApiMessages([Messages.connectionError]);
        setIsLoading(false);
      });
  }

  function onChange(event) {
    const target = event.target;
    setForm({ ...form, [target.name]: target.value });
  }

  function onFormSubmit(event) {
    event.preventDefault();
    signupUser({
      user: {
        name: form.name,
        email: form.email,
        password: form.password,
        password_confirmation: form.passwordConfirmation,
      },
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div id="Signup">
      <h1 className="signup-title">Sign up</h1>
      <form onSubmit={onFormSubmit} className="column is-6 box">
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
          onChange={onChange}
        />
        <FormInput
          id="email-input"
          label="Email:"
          name="email"
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={onChange}
        />
        <FormInput
          id="password-input"
          label="Password:"
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
        />
        <FormInput
          id="password-confirmation-input"
          label="Password confirmation:"
          name="passwordConfirmation"
          type="password"
          value={form.passwordConfirmation}
          onChange={onChange}
        />
        <FormButton classList={["is-link"]} loading={isLoading}>
          Sign up
        </FormButton>
        <p className="is-size-6">
          Already have an account? <Link to="/login">Log in</Link>.
        </p>
      </form>
    </div>
  );
}
