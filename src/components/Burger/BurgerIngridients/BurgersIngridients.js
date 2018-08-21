import React, { Component } from "react";
import propTypes from "prop-types";
import classes from "./BurgersIngridients.css";

class BurgerIngridients extends Component {
  render() {
    let ingridient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingridient = <div className={classes.BreadBottom} />;
        break;

      case "bread-top":
        ingridient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;

      case "meat":
        ingridient = <div className={classes.Meat} />;
        break;

      case "cheese":
        ingridient = <div className={classes.Cheese} />;
        break;

      case "salad":
        ingridient = <div className={classes.Salad} />;
        break;

      case "bacon":
        ingridient = <div className={classes.Bacon} />;
        break;
      default:
        ingridient = null;
    }
    return ingridient;
  }
}
BurgerIngridients.propTypes = {
type: propTypes.string.isRequired
};
export default BurgerIngridients;
