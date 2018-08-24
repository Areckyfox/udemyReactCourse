import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSumary from "../../components/Burger/OrderSummary/OrderSummary";

const INGRIDIENT_PRICES = {
  salad: 0.5,
  cheese: 1,
  meat: 2,
  bacon: 1.5
};

class BurgerBuilder extends Component {
  state = {
    ingridients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };

  updatePurchaseState(ingridients) {
    const sum = Object.keys(ingridients)
      .map(igKey => {
        return ingridients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  }

  addIngridientHandler = type => {
    const oldCount = this.state.ingridients[type];
    const updateCount = oldCount + 1;
    const updateIngridients = {
      ...this.state.ingridients
    };
    updateIngridients[type] = updateCount;
    const priceAdittion = INGRIDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdittion;
    this.setState({ totalPrice: newPrice, ingridients: updateIngridients });
    this.updatePurchaseState(updateIngridients);
  };

  removeIngridientHandler = type => {
    const oldCount = this.state.ingridients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updateIngridients = { ...this.state.ingridients };
    updateIngridients[type] = updateCount;
    const priceDeduction = INGRIDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingridients: updateIngridients });
    this.updatePurchaseState(updateIngridients);
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHadler = () => {
    alert("You Continue!");
  };
  render() {
    const disabledInfo = { ...this.state.ingridients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSumary 
            ingridients={this.state.ingridients}
            purchaseCanceled = {this.purchaseCancelHandler}
            purchaseContinue = {this.purchaseContinueHadler}
            price={this.state.totalPrice} />
        </Modal>
        <Burger ingridients={this.state.ingridients} />
        <BuildControls
          ingridientsAdded={this.addIngridientHandler}
          ingridientsRemoved={this.removeIngridientHandler}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          ordered={this.purchasingHandler}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
