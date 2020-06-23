import React, { useState } from "react";
import { Notification } from "components/common";
import { FormInput, FormButton } from "components/form";
import { Link } from "react-router-dom";
import { Api } from "lib/api";
import { useAuth } from "context/auth";
import "assets/Signup.scss";

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [apiMessages, setApiMessages] = useState("");
  const { setAuthContext } = useAuth();

  async function signupUser(e) {
    e.preventDefault();
    setIsLoading(true);
    const data = await Api.createUser({ info: form });
    if (data.status === "success") {
      setAuthContext({ token: data.payload.jwt, userId: data.payload.user.id });
    } else {
      setApiMessages(data.messages);
      setIsLoading(false);
    }
  }

  function onChange(event) {
    const target = event.target;
    setForm({ ...form, [target.name]: target.value });
  }

  return (
    <div id="Signup">
      <h1 className="signup-title">Sign up</h1>
      <form onSubmit={signupUser} className="column is-6 box">
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
          autoComplete="name"
          required={true}
        />
        <FormInput
          id="email-input"
          label="Email:"
          name="email"
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={onChange}
          autoComplete="email"
          required={true}
        />
        <FormInput
          id="password-input"
          label="Password:"
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          autoComplete="new-password"
          required={true}
        />
        <FormInput
          id="password-confirmation-input"
          label="Password confirmation:"
          name="password_confirmation"
          type="password"
          value={form.password_confirmation}
          onChange={onChange}
          autoComplete="new-password"
          required={true}
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
