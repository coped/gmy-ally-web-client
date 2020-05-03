import React, { Component } from "react";
import { AsyncRequest } from "lib";
import { endpoints } from "lib";
import { Messages } from "lib";

export default class Exercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      apiMessages: "",
    };
  }

  componentWillMount() {
    AsyncRequest.get(endpoints.exercises.index)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ exercises: data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ apiMessages: Messages.generalError });
      });
  }

  render() {
    const { exercises } = this.state;
    return (
      <div>
        <p>{exercises}</p>
      </div>
    );
  }
}
