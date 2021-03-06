import React from "react";
import { connect } from "react-redux";
import {
  toyDeleteFromCart,
  toyAddedToCart,
  toyDecreaseIntoCart
} from "../../actions";

import styled from "styled-components";

const ShopCart = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { title, id, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right"
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <CartWrapper>
      <div className="shop-cart">
        <h2>Your order</h2>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Count</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{items.map(renderRow)}</tbody>
        </table>
        <div className="total">Total: ${total}</div>
      </div>
    </CartWrapper>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIncrease: id => dispatch(toyAddedToCart(id)),
    onDecrease: id => dispatch(toyDecreaseIntoCart(id)),
    onDelete: id => dispatch(toyDeleteFromCart(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopCart);

const CartWrapper = styled.div`
  .shop-cart .total {
    text-align: right;
    font-size: 1.2rem;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .shop-cart button {
    margin-left: 5px;
  }
`;
