import React from "react";
import classes from "./Person.css";

const person = props => {
  return (
    <div className={classes.box}>
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

export default person;
