import React from "react";
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationsItems = () => (
  <ul className={classes.NavigationItems}>
   <NavigationItem/>
  </ul>
);

export default navigationsItems;
