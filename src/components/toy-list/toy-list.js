import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { WithToyStoreService } from "../hoc";
import { fetchToys, toyAddedToCart } from "../../actions";
import ToyItem from "../toy-item";

const ToyList = ({ toys, onAddedToCart }) => {
  return (
    <ItemListWrapper>
      <div className="toy-list">
        {toys.map(toy => (
          <div key={toy.id}>
            <ToyItem toy={toy} onAddedToCart={() => onAddedToCart(toy.id)} />
          </div>
        ))}
      </div>
    </ItemListWrapper>
  );
};

class ToyListContainer extends Component {
  componentDidMount() {
    this.props.fetchToys();
  }
  render() {
    const { toys, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <div>Loadind.....</div>;
    }

    if (error) {
      return <div>Please Refresh The Page...</div>;
    }

    return <ToyList toys={toys} onAddedToCart={onAddedToCart} />;
  }
}
const mapStateToProps = ({ toyList: { toys, loading, error } }) => {
  return { toys, loading, error };
};

const mapDispatchToProps = (dispatch, { toystoreService }) => {
  return {
    fetchToys: fetchToys(dispatch, toystoreService),
    onAddedToCart: id => dispatch(toyAddedToCart(id))
  };
};
export default WithToyStoreService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ToyListContainer)
);

const ItemListWrapper = styled.div`
  .toy-list {
    list-style: none;
    justify-content: space-between;
  }
`;
