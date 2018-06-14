import React from "react";

const validation = props => {
  let validation = "This text long enough";
  if (props.inputLength <= 5) {
    validation = "This text is to short";
  }

  return (
    <div>
      <p>{validation}</p>
    </div>
  );
};

export default validation;
