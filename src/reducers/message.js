import * as typeMessage from "./../constants/Message";

import * as types from "./../constants/ActionTypes";
let initialState = typeMessage.MSG_WELCOME;
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      return action.message;
    default:
      return state;
  }
};
export default messageReducer;
