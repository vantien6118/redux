import * as types from './../constants/ActionTypes'
export const actAddCart = (product,quantity) => {
    return{
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const changeMessage = (message) => {
    return{
        type: types.CHANGE_MESSAGE,
        message
    }
}
export const actDeleteCart = (product) => {
    return{
        type: types.DELETE_CART,
        product
    }
}
export const actUpdateCart = (product,quantity) => {
    return{
        type: types.UPDATE_CART,
        product,
        quantity
    }
}