const initialState = {
  cars: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 0
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }
  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (car, item = {}, quantity) => {
  const { id = car.name, count = 0, name = car.name, total = 0 } = item;
  return {
    id,
    name,
    count: count + quantity,
    total: total + quantity * car.price
  };
};

const updateOrder = (state, carName, quantity) => {
  const { cars, cartItems } = state;
  const car = cars.find(car => car.name === carName);
  const itemIndex = cartItems.findIndex(({ name }) => name === carName);
  const item = state.cartItems[itemIndex];
  const newItem = updateCartItem(car, item, quantity);
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CARS_REQUEST":
      return {
        ...state,
        cars: [],
        loading: true,
        error: null
      };
    case "FETCH_CARS_SUCCESS":
      return {
        ...state,
        cars: action.payload,
        loading: false,
        error: null
      };
    case "FETCH_CARS_FAILURE":
      return {
        ...state,
        cars: [],
        loading: false,
        error: action.payload
      };
    case "CAR_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "CAR_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "ALL_CARS_REMOVED_FROM_CART":
      const item = state.cartItems.find(({ name }) => name === action.payload);
      return updateOrder(state, action.payload, -item.count);
    default:
      return state;
  }
};

export default reducer;
