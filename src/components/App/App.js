import React, { Component } from 'react';
import gymPartnerLogo from 'assets/images/logo_transparent.png';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch("/api/v1/users.json")
    .then(response => response.json())
    .then(myJson => console.log(myJson))
    .catch(error => console.error('Error:', error));
  }

  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={gymPartnerLogo} className="App-logo" alt="logo" />
          <p>
            Gym Partner is currently under construction.
          </p>
          <p>
            Visit our <a href="https://github.com/coped/gym-partner-web-client">
              <u>Github</u>
            </a> for updates.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
