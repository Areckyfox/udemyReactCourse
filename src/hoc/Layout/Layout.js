import React, { Component } from "react";
import Aux from "../Aux/Aux";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = { show: false };
  
  sideDrawerClosedHandler = () => {
    this.setState({ show: false });
  };
  sideDrawerHandler = () => {
    this.setState(prevState => {
      return { show: !prevState.show };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked = {this.sideDrawerHandler}/>
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.show}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
