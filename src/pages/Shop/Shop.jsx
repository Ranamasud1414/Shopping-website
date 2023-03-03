import React, { useState } from "react";
import { PRODUCTS } from "../../product";

import Product from "./Product";
import "./Shop.css";
const Shop = () => {
  const [items, setItems] = useState(PRODUCTS);
  const filterItem = (catItem) => {
    const updateProducts = PRODUCTS.filter((curItem) => {
      return curItem.category === catItem;
    });

    setItems(updateProducts);
  };
  return (
    <div className="shop">
      <div className="shopTitle mt-1 mb-5">
        <h1>AliBaba Shop</h1>
      </div>
      <div className="container ">
        <div className="category mb-5">
          <button type="button" className="btn btn-light m-2" onClick={() => setItems(PRODUCTS)}>
            All
          </button>
          <button type="button" className="btn btn-light m-2" onClick={() => filterItem("mobile")}>
            Mobile
          </button>
          <button type="button" className="btn btn-light m-2" onClick={() => filterItem("tv")}>
            TV
          </button>
          <button type="button" className="btn btn-light m-2" onClick={() => filterItem("laptop")}>
            Laptop
          </button>
          <button type="button" className="btn btn-light m-2" onClick={() => filterItem("electronic")}>
            Electronic
          </button>
          <button type="button" className="btn btn-light m-2" onClick={() => filterItem("fasion")}>
            Fasion
          </button>
        </div>
      </div>
      <div className="row gap-5 justify-content-center">
        {items.map((product, index) => {
          return <Product data={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
