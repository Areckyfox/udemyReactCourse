import React, {Component} from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
 
  
  render(){
    const ingridientSummary = Object.keys(this.props.ingridients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>: {this.props.ingridients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicius burger with the following ingridients:</p>
        <ul>
            {ingridientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}$</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
      </Aux>
    );
    
  }

};

export default OrderSummary;
