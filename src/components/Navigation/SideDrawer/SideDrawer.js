import React from "react";
import Logo from "../../Logo/Logo";
import NavigationsItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import BackDrop from "../../UI/Backdrop/BackDrop";
import Aux from "../../../hoc/Aux";
const sideDrawer = (props) => {
  let attachedClasses = [ classes.SideDrawer, classes.Close]
  if(props.open) {
      attachedClasses = [classes.SideDrawer, classes.Open]
  }
  return (
    <Aux>
      <BackDrop show={props.open} cliked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationsItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
