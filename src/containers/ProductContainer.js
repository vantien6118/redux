import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "./../components/Products";
import * as actions from "./../actions/index";
import ProductItem from "./../components/ProductItem";

class ProductContainer extends Component {
  render() {
    let { products } = this.props;
    return(
        <Products>
            {this.showProducts(products)}
            
        </Products>
    )
  }

  showProducts = (products) => {
    let result = null;
    let {onAddCart,onChangeMessage} = this.props
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} onAddCart = {onAddCart} onChangeMessage = {onChangeMessage}/>;
      });
    }

    return result;
  };
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProp = (dispatch, props) => {
  return {
    onAddCart: (product) => {
      dispatch(actions.actAddCart(product, 1));
    },
    onChangeMessage:(message) => {
        dispatch(actions.changeMessage(message))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(ProductContainer);
