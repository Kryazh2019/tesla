import React from "react";
import CarList from "../car-list";
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";

const HomePage = () => {
  return (
    <div>
      <CarList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
