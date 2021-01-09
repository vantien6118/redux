import * as types from "./../constants/ActionTypes";

let data = JSON.parse(localStorage.getItem("CART"));

let initialState = data ? data : [];

const cartReducer = (state = initialState, action) => {
  let { product, quantity } = action;
  let index = -1;

  switch (action.type) {
    case types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else state.push({ product, quantity });
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case types.DELETE_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));

    case types.UPDATE_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity  = quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
    default:
      return [...state];
  }
};

const findProductInCart = (carts, product) => {
  let index = -1;
  if (carts.length > 0) {
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].product.id == product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
export default cartReducer;
