import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import { MSG_CART_EMPTY } from "./../constants/Message";
import CartResult from "./../components/CartResult";
import * as actions from "./../actions/index";
class CartContainer extends Component {
  render() {
    let { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }
  showCartItem = (cart) => {
    let result = (
      <tr>
        <td>{MSG_CART_EMPTY}</td>
      </tr>
    );

    if (cart.length > 0) {
      let { onDelete, onChangeMessage, onUpdateCart } = this.props;
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDelete={onDelete}
            onChangeMessage={onChangeMessage}
            onUpdateCart={onUpdateCart}
          />
        );
      });
    }
    return result;
  };
  showTotalAmount = (cart) => {
    return <CartResult cart={cart} />;
  };
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDelete: (product) => {
      dispatch(actions.actDeleteCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(actions.changeMessage(message));
    },
    onUpdateCart: (product, quantity) => {
      dispatch(actions.actUpdateCart(product, quantity));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
