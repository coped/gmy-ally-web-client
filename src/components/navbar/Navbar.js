import React from "react";
import "assets/Navbar.scss";
import Logo from "images/logo_transparent.png";
import { Link } from "react-router-dom";
import { useAuth } from "context/auth";
import { useUser } from "context/user";

export default function Navbar() {
  const { auth, setAuthContext } = useAuth();
  const { setUserContext } = useUser();

  function logout() {
    setAuthContext(null);
    setUserContext(null);
  }

  return (
    <div id="Navbar">
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={Logo} alt="Logo" />
          </Link>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {auth ? (
                  <div>
                    <Link to="/dashboard" className="button is-info">
                      View dashboard
                    </Link>
                    <Link to="/" className="button" onClick={logout}>
                      Log out
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link to="/signup" className="button is-primary">
                      <strong>Sign up</strong>
                    </Link>
                    <Link to="/login" className="button is-link">
                      Log in
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
