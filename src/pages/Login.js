import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { FormInput, FormButton } from "components/form";
import { Notification } from "components/common";
import { useAuth } from "context/auth";
import { useUser } from "context/user";
import Api from "lib/api";
import "assets/Login.scss";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiMessages, setApiMessages] = useState([]);
  const [form, setForm] = useState({ email: "", password: "" });

  const { setAuthContext } = useAuth();
  const { setUserContext } = useUser();

  function onChange(event) {
    const target = event.target;
    setForm({
      ...form,
      [target.name]: target.value,
    });
  }

  async function loginUser(e) {
    e.preventDefault();
    setIsLoading(true);
    const data = await Api.login({ info: form });
    if (data.status === "success") {
      setAuthContext(data.payload.jwt);
      setUserContext(data.payload.user);
      setIsLoggedIn(true);
    } else {
      setApiMessages(data.messages);
      setIsLoading(false);
    }
  }

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div id="Login">
      <h1 className="login-title">Log in</h1>
      <form onSubmit={loginUser} className="column is-6 box">
        {apiMessages &&
          apiMessages.map((response, index) => (
            <Notification key={index} classList={[`is-${response.type}`]}>
              <p>{response.message}</p>
            </Notification>
          ))}
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
        <FormButton classList={["is-link"]} loading={isLoading}>
          Log in
        </FormButton>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>.
        </p>
      </form>
    </div>
  );
}
