import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "asdfklh", name: "Aro", time: 3 },
      { id: "sadfh", name: "Arek", time: 2 },
      { id: "fdalkh", name: "Arecky", time: 1 }
    ],
    showPerson: false
  };
  clickShowHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    });
  };
  switchNameHandler = name => {
    this.setState({
      persons: [
        { name: name, time: 3 },
        { name: "Arek", time: 1.2 },
        { name: "Arecky", time: 1 }
      ]
    });
  };
  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };
  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    console.log(persons);

    this.setState({
      persons: persons
    });
  };
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      cursor: "pointer",
      border: "1px solid blue",
      padding: "8px"
    };
    let person;
    if (this.state.showPerson) {
      style.backgroundColor = "red";

      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                time={person.time}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.changeNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <div className="App">
        <h1>Hello World I'm start new begin</h1>
        <p className={classes.join(" ")}>This really working</p>
        <button style={style} onClick={this.clickShowHandler}>
          Show Person
        </button>
        {person}
      </div>
    );
  }
}

export default App;
