import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ShopHeader = ({ numItems, total }) => {
  return (
    <HeaderWrapper>
      <div className="eshop-header row">
        <Link to="/" className="text-dark logo">
          eShop
        </Link>
        <Link to="/cart" className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
        </Link>
      </div>
    </HeaderWrapper>
  );
};

export default ShopHeader;

const HeaderWrapper = styled.div`
  .eshop-header {
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .eshop-header .logo {
    font-family: "Playfair Display", Georgia serif;
    font-size: 2.5rem;
    padding-left: 1rem;
  }
  .eshop-header .shopping-cart {
    align-self: center;
    font-size: 1.3rem;
    padding-right: 1rem;
  }
  .eshop-header .cart-icon {
    font-size: 2.5rem;
    color: cadetblue;
    margin-right: 10px;
  }
`;
