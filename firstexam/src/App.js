import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = { name: "ArkadioState" };

  eventClickHandler = () => {
    this.setState({ name: "ArkadioSetState" });
  };
  changeInputHandler = event => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <UserInput change={this.changeInputHandler} />
        <UserOutput name="Aro" />
        <UserOutput name={this.state.name} />
        <UserOutput name="Arecky" click={this.eventClickHandler} />
      </div>
    );
  }
}

export default App;
