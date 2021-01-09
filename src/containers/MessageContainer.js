import React, { Component } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import { connect } from "react-redux";
import Message from "../components/Message";

class MessageContainer extends Component {
  render() {
    let { message } = this.props;
    return <Message message={message}></Message>;
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};
export default connect(mapStateToProps, null)(MessageContainer);
