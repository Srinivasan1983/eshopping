import React from "react";
import styled from "styled-components";

const toyItem = ({ toy, onAddedToCart }) => {
  const { title, manufacturer, price, coverImage} = toy;
  return (
    <ToyItemWrapper>
      <div className="toy-item">
        <div className="toy-cover">
          <img src={coverImage} alt={title} />
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ color: "#13215b" }}>
            {title}
          </h5>
          <p className="card-text text-muted">{manufacturer}</p>
          <button onClick={onAddedToCart} className="btn btn-info add-to-cart">
            Add To Cart
          </button>

          <div className="right-section float-right">
            <div className="price">
              <span className="d-inline-block rrp-value">
                <span>$ {price} </span>{" "}
              </span>
              <br />
            </div>
            <div className="review">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
        </div>
      </div>
    </ToyItemWrapper>
  );
};

export default toyItem;

const ToyItemWrapper = styled.div`
  .toy-item {
    display: flex;
    margin: 15px 0;
  }
  .toy-item .toy-cover {
    flex-shrink: 0;
    width: 140px;
    margin-right: 10px;
  }
  .toy-item .toy-cover img {
    width: 100%;
  }
`;

/**
 *<span className="d-inline-block sale-value">
    {" "}
    $ {(price === 0 || '') ? discountPrice : price}
  </span>
 * 
 */
