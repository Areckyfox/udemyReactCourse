import React from "react";
import "./UserOutput.css";
const userInput = props => {
  return (
    <div className="outPut" onClick={props.click}>
      <p>First paragrph</p>
      <p>{props.name}</p>
    </div>
  );
};

export default userInput;
