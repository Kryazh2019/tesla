import React, { Component } from "react";
import CarListItem from "../car-list-item";
import { connect } from "react-redux";
import withTeslaService from "../hoc";
import { fetchCars, carAddedToCart } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./car-list.css";

const CarList = ({ cars, onAddedToCart }) => {
  return (
    <ul className="car-list">
      {cars.map(car => {
        return (
          <li>
            <CarListItem
              car={car}
              onAddedToCart={() => onAddedToCart(car.name)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class CarListContainer extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }

  render() {
    const { cars, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }

    return <CarList cars={cars} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ cars, loading, error }) => {
  return { cars, loading, error };
};

const mapDispathToProps = (dispatch, { teslaService }) => {
  return {
    fetchCars: fetchCars(teslaService, dispatch),
    onAddedToCart: id => dispatch(carAddedToCart(id))
  };
};

export default compose(
  withTeslaService(),
  connect(
    mapStateToProps,
    mapDispathToProps
  )
)(CarListContainer);
