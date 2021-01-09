import React, { Component } from "react";
import Header from './components/Header';
import Footer from './components/Footer'
import ProductContainer from './containers/ProductContainer'
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";
class App extends Component {
  render() {
    return (
      <div>
        <div>
          {/* Header */}
          <Header/>
          <main id="mainContainer">
            <div className="container">
              {/* Products */}
            <ProductContainer/>
             {/* Message */}
             <MessageContainer/>
              {/* Cart */}
              <CartContainer/>
            </div>
          </main>
          {/* Footer */}
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
