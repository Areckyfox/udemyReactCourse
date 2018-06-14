import React from "react";

const char = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    width: "30px",
    height: "30px",
    border: "3px solid black",
    textAlign: "center"
  };
  return (
    <div style={style} onClick={props.click}>
      {props.char}
    </div>
  );
};

export default char;
