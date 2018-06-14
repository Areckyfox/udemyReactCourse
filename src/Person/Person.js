import React from "react";
import "./Person.css";
import Radium from "radium";

const person = props => {
  return (
    <div className="box">
      <p onClick={props.click}>
        I'm a {props.name} wich will be very goood programer in react style in
        {props.time} year/s
      </p>
      {props.children}
      <p />
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
