const updateToyList = (state, action) => {
  if (state === undefined) {
    return {
      toys: [],
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case `FETCH_TOYS_REQUEST`:
      return {
        toys: [],
        loading: true,
        error: null
      };
    case `FETCH_TOYS_SUCCESS`:
      return {
        toys: action.payload,
        loading: false,
        error: null
      };
    case `FETCH_TOYS_FAILURE`:
      return {
        toys: [],
        loading: false,
        error: action.payload
      };

    default:
      return state.toyList;
  }
};

export default updateToyList;
