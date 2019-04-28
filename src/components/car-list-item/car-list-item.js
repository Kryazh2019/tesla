import React from "react";
import "./car-list-item.css";

const CarListItem = ({ car, onAddedToCart }) => {
  const { name, racing, image, description, price } = car;
  return (
    <div className="car-list-item">
      <div className="car-cover">
        <img src={image} alt={name} />
      </div>
      <div className="car-details">
        <span className="car-title">{name}</span>
        <div className="car-description">{description}</div>
        <div className="car-racing">Разгон до 100км/ч {racing}</div>
        <div className="car-price">${price}</div>
        <button onClick={onAddedToCart} className="btn btn-info add-to-cart">
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default CarListItem;
