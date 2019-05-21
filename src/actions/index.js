const toysLoaded = newToys => {
  return {
    type: `FETCH_TOYS_SUCCESS`,
    payload: newToys
  };
};

const toysRequested = () => {
  return {
    type: `FETCH_TOYS_REQUEST`
  };
};

const toysError = error => {
  return {
    type: `FETCH_TOYS_FAILURE`,
    payload: error
  };
};

export const toyAddedToCart = toyId => {
  return {
    type: `TOY_ADDED_TO_CART`,
    payload: toyId
  };
};
const toyDeleteFromCart = bookId => {
  return {
    type: `TOY_DELETE_FROM_CART`,
    payload: bookId
  };
};

const toyDecreaseIntoCart = toyId => {
  return {
    type: `TOY_DECREASE_INTO_CART`,
    payload: toyId
  };
};

const fetchToys = (dispatch, toystoreService) => () => {
  dispatch(toysRequested());
  toystoreService
    .getAllToy()
    .then(data => dispatch(toysLoaded(data)))
    .catch(err => dispatch(toysError(err)));
};
export { fetchToys, toyDeleteFromCart, toyDecreaseIntoCart };
