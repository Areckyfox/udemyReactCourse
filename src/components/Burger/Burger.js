import React from "react";
import classes from "./Burger.css";
import BurgerIngridients from "./BurgerIngridients/BurgersIngridients";

const burger = props => {
  let transformedIngridients = Object.keys(props.ingridients)
    .map(igKey => {

      return [...Array(props.ingridients[igKey])].map((_, i) => {
        return <BurgerIngridients key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
    if(transformedIngridients.length === 0) {
        transformedIngridients = <p>Give me more ingridients!</p>
    }
  return (
    <div className={classes.Burger}>
      <BurgerIngridients type="bread-top" />
      {transformedIngridients}
      <BurgerIngridients type="bread-bottom" />
    </div>
  );
};

export default burger;
