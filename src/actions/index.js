const carsRequested = () => {
  return {
    type: "FETCH_CARS_REQUEST"
  };
};
const carsLoaded = newCars => {
  return {
    type: "FETCH_CARS_SUCCESS",
    payload: newCars
  };
};

const carsError = error => {
  return {
    type: "FETCH_CARS_FAILURE",
    payload: error
  };
};

export const carAddedToCart = carId => {
  return {
    type: "CAR_ADDED_TO_CART",
    payload: carId
  };
};
export const carRemovedFromCart = carId => {
  return {
    type: "CAR_REMOVED_FROM_CART",
    payload: carId
  };
};
export const allCarsRemovedFromCart = carId => {
  return {
    type: "ALL_CARS_REMOVED_FROM_CART",
    payload: carId
  };
};

const fetchCars = (teslaService, dispatch) => () => {
  dispatch(carsRequested());
  teslaService
    .getAuto()
    .then(data => {
      let datas = data.cars;
      dispatch(carsLoaded(datas));
    })
    .catch(err => dispatch(carsError(err)));
};

export { fetchCars };
