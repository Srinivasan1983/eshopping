import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { HomePage, CartPage } from "./pages";
import { ShopHeader } from "./shop-header";
import { ShopFooter } from "./shop-footer";

const App = ({ total, numItems }) => {
  return (
    <div className="container">
      <ShopHeader numItems={numItems} total={total} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
      <ShopFooter />
    </div>
  );
};

const mapStateToProps = ({ shoppingCart }) => {
  return {
    total: shoppingCart.orderTotal,
    numItems: shoppingCart.cartItems.length
  };
};

export default connect(mapStateToProps)(App);
