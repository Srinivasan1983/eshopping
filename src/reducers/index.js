import updateToyList from "./toy-list";
import updateShoppingCart from "./shopping-cart";

const reducer = (state, action) => {
  return {
    toyList: updateToyList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
