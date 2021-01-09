import React, { Component } from "react";
import randomString from 'randomstring'
import * as typeMesaage from './../constants/Message'

class ProductItem extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt />
            <a>
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>
                {this.showRating(product.rating)}
              </li>
             
            </ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <a
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title
                  data-original-title="Add to Cart"
                  onClick = { () => this.onAddToCart(product,typeMesaage.MSG_ADD_TO_CART_SUCCESS)}
                >
                  <i className="fa fa-shopping-cart" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  showRating = (rating) => {
    let result = [];
    for(let i = 1; i<= rating;i++){
      result.push(<i className="fa fa-star" key = {randomString.generate(7)} />)
    }
    for(let j = 1; j <= 5-rating;j++){
      result.push(<i className="fa fa-star-o" key = {randomString.generate(7)}/>)
    }
    return result;
  }

  onAddToCart = (product,message) => {
    this.props.onAddCart(product)
    this.props.onChangeMessage(message)
  }
}

export default ProductItem;
