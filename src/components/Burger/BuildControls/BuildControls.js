import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <b>{props.price.toFixed(2)}</b>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingridientsAdded(ctrl.type)}
        removed={() => props.ingridientsRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button 
        className={classes.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.ordered}>ORDERED NOW</button>
  </div>
);

export default buildControls;
