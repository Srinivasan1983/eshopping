const createItem = (toy, item = {}, howMuch) => {
  const { id = toy.id, title = toy.title, count = 0, total = 0 } = item;

  return {
    id,
    title,
    count: count + howMuch,
    total: total + howMuch * toy.price
  };
};

const createCart = (cartItems, item, idx) => {
  if (idx < 0) {
    return [...cartItems, item];
  }
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCart = (state, toyId, howMuch) => {
  const {
    toyList: { toys },
    shoppingCart: { cartItems }
  } = state;

  const toy = toys.find(toy => toy.id === toyId);
  const itemIndex = cartItems.findIndex(item => item.id === toyId);
  const item = cartItems[itemIndex];
  const newItem = createItem(toy, item, howMuch);

  const newCart = createCart(cartItems, newItem, itemIndex);
  const newOrderTotal = newCart.reduce((accum, item) => accum + item.total, 0);
  return {
    cartItems: newCart,
    orderTotal: newOrderTotal
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    };
  }
  switch (action.type) {
    case `TOY_ADDED_TO_CART`:
      return updateCart(state, action.payload, 1);
    case `TOY_DECREASE_INTO_CART`:
      return updateCart(state, action.payload, -1);
    case `TOY_DELETE_FROM_CART`:
      const item = state.shoppingCart.cartItems.find(
        item => item.id === action.payload
      );
      return updateCart(state, action.payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
