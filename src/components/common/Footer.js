import React from "react";
import logo from "images/logo_transparent.png";
import "assets/Footer.scss";

export default function Footer() {
  return (
    <div id="Footer">
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Gym Partner is a work in progress! You can check out the source code
            and make contributions on{" "}
            <a href="https://github.com/coped/gym-partner-api">
              Gym Partner's github.
            </a>
          </p>
          <img src={logo} alt="Gym Partner logo" className="logo" />
        </div>
      </footer>
    </div>
  );
}
