import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { developmentEndpoints as apiEndpoints } from 'lib/endpoints';
import Login from 'components/authentication/Login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }

  login(credentials) {

  }

  componentDidMount() {
    fetch(apiEndpoints.exercises)
    .then(response => response.json())
    .then(myJson => console.log(myJson))
    .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="App section">
        { (this.state.isLoggedIn) ? "" : <Login /> }
      </div>
    );
  }
}

export default App;
