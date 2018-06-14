import React, { Component } from "react";
import Validation from "./Validation/Validation";
import logo from "./logo.svg";
import "./App.css";
import Char from "./Char/Char";

class App extends Component {
  state = { changeEvent: "" };

  changeEventHandler = event => {
    this.setState({
      changeEvent: event.target.value
    });
  };
  deleteCharHandler = index => {
    const text = this.state.changeEvent.split("");
    text.splice(index, 1);
    console.log(text);

    const newText = text.join("");
    console.log(newText);

    this.setState({ changeEvent: newText });
  };
  render() {
    const charList = this.state.changeEvent.split("").map((ch, index) => {
      return (
        <Char
          char={ch}
          key={index}
          click={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <input type="text" onChange={this.changeEventHandler} />
        <p>{this.state.changeEvent}</p>
        <Validation inputLength={this.state.changeEvent.length} />
        {charList}
      </div>
    );
  }
}

export default App;
